import React from 'react';
import { BookOpenIcon, ChevronUpIcon, ChevronDownIcon } from './icons';
import WuxiaStep from './WuxiaStep';
import { VOLUME2_STEPS } from '../data/attributes';

function Volume2({ isExpanded, onToggle }) {
  return (
    <div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggle();
        }}
        className="w-full relative overflow-hidden rounded-sm shadow-sm cursor-pointer transition-all duration-300 group border border-red-950"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-800 to-red-950"></div>
        <div className="absolute inset-[2px] border border-red-400/30 rounded-sm"></div>
        <div className="relative z-10 flex items-center justify-between py-2.5 px-3">
          <div className="flex items-center">
            <div className="text-red-200 mr-2 border border-red-400/30 p-1 rounded-sm bg-red-950/50 shadow-inner">
              <BookOpenIcon size={18} />
            </div>
            <div className="text-left flex flex-col">
              <span className="text-[15px] font-bold text-red-50 tracking-widest font-serif drop-shadow-md">
                卷二 · 盘缠行囊
              </span>
              <span className="text-[10px] text-red-300/80 font-serif tracking-wide">金庸币与必备工具</span>
            </div>
          </div>
          <div className="text-red-300">
            {isExpanded ? <ChevronUpIcon size={20} /> : <ChevronDownIcon size={20} />}
          </div>
        </div>
      </button>

      {isExpanded && (
        <div className="mt-4 px-2 pb-2 space-y-6 animate-in fade-in duration-300">
          {VOLUME2_STEPS.map((step) => (
            <WuxiaStep key={step.index} index={step.index} title={step.title} imageSrc={step.imageSrc} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Volume2;
