import React, { useState, useEffect } from 'react';
import { Search, Menu, X, Sparkles, Building2, ChevronRight, ChevronDown, ShoppingBag } from 'lucide-react';

interface NavbarProps {
  onOpenTasteFinder: () => void;
  onOpenB2BQuote: () => void;
  activeSection: string;
  onNavigateSection: (sectionId: string) => void;
  onOpenCompanyModal: () => void;
  onOpenNaverStoreModal: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenTasteFinder,
  onOpenB2BQuote,
  activeSection,
  onNavigateSection,
  onOpenCompanyModal,
  onOpenNaverStoreModal,
  searchQuery,
  setSearchQuery,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuStructure = [
    {
      id: 'brand-story',
      label: '백가원 소개',
      action: () => onNavigateSection('brand-story'),
      items: [
        { label: '회사개요 & 철학', action: onOpenCompanyModal },
        { label: '브랜드 비전', action: () => onNavigateSection('brand-story') },
        { label: '회사 연혁', action: () => onNavigateSection('history') },
        { label: '사회적 가치 및 나눔', action: () => onNavigateSection('social-value') }
      ]
    },
    {
      id: 'products',
      label: '제품소개',
      action: () => onNavigateSection('products'),
      items: [
        { label: '포기김치 / 겉절이', action: () => onNavigateSection('products') },
        { label: '총각김치 / 깍두기', action: () => onNavigateSection('products') },
        { label: '백김치 / 동치미', action: () => onNavigateSection('products') },
        { label: '다양한 별미 김치', action: () => onNavigateSection('products') }
      ]
    },
    {
      id: 'competencies',
      label: '백가원의 경쟁력',
      action: () => onNavigateSection('competencies'),
      items: [
        { label: '성장동력 & 주요강점', action: () => onNavigateSection('competencies') },
        { label: '자체 영농 & 고춧가루 공장', action: () => onNavigateSection('competencies') },
        { label: '국내 영업망', action: () => onNavigateSection('global-business') },
        { label: '해외사업', action: () => onNavigateSection('global-business') }
      ]
    },
    {
      id: 'craft-haccp',
      label: '생산환경',
      action: () => onNavigateSection('craft-haccp'),
      items: [
        { label: '공장 및 생산시설', action: () => onNavigateSection('craft-haccp') },
        { label: '업무환경 및 클린룸', action: () => onNavigateSection('craft-haccp') },
        { label: 'HACCP 품질관리', action: () => onNavigateSection('craft-haccp') }
      ]
    },
    {
      id: 'online-shop-cta',
      label: '온라인 구매',
      action: onOpenNaverStoreModal,
      items: [
        { label: '전체 제품 둘러보기', action: () => onNavigateSection('products') },
        { label: '네이버 공식 스토어 바로가기', action: onOpenNaverStoreModal }
      ]
    },
    {
      id: 'b2b-section',
      label: '고객지원 & 납품',
      action: () => onNavigateSection('b2b-section'),
      items: [
        { label: '사업 · 납품 문의 (3kg 샘플)', action: onOpenB2BQuote },
        { label: '자주 묻는 질문', action: () => onNavigateSection('b2b-section') },
        { label: '오시는 길', action: () => onNavigateSection('b2b-section') }
      ]
    }
  ];

