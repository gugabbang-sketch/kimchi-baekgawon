import React, { useState } from 'react';
import { KIMCHI_PRODUCTS, OTHER_KIMCHI_LIST } from '../data/mockData';
import { KimchiProduct, ProductCategory } from '../types';
import { ProductDetailModal } from './ProductDetailModal';
import { Sparkles, Filter, ArrowRight, ExternalLink, ShoppingBag, Grid } from 'lucide-react';

interface ProductSectionProps {
  onOpenB2BQuoteWithProduct: (productName: string) => void;
  onOpenNaverStoreModal: () => void;
  searchQuery: string;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  onOpenB2BQuoteWithProduct,
  onOpenNaverStoreModal,
  searchQuery,
}) => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  const [selectedProduct, setSelectedProduct] = useState<KimchiProduct | null>(null);
  const [showAllProductsView, setShowAllProductsView] = useState(false);

  const categories: { id: ProductCategory; label: string }[] = [
    { id: 'all', label: '전체 제품' },
    { id: 'signature', label: '대표 시그니처' },
    { id: 'seasonal', label: '계절/별미 김치' },
    { id: 'b2b', label: 'B2B/식자재용' },
  ];

  const filteredProducts = KIMCHI_PRODUCTS.filter((prod) => {
    const matchesCategory = activeCategory === 'all' || prod.category === activeCategory;
    const matchesSearch = 
      !searchQuery || 
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.ingredients.some(ing => ing.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-20 lg:py-28 bg-[#FDFCF9] border-b border-[#EAE7E1] font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-serif tracking-[0.3em] text-[#BA4A32] uppercase font-bold block mb-3">
            BAEKGAWON PRODUCTS
          </span>
          <h2 className="text-3xl lg:text-4xl font-serif text-[#1A1A1A] mb-4 font-bold">
            정직한 재료로 만든 백가원의 전통식품
          </h2>
          <p className="text-sm text-[#55524D] leading-relaxed font-light">
            국내산 원재료를 기본으로 엄선한 고춧가루와 신선한 채소를 사용해 다양한 김치를 생산합니다.
          </p>
          <div className="w-12 h-[2px] bg-[#2D3E30] mx-auto mt-6" />
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xs text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#2D3E30] text-white shadow-xs'
                  : 'bg-[#F2EDE4] text-[#6B665E] hover:bg-[#E8E2D8] hover:text-[#1A1A1A]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 4 Representative Kimchi Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="bg-white rounded-none border border-[#EAE7E1] overflow-hidden shadow-xs hover:border-[#2D3E30] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Product Image */}
                <div className="relative h-56 bg-[#F2EDE4] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex flex-col gap-1">
                    {product.isBest && (
                      <span className="bg-[#BA4A32] text-white text-[10px] font-bold px-2 py-0.5 rounded-xs shadow-xs">
                        대표 김치
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 right-3 bg-[#FDFCF9] text-[#1A1A1A] text-[11px] font-serif font-bold px-2.5 py-1 border border-[#EAE7E1]">
                    {product.categoryLabel}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5">
                  <h3 className="font-serif font-bold text-lg text-[#1A1A1A] group-hover:text-[#BA4A32] transition-colors leading-snug mb-2">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#55524D] leading-relaxed mb-4 font-light">
                    {product.tagline}
                  </p>

                  <div className="p-2.5 bg-[#FDFCF9] border border-[#EAE7E1] text-[11px] text-[#2D3E30] font-medium">
                    📍 원재료: {product.originInfo}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-[#F0EFEA] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#6B665E] block">스토어 할인가</span>
                    <span className="font-serif font-bold text-base text-[#1A1A1A]">
                      {product.price.toLocaleString()}원~
                    </span>
                  </div>

                  <button className="p-2 rounded-full bg-[#F2EDE4] group-hover:bg-[#2D3E30] group-hover:text-white text-[#1A1A1A] transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Diverse Kimchi Showcase (다양한 백가원 김치) */}
        <div className="bg-[#F2EDE4] p-8 lg:p-10 border border-[#EAE7E1] rounded-none mb-12">
          <div className="flex items-center justify-between mb-6 border-b border-[#EAE7E1] pb-4">
            <div>
              <span className="text-xs font-serif text-[#BA4A32] font-bold tracking-widest uppercase block mb-1">
                KIMCHI VARIETY
              </span>
              <h3 className="text-xl font-serif text-[#1A1A1A] font-bold">
                다양한 백가원 김치 라인업
              </h3>
            </div>
            <Sparkles className="w-5 h-5 text-[#BA4A32]" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {OTHER_KIMCHI_LIST.map((item, idx) => (
              <div key={idx} className="bg-white p-4 border border-[#EAE7E1] hover:border-[#2D3E30] transition-colors">
                <div className="font-bold text-sm text-[#1A1A1A] mb-1 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#BA4A32]" />
                  <span>{item.name}</span>
                </div>
                <p className="text-xs text-[#6B665E] font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={() => setShowAllProductsView(!showAllProductsView)}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xs bg-[#2D3E30] hover:bg-[#212F24] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-xs"
          >
            <Grid className="w-4 h-4" />
            <span>{showAllProductsView ? "기본 제품 보기" : "전체 제품 보기"}</span>
          </button>

          <button
            onClick={onOpenNaverStoreModal}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xs bg-[#03C75A] hover:bg-[#02b150] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-xs"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>네이버 스토어에서 구매하기</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenB2BQuoteWithProduct={onOpenB2BQuoteWithProduct}
      />
    </section>
  );
};
