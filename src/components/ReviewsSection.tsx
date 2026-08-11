import React from 'react';
import { CLIENT_REVIEWS } from '../data/mockData';
import { Star, Quote, CheckCircle, Award } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#FDFCF9] border-b border-[#EAE7E1] font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-serif tracking-[0.3em] text-[#BA4A32] uppercase font-bold block mb-3">
            VOICE OF TRUST
          </span>
          <h2 className="text-3xl lg:text-4xl font-serif text-[#1A1A1A] mb-4">
            고객과 외식 명가가 증명하는 백가원
          </h2>
          <p className="text-sm text-[#55524D] leading-relaxed font-light">
            한정식 대표, 호텔 총괄 셰프부터 가정을 위한 정기구독 고객까지 백가원 김치의 시원하고 고결한 맛을 칭찬합니다.
          </p>
          <div className="w-12 h-[2px] bg-[#2D3E30] mx-auto mt-6" />
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {CLIENT_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-8 rounded-none border border-[#EAE7E1] shadow-xs flex flex-col justify-between relative hover:border-[#2D3E30] transition-colors"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-[#BA4A32] mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#BA4A32] text-[#BA4A32]" />
                  ))}
                </div>

                <p className="text-xs lg:text-sm text-[#2D2D2D] leading-relaxed font-light mb-6">
                  "{rev.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#F0EFEA]">
                <div className="font-serif font-bold text-sm text-[#1A1A1A]">{rev.author}</div>
                <div className="text-[11px] text-[#6B665E]">{rev.role}</div>
                <div className="text-[10px] text-[#BA4A32] font-medium mt-1">
                  ✓ 구매 품목: {rev.productName}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Press Badges */}
        <div className="p-8 rounded-none bg-[#F2EDE4]/60 border border-[#EAE7E1] flex flex-wrap items-center justify-around gap-6 text-center text-xs text-[#6B665E]">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-[#2D3E30]" />
            <span className="font-serif font-bold text-[#1A1A1A]">2025 농림축산식품부 장관 표창</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-[#2D3E30]" />
            <span className="font-serif font-bold text-[#1A1A1A]">대한민국 우수 농식품 브랜드 대상</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-[#2D3E30]" />
            <span className="font-serif font-bold text-[#1A1A1A]">스마트 HACCP 위생 우수사업장</span>
          </div>
        </div>

      </div>
    </section>
  );
};
