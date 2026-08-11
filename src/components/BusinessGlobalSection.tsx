import React, { useState } from 'react';
import { Globe, MapPin, Building2, ShieldCheck, Check, X, ArrowRight } from 'lucide-react';

export const BusinessGlobalSection: React.FC = () => {
  const [isDomesticModalOpen, setIsDomesticModalOpen] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  const trustBullets = [
    "2002년부터 축적한 식품 제조 경험",
    "백가원 브랜드를 통한 전통식품 전문화",
    "자체 영농 및 원재료 수급 역량",
    "자체 고춧가루 생산시설",
    "냉장·저온 보관시설",
    "경기 남부·충남·대전 지역 유통망",
    "HACCP 기반 생산환경",
    "국내외 유통 및 수출 경험",
    "지속적인 연구개발과 제품 확장"
  ];

  return (
    <section id="global-business" className="py-20 lg:py-28 bg-[#2D3E30] text-white border-b border-[#3B4E32] font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-serif tracking-[0.3em] text-[#E8E2D8] uppercase font-bold block mb-3">
            DOMESTIC & GLOBAL NETWORK
          </span>
          <h2 className="text-3xl lg:text-4xl font-serif text-[#FDFCF9] mb-4 font-bold">
            우리 식탁에서 세계의 식탁으로
          </h2>
          <p className="text-sm md:text-base text-[#DED7CD] leading-relaxed font-light">
            백가원은 국내 유통시장을 넘어 해외시장에서도 전통식품의 가능성을 넓혀가고 있습니다. 생산계획과 원재료 수급, 제조와 판매에 이르는 과정을 직접 관리하며 해외에서도 백가원의 품질관리 기준을 이어갑니다. 앞으로도 한국 전통식품의 맛과 가치를 더 많은 고객에게 알리겠습니다.
          </p>
          <div className="w-12 h-[2px] bg-[#BA4A32] mx-auto mt-6" />
        </div>

        {/* Corporate Trust Bullets Grid */}
        <div className="bg-[#222E23] p-8 lg:p-10 border border-[#3B4E32] rounded-none mb-12">
          <div className="flex items-center gap-3 mb-6 border-b border-[#3B4E32] pb-4">
            <ShieldCheck className="w-6 h-6 text-[#BA4A32]" />
            <h3 className="font-serif font-bold text-xl text-[#FDFCF9]">
              믿을 수 있는 식품을 만드는 기업 · 백가원 기업 신뢰
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {trustBullets.map((bullet, idx) => (
              <div key={idx} className="bg-[#2D3E30] p-4 border border-[#3B4E32] flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#BA4A32] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-xs md:text-sm font-medium text-[#E8E2D8]">
                  {bullet}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => setIsDomesticModalOpen(true)}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xs bg-[#BA4A32] hover:bg-[#9E3E29] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-xs"
          >
            <MapPin className="w-4 h-4" />
            <span>국내 영업망 보기</span>
          </button>

          <button
            onClick={() => setIsExportModalOpen(true)}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xs bg-transparent hover:bg-white text-white hover:text-[#2D3E30] border border-white text-xs font-bold uppercase tracking-widest transition-all"
          >
            <Globe className="w-4 h-4" />
            <span>해외사업 보기</span>
          </button>
        </div>

      </div>

      {/* Domestic Network Modal */}
      {isDomesticModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fade-in">
          <div className="bg-[#FDFCF9] text-[#1A1A1A] max-w-xl w-full p-8 border border-[#EAE7E1] shadow-2xl relative">
            <button
              onClick={() => setIsDomesticModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-[#6B665E] hover:text-[#1A1A1A]"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-serif text-[#BA4A32] font-bold tracking-widest block mb-1">
              DOMESTIC LOGISTICS & NETWORK
            </span>
            <h3 className="text-2xl font-serif font-bold mb-4">
              백가원 국내 직영 유통 거점
            </h3>

            <div className="space-y-3 text-xs text-[#55524D] leading-relaxed border-t border-[#EAE7E1] pt-4">
              <div className="p-3.5 bg-[#F2EDE4] border border-[#EAE7E1]">
                <strong className="text-sm font-bold text-[#1A1A1A] block mb-1">📍 경기 남부 직영 유통 거점</strong>
                수원, 용인, 평택, 안성 지역 식자재 및 외식 브랜드 매장에 콜드체인 당일 직배송망 운용.
              </div>
              <div className="p-3.5 bg-[#F2EDE4] border border-[#EAE7E1]">
                <strong className="text-sm font-bold text-[#1A1A1A] block mb-1">📍 충청 및 천안 본사 유통망</strong>
                천안 본사 물류센터를 중심으로 아산, 세종, 공주, 홍성 지역 정기 공급 체계 구축.
              </div>
              <div className="p-3.5 bg-[#F2EDE4] border border-[#EAE7E1]">
                <strong className="text-sm font-bold text-[#1A1A1A] block mb-1">📍 대전 광역시 직영 물류</strong>
                대전 지역 외식 기업, 한정식 명가, 단체 급식업체 대상 맞춤 온도 제어 납품.
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setIsDomesticModalOpen(false)}
                className="px-5 py-2.5 bg-[#2D3E30] text-white text-xs font-bold"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Global Export Modal */}
      {isExportModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fade-in">
          <div className="bg-[#FDFCF9] text-[#1A1A1A] max-w-xl w-full p-8 border border-[#EAE7E1] shadow-2xl relative">
            <button
              onClick={() => setIsExportModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-[#6B665E] hover:text-[#1A1A1A]"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-serif text-[#BA4A32] font-bold tracking-widest block mb-1">
              GLOBAL EXPORT & OVERSEAS BUSINESS
            </span>
            <h3 className="text-2xl font-serif font-bold mb-4">
              백가원 글로벌 수출 및 해외 사업
            </h3>

            <div className="space-y-3 text-xs text-[#55524D] leading-relaxed border-t border-[#EAE7E1] pt-4">
              <div className="p-3.5 bg-[#F2EDE4] border border-[#EAE7E1]">
                <strong className="text-sm font-bold text-[#1A1A1A] block mb-1">🇨🇳 2017년 국산 김치 중국 수출</strong>
                엄격한 수출 통관 및 검역 기준을 만족하여 중국 대도시 마트 및 식품 유통 채널 공급.
              </div>
              <div className="p-3.5 bg-[#F2EDE4] border border-[#EAE7E1]">
                <strong className="text-sm font-bold text-[#1A1A1A] block mb-1">🇭🇰 홍콩 및 아시아 주요 시장 공급</strong>
                혁신 캔김치 패키징 기술을 개발하여 해외에서도 발효 가스 팽창 없이 신선한 맛 유지.
              </div>
              <div className="p-3.5 bg-[#F2EDE4] border border-[#EAE7E1]">
                <strong className="text-sm font-bold text-[#1A1A1A] block mb-1">📦 해외 OEM / ODM 맞춤 제조</strong>
                해외 현지 한식당 및 유통사 맞춤 파우치, 캔, 벌크 김치 제조 및 비행기/선박 정온 운송.
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setIsExportModalOpen(false)}
                className="px-5 py-2.5 bg-[#2D3E30] text-white text-xs font-bold"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