  return (
    <header className="sticky top-0 z-50 transition-all duration-300 font-sans">
      {/* Top Banner Notice */}
      <div className="bg-[#2D3E30] text-[#E5DFD5] text-xs py-2 px-4 text-center flex items-center justify-center gap-2 border-b border-[#3B4E32]">
        <span className="inline-block w-2 h-2 rounded-full bg-[#BA4A32] animate-pulse"></span>
        <span className="font-medium text-[#E8E2D8]">2002년부터 이어온 정직한 한길 · 백년을 이어가는 전통식품 백가원</span>
        <span className="hidden md:inline text-neutral-400">|</span>
        <button 
          onClick={onOpenB2BQuote} 
          className="hidden md:inline-flex items-center text-[#FAF8F5] hover:text-[#BA4A32] font-medium transition-colors underline underline-offset-2 ml-1"
        >
          [사업자 전용] 식자재 납품 & 무료 3kg 샘플 신청 ➔
        </button>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`px-4 lg:px-8 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#FDFCF9]/95 backdrop-blur-md shadow-xs border-b border-[#EAE7E1] py-3.5' 
            : 'bg-[#FDFCF9] border-b border-[#EAE7E1] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Logo */}
          <button 
            onClick={() => onNavigateSection('hero')} 
            className="flex items-center gap-2.5 group text-left shrink-0"
          >
            <div className="w-10 h-10 rounded-full bg-[#2D3E30] flex items-center justify-center text-white font-serif text-xl font-bold shadow-xs transition-transform group-hover:scale-105">
              百
            </div>
            <div>
              <div className="font-serif text-2xl font-black text-[#1A1A1A] tracking-wider leading-none">
                백가원 <span className="text-[#BA4A32] text-sm font-normal border-l border-[#2D3E30]/30 pl-2 ml-1">百家院</span>
              </div>
              <div className="text-[9px] text-[#6B665E] tracking-[0.2em] font-serif uppercase mt-1">
                TRADITIONAL FOOD & HERITAGE
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6">
            {menuStructure.map((menu) => (
              <div
                key={menu.id}
                className="relative group py-2"
                onMouseEnter={() => setActiveDropdown(menu.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={menu.action}
                  className="text-xs font-bold uppercase tracking-wider text-[#2D2D2D] hover:text-[#BA4A32] transition-colors inline-flex items-center gap-1"
                >
                  <span>{menu.label}</span>
                  <ChevronDown className="w-3 h-3 opacity-60 group-hover:rotate-180 transition-transform" />
                </button>

                {/* Submenu Dropdown */}
                {activeDropdown === menu.id && (
                  <div className="absolute top-full left-0 w-52 bg-[#FDFCF9] border border-[#EAE7E1] shadow-lg p-2.5 space-y-1 z-50 animate-fade-in">
                    {menu.items.map((sub, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          sub.action();
                          setActiveDropdown(null);
                        }}
                        className="w-full text-left px-3 py-2 text-xs text-[#55524D] hover:bg-[#F2EDE4] hover:text-[#2D3E30] font-medium transition-colors flex items-center justify-between"
                      >
                        <span>{sub.label}</span>
                        <ChevronRight className="w-3 h-3 text-[#BA4A32] opacity-70" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Action Buttons & Search */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Search */}
            <div className="relative">
              {showSearchInput ? (
                <div className="flex items-center bg-[#F2EDE4] rounded-full px-3 py-1 border border-[#EAE7E1] animate-fade-in">
                  <Search className="w-3.5 h-3.5 text-[#6B665E] mr-1.5" />
                  <input
                    type="text"
                    placeholder="제품, HACCP, 연혁 검색..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent text-xs text-[#2D2D2D] focus:outline-none w-36"
                    autoFocus
                  />
                  <button 
                    onClick={() => { setShowSearchInput(false); setSearchQuery(''); }}
                    className="text-neutral-400 hover:text-neutral-600 text-xs ml-1"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowSearchInput(true)}
                  className="p-2 text-[#6B665E] hover:text-[#2D3E30] hover:bg-[#F2EDE4] rounded-full transition-colors"
                  title="검색"
                >
                  <Search className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Naver Store Button */}
            <button
              onClick={onOpenNaverStoreModal}
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-xs bg-[#03C75A] text-white hover:bg-[#02b150] transition-all shadow-2xs"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>네이버 스토어</span>
            </button>

            {/* B2B Quote Button */}
            <button
              onClick={onOpenB2BQuote}
              className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-xs bg-[#2D3E30] text-white hover:bg-[#212F24] transition-colors shadow-2xs"
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>사업 · 납품 문의</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenNaverStoreModal}
              className="text-xs font-bold px-2.5 py-1.5 rounded-xs bg-[#03C75A] text-white"
            >
              스토어
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#2D2D2D] rounded-md hover:bg-[#F2EDE4]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-[#EAE7E1] space-y-3 pb-2 animate-fade-in max-h-[75vh] overflow-y-auto">
            <div className="px-2 mb-2">
              <div className="flex items-center bg-[#F2EDE4] rounded-lg px-3 py-1.5 border border-[#EAE7E1]">
                <Search className="w-4 h-4 text-[#6B665E] mr-2" />
                <input
                  type="text"
                  placeholder="김치 종류, 소식, 연혁 검색..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent text-xs text-[#2D2D2D] focus:outline-none w-full"
                />
              </div>
            </div>

            {menuStructure.map((menu) => (
              <div key={menu.id} className="px-2">
                <button
                  onClick={() => {
                    menu.action();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left font-serif font-bold text-sm text-[#2D3E30] py-1.5 flex items-center justify-between border-b border-[#EAE7E1]"
                >
                  <span>{menu.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#BA4A32]" />
                </button>
                <div className="pl-3 pt-1.5 space-y-1">
                  {menu.items.map((sub, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        sub.action();
                        setMobileMenuOpen(false);
                      }}
                      className="w-full text-left text-xs text-[#6B665E] py-1 hover:text-[#BA4A32]"
                    >
                      • {sub.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <div className="pt-2 border-t border-[#EAE7E1] space-y-2 px-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenNaverStoreModal(); }}
                className="w-full text-center py-2.5 text-xs font-bold text-white bg-[#03C75A] rounded-xs flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>네이버 스토어 구매하기</span>
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenB2BQuote(); }}
                className="w-full text-center py-2.5 text-xs font-bold text-white bg-[#2D3E30] rounded-xs flex items-center justify-center gap-2"
              >
                <Building2 className="w-4 h-4" />
                <span>사업 · 납품 문의 및 무료 3kg 샘플</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
