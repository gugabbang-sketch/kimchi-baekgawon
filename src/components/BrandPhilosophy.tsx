import React from 'react';
import { BRAND_PHILOSOPHY } from '../data/mockData';
import { Sprout, Sparkles, ThermometerSnowflake, ShieldCheck, ArrowRight, BookOpen } from 'lucide-react';

interface BrandPhilosophyProps {
  onOpenCompanyModal: () => void;
  onOpenB2BQuote: () => void;
}

export const BrandPhilosophy: React.FC<BrandPhilosophyProps> = ({ onOpenCompanyModal, onOpenB2BQuote }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sprout': return <Sprout className="w-6 h-6 text-[#2D3E30]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#2D3E30]" />;
      case 'ThermometerSnowflake': return <ThermometerSnowflake className="w-6 h-6 text-[#2D3E30]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#2D3E30]" />;
      default: return <Sprout className="w-6 h-6 text-[#2D3E30]" />;
    }
  };

  return (
    <section id="brand-story" className="py-20 lg:py-28 bg-[#FDFCF9] border-b border-[#EAE7E1] font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section 2 Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-serif tracking-[0.3em] text-[#BA4A32] uppercase font-bold block mb-3">
            BRAND VISION & HERITAGE
          </span>
          <h2 className="text-3xl lg:text-4xl font-serif text-[#1A1A1A] mb-4 font-bold">
            전통의 맛을 오늘의 기준으로 만듭니다
          </h2>
          <p className="text-base text-[#2D3E30] font-medium mb-4">
            백가원은 농업회사법인 양지원식품(주)의 전통식품 브랜드입니다.
          </p>
          <p className="text-sm text-[#55524D] leading-relaxed font-light mb-6">
            2002년 대성종합식품으로 시작한 이후 김치 제조와 유통, 배추 생산, 고춧가루 생산, 신선채소 보관·판매, 식자재 유통에 이르기까지 식품에 관한 다양한 경험과 역량을 쌓아왔습니다. 오랜 경험을 바탕으로 전통의 맛은 지키고, 제조와 품질관리는 더욱 체계적으로 발전시키고 있습니다. 백가원 제품이라면 믿고 선택할 수 있도록 오늘도 정직하게 만들겠습니다.
          </p>

          <button
            onClick={onOpenCompanyModal}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-[#2D3E30] hover:bg-[#212F24] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-xs"
          >
            <BookOpen className="w-4 h-4 text-[#E8E2D8]" />
            <span>백가원 이야기 보기</span>
          </button>

          <div className="w-12 h-[2px] bg-[#2D3E30] mx-auto mt-8" />
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BRAND_PHILOSOPHY.pillars.map((pillar) => (
            <div 
              key={pillar.number}
              className="bg-white rounded-none p-6 border border-[#EAE7E1] shadow-xs hover:border-[#2D3E30] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Pillar Image */}
                <div className="relative h-44 overflow-hidden mb-6 bg-[#F2EDE4]">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#FDFCF9] px-2.5 py-1 rounded-xs text-xs font-serif font-bold text-[#BA4A32] border border-[#EAE7E1]">
                    {pillar.number}
                  </div>
                </div>

                {/* Pillar Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xs bg-[#F2EDE4] border border-[#EAE7E1]">
                    {getIcon(pillar.iconName)}
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#1A1A1A] leading-tight group-hover:text-[#BA4A32] transition-colors">
                    {pillar.title}
                  </h3>
                </div>

                {/* Pillar Description */}
                <p className="text-xs text-[#6B665E] leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0EFEA] flex items-center justify-between text-[11px] font-medium text-[#2D3E30]">
                <span>백가원 원칙 보증</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#BA4A32]" />
              </div>
            </div>
          ))}
        </div>

        {/* Story Quote Feature Banner */}
        <div className="mt-16 bg-[#2D3E30] text-white rounded-none p-8 lg:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm border border-[#3B4E32]">
          <div className="max-w-xl z-10">
            <span className="text-xs font-serif text-[#E8E2D8] tracking-widest uppercase block mb-2">
              SINCE 2002 · 농업회사법인 양지원식품(주)
            </span>
            <h3 className="text-2xl lg:text-3xl font-serif text-[#FDFCF9] leading-snug mb-3">
              "백년을 이어가는 전통식품, 오늘도 정직하게 만듭니다"
            </h3>
            <p className="text-xs lg:text-sm text-[#DED7CD] leading-relaxed font-light">
              2002년부터 이어온 정직한 고집. 원재료 수급부터 생산, 유통까지 직접 책임지며 대한민국 식탁과 해외시장까지 믿을 수 있는 전통의 맛을 선사합니다.
            </p>
          </div>

          <div className="z-10 shrink-0">
            <button
              onClick={onOpenB2BQuote}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xs bg-[#BA4A32] hover:bg-[#a33e28] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-xs"
            >
              <span>사업 / 식자재 납품 문의</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Decorative Background Accent */}
          <div className="absolute right-0 bottom-0 opacity-10 font-serif text-9xl font-black select-none pointer-events-none text-white">
            百家院
          </div>
        </div>

      </div>
    </section>
  );
};
