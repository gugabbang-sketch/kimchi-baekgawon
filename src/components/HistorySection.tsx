import React, { useState } from 'react';
import { HISTORY_TIMELINE } from '../data/mockData';
import { Calendar, ArrowRight, History, Award, X } from 'lucide-react';

export const HistorySection: React.FC = () => {
  const [isFullHistoryOpen, setIsFullHistoryOpen] = useState(false);

  return (
    <section id="history" className="py-20 lg:py-28 bg-[#FDFCF9] border-b border-[#EAE7E1] font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-serif tracking-[0.3em] text-[#BA4A32] uppercase font-bold block mb-3">
            BRAND HISTORY & JOURNEY
          </span>
          <h2 className="text-3xl lg:text-4xl font-serif text-[#1A1A1A] mb-4 font-bold">
            정직한 한길, 20년이 넘는 시간
          </h2>
          <p className="text-sm md:text-base text-[#55524D] leading-relaxed font-light">
            2002년 대성종합식품에서 출발하여 백가원이 되기까지, 우리 식탁을 위해 고집스럽게 이어온 정직한 여정입니다.
          </p>
          <div className="w-12 h-[2px] bg-[#2D3E30] mx-auto mt-6" />
        </div>

        {/* Timeline Grid / Row */}
        <div className="relative border-l-2 border-[#2D3E30]/20 pl-6 lg:pl-10 ml-4 lg:ml-auto max-w-4xl mx-auto space-y-10 mb-12">
          {HISTORY_TIMELINE.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Point Node */}
              <div className="absolute -left-[31px] lg:-left-[47px] top-0 w-5 h-5 rounded-full bg-[#FDFCF9] border-4 border-[#2D3E30] group-hover:border-[#BA4A32] group-hover:scale-125 transition-all" />

              <div className="bg-white p-6 border border-[#EAE7E1] shadow-2xs hover:border-[#2D3E30] transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-serif font-black text-2xl text-[#BA4A32]">
                    {item.year}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2D3E30]" />
                  <h3 className="font-serif font-bold text-lg text-[#1A1A1A]">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs md:text-sm text-[#6B665E] font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={() => setIsFullHistoryOpen(true)}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xs bg-[#2D3E30] hover:bg-[#212F24] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-xs"
          >
            <History className="w-4 h-4" />
            <span>전체 연혁 상세 보기</span>
          </button>
        </div>

      </div>

      {/* Full History Modal */}
      {isFullHistoryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fade-in">
          <div className="bg-[#FDFCF9] text-[#1A1A1A] max-w-2xl w-full p-8 border border-[#EAE7E1] shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsFullHistoryOpen(false)}
              className="absolute top-4 right-4 p-2 text-[#6B665E] hover:text-[#1A1A1A]"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-serif text-[#BA4A32] font-bold tracking-widest block mb-1">
              COMPANY CHRONICLE & HISTORY
            </span>
            <h3 className="text-2xl font-serif font-bold mb-4">
              농업회사법인 양지원식품(주) 백가원 상세 연혁
            </h3>

            <div className="space-y-4 text-xs text-[#55524D] border-t border-[#EAE7E1] pt-4">
              {HISTORY_TIMELINE.map((item, idx) => (
                <div key={idx} className="p-3.5 bg-[#F2EDE4] border border-[#EAE7E1] flex items-start gap-4">
                  <span className="font-serif font-bold text-base text-[#BA4A32] shrink-0 w-16">
                    {item.year}년
                  </span>
                  <div>
                    <strong className="text-sm text-[#1A1A1A] block mb-0.5">{item.title}</strong>
                    <p className="text-xs text-[#6B665E] font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setIsFullHistoryOpen(false)}
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
