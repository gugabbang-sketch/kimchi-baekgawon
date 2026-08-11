import React, { useState } from 'react';
import { BlogPost } from '../types';
import { X, Heart, Share2, Bookmark, Clock, User, Sparkles, Check, ArrowRight } from 'lucide-react';

interface BlogDetailModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onOpenProductDetail?: (productId: string) => void;
}

export const BlogDetailModal: React.FC<BlogDetailModalProps> = ({
  post,
  onClose,
  onOpenProductDetail,
}) => {
  if (!post) return null;

  const [likes, setLikes] = useState(post.likes);
  const [hasLiked, setHasLiked] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<string, boolean>>({});

  const handleLike = () => {
    if (hasLiked) {
      setLikes(likes - 1);
      setHasLiked(false);
    } else {
      setLikes(likes + 1);
      setHasLiked(true);
    }
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2500);
  };

  const toggleIngredient = (name: string) => {
    setCheckedIngredients(prev => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in font-sans">
      <div 
        className="bg-[#FDFCF9] rounded-none max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-[#EAE7E1] shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Top Header Actions Bar */}
        <div className="sticky top-0 z-20 bg-[#FDFCF9]/90 backdrop-blur-md px-6 py-4 border-b border-[#EAE7E1] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-serif font-bold bg-[#2D3E30] text-white px-2.5 py-1 rounded-none">
              {post.categoryLabel}
            </span>
            <span className="text-xs text-[#6B665E]">{post.date} · {post.readTime}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleLike}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors border ${
                hasLiked
                  ? 'bg-[#BA4A32]/10 text-[#BA4A32] border-[#BA4A32]/30'
                  : 'bg-white text-[#55524D] border-[#EAE7E1] hover:bg-[#F2EDE4]'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${hasLiked ? 'fill-[#BA4A32] text-[#BA4A32]' : ''}`} />
              <span>{likes}</span>
            </button>

            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-[#55524D] border border-[#EAE7E1] hover:bg-[#F2EDE4] text-xs font-medium transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copiedShare ? '링크 복사됨!' : '공유'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-[#F2EDE4] hover:bg-[#E8E2D8] text-[#2D2D2D] transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Hero Cover Banner */}
        <div className="relative h-72 md:h-96 bg-[#2D3E30]">
          <img
            src={post.coverImage}
            alt={post.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D3E30] via-[#2D3E30]/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 text-white max-w-2xl">
            <h1 className="text-2xl md:text-4xl font-serif leading-tight mb-2 text-[#FDFCF9]">
              {post.title}
            </h1>
            <p className="text-xs md:text-sm text-[#E8E2D8] font-light leading-relaxed">
              {post.subtitle}
            </p>
          </div>
        </div>

        {/* Main Article Content Container */}
        <div className="p-6 md:p-12 max-w-3xl mx-auto space-y-8">
          
          {/* Author Profile Card */}
          <div className="flex items-center justify-between p-4 rounded-none bg-[#F2EDE4]/80 border border-[#EAE7E1]">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                referrerPolicy="no-referrer"
                className="w-12 h-12 rounded-full object-cover border border-[#2D3E30]"
              />
              <div>
                <div className="font-serif font-bold text-sm text-[#1A1A1A]">{post.author.name}</div>
                <div className="text-xs text-[#6B665E]">{post.author.role}</div>
              </div>
            </div>
            <div className="text-right text-xs text-[#6B665E]">
              <span>발행일자: {post.date}</span>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="p-5 rounded-none bg-[#2D3E30] text-[#FDFCF9] border-l-4 border-[#BA4A32]">
            <div className="text-xs font-serif font-bold text-[#BA4A32] uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#BA4A32]" />
              <span>백가원 김치 아카이브 요약</span>
            </div>
            <p className="text-xs md:text-sm leading-relaxed text-[#E8E2D8] font-light">
              {post.summary}
            </p>
          </div>

          {/* Key Insights List if provided */}
          {post.content.keyPoints && (
            <div className="space-y-2">
              <h3 className="font-serif font-bold text-base text-[#1A1A1A]">📌 핵심 포인트</h3>
              <ul className="space-y-2 text-xs md:text-sm text-[#55524D]">
                {post.content.keyPoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2 bg-white p-3 rounded-none border border-[#EAE7E1]">
                    <span className="text-[#BA4A32] font-bold">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Interactive Recipe Ingredients Checklist (If Recipe Category) */}
          {post.content.recipeIngredients && post.content.recipeIngredients.length > 0 && (
            <div className="p-6 rounded-none bg-white border border-[#EAE7E1] shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-[#F2EDE4] pb-3">
                <h3 className="font-serif font-bold text-lg text-[#1A1A1A] flex items-center gap-2">
                  <span>🥬 준비 재료 체크리스트</span>
                </h3>
                <span className="text-xs text-[#6B665E]">터치하여 준비 완료 체크</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {post.content.recipeIngredients.map((ing, i) => {
                  const isChecked = !!checkedIngredients[ing.name];
                  return (
                    <div
                      key={i}
                      onClick={() => toggleIngredient(ing.name)}
                      className={`p-3 rounded-none border cursor-pointer transition-all flex items-center justify-between text-xs ${
                        isChecked 
                          ? 'bg-[#2D3E30]/10 border-[#2D3E30]/30 text-[#2D3E30] line-through opacity-70' 
                          : 'bg-[#FDFCF9] border-[#EAE7E1] text-[#2D2D2D] hover:border-[#2D3E30]'
                      }`}
                    >
                      <span className="font-medium">{ing.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[#6B665E]">{ing.amount}</span>
                        <div className={`w-4 h-4 rounded-none border flex items-center justify-center ${
                          isChecked ? 'bg-[#2D3E30] border-[#2D3E30] text-white' : 'border-neutral-300'
                        }`}>
                          {isChecked && <Check className="w-3 h-3" />}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step-by-Step Recipe Guide */}
          {post.content.recipeSteps && post.content.recipeSteps.length > 0 && (
            <div className="space-y-6">
              <h3 className="font-serif font-bold text-xl text-[#1A1A1A] border-b border-[#EAE7E1] pb-2">
                👩‍🍳 단계별 레시피 & 조리법
              </h3>
              <div className="space-y-4">
                {post.content.recipeSteps.map((st) => (
                  <div key={st.step} className="p-5 rounded-none bg-white border border-[#EAE7E1] space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#2D3E30] text-white text-xs font-serif font-bold flex items-center justify-center">
                        {st.step}
                      </span>
                      <h4 className="font-serif font-bold text-base text-[#1A1A1A]">
                        {st.title}
                      </h4>
                    </div>
                    <p className="text-xs md:text-sm text-[#55524D] leading-relaxed pl-10 font-light">
                      {st.detail}
                    </p>
                    {st.tip && (
                      <div className="ml-10 mt-2 p-3 bg-[#F2EDE4] rounded-none text-xs text-[#2D3E30] border border-[#EAE7E1] font-medium">
                        💡 <strong>백가원 명인의 팁:</strong> {st.tip}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Main Body Sections */}
          {post.content.bodySections && post.content.bodySections.map((sec, idx) => (
            <div key={idx} className="space-y-3">
              <h3 className="font-serif font-bold text-xl text-[#1A1A1A]">{sec.title}</h3>
              <p className="text-xs md:text-sm text-[#55524D] leading-relaxed font-light">
                {sec.paragraph}
              </p>
              {sec.quote && (
                <blockquote className="p-4 my-4 bg-[#F2EDE4] border-l-4 border-[#2D3E30] font-serif italic text-xs md:text-sm text-[#1A1A1A]">
                  "{sec.quote}"
                </blockquote>
              )}
            </div>
          ))}

          {/* Tags */}
          <div className="pt-6 border-t border-[#EAE7E1] flex flex-wrap gap-2">
            {post.tags.map((tag, i) => (
              <span key={i} className="text-xs bg-[#F2EDE4] text-[#6B665E] px-3 py-1 rounded-none">
                #{tag}
              </span>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};
