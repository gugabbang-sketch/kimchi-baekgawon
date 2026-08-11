import React, { useState, useEffect } from 'react';
import { ArrowRight, ExternalLink, ShieldCheck, Sparkles, Building2, ChevronLeft, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface HeroBannerProps {
  onOpenTasteFinder: () => void;
  onOpenB2BQuote: () => void;
  onNavigateSection: (sectionId: string) => void;
  onOpenCompanyModal: () => void;
  onOpenNaverStoreModal: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onOpenTasteFinder,
  onOpenB2BQuote,
  onNavigateSection,
  onOpenCompanyModal,
  onOpenNaverStoreModal,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      badge: "SINCE 2002 · 전통식품 대표 브랜드",
      titleLine1: "백년을 이어가는 전통식품,",
      titleLine2: "백가원 (百家院)",
      desc: "2002년부터 이어온 정직한 한길. 백가원은 원재료부터 생산과 유통까지 직접 관리하며 우리 식탁에 믿을 수 있는 전통의 맛을 전합니다.",
      image: "https://images.unsplash.com/photo-1583224964978-2257b960c3d3?auto=format&fit=crop&q=80&w=1920",
      btn1Text: "백가원 제품 보기",
      btn1Action: () => onNavigateSection('products'),
      btn2Text: "네이버 스토어 바로가기",
      btn2Action: onOpenNaverStoreModal,
      btn3Text: "회사소개 보기",
      btn3Action: onOpenCompanyModal,
    },
    {
      id: 2,
      badge: "직영 생산 · 유통 경쟁력",
      titleLine1: "우리가 직접 하고,",
      titleLine2: "직접 책임지고 만듭니다",
      desc: "자체 영농, 고춧가루 생산공장, 저온 보관시설, 직영 유통망으로 완성한 정직하고 믿을 수 있는 신선 품질.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920",
      btn1Text: "백가원 경쟁력 보기",
      btn1Action: () => onNavigateSection('competencies'),
      btn2Text: "B2B / 식자재 문의",
      btn2Action: onOpenB2BQuote,
      btn3Text: "HACCP 공정 보기",
      btn3Action: () => onNavigateSection('craft-haccp'),
    },
    {
      id: 3,
      badge: "국내외 사업 & 글로벌 확장",
      titleLine1: "우리 식탁에서",
      titleLine2: "세계의 식탁으로 넓혀갑니다",
      desc: "중국·홍콩 수출 및 전국 유통망을 통해 대한민국 전통식품의 우수한 맛과 품질 가치를 전하고 있습니다.",
      image: "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?auto=format&fit=crop&q=80&w=1920",
      btn1Text: "국내외 사업 보기",
      btn1Action: () => onNavigateSection('global-business'),
      btn2Text: "브랜드 연혁 보기",
      btn2Action: () => onNavigateSection('history'),
      btn3Text: "네이버 스토어 구매",
      btn3Action: onOpenNaverStoreModal,
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[currentSlide];

  return (
    <section id="hero" className="relative w-full min-h-[600px] lg:min-h-[680px] bg-[#222E23] text-white overflow-hidden font-sans">
      {/* Background Image Layer */}
      {slides.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <img
            src={item.image}
            alt={item.titleLine1}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-10000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A231B]/95 via-[#1A231B]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A231B] via-transparent to-[#1A231B]/40" />
        </div>
      ))}

      {/* Hero Content Overlay */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 h-full min-h-[600px] lg:min-h-[680px] flex flex-col justify-center py-16">
        <div className="max-w-2xl animate-fade-in">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#BA4A32] text-white text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FDFCF9]" />
            <span>{slide.badge}</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#FDFCF9] leading-[1.15] mb-6">
            <span className="block">{slide.titleLine1}</span>
            <span className="block text-[#E8E2D8] font-serif italic mt-1">{slide.titleLine2}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm md:text-base text-[#DED7CD] leading-relaxed mb-8 max-w-xl font-light">
            {slide.desc}
          </p>

          {/* 3 Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={slide.btn1Action}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm bg-[#2D3E30] hover:bg-[#3B4E32] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-sm border border-[#3B4E32] group"
            >
              <span>{slide.btn1Text}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={slide.btn2Action}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm bg-[#BA4A32] hover:bg-[#9E3E29] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-sm"
            >
              <span>{slide.btn2Text}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={slide.btn3Action}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm bg-transparent hover:bg-[#FDFCF9] text-[#FDFCF9] hover:text-[#2D3E30] border border-[#FDFCF9]/60 font-bold text-xs uppercase tracking-widest transition-all"
            >
              <span>{slide.btn3Text}</span>
            </button>
          </div>

          {/* Quick Features */}
          <div className="mt-10 pt-6 border-t border-white/15 grid grid-cols-3 gap-3 text-xs text-[#E8E2D8]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#BA4A32] shrink-0" />
              <span>자체 영농 & 고춧가루 공장</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#BA4A32] shrink-0" />
              <span>HACCP 클린 생산 체계</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#BA4A32] shrink-0" />
              <span>직영 콜드체인 유통망</span>
            </div>
          </div>

        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute z-30 bottom-8 right-6 lg:right-12 flex items-center gap-3">
        <div className="flex gap-2 mr-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'w-8 bg-[#BA4A32]' : 'w-2 bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="p-2 rounded-sm bg-black/30 hover:bg-black/60 text-white border border-white/20 transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="p-2 rounded-sm bg-black/30 hover:bg-black/60 text-white border border-white/20 transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};
