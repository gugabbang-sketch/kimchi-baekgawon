import React from 'react';
import { ShoppingBag, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';

interface PurchaseCalloutSectionProps {
  onNavigateProducts: () => void;
  onOpenNaverStoreModal: () => void;
}

export const PurchaseCalloutSection: React.FC<PurchaseCalloutSectionProps> = ({
  onNavigateProducts,
  onOpenNaverStoreModal,
}) => {
  return (
    <section id="online-shop-cta" className="py-20 lg:py-24 bg-[#2D3E30] text-white border-b border-[#3B4E32] font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xs bg-[#BA4A32] text-white text-xs font-bold uppercase tracking-widest mb-6 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-white" />
          <span>BAEKGAWON ONLINE STORE</span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#FDFCF9] mb-6 leading-tight">
          오늘의 식탁에 백가원의 정직한 맛을 더해보세요
        </h2>

        <p className="text-sm md:text-base text-[#DED7CD] leading-relaxed font-light max-w-2xl mx-auto mb-10">
          포기김치부터 겉절이, 총각김치, 깍두기와 다양한 별미김치까지. 백가원의 전통식품을 온라인에서 편리하게 만나보세요.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onNavigateProducts}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xs bg-[#FDFCF9] hover:bg-[#E8E2D8] text-[#2D3E30] font-bold text-xs uppercase tracking-widest transition-all shadow-md group"
          >
            <span>제품 둘러보기</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenNaverStoreModal}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xs bg-[#03C75A] hover:bg-[#02b150] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-md"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>네이버 스토어 바로가기</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Background Graphic Watermark */}
      <div className="absolute left-10 bottom-0 opacity-5 font-serif text-9xl font-black select-none pointer-events-none text-white">
        百家院
      </div>
    </section>
  );
};
