import React, { useState, useEffect } from 'react';
import { X, Building2, CheckCircle, Truck, Gift, Send, PhoneCall } from 'lucide-react';

interface B2BInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

export const B2BInquiryModal: React.FC<B2BInquiryModalProps> = ({
  isOpen,
  onClose,
  initialProduct = '',
}) => {
  if (!isOpen) return null;

  const [companyName, setCompanyName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [businessType, setBusinessType] = useState('한정식/외식업체');
  const [monthlyVolume, setMonthlyVolume] = useState('100kg~300kg');
  const [selectedProducts, setSelectedProducts] = useState<string[]>(
    initialProduct ? [initialProduct] : ['백가원 시그니처 포기김치(B2B)']
  );
  const [notes, setNotes] = useState('');
  const [sampleRequested, setSampleRequested] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialProduct && !selectedProducts.includes(initialProduct)) {
      setSelectedProducts(prev => [...prev, initialProduct]);
    }
  }, [initialProduct]);

  const productOptions = [
    '백가원 시그니처 포기김치(B2B)',
    '백가원 궁중 백김치(B2B)',
    '여수 돌산 갓김치',
    '아삭 총각김치(알타리)',
    '알싸한 쪽파김치',
    '당일발송 겉절이',
    '맞춤형 B2B 전용 라인업 상담'
  ];

  const toggleProduct = (prod: string) => {
    if (selectedProducts.includes(prod)) {
      setSelectedProducts(selectedProducts.filter(p => p !== prod));
    } else {
      setSelectedProducts([...selectedProducts, prod]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName || !contactPerson || !phone) {
      alert('업체명, 담당자 성함, 연락처는 필수 입력 항목입니다.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in font-sans">
      <div 
        className="bg-[#FDFCF9] rounded-none max-w-2xl w-full max-h-[92vh] overflow-y-auto border border-[#EAE7E1] shadow-2xl relative p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#F2EDE4] hover:bg-[#E8E2D8] text-[#2D2D2D] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-12 px-4 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#2D3E30]/10 text-[#2D3E30] flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="font-serif font-bold text-2xl text-[#1A1A1A]">
              B2B 견적 및 샘플 신청이 완료되었습니다!
            </h3>
            <p className="text-xs md:text-sm text-[#55524D] max-w-md mx-auto leading-relaxed">
              백가원 B2B 전담 유통팀에서 신청 내용을 확인 후 <strong>24시간 이내에</strong> 맞춤 단가표 및 무료 샘플 배송 안내전화를 드립니다.
            </p>
            <div className="p-4 rounded-none bg-[#F2EDE4] border border-[#EAE7E1] text-xs text-[#1A1A1A] font-medium max-w-sm mx-auto">
              📞 직통 고객센터: 1588-3920 (월~금 09:00~18:00)
            </div>
            <button
              onClick={onClose}
              className="mt-6 px-8 py-3 rounded-xs bg-[#2D3E30] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#222E23]"
            >
              확인 및 닫기
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-[#BA4A32]/10 text-[#BA4A32] text-xs font-bold mb-2">
                <Building2 className="w-3.5 h-3.5" />
                <span>기업 및 외식업체 B2B 유통/샘플 신청</span>
              </div>
              <h2 className="text-2xl font-serif text-[#1A1A1A]">
                백가원 B2B 맞춤 견적 & 무상 샘플
              </h2>
              <p className="text-xs text-[#6B665E] mt-1 font-light">
                외식업체, 프랜차이즈, 호텔, 급식용 김치 공급 단가 및 3kg 테스트 샘플을 무료 배송해 드립니다.
              </p>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              
              {/* Row 1: Company & Contact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1A1A1A] mb-1">
                    상호명 / 업체명 <span className="text-[#BA4A32]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="예: 수라선 한정식 (강남점)"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#EAE7E1] text-xs focus:outline-none focus:border-[#2D3E30]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1A1A1A] mb-1">
                    담당자 성함 <span className="text-[#BA4A32]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="예: 홍길동 대표 / 셰프"
                    value={contactPerson}
                    onChange={(e) => setContactPerson(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#EAE7E1] text-xs focus:outline-none focus:border-[#2D3E30]"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1A1A1A] mb-1">
                    연락처 (휴대폰) <span className="text-[#BA4A32]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="010-0000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#EAE7E1] text-xs focus:outline-none focus:border-[#2D3E30]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1A1A1A] mb-1">
                    이메일 주소 (견적서 수신)
                  </label>
                  <input
                    type="email"
                    placeholder="business@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#EAE7E1] text-xs focus:outline-none focus:border-[#2D3E30]"
                  />
                </div>
              </div>

              {/* Row 3: Business Type & Expected Volume */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1A1A1A] mb-1">업태 분류</label>
                  <select
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#EAE7E1] text-xs focus:outline-none focus:border-[#2D3E30]"
                  >
                    <option value="한정식/외식업체">한정식 / 일식 / 중식 외식업체</option>
                    <option value="프랜차이즈본사">프랜차이즈 가맹 본사</option>
                    <option value="호텔/뷔페/연회장">호텔 / 뷔페 / 컨벤션</option>
                    <option value="급식/위탁급식">학교 / 기업체 위탁급식</option>
                    <option value="식자재유통/도매">식자재 유통 및 도매상</option>
                    <option value="해외수출/OEM">해외 수출 및 OEM/ODM</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1A1A1A] mb-1">월 예상 소비량</label>
                  <select
                    value={monthlyVolume}
                    onChange={(e) => setMonthlyVolume(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#EAE7E1] text-xs focus:outline-none focus:border-[#2D3E30]"
                  >
                    <option value="100kg 미만">100kg 미만 (소규모/시범)</option>
                    <option value="100kg~300kg">100kg ~ 300kg (중소형 매장)</option>
                    <option value="300kg~1톤">300kg ~ 1톤 (대형 매장/급식)</option>
                    <option value="1톤 이상">1톤 이상 (프랜차이즈/대량유통)</option>
                  </select>
                </div>
              </div>

              {/* Target Products Selector */}
              <div>
                <label className="block text-xs font-bold text-[#1A1A1A] mb-1.5">
                  관심 품목 선택 (다중 선택 가능)
                </label>
                <div className="flex flex-wrap gap-2">
                  {productOptions.map((item) => {
                    const isSelected = selectedProducts.includes(item);
                    return (
                      <button
                        type="button"
                        key={item}
                        onClick={() => toggleProduct(item)}
                        className={`px-3 py-1.5 text-xs font-medium border transition-all ${
                          isSelected
                            ? 'bg-[#2D3E30] text-white border-[#2D3E30]'
                            : 'bg-white text-[#55524D] border-[#EAE7E1] hover:bg-[#F2EDE4]'
                        }`}
                      >
                        {isSelected ? '✓ ' : '+ '}{item}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Sample Checkbox Option */}
              <div className="p-4 rounded-none bg-[#F2EDE4] border border-[#EAE7E1] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Gift className="w-5 h-5 text-[#BA4A32]" />
                  <div>
                    <div className="text-xs font-bold text-[#1A1A1A]">무료 3kg 테스트 샘플 신청</div>
                    <div className="text-[11px] text-[#6B665E]">사업자등록증 확인 후 매장 주소로 정온 배송해 드립니다.</div>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={sampleRequested}
                  onChange={(e) => setSampleRequested(e.target.checked)}
                  className="w-4 h-4 accent-[#BA4A32]"
                />
              </div>

              {/* Extra Notes */}
              <div>
                <label className="block text-xs font-bold text-[#1A1A1A] mb-1">기타 요청사항 (선택)</label>
                <textarea
                  rows={2}
                  placeholder="선호하는 맵기, 염도, 배송 희망 요일 등을 자유롭게 입력하세요."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 bg-white border border-[#EAE7E1] text-xs focus:outline-none focus:border-[#2D3E30]"
                />
              </div>

            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 rounded-xs bg-[#BA4A32] hover:bg-[#a33e28] text-white font-serif font-bold text-xs uppercase tracking-wider transition-all shadow-xs flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? '신청서 전송 중...' : 'B2B 맞춤 견적 & 무료 샘플 신청하기'}</span>
            </button>

          </form>
        )}
      </div>
    </div>
  );
};
