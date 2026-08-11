import React, { useState } from 'react';
import { Heart, HandHeart, Users, Award, X, Sparkles } from 'lucide-react';

export const SocialValueSection: React.FC = () => {
  const [isCsrModalOpen, setIsCsrModalOpen] = useState(false);

  return (
    <section id="social-value" className="py-20 lg:py-28 bg-[#FDFCF9] border-b border-[#EAE7E1] font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-serif tracking-[0.3em] text-[#BA4A32] uppercase font-bold block mb-3">
            SOCIAL VALUE & CSR
          </span>
          <h2 className="text-3xl lg:text-4xl font-serif text-[#1A1A1A] mb-4 font-bold">
            좋은 식품을 넘어 따뜻한 나눔으로
          </h2>
          <p className="text-sm md:text-base text-[#55524D] leading-relaxed font-light">
            백가원은 정직한 식품을 만드는 일과 함께 지역사회에 필요한 나눔에도 참여합니다. 지역사회 및 관련 기관과의 교류를 통해 건강한 식문화와 따뜻한 나눔의 가치를 이어가겠습니다.
          </p>
          <div className="w-12 h-[2px] bg-[#2D3E30] mx-auto mt-6" />
        </div>

        {/* 3 Pillars of Community Sharing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-[#F2EDE4] p-8 border border-[#EAE7E1] text-center">
            <div className="w-12 h-12 rounded-full bg-[#BA4A32] text-white flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#1A1A1A] mb-2">
              취약계층 사랑의 김장 나눔
            </h3>
            <p className="text-xs text-[#6B665E] font-light leading-relaxed">
              매년 독거노인 및 지역 소외계층 가정을 위해 직접 만든 정성 어린 명품 김치를 정기 기부합니다.
            </p>
          </div>

          <div className="bg-[#F2EDE4] p-8 border border-[#EAE7E1] text-center">
            <div className="w-12 h-12 rounded-full bg-[#2D3E30] text-white flex items-center justify-center mx-auto mb-4">
              <HandHeart className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#1A1A1A] mb-2">
              농가 상생 계약재배 지원
            </h3>
            <p className="text-xs text-[#6B665E] font-light leading-relaxed">
              국산 농산물 산지 직거래와 판로 보장 계약으로 지역 농가의 안정적인 소득 창출에 기여합니다.
            </p>
          </div>

          <div className="bg-[#F2EDE4] p-8 border border-[#EAE7E1] text-center">
            <div className="w-12 h-12 rounded-full bg-[#BA4A32] text-white flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#1A1A1A] mb-2">
              전통식품 식문화 교육 교류
            </h3>
            <p className="text-xs text-[#6B665E] font-light leading-relaxed">
              어린이 체험 및 청소년 발효 식품 보존 캠페인 등 올바른 전통 한국 식문화 계승 활동을 지원합니다.
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="text-center">
          <button
            onClick={() => setIsCsrModalOpen(true)}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xs bg-[#2D3E30] hover:bg-[#212F24] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-xs"
          >
            <Award className="w-4 h-4" />
            <span>인증 및 사회공헌 내역 보기</span>
          </button>
        </div>

      </div>

      {/* CSR Modal */}
      {isCsrModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fade-in">
          <div className="bg-[#FDFCF9] text-[#1A1A1A] max-w-xl w-full p-8 border border-[#EAE7E1] shadow-2xl relative">
            <button
              onClick={() => setIsCsrModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-[#6B665E] hover:text-[#1A1A1A]"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-serif text-[#BA4A32] font-bold tracking-widest block mb-1">
              SOCIAL RESPONSIBILITY & AWARDS
            </span>
            <h3 className="text-2xl font-serif font-bold mb-4">
              백가원의 인증 및 사회공헌 기여 내역
            </h3>

            <div className="space-y-3 text-xs text-[#55524D] leading-relaxed border-t border-[#EAE7E1] pt-4">
              <div className="p-3.5 bg-[#F2EDE4] border border-[#EAE7E1]">
                <strong className="text-sm font-bold text-[#1A1A1A] block mb-1">🎁 지역사회 후원물품 감사 표창</strong>
                천안시 복지재단 및 천안 성환 지역 후원 기여 표창 수상.
              </div>

              <div className="p-3.5 bg-[#F2EDE4] border border-[#EAE7E1]">
                <strong className="text-sm font-bold text-[#1A1A1A] block mb-1">🌱 국산 농산물 소비촉진 공로인증</strong>
                농업회사법인으로서 농산물 수급안정 기여 표창.
              </div>

              <div className="p-3.5 bg-[#F2EDE4] border border-[#EAE7E1]">
                <strong className="text-sm font-bold text-[#1A1A1A] block mb-1">🤝 나눔 착한기업 선정</strong>
                매월 정기적 식품 기부활동을 이어가는 따뜻한 일터 인증.
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setIsCsrModalOpen(false)}
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
