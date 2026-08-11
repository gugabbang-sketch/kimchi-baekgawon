import React, { useState } from 'react';
import { KimchiProduct } from '../types';
import { X, Check, Award, Flame, Sparkles, Building2, ShieldAlert } from 'lucide-react';

interface ProductDetailModalProps {
  product: KimchiProduct | null;
  onClose: () => void;
  onOpenB2BQuoteWithProduct: (productName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onOpenB2BQuoteWithProduct,
}) => {
  if (!product) return null;

  const [selectedWeight, setSelectedWeight] = useState(product.weightOptions[0] || '3kg');
  const [orderSuccessMsg, setOrderSuccessMsg] = useState(false);

  const handleOrderClick = () => {
    if (product.category === 'b2b') {
      onOpenB2BQuoteWithProduct(product.name);
      onClose();
    } else {
      setOrderSuccessMsg(true);
      setTimeout(() => setOrderSuccessMsg(false), 3500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in font-sans">
      <div 
        className="bg-[#FDFCF9] rounded-none max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[#EAE7E1] shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-xs transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Column: Image & Tasting Note Radar Gauges */}
          <div className="bg-[#2D3E30] p-6 flex flex-col justify-between text-white relative">
            <div className="relative h-64 rounded-none overflow-hidden mb-6 bg-[#222E23]">
              <img
                src={product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              {product.isBest && (
                <span className="absolute top-3 left-3 bg-[#BA4A32] text-white text-xs font-bold px-2.5 py-1 rounded-none">
                  BEST SELLER
                </span>
              )}
            </div>

            {/* Flavor Profile Gauges */}
            <div className="bg-[#222E23] p-4 rounded-none space-y-3 text-xs border border-white/10">
              <div className="font-serif font-bold text-[#E8E2D8] text-sm mb-1 border-b border-white/10 pb-1.5 flex items-center justify-between">
                <span>백가원 시그니처 테이스팅 노트</span>
                <Sparkles className="w-4 h-4 text-[#BA4A32]" />
              </div>

              {/* Spiciness */}
              <div>
                <div className="flex justify-between text-neutral-300 mb-1">
                  <span>매운맛 (Spiciness)</span>
                  <span className="text-[#BA4A32] font-bold">{product.spiciness} / 5</span>
                </div>
                <div className="w-full bg-neutral-700 h-2 rounded-none overflow-hidden">
                  <div 
                    className="bg-[#BA4A32] h-full rounded-none transition-all duration-500" 
                    style={{ width: `${(product.spiciness / 5) * 100}%` }}
                  />
                </div>
              </div>

              {/* Crunchiness */}
              <div>
                <div className="flex justify-between text-neutral-300 mb-1">
                  <span>아삭함 (Crunchiness)</span>
                  <span className="text-[#E8E2D8] font-bold">{product.crunchiness} / 5</span>
                </div>
                <div className="w-full bg-neutral-700 h-2 rounded-none overflow-hidden">
                  <div 
                    className="bg-[#2D3E30] h-full rounded-none transition-all duration-500 border-r border-white/20" 
                    style={{ width: `${(product.crunchiness / 5) * 100}%` }}
                  />
                </div>
              </div>

              {/* Umami */}
              <div>
                <div className="flex justify-between text-neutral-300 mb-1">
                  <span>감칠맛 (Umami)</span>
                  <span className="text-amber-300 font-bold">{product.umami} / 5</span>
                </div>
                <div className="w-full bg-neutral-700 h-2 rounded-none overflow-hidden">
                  <div 
                    className="bg-amber-600 h-full rounded-none transition-all duration-500" 
                    style={{ width: `${(product.umami / 5) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Product Details & Purchase Action */}
          <div className="p-6 md:p-8 flex flex-col justify-between bg-[#FDFCF9]">
            <div>
              <span className="text-xs font-serif font-bold text-[#BA4A32] tracking-wider uppercase block mb-1">
                {product.categoryLabel}
              </span>
              <h2 className="text-2xl font-serif font-bold text-[#1A1A1A] mb-1">
                {product.name}
              </h2>
              <div className="text-xs text-[#6B665E] italic mb-3 font-mono">
                {product.englishName}
              </div>

              <p className="text-xs text-[#55524D] leading-relaxed mb-6 font-light">
                {product.description}
              </p>

              {/* Awards if exists */}
              {product.awards && product.awards.length > 0 && (
                <div className="mb-6 p-3 rounded-none bg-[#F2EDE4] border border-[#EAE7E1] text-xs">
                  <div className="font-bold text-[#BA4A32] flex items-center gap-1.5 mb-1">
                    <Award className="w-4 h-4" />
                    <span>수상 및 품질 인증</span>
                  </div>
                  <div className="text-[#2D2D2D] flex flex-wrap gap-1">
                    {product.awards.map((award, i) => (
                      <span key={i} className="bg-white px-2 py-0.5 text-[11px] font-medium border border-[#EAE7E1]">
                        ✓ {award}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Ingredient List */}
              <div className="mb-6">
                <div className="text-xs font-bold text-[#1A1A1A] mb-2">100% 국산 원재료 정보</div>
                <div className="flex flex-wrap gap-1.5">
                  {product.ingredients.map((ing, idx) => (
                    <span key={idx} className="text-[11px] bg-[#F2EDE4] text-[#2D2D2D] px-2.5 py-1 rounded-none font-medium">
                      • {ing}
                    </span>
                  ))}
                </div>
              </div>

              {/* Weight Selector */}
              <div className="mb-6">
                <div className="text-xs font-bold text-[#1A1A1A] mb-2">용량 선택 (Weight Option)</div>
                <div className="flex flex-wrap gap-2">
                  {product.weightOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setSelectedWeight(opt)}
                      className={`px-3 py-1.5 text-xs font-medium border transition-all ${
                        selectedWeight === opt
                          ? 'bg-[#2D3E30] text-white border-[#2D3E30]'
                          : 'bg-white text-[#55524D] border-[#EAE7E1] hover:bg-[#F2EDE4]'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price & Guarantee */}
              <div className="p-4 rounded-none bg-[#F2EDE4]/60 border border-[#EAE7E1] mb-6 flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#6B665E] block">판매가 / B2B 샘플</span>
                  <span className="text-xl font-serif font-bold text-[#1A1A1A]">
                    {product.category === 'b2b' ? 'B2B 단가 별도 문의' : `${product.price.toLocaleString()}원`}
                  </span>
                </div>
                <div className="text-right text-[11px] text-[#BA4A32] font-medium">
                  {product.category === 'b2b' ? '사업자 샘플 무료지급' : '전국 정온 익일배송'}
                </div>
              </div>

              {orderSuccessMsg && (
                <div className="mb-4 p-3 bg-[#2D3E30]/10 border border-[#2D3E30]/30 text-[#2D3E30] rounded-none text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2D3E30]" />
                  <span>주문 및 견적 문의가 성공적으로 접수되었습니다. 담당자가 곧 연락드립니다.</span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleOrderClick}
                className="flex-1 py-3.5 px-4 rounded-xs bg-[#2D3E30] hover:bg-[#222E23] text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                {product.category === 'b2b' ? (
                  <>
                    <Building2 className="w-4 h-4" />
                    <span>B2B 견적 / 3kg 샘플 신청하기</span>
                  </>
                ) : (
                  <>
                    <Check className="w-4 h-4" />
                    <span>주문 / 샘플 주문하기 ({selectedWeight})</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
