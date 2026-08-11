import React, { useState } from 'react';
import { ShieldCheck, Award, CheckCircle2, ChevronRight, Microchip, Factory, Truck, X, Sparkles } from 'lucide-react';
import washStepImage from '../assets/images/regenerated_image_1786432997310.jpg';

export const CraftHaccpSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isFacilityModalOpen, setIsFacilityModalOpen] = useState(false);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);

  const checklistItems = [
    { title: "HACCP 기준의 생산환경", desc: "식품의약품안전처 안전관리인증기준(HACCP)을 준수한 최첨단 클린 생산 라인" },
    { title: "원재료 위생 세척", desc: "버블 및 고압 세척 설비로 배추 잎 사이사이까지 미세 이물질과 먼지를 사전에 차단" },
    { title: "체계적인 제조공정 관리", desc: "원료 절임, 양념 배합, 혼합, 포장까지 표준 작업 지침서에 기반한 철저한 관리" },
    { title: "저온 보관시설 운영", desc: "입고 원채 및 완제품을 0℃~2℃ 정온 콜드체인 시설에 정밀 보관하여 아삭함 유지" },
    { title: "제품별 품질 기준 관리", desc: "배추 염도, 양념 당도/산도, 유산균 수, 이물질 X-ray 검사 등 개별 품질 검증" },
    { title: "작업장과 업무환경의 정돈 및 위생관리", desc: "작업자 위생 소독, 공기 청정 에어샤워, 자외선 살균으로 365일 정돈된 모범 환경" }
  ];

  const steps = [
    {
      step: "01",
      title: "HACCP 기준 위생 생산 체계",
      desc: "원재료 입고부터 자동 세척, 절임, 포장에 이르는 전 과정에 식약처 HACCP 위생 관리 표준을 엄격히 적용합니다.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
    },
    {
      step: "02",
      title: "원재료 미세 위생 세척",
      desc: "미세 버블 세척 기계를 통해 배추 잎 하나하나까지 잔류 농약과 잔여 이물질을 완벽히 세척합니다.",
      image: washStepImage
    },
    {
      step: "03",
      title: "신안 천일염 저온 정온 절임",
      desc: "3년 간수를 뺀 신안 천일염을 사용하여 저온 정온 탱크에서 12시간 균일하게 단단히 절여냅니다.",
      image: "https://images.unsplash.com/photo-1518110168401-f2878ee5c07d?auto=format&fit=crop&q=80&w=800"
    },
    {
      step: "04",
      title: "자체 방아 고춧가루 특제 양념",
      desc: "자체 고춧가루 공장에서 직접 방아 찧은 맑고 매콤한 고춧가루와 비법 육수로 버무려냅니다.",
      image: "https://images.unsplash.com/photo-1583224964978-2257b960c3d3?auto=format&fit=crop&q=80&w=800"
    },
    {
      step: "05",
      title: "X-Ray 정밀 이물 검사",
      desc: "생산 직후 최첨단 X-Ray 및 금속검출 센서를 통과하여 안전한 완제품만을 선별합니다.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
    },
    {
      step: "06",
      title: "저온 콜드체인 안심 보관 & 유통",
      desc: "천안 본사 저온 보관고에서 숙성 관리 후, 경기남부·충남·대전 직영 신선 차량으로 유통됩니다.",
      image: "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="craft-haccp" className="py-20 lg:py-28 bg-[#F2EDE4]/60 border-b border-[#EAE7E1] font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-serif tracking-[0.3em] text-[#BA4A32] uppercase font-bold block mb-3">
            QUALITY & MANUFACTURING
          </span>
          <h2 className="text-3xl lg:text-4xl font-serif text-[#1A1A1A] mb-4 font-bold">
            정돈된 환경에서 만들어지는 정직한 맛
          </h2>
          <p className="text-sm md:text-base text-[#55524D] leading-relaxed font-light">
            김치의 맛은 좋은 재료뿐 아니라 깨끗하고 체계적인 제조환경에서 완성됩니다. 백가원은 위생적인 생산환경과 체계적인 품질관리 기준을 바탕으로 원재료 세척부터 제조, 보관과 유통까지 모든 과정을 세심하게 관리합니다.
          </p>
          <div className="w-12 h-[2px] bg-[#2D3E30] mx-auto mt-6" />
        </div>

        {/* 6 Quality Checklist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {checklistItems.map((item, idx) => (
            <div key={idx} className="bg-white p-6 border border-[#EAE7E1] shadow-2xs hover:border-[#2D3E30] transition-all">
              <div className="flex items-center gap-2.5 mb-2.5 text-[#2D3E30]">
                <CheckCircle2 className="w-5 h-5 text-[#BA4A32] shrink-0" />
                <h3 className="font-serif font-bold text-base text-[#1A1A1A]">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs text-[#6B665E] font-light leading-relaxed pl-7">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Process Visual Interactive Box */}
        <div className="bg-white rounded-none p-6 lg:p-12 border border-[#EAE7E1] shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          <div className="lg:col-span-5 space-y-2.5">
            <h3 className="text-lg font-serif font-bold text-[#1A1A1A] mb-3 border-b border-[#EAE7E1] pb-2">
              단계별 체계적 제조 공정
            </h3>
            {steps.map((st, idx) => (
              <button
                key={st.step}
                onClick={() => setActiveStep(idx)}
                className={`w-full text-left p-3.5 transition-all duration-300 flex items-center justify-between border ${
                  activeStep === idx
                    ? 'bg-[#2D3E30] text-white border-[#2D3E30] shadow-xs'
                    : 'bg-[#FDFCF9] text-[#2D2D2D] border-[#EAE7E1] hover:bg-[#F2EDE4]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-serif font-bold px-2 py-0.5 ${
                    activeStep === idx ? 'bg-[#BA4A32] text-white' : 'bg-[#F2EDE4] text-[#BA4A32]'
                  }`}>
                    {st.step}
                  </span>
                  <span className="font-serif font-bold text-xs md:text-sm">{st.title}</span>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform ${activeStep === idx ? 'text-[#E8E2D8] translate-x-1' : 'text-[#6B665E]'}`} />
              </button>
            ))}
          </div>

          <div className="lg:col-span-7 bg-[#FDFCF9] rounded-none p-6 lg:p-8 border border-[#EAE7E1] flex flex-col justify-between">
            <div className="relative h-64 lg:h-72 overflow-hidden mb-5 bg-[#222E23]">
              <img
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute top-3 left-3 bg-[#BA4A32] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 shadow-xs">
                PROCESS STEP {steps[activeStep].step}
              </div>
            </div>

            <div>
              <h4 className="font-serif font-bold text-lg text-[#1A1A1A] mb-2">
                {steps[activeStep].title}
              </h4>
              <p className="text-xs md:text-sm text-[#55524D] leading-relaxed font-light">
                {steps[activeStep].desc}
              </p>
            </div>
          </div>

        </div>

        {/* Buttons for Facilities & Certs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => setIsFacilityModalOpen(true)}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xs bg-[#2D3E30] hover:bg-[#212F24] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-xs"
          >
            <Factory className="w-4 h-4" />
            <span>생산시설 둘러보기</span>
          </button>

          <button
            onClick={() => setIsCertModalOpen(true)}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xs bg-transparent hover:bg-[#2D3E30] text-[#2D3E30] hover:text-white border border-[#2D3E30] text-xs font-bold uppercase tracking-widest transition-all"
          >
            <Award className="w-4 h-4" />
            <span>인증 및 수료 내역 보기</span>
          </button>
        </div>

      </div>

      {/* Production Facilities Modal */}
      {isFacilityModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fade-in">
          <div className="bg-[#FDFCF9] text-[#1A1A1A] max-w-2xl w-full p-8 border border-[#EAE7E1] shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsFacilityModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-[#6B665E] hover:text-[#1A1A1A]"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-serif text-[#BA4A32] font-bold tracking-widest block mb-1">
              PLANT & PRODUCTION FACILITIES
            </span>
            <h3 className="text-2xl font-serif font-bold mb-4">
              충남 천안 본사 생산공장 및 보관 단지
            </h3>

            <div className="space-y-4 text-xs text-[#55524D] leading-relaxed border-t border-[#EAE7E1] pt-4">
              <div className="bg-[#222E23] text-white p-4">
                <p className="font-serif font-bold text-sm text-[#FDFCF9] mb-1">🏭 스마트 HACCP 김치 제조 공장</p>
                <p className="text-xs text-[#DED7CD] font-light">충남 천안시 서북구 성환읍 율금1길 187 소재. 위생 구역 분리 및 에어샤워 소독 라인 보유.</p>
              </div>

              <div className="p-4 bg-[#F2EDE4] border border-[#EAE7E1]">
                <strong className="text-sm font-bold text-[#1A1A1A] block mb-1">🌶️ 고춧가루 방아 생산공장</strong>
                2012년 설립. 국내산 건고추 선별, 이물질 수세, 미세 분쇄, 자력/X-ray 이물 검출까지 자체 가동.
              </div>

              <div className="p-4 bg-[#F2EDE4] border border-[#EAE7E1]">
                <strong className="text-sm font-bold text-[#1A1A1A] block mb-1">❄️ 저온 냉장 보관창고 단지</strong>
                연중 배추 및 완제품 유산균 활동을 가장 신선하게 다스리는 -1℃~2℃ 정온 대형 냉장 시설.
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setIsFacilityModalOpen(false)}
                className="px-5 py-2.5 bg-[#2D3E30] text-white text-xs font-bold"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Certificates Modal */}
      {isCertModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fade-in">
          <div className="bg-[#FDFCF9] text-[#1A1A1A] max-w-2xl w-full p-8 border border-[#EAE7E1] shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsCertModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-[#6B665E] hover:text-[#1A1A1A]"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-serif text-[#BA4A32] font-bold tracking-widest block mb-1">
              CERTIFICATIONS & QUALITY AWARDS
            </span>
            <h3 className="text-2xl font-serif font-bold mb-4">
              양지원식품 백가원 인증 및 품질 수료 내역
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-[#55524D] border-t border-[#EAE7E1] pt-4">
              <div className="p-4 bg-white border border-[#EAE7E1] flex items-start gap-3">
                <Award className="w-6 h-6 text-[#BA4A32] shrink-0" />
                <div>
                  <strong className="font-bold text-[#1A1A1A] block">HACCP 안전관리인증</strong>
                  <span>식품의약품안전처 지정 (김치류 및 고춧가루 전 생산라인)</span>
                </div>
              </div>

              <div className="p-4 bg-white border border-[#EAE7E1] flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-[#2D3E30] shrink-0" />
                <div>
                  <strong className="font-bold text-[#1A1A1A] block">농업회사법인 양지원식품(주)</strong>
                  <span>전통식품 제조 및 유통 수료 및 품질인증</span>
                </div>
              </div>

              <div className="p-4 bg-white border border-[#EAE7E1] flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-[#BA4A32] shrink-0" />
                <div>
                  <strong className="font-bold text-[#1A1A1A] block">국산 100% 원산지 인증</strong>
                  <span>배추, 무, 고춧가루, 마늘 전 품목 100% 국산 원채 보증</span>
                </div>
              </div>

              <div className="p-4 bg-white border border-[#EAE7E1] flex items-start gap-3">
                <Truck className="w-6 h-6 text-[#2D3E30] shrink-0" />
                <div>
                  <strong className="font-bold text-[#1A1A1A] block">해외 수출 및 유통 승인</strong>
                  <span>중국, 홍콩 정식 김치 수출 검역 승인 완료</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setIsCertModalOpen(false)}
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
