import React, { useState } from 'react';
import { Building2, CheckCircle2, ArrowRight, Calculator, FileText } from 'lucide-react';

interface B2BSectionProps {
  onOpenB2BQuote: () => void;
}

export const B2BSection: React.FC<B2BSectionProps> = ({ onOpenB2BQuote }) => {
  const [estimatedKg, setEstimatedKg] = useState(300);

  const getB2BRate = (kg: number) => {
    if (kg < 100) return 4800;
    if (kg < 300) return 4300;
    if (kg < 500) return 3900;
    return 3500;
  };

  const currentRate = getB2BRate(estimatedKg);
  const estimatedMonthlyTotal = estimatedKg * currentRate;

  const inquiryChecklist = [
    { label: "희망 제품", detail: "포기김치, 겉절이, 총각김치, 깍두기, 백김치 등 전 품목" },
    { label: "주문 또는 납품 수량", detail: "월 최소 30kg부터 10톤 이상 대량 식자재 납품" },
    { label: "납품 지역", detail: "경기 남부, 충남, 대전 직영 직배 및 전국 택배/화물 배송" },
    { label: "희망 일정", detail: "당일/지정 정기 요일 배송 및 즉시 무상 샘플 배송" },
    { label: "담당자명과 연락처", detail: "기업/매장 담당자 정보 접수 후 24시간 내 전문 상담" },
  ];

  return (
    <section id="b2b-section" className="py-20 lg:py-28 bg-[#2D3E30] text-white font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-serif tracking-[0.3em] text-[#BA4A32] uppercase font-bold block mb-3">
            B2B & WHOLESALE PARTNERSHIP
          </span>
          <h2 className="text-3xl lg:text-4xl font-serif text-[#FDFCF9] mb-4 font-bold">
            함께 성장할 파트너를 기다립니다
          </h2>
          <p className="text-sm md:text-base text-[#DED7CD] leading-relaxed font-light">
            식자재 유통, 식당·급식 납품, 대량구매 및 국내외 사업에 관한 상담이 필요하시면 백가원으로 문의해 주세요.
          </p>
          <div className="w-12 h-[2px] bg-[#BA4A32] mx-auto mt-6" />
        </div>

        {/* Inquiry Checklist Grid */}
        <div className="bg-[#222E23] p-8 lg:p-10 border border-[#3B4E32] rounded-none mb-12">
          <div className="flex items-center gap-2.5 mb-6 border-b border-[#3B4E32] pb-4">
            <FileText className="w-5 h-5 text-[#BA4A32]" />
            <h3 className="font-serif font-bold text-lg text-[#FDFCF9]">
              사업 및 납품 문의 필수 안내 사항
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {inquiryChecklist.map((item, idx) => (
              <div key={idx} className="bg-[#2D3E30] p-5 border border-[#3B4E32]">
                <div className="flex items-center gap-2 mb-1.5 text-[#BA4A32] font-bold text-xs uppercase">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{item.label}</span>
                </div>
                <p className="text-xs text-[#E8E2D8] font-light leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={onOpenB2BQuote}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xs bg-[#BA4A32] hover:bg-[#9E3E29] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-md"
            >
              <Building2 className="w-4 h-4" />
              <span>사업·납품 문의하기 (무료 3kg 샘플)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Interactive Simulator */}
        <div className="bg-[#222E23] rounded-none p-8 lg:p-12 border border-[#3B4E32] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-md">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-serif font-bold text-[#E8E2D8]">
              <Calculator className="w-4 h-4 text-[#BA4A32]" />
              <span>B2B 예상 월 납품 단가 시뮬레이터</span>
            </div>

            <h3 className="text-2xl font-serif text-white">
              우리 매장의 월 소모량을 설정해보세요
            </h3>

            <div>
              <div className="flex justify-between text-xs text-[#E8E2D8] mb-2 font-mono">
                <span>월 예상 사용량</span>
                <span className="text-[#BA4A32] font-bold text-base">{estimatedKg} kg / 월</span>
              </div>
              <input
                type="range"
                min="50"
                max="1000"
                step="50"
                value={estimatedKg}
                onChange={(e) => setEstimatedKg(Number(e.target.value))}
                className="w-full h-2 bg-[#1A231B] rounded-none appearance-none cursor-pointer accent-[#BA4A32]"
              />
              <div className="flex justify-between text-[10px] text-[#E8E2D8]/70 mt-1 font-mono">
                <span>50kg</span>
                <span>300kg</span>
                <span>600kg</span>
                <span>1,000kg (1톤)</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs pt-2">
              <div className="p-3 rounded-none bg-[#1A231B] border border-[#3B4E32]">
                <span className="text-[#E8E2D8]/70 block text-[10px]">적용 kg당 예상단가</span>
                <span className="font-serif font-bold text-base text-[#FDFCF9]">약 {currentRate.toLocaleString()}원 / kg</span>
              </div>
              <div className="p-3 rounded-none bg-[#1A231B] border border-[#3B4E32]">
                <span className="text-[#E8E2D8]/70 block text-[10px]">예상 월 식자재 비용</span>
                <span className="font-serif font-bold text-base text-[#BA4A32]">약 {estimatedMonthlyTotal.toLocaleString()}원</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#1A231B] p-6 lg:p-8 rounded-none border border-[#3B4E32] text-center space-y-4">
            <Building2 className="w-10 h-10 text-[#BA4A32] mx-auto" />
            <h4 className="font-serif font-bold text-lg text-white">
              사업자 전용 무료 3kg 샘플 신청
            </h4>
            <p className="text-xs text-[#E8E2D8] font-light leading-relaxed">
              직접 매장에서 맛보시고 결정하세요! 백가원 전담 유통팀에서 신청 즉시 3kg 정품 테스트 샘플을 발송해 드립니다.
            </p>

            <button
              onClick={onOpenB2BQuote}
              className="w-full py-3.5 px-6 rounded-xs bg-[#BA4A32] hover:bg-[#a33e28] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs flex items-center justify-center gap-2"
            >
              <span>사업·납품 문의폼 작성하기</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
