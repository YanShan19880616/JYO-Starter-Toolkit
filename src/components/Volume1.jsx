import React from 'react';
import { BookOpenIcon, ChevronUpIcon, ChevronDownIcon } from '../icons';
import WuxiaStep from '../WuxiaStep';
import { VOLUME1_STEPS } from '../../data/attributes';

function Volume1({ isExpanded, onToggle }) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="w-full relative overflow-hidden rounded-sm shadow-sm cursor-pointer transition-all duration-300 group border border-amber-900/50"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-800 via-amber-700 to-amber-900"></div>
        <div className="absolute inset-[2px] border border-amber-400/30 rounded-sm"></div>
        <div className="relative z-10 flex items-center justify-between py-2.5 px-3">
          <div className="flex items-center">
            <div className="text-amber-200 mr-2 border border-amber-400/30 p-1 rounded-sm bg-amber-900/50 shadow-inner">
              <BookOpenIcon size={18} />
            </div>
            <div className="text-left flex flex-col">
              <span className="text-[15px] font-bold text-amber-50 tracking-widest font-serif drop-shadow-md">
                卷一 · 踏足江湖
              </span>
              <span className="text-[10px] text-amber-300/80 font-serif tracking-wide">账号建立与基础</span>
            </div>
          </div>
          <div className="text-amber-300">
            {isExpanded ? <ChevronUpIcon size={20} /> : <ChevronDownIcon size={20} />}
          </div>
        </div>
      </button>
      
      {isExpanded && (
        <div className="mt-4 px-2 py-1 animate-in fade-in duration-300">
          {VOLUME1_STEPS.map((step) => (
            <WuxiaStep key={step.index} index={step.index} title={step.title} imageSrc={step.imageSrc} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Volume1;
