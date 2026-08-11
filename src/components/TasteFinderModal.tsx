import React, { useState } from 'react';
import { KIMCHI_PRODUCTS } from '../data/mockData';
import { KimchiProduct } from '../types';
import { X, Sparkles, Check, ArrowRight, RefreshCw, Flame, Building2, Utensils } from 'lucide-react';

interface TasteFinderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: KimchiProduct) => void;
}

export const TasteFinderModal: React.FC<TasteFinderModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState(1);
  const [purpose, setPurpose] = useState<'home' | 'b2b'>('home');
  const [spiciness, setSpiciness] = useState<'mild' | 'medium' | 'spicy'>('medium');
  const [fermentation, setFermentation] = useState<'fresh' | 'medium' | 'aged'>('medium');

  const handleReset = () => {
    setStep(1);
    setPurpose('home');
    setSpiciness('medium');
    setFermentation('medium');
  };

  // Filter matching product
  const getRecommendedProducts = (): KimchiProduct[] => {
    return KIMCHI_PRODUCTS.filter((prod) => {
      if (purpose === 'b2b' && prod.category === 'b2b') return true;
      if (spiciness === 'mild' && prod.spiciness <= 2) return true;
      if (spiciness === 'spicy' && prod.spiciness >= 4) return true;
      if (spiciness === 'medium' && prod.spiciness === 3) return true;
      return false;
    }).slice(0, 3);
  };

  const recommendations = getRecommendedProducts();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in font-sans">
      <div 
        className="bg-[#FDFCF9] rounded-none max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#EAE7E1] shadow-2xl relative p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#F2EDE4] hover:bg-[#E8E2D8] text-[#2D2D2D] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-[#BA4A32]/10 text-[#BA4A32] text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BAEKGAWON KIMCHI TASTE FINDER</span>
          </div>
          <h2 className="text-2xl font-serif text-[#1A1A1A]">
            나에게 딱 맞는 김치 찾기
          </h2>
          <p className="text-xs text-[#6B665E] mt-1 font-light">
            취향과 용도에 따른 3가지 간단한 질문에 답하고 나만의 명품 김치를 추천받으세요.
          </p>
        </div>

        {/* Step Progress Bar */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`h-1.5 transition-all duration-300 ${
                s === step ? 'w-10 bg-[#2D3E30]' : s < step ? 'w-4 bg-[#2D3E30]/40' : 'w-4 bg-[#EAE7E1]'
              }`}
            />
          ))}
        </div>

        {/* STEP 1: Purpose */}
        {step === 1 && (
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-base font-serif font-bold text-[#1A1A1A] text-center mb-4">
              질문 1. 어떤 용도로 김치를 찾으시나요?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => { setPurpose('home'); setStep(2); }}
                className={`p-6 rounded-none border text-left transition-all hover:border-[#2D3E30] ${
                  purpose === 'home' ? 'bg-white border-[#2D3E30] shadow-xs' : 'bg-[#F2EDE4]/50 border-[#EAE7E1]'
                }`}
              >
                <Utensils className="w-8 h-8 text-[#2D3E30] mb-3" />
                <div className="font-serif font-bold text-base text-[#1A1A1A]">가정용 / 개인 구매</div>
                <div className="text-xs text-[#6B665E] mt-1">식탁용, 선물용, 혼밥족 및 가족을 위한 프리미엄 김치</div>
              </button>

              <button
                onClick={() => { setPurpose('b2b'); setStep(2); }}
                className={`p-6 rounded-none border text-left transition-all hover:border-[#2D3E30] ${
                  purpose === 'b2b' ? 'bg-white border-[#2D3E30] shadow-xs' : 'bg-[#F2EDE4]/50 border-[#EAE7E1]'
                }`}
              >
                <Building2 className="w-8 h-8 text-[#2D3E30] mb-3" />
                <div className="font-serif font-bold text-base text-[#1A1A1A]">B2B 외식업체 / 식자재용</div>
                <div className="text-xs text-[#6B665E] mt-1">한정식, 호텔, 급식, 대용량 벌크 10kg/20kg 대량 납품</div>
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Spiciness */}
        {step === 2 && (
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-base font-serif font-bold text-[#1A1A1A] text-center mb-4">
              질문 2. 선호하시는 매운맛의 강도는 어느 정도인가요?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <button
                onClick={() => { setSpiciness('mild'); setStep(3); }}
                className="p-5 rounded-none bg-white border border-[#EAE7E1] hover:border-[#2D3E30] text-center space-y-2"
              >
                <div className="text-2xl">🥬</div>
                <div className="font-serif font-bold text-sm text-[#1A1A1A]">순한맛 / 백김치</div>
                <div className="text-[11px] text-[#6B665E]">자극 없이 시원하고 맑은 맛</div>
              </button>

              <button
                onClick={() => { setSpiciness('medium'); setStep(3); }}
                className="p-5 rounded-none bg-white border border-[#EAE7E1] hover:border-[#2D3E30] text-center space-y-2"
              >
                <div className="text-2xl">🌶️</div>
                <div className="font-serif font-bold text-sm text-[#1A1A1A]">적당히 감칠맛 나는 매운맛</div>
                <div className="text-[11px] text-[#6B665E]">대중적으로 사랑받는 3단계 매운맛</div>
              </button>

              <button
                onClick={() => { setSpiciness('spicy'); setStep(3); }}
                className="p-5 rounded-none bg-white border border-[#EAE7E1] hover:border-[#2D3E30] text-center space-y-2"
              >
                <div className="text-2xl">🔥</div>
                <div className="font-serif font-bold text-sm text-[#1A1A1A]">알싸하고 매콤한 별미</div>
                <div className="text-[11px] text-[#6B665E]">여수 갓김치 & 쪽파김치의 알싸함</div>
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Fermentation */}
        {step === 3 && (
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-base font-serif font-bold text-[#1A1A1A] text-center mb-4">
              질문 3. 김치의 숙성 취향은 무엇인가요?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <button
                onClick={() => { setFermentation('fresh'); setStep(4); }}
                className="p-5 rounded-none bg-white border border-[#EAE7E1] hover:border-[#2D3E30] text-center space-y-2"
              >
                <div className="text-2xl">🌱</div>
                <div className="font-serif font-bold text-sm text-[#1A1A1A]">갓 담근 생김치 / 겉절이</div>
                <div className="text-[11px] text-[#6B665E]">아삭하고 신선한 배추 고유의 맛</div>
              </button>

              <button
                onClick={() => { setFermentation('medium'); setStep(4); }}
                className="p-5 rounded-none bg-white border border-[#EAE7E1] hover:border-[#2D3E30] text-center space-y-2"
              >
                <div className="text-2xl">✨</div>
                <div className="font-serif font-bold text-sm text-[#1A1A1A]">알맞게 익은 유산균 발효</div>
                <div className="text-[11px] text-[#6B665E]">깊은 시원함과 산도가 어우러진 맛</div>
              </button>

              <button
                onClick={() => { setFermentation('aged'); setStep(4); }}
                className="p-5 rounded-none bg-white border border-[#EAE7E1] hover:border-[#2D3E30] text-center space-y-2"
              >
                <div className="text-2xl">🏺</div>
                <div className="font-serif font-bold text-sm text-[#1A1A1A]">푹 익은 저온 옹기 찌개용</div>
                <div className="text-[11px] text-[#6B665E]">깊은 맛의 묵은지 & 숙성 김치</div>
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: Results */}
        {step === 4 && (
          <div className="space-y-6 animate-fade-in">
            <div className="p-4 rounded-none bg-[#2D3E30] text-white flex items-center justify-between text-xs">
              <div>
                <span className="text-[#BA4A32] font-bold block font-serif text-sm">맞춤 추천 결과</span>
                <span>{purpose === 'home' ? '가정용' : 'B2B용'} · {spiciness} 맵기 · {fermentation} 숙성 취향</span>
              </div>
              <button
                onClick={handleReset}
                className="flex items-center gap-1 text-[11px] text-[#E8E2D8] hover:text-white"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>다시하기</span>
              </button>
            </div>

            <div className="space-y-4">
              {recommendations.length === 0 ? (
                <div className="text-center py-8 text-xs text-[#6B665E]">
                  추천 김치를 탐색 중입니다. 백가원 대표 포기김치를 추천해 드립니다.
                </div>
              ) : (
                recommendations.map((prod) => (
                  <div
                    key={prod.id}
                    className="p-4 rounded-none bg-white border border-[#EAE7E1] flex items-center justify-between gap-4 shadow-2xs hover:border-[#2D3E30] transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        referrerPolicy="no-referrer"
                        className="w-16 h-16 rounded-none object-cover shrink-0"
                      />
                      <div>
                        <span className="text-[10px] font-bold text-[#BA4A32] uppercase">{prod.categoryLabel}</span>
                        <h4 className="font-serif font-bold text-sm text-[#1A1A1A]">{prod.name}</h4>
                        <p className="text-[11px] text-[#6B665E] line-clamp-1">{prod.tagline}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        onSelectProduct(prod);
                        onClose();
                      }}
                      className="px-4 py-2 rounded-xs bg-[#2D3E30] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#222E23] shrink-0"
                    >
                      상세보기
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
