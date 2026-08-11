import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/mockData';
import { BlogPost, BlogCategory } from '../types';
import { BlogDetailModal } from './BlogDetailModal';
import { BookOpen, Clock, Heart, Search, ArrowRight, Sparkles, Filter } from 'lucide-react';

interface BlogSectionProps {
  searchQuery: string;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ searchQuery }) => {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>('all');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const categories: { id: BlogCategory; label: string }[] = [
    { id: 'all', label: '전체 아카이브' },
    { id: 'recipe', label: '김치 레시피 & 페어링' },
    { id: 'story', label: '브랜드 스토리' },
    { id: 'season', label: '계절별 김치' },
    { id: 'haccp', label: 'HACCP & 제조공정' },
  ];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = 
      !searchQuery ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOG_POSTS.find(p => p.featured) || BLOG_POSTS[0];

  return (
    <section id="blog" className="py-20 lg:py-28 bg-[#FDFCF9] border-b border-[#EAE7E1] font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header - Natural Tones Journal Aesthetic */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 border-b border-[#EAE7E1] pb-6 gap-6">
          <div>
            <span className="text-xs font-serif tracking-[0.3em] text-[#BA4A32] uppercase font-bold block mb-2">
              BAEKGAWON KIMCHI JOURNAL
            </span>
            <h2 className="text-3xl lg:text-4xl font-serif text-[#1A1A1A]">
              김치 아카이브 & 블로그
            </h2>
            <p className="text-xs md:text-sm text-[#55524D] font-light mt-1 max-w-xl">
              백가원 김치 명인이 들려주는 계절별 전통 레시피, 100% 국산 산지 계약재배 비하인드, 식문화 컬럼을 발행합니다.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-[#6B665E] font-serif">총 {BLOG_POSTS.length}편의 아티클</span>
          </div>
        </div>

        {/* Featured Article Spotlight Banner */}
        {featuredPost && activeCategory === 'all' && !searchQuery && (
          <div 
            onClick={() => setSelectedPost(featuredPost)}
            className="mb-16 bg-[#2D3E30] rounded-none overflow-hidden shadow-sm border border-[#3B4E32] grid grid-cols-1 lg:grid-cols-12 cursor-pointer group hover:border-[#BA4A32] transition-all duration-500"
          >
            <div className="lg:col-span-7 relative h-72 lg:h-auto min-h-[380px] overflow-hidden bg-[#222E23]">
              <img
                src={featuredPost.coverImage}
                alt={featuredPost.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-[#BA4A32] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 shadow-xs">
                FEATURED JOURNAL
              </div>
            </div>

            <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between text-white">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#E8E2D8] mb-3">
                  <span className="font-serif text-[#BA4A32] font-bold">{featuredPost.categoryLabel}</span>
                  <span>•</span>
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {featuredPost.readTime}</span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-serif text-[#FDFCF9] group-hover:text-[#E8E2D8] transition-colors leading-snug mb-4">
                  {featuredPost.title}
                </h3>

                <p className="text-xs lg:text-sm text-[#DED7CD] font-light leading-relaxed line-clamp-3 mb-6">
                  {featuredPost.summary}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={featuredPost.author.avatar}
                    alt={featuredPost.author.name}
                    referrerPolicy="no-referrer"
                    className="w-9 h-9 rounded-full object-cover border border-[#BA4A32]"
                  />
                  <div>
                    <div className="text-xs font-bold text-white font-serif">{featuredPost.author.name}</div>
                    <div className="text-[10px] text-[#E8E2D8]">{featuredPost.author.role}</div>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#E8E2D8] group-hover:translate-x-1 transition-transform">
                  <span>아티클 읽기</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Category Filter Buttons */}
        <div className="flex items-center justify-start md:justify-center flex-wrap gap-2 mb-10 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xs text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#2D3E30] text-white shadow-xs'
                  : 'bg-[#F2EDE4] text-[#6B665E] hover:bg-[#E8E2D8]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Article Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-[#F2EDE4]/50 rounded-none border border-[#EAE7E1]">
            <BookOpen className="w-8 h-8 text-[#6B665E] mx-auto mb-3" />
            <p className="text-sm font-medium text-[#2D2D2D]">해당 검색어의 아티클이 발견되지 않았습니다.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="bg-white rounded-none border border-[#EAE7E1] overflow-hidden shadow-xs hover:border-[#2D3E30] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Article Thumbnail */}
                  <div className="relative h-52 bg-[#F2EDE4] overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#FDFCF9] text-[#2D3E30] text-[10px] font-serif font-bold px-2.5 py-1 border border-[#EAE7E1]">
                      {post.categoryLabel}
                    </div>
                  </div>

                  {/* Article Details */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-[11px] text-[#6B665E] mb-2 font-mono">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="font-serif font-bold text-lg text-[#1A1A1A] group-hover:text-[#BA4A32] transition-colors leading-snug mb-2 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-xs text-[#55524D] line-clamp-3 leading-relaxed font-light mb-4">
                      {post.summary}
                    </p>
                  </div>
                </div>

                {/* Article Footer */}
                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-[#F0EFEA] flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        referrerPolicy="no-referrer"
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <span className="text-[#2D2D2D] font-medium text-[11px]">{post.author.name}</span>
                    </div>

                    <div className="flex items-center gap-1 text-[#6B665E]">
                      <Heart className="w-3.5 h-3.5" />
                      <span className="text-[11px]">{post.likes}</span>
                    </div>
                  </div>
                </div>

              </article>
            ))}
          </div>
        )}

      </div>

      {/* Reader Modal */}
      <BlogDetailModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
      />
    </section>
  );
};
