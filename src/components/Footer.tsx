import React from 'react';
import { PhoneCall, Mail, MapPin, Building2, ShieldCheck, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenB2BQuote: () => void;
  onOpenCompanyModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection, onOpenB2BQuote, onOpenCompanyModal }) => {
  return (
    <footer className="bg-[#1A231B] text-[#E8E2D8] font-sans border-t border-[#3B4E32] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#3B4E32]">
          
          {/* Col 1 & 2: Corporate Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#BA4A32] flex items-center justify-center text-white font-serif text-lg font-bold">
                百
              </div>
              <div className="font-serif text-2xl font-bold text-[#FDFCF9] tracking-wider">
                백가원 <span className="text-[#BA4A32] text-sm font-light">농업회사법인 양지원식품(주)</span>
              </div>
            </div>

            <p className="text-xs text-[#DED7CD] leading-relaxed font-light max-w-sm">
              2002년부터 이어온 정직한 한길. 원재료부터 생산과 유통까지 직접 관리하며 우리 식탁에 믿을 수 있는 전통의 맛을 전합니다.
            </p>

            <div className="pt-2 text-xs text-[#E8E2D8] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#BA4A32]" />
              <span>HACCP 인증 공장 및 자체 고춧가루 생산시설 보유</span>
            </div>
          </div>

          {/* Col 3: Recommended Navigation Bar Shortcuts */}
          <div>
            <h4 className="font-serif font-bold text-sm text-[#FDFCF9] mb-4">사이트 맵</h4>
            <ul className="space-y-2 text-xs text-[#DED7CD]">
              <li>
                <button onClick={onOpenCompanyModal} className="hover:text-white transition-colors">
                  백가원 소개 (회사개요 / 연혁)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('products')} className="hover:text-white transition-colors">
                  제품소개 (배추·무·물·별미김치)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('competencies')} className="hover:text-white transition-colors">
                  백가원의 경쟁력 (자체영농/유통망)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('craft-haccp')} className="hover:text-white transition-colors">
                  생산환경 (HACCP / 품질관리)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('global-business')} className="hover:text-white transition-colors">
                  국내외 사업 (영업망 / 수출)
                </button>
              </li>
              <li>
                <button onClick={onOpenB2BQuote} className="hover:text-[#BA4A32] transition-colors font-semibold">
                  사업·납품 문의
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4 & 5: Customer Service & Address */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif font-bold text-sm text-[#FDFCF9]">고객지원 & 납품 문의</h4>
            
            <div className="p-4 rounded-none bg-[#222E23] border border-[#3B4E32] space-y-2">
              <div className="flex items-center gap-2 text-[#FDFCF9] font-serif font-bold text-xl">
                <PhoneCall className="w-5 h-5 text-[#BA4A32]" />
                <span>{COMPANY_INFO.phone}</span>
              </div>
              <div className="text-[11px] text-[#DED7CD] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>평일 09:00 ~ 18:00 (점심시간 12:00 ~ 13:00 / 토·일·공휴일 휴무)</span>
              </div>
              <div className="text-[11px] text-[#BA4A32] font-medium pt-1">
                💬 사업자 3kg 무상 샘플 및 식자재 납품 24시간 상담 접수
              </div>
            </div>

            <div className="text-xs text-[#DED7CD] space-y-1">
              <div className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#BA4A32] shrink-0 mt-0.5" />
                <span>주소: {COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#BA4A32] shrink-0" />
                <span>E-mail: b2b@baekgawon.co.kr</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Registry & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-[#DED7CD]/70 gap-4">
          <div>
            <span><strong>{COMPANY_INFO.companyName}</strong> | 브랜드: {COMPANY_INFO.brandName} | 대표자: {COMPANY_INFO.ceo} | 개인정보보호책임자: {COMPANY_INFO.privacyOfficer}</span>
            <div className="mt-1 space-x-2">
              <span>사업자등록번호: {COMPANY_INFO.bizNumber}</span>
              <span>|</span>
              <span>통신판매업 신고번호: {COMPANY_INFO.eCommerceNumber}</span>
            </div>
            <div className="mt-2 text-[#E8E2D8] font-medium space-x-3">
              <button onClick={() => alert("백가원 서비스 이용약관\n\n1. 본 약관은 양지원식품(주) 백가원이 제공하는 제반 서비스 이용 조건을 규정합니다.")} className="underline hover:text-white">
                이용약관
              </button>
              <span>·</span>
              <button onClick={() => alert("개인정보처리방침\n\n1. 개인정보 수집 목적: 견적 및 납품 상담 처리\n2. 수집 항목: 성명, 연락처, 희망제품\n3. 보유 기간: 관련 법령에 따른 보존기간")} className="underline hover:text-white">
                개인정보처리방침
              </button>
            </div>
          </div>

          <div className="text-right">
            <span>© 백가원. All Rights Reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
