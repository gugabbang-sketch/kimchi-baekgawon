import React, { useState } from 'react';
import { CORE_COMPETENCIES } from '../data/mockData';
import { Sprout, Flame, Snowflake, Truck, Microscope, Globe, ArrowRight, ShieldCheck, X } from 'lucide-react';

interface CompetenciesSectionProps {
  onOpenB2BQuote: () => void;
}

export const CompetenciesSection: React.FC<CompetenciesSectionProps> = ({ onOpenB2BQuote }) => {
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sprout': return <Sprout className="w-6 h-6 text-[#BA4A32]" />;
      case 'Flame': return <Flame className="w-6 h-6 text-[#BA4A32]" />;
      case 'Snowflake': return <Snowflake className="w-6 h-6 text-[#BA4A32]" />;
      case 'Truck': return <Truck className="w-6 h-6 text-[#BA4A32]" />;
      case 'Microscope': return <Microscope className="w-6 h-6 text-[#BA4A32]" />;
      case 'Globe': return <Globe className="w-6 h-6 text-[#BA4A32]" />;
      default: return <Sprout className="w-6 h-6 text-[#BA4A32]" />;
    }
  };

  return (
    <section id="competencies" className="py-20 lg:py-28 bg-[#222E23] text-white border-b border-[#3B4E32] font-sans relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-serif tracking-[0.3em] text-[#E8E2D8] uppercase font-bold block mb-3">
            BAEKGAWON COMPETENCIES
          </span>
          <h2 className="text-3xl lg:text-4xl font-serif text-[#FDFCF9] mb-4 font-bold">
            우리가 직접 하고, 직접 만듭니다
          </h2>
          <p className="text-sm md:text-base text-[#DED7CD] leading-relaxed font-light">
            생산부터 유통까지 직접 책임지는 체계는 백가원이 오랫동안 지켜온 경쟁력입니다.
          </p>
          <div className="w-12 h-[2px] bg-[#BA4A32] mx-auto mt-6" />
        </div>

        {/* 6 Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {CORE_COMPETENCIES.map((comp) => (
            <div
              key={comp.id}
              className="bg-[#2D3E30] p-7 border border-[#3B4E32] hover:border-[#BA4A32] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-[#1A231B] border border-[#3B4E32] rounded-xs">
                    {getIcon(comp.icon)}
                  </div>
                  <span className="text-[11px] font-mono text-[#E8E2D8] px-2.5 py-1 bg-[#1A231B] border border-[#3B4E32]">
                    {comp.tag}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-xl text-[#FDFCF9] mb-3 group-hover:text-[#BA4A32] transition-colors">
                  {comp.title}
                </h3>

                <p className="text-xs md:text-sm text-[#DED7CD] leading-relaxed font-light">
                  {comp.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#3B4E32] flex items-center justify-between text-xs text-[#E8E2D8]">
                <span>자체 직영 원칙</span>
                <ShieldCheck className="w-4 h-4 text-[#BA4A32]" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={() => setIsDetailModalOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xs bg-[#BA4A32] hover:bg-[#9E3E29] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-md"
          >
            <span>백가원의 경쟁력 자세히 보기</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Competencies Detail Modal */}
      {isDetailModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fade-in">
          <div className="bg-[#FDFCF9] text-[#1A1A1A] max-w-2xl w-full p-8 border border-[#EAE7E1] shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsDetailModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-[#6B665E] hover:text-[#1A1A1A]"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-serif text-[#BA4A32] font-bold tracking-widest block mb-1">
              FULL INFRASTRUCTURE & ADVANTAGE
            </span>
            <h3 className="text-2xl font-serif font-bold mb-4">
              백가원 6대 직영 인프라 및 유통 시스템
            </h3>
            
            <div className="space-y-4 text-xs text-[#55524D] leading-relaxed border-t border-[#EAE7E1] pt-4">
              <div className="p-4 bg-[#F2EDE4] border border-[#EAE7E1]">
                <strong className="text-sm font-bold text-[#1A1A1A] block mb-1">🌱 1. 자체 영농 사업단</strong>
                계약 농가 협업 및 자체 운영 영농사업을 통해 일교차가 크고 토양이 비옥한 고랭지 원채 수급 안정화를 구축하였습니다.
              </div>

              <div className="p-4 bg-[#F2EDE4] border border-[#EAE7E1]">
                <strong className="text-sm font-bold text-[#1A1A1A] block mb-1">🌶️ 2. 자체 고춧가루 생산공장</strong>
                2012년 자체 고춧가루 생산 라인을 설립하여 HACCP 인증을 획득, 태양초 원료의 세척, 건조, 집진, X-ray 검사까지 직접 정밀 관리합니다.
              </div>

              <div className="p-4 bg-[#F2EDE4] border border-[#EAE7E1]">
                <strong className="text-sm font-bold text-[#1A1A1A] block mb-1">❄️ 3. 대형 저온 보관 단지</strong>
                충남 천안 본사에 대규모 냉장 및 저온 보관고를 운영하여 연중 최적의 신선 온도(-1℃~2℃)로 김치 원채와 제품을 신선하게 보존합니다.
              </div>

              <div className="p-4 bg-[#F2EDE4] border border-[#EAE7E1]">
                <strong className="text-sm font-bold text-[#1A1A1A] block mb-1">🚚 4. 경기남부·충남·대전 직영 유통망</strong>
                체계적인 냉장 물류 전용 차량을 직접 운용하여 경기 남부, 충청, 대전 지역에 최적 시간에 맞춤 신선 납품을 실현합니다.
              </div>

              <div className="p-4 bg-[#F2EDE4] border border-[#EAE7E1]">
                <strong className="text-sm font-bold text-[#1A1A1A] block mb-1">🔬 5. R&D 중앙연구실</strong>
                고객 식습관과 B2B 프랜차이즈 니즈를 반영한 유산균 발효 제어 및 저염 맞춤 레시피를 끊임없이 개발합니다.
              </div>

              <div className="p-4 bg-[#F2EDE4] border border-[#EAE7E1]">
                <strong className="text-sm font-bold text-[#1A1A1A] block mb-1">🌏 6. 글로벌 해외 수출망</strong>
                중국, 홍콩, 동남아 등 해외 시장에 한국 전통 김치 본연의 맛을 손상 없이 전달하는 진공 캔김치 및 특수 진공 포장을 보유하고 있습니다.
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setIsDetailModalOpen(false)}
                className="px-5 py-2.5 bg-[#2D3E30] text-white text-xs font-bold"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
