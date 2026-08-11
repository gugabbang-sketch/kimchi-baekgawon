import React from 'react';
import { COMPANY_INFO, BRAND_VISION } from '../data/mockData';
import { Building2, X, ShieldCheck, Award, MapPin, Globe, History, Check } from 'lucide-react';

interface CompanyOverviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenB2B: () => void;
}

export const CompanyOverviewModal: React.FC<CompanyOverviewModalProps> = ({
  isOpen,
  onClose,
  onOpenB2B,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fade-in font-sans">
      <div className="bg-[#FDFCF9] text-[#1A1A1A] max-w-3xl w-full p-8 lg:p-10 border border-[#EAE7E1] shadow-2xl relative max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#6B665E] hover:text-[#1A1A1A] transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header Badge */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-7 h-7 rounded-full bg-[#BA4A32] text-white flex items-center justify-center font-serif text-sm font-bold">
            百
          </div>
          <span className="text-xs font-serif text-[#BA4A32] font-bold tracking-widest uppercase">
            BAEKGAWON COMPANY OVERVIEW
          </span>
        </div>

        <h2 className="text-2xl lg:text-3xl font-serif font-bold mb-2 text-[#1A1A1A]">
          {COMPANY_INFO.companyName} 백가원
        </h2>
        <p className="text-xs md:text-sm text-[#55524D] font-light leading-relaxed mb-6">
          {BRAND_VISION.corePillar}
        </p>

        <div className="space-y-6 text-xs text-[#55524D]">
          
          {/* Vision Box */}
          <div className="bg-[#2D3E30] text-white p-6 border border-[#3B4E32]">
            <h3 className="font-serif font-bold text-lg text-[#FDFCF9] mb-2">
              백가원의 브랜드 비전 & 약속
            </h3>
            <p className="text-xs text-[#DED7CD] leading-relaxed font-light mb-3">
              {BRAND_VISION.detailIntro}
            </p>
            <div className="p-3 bg-[#222E23] border border-[#3B4E32] text-[#E8E2D8] font-serif text-xs italic">
              "{BRAND_VISION.slogan}"
            </div>
          </div>

          {/* Key Overview Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white border border-[#EAE7E1]">
              <span className="text-[10px] text-[#6B665E] uppercase font-bold block mb-1">상호명 / 법인명</span>
              <span className="text-sm font-bold text-[#1A1A1A]">{COMPANY_INFO.companyName} ({COMPANY_INFO.brandName})</span>
            </div>

            <div className="p-4 bg-white border border-[#EAE7E1]">
              <span className="text-[10px] text-[#6B665E] uppercase font-bold block mb-1">대표자명</span>
              <span className="text-sm font-bold text-[#1A1A1A]">{COMPANY_INFO.ceo} 대표이사</span>
            </div>

            <div className="p-4 bg-white border border-[#EAE7E1]">
              <span className="text-[10px] text-[#6B665E] uppercase font-bold block mb-1">설립 / 시작 및 전환</span>
              <span className="text-sm font-bold text-[#1A1A1A]">2002년 대성종합식품 / 2013년 법인 전환</span>
            </div>

            <div className="p-4 bg-white border border-[#EAE7E1]">
              <span className="text-[10px] text-[#6B665E] uppercase font-bold block mb-1">주요 사업 영역</span>
              <span className="text-sm font-bold text-[#1A1A1A]">전통 김치 제조, 자체 고춧가루 생산, B2B 식자재 유통, 해외 수출</span>
            </div>
          </div>

          {/* Core Strengths List */}
          <div className="p-5 bg-[#F2EDE4] border border-[#EAE7E1]">
            <h4 className="font-serif font-bold text-sm text-[#1A1A1A] mb-3">
              백가원의 4대 핵심 인프라 경쟁력
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#BA4A32]" />
                <span><strong>자체 영농:</strong> 원채 수급 직접 안정화</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#BA4A32]" />
                <span><strong>고춧가루 공장:</strong> HACCP 인증 세척/집진/분쇄</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#BA4A32]" />
                <span><strong>저온 보관시설:</strong> -1℃~2℃ 신선 정온 시스템</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#BA4A32]" />
                <span><strong>자체 유통망:</strong> 경기남부·충남·대전 직영 물류</span>
              </div>
            </div>
          </div>

          {/* Plant Address */}
          <div className="p-4 bg-white border border-[#EAE7E1] flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#BA4A32] shrink-0 mt-0.5" />
            <div>
              <strong className="text-sm text-[#1A1A1A] block">본사 및 생산공장 위치</strong>
              <p className="text-xs text-[#55524D]">{COMPANY_INFO.address}</p>
              <p className="text-[11px] text-[#6B665E] mt-1">대표전화: {COMPANY_INFO.phone} | 사업자등록번호: {COMPANY_INFO.bizNumber}</p>
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="mt-8 pt-4 border-t border-[#EAE7E1] flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => {
              onClose();
              onOpenB2B();
            }}
            className="px-6 py-3 bg-[#BA4A32] hover:bg-[#9E3E29] text-white text-xs font-bold uppercase tracking-wider transition-all"
          >
            사업자 납품 문의하기
          </button>

          <button
            onClick={onClose}
            className="px-6 py-3 bg-[#2D3E30] text-white text-xs font-bold uppercase tracking-wider"
          >
            닫기
          </button>
        </div>

      </div>
    </div>
  );
};
