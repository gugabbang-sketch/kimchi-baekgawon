import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { BrandPhilosophy } from './components/BrandPhilosophy';
import { ProductSection } from './components/ProductSection';
import { CompetenciesSection } from './components/CompetenciesSection';
import { CraftHaccpSection } from './components/CraftHaccpSection';
import { HistorySection } from './components/HistorySection';
import { BusinessGlobalSection } from './components/BusinessGlobalSection';
import { SocialValueSection } from './components/SocialValueSection';
import { PurchaseCalloutSection } from './components/PurchaseCalloutSection';
import { B2BSection } from './components/B2BSection';
import { BlogSection } from './components/BlogSection';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';

import { B2BInquiryModal } from './components/B2BInquiryModal';
import { TasteFinderModal } from './components/TasteFinderModal';
import { CompanyOverviewModal } from './components/CompanyOverviewModal';
import { NaverStoreModal } from './components/NaverStoreModal';

import { KimchiProduct } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Modals state
  const [isB2BModalOpen, setIsB2BModalOpen] = useState(false);
  const [b2bInitialProduct, setB2bInitialProduct] = useState('');
  const [isTasteFinderOpen, setIsTasteFinderOpen] = useState(false);
  const [isCompanyOverviewOpen, setIsCompanyOverviewOpen] = useState(false);
  const [isNaverStoreModalOpen, setIsNaverStoreModalOpen] = useState(false);

  const handleNavigateSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenB2BWithProduct = (productName: string) => {
    setB2bInitialProduct(productName);
    setIsB2BModalOpen(true);
  };

  const handleSelectProductFromTasteFinder = (product: KimchiProduct) => {
    handleNavigateSection('products');
  };

  return (
    <div className="min-h-screen bg-[#FDFCF9] text-[#2D2D2D] font-sans antialiased selection:bg-[#2D3E30] selection:text-white flex flex-col justify-between">
      <div>
        {/* Navigation Header */}
        <Navbar
          onOpenTasteFinder={() => setIsTasteFinderOpen(true)}
          onOpenB2BQuote={() => {
            setB2bInitialProduct('');
            setIsB2BModalOpen(true);
          }}
          activeSection={activeSection}
          onNavigateSection={handleNavigateSection}
          onOpenCompanyModal={() => setIsCompanyOverviewOpen(true)}
          onOpenNaverStoreModal={() => setIsNaverStoreModalOpen(true)}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Main Content Sections (In Exact User Requested 12-Section Order) */}
        <main>
          {/* Section 1: Main Visual (Hero Banner) */}
          <HeroBanner
            onOpenTasteFinder={() => setIsTasteFinderOpen(true)}
            onOpenB2BQuote={() => {
              setB2bInitialProduct('');
              setIsB2BModalOpen(true);
            }}
            onNavigateSection={handleNavigateSection}
          />

          {/* Section 2: Brand Intro & Vision (백가원의 비전과 약속) */}
          <BrandPhilosophy
            onOpenB2BQuote={() => {
              setB2bInitialProduct('');
              setIsB2BModalOpen(true);
            }}
          />

          {/* Section 3: Product Showcase (제품 소개: 배추, 무, 물, 별미 김치) */}
          <ProductSection
            onOpenB2BQuoteWithProduct={handleOpenB2BWithProduct}
            searchQuery={searchQuery}
          />

          {/* Section 4: 백가원의 경쟁력 (Competencies: 우리가 직접 하고 직접 만듭니다) */}
          <CompetenciesSection
            onOpenB2BQuote={() => {
              setB2bInitialProduct('');
              setIsB2BModalOpen(true);
            }}
          />

          {/* Section 5: 제조 및 품질관리 (Manufacturing & Quality - HACCP) */}
          <CraftHaccpSection />

          {/* Section 6: 브랜드 연혁 (Brand History - 정직한 한길 20년) */}
          <HistorySection />

          {/* Section 7: 국내외 사업 & 기업 신뢰 (Global Business & Trust) */}
          <BusinessGlobalSection />

          {/* Section 8: 사회적 가치 (Social Value & CSR - 나눔) */}
          <SocialValueSection />

          {/* Section 9: 최종 구매 유도 영역 (Online Purchase Callout) */}
          <PurchaseCalloutSection
            onNavigateProducts={() => handleNavigateSection('products')}
            onOpenNaverStoreModal={() => setIsNaverStoreModalOpen(true)}
          />

          {/* Section 10: 사업 및 납품 문의 (B2B Business Inquiry) */}
          <B2BSection
            onOpenB2BQuote={() => {
              setB2bInitialProduct('');
              setIsB2BModalOpen(true);
            }}
          />

          {/* Section 11: 김치 아카이브 및 고객 후기 (Supplemental Content) */}
          <BlogSection searchQuery={searchQuery} />
          <ReviewsSection />
        </main>
      </div>

      {/* Section 12: Footer (농업회사법인 양지원식품(주) 백가원 상세 정보) */}
      <Footer
        onNavigateSection={handleNavigateSection}
        onOpenB2BQuote={() => {
          setB2bInitialProduct('');
          setIsB2BModalOpen(true);
        }}
        onOpenCompanyModal={() => setIsCompanyOverviewOpen(true)}
      />

      {/* Global Modals */}
      <B2BInquiryModal
        isOpen={isB2BModalOpen}
        onClose={() => setIsB2BModalOpen(false)}
        initialProduct={b2bInitialProduct}
      />

      <TasteFinderModal
        isOpen={isTasteFinderOpen}
        onClose={() => setIsTasteFinderOpen(false)}
        onSelectProduct={handleSelectProductFromTasteFinder}
      />

      <CompanyOverviewModal
        isOpen={isCompanyOverviewOpen}
        onClose={() => setIsCompanyOverviewOpen(false)}
        onOpenB2B={() => {
          setB2bInitialProduct('');
          setIsB2BModalOpen(true);
        }}
      />

      <NaverStoreModal
        isOpen={isNaverStoreModalOpen}
        onClose={() => setIsNaverStoreModalOpen(false)}
        onNavigateProducts={() => handleNavigateSection('products')}
      />
    </div>
  );
}
