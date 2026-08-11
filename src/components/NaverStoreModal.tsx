import React from 'react';
import { ShoppingBag, ExternalLink, X, ShieldCheck, ArrowRight } from 'lucide-react';

interface NaverStoreModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateProducts: () => void;
}

export const NaverStoreModal: React.FC<NaverStoreModalProps> = ({
  isOpen,
  onClose,
  onNavigateProducts,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fade-in font-sans">
      <div className="bg-[#FDFCF9] text-[#1A1A1A] max-w-lg w-full p-8 border border-[#EAE7E1] shadow-2xl relative text-center">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#6B665E] hover:text-[#1A1A1A]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-14 h-14 rounded-full bg-[#03C75A] text-white flex items-center justify-center mx-auto mb-4 shadow-sm">
          <ShoppingBag className="w-7 h-7" />
        </div>

        <span className="text-xs font-serif text-[#03C75A] font-bold tracking-widest uppercase block mb-1">
          BAEKGAWON NAVER SMARTSTORE
        </span>

        <h3 className="text-2xl font-serif font-bold text-[#1A1A1A] mb-3">
          백가원 네이버 공식 스토어
        </h3>

        <p className="text-xs text-[#55524D] leading-relaxed font-light mb-6">
          백가원의 포기김치, 겉절이, 총각김치, 동치미 등 소량 가정용 및 온라인 구매는 네이버 스마트스토어에서 가장 신선하고 빠르게 주문하실 수 있습니다.
        </p>

        <div className="p-4 bg-[#F2EDE4] border border-[#EAE7E1] text-xs text-[#55524D] text-left space-y-2 mb-6">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#03C75A] shrink-0" />
            <span>네이버 페이 안전결제 및 혜택 제공</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#03C75A] shrink-0" />
            <span>0℃~4℃ 저온 아이스박스 당일 직송</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#03C75A] shrink-0" />
            <span>구매후기 및 톡톡 문의 지원</span>
          </div>
        </div>

        <div className="space-y-3">
          <a
            href="https://smartstore.naver.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full py-3.5 px-6 rounded-xs bg-[#03C75A] hover:bg-[#02b150] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
          >
            <span>네이버 공식 스토어 이동하기</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <button
            onClick={() => {
              onClose();
              onNavigateProducts();
            }}
            className="w-full py-3 px-6 rounded-xs bg-[#2D3E30] text-white font-bold text-xs uppercase tracking-wider transition-all"
          >
            홈페이지에서 전체 라인업 먼저 둘러보기
          </button>
        </div>

      </div>
    </div>
  );
};
