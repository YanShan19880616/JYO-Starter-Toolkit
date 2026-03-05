import React from 'react';
import { BookOpenIcon, ChevronUpIcon, ChevronDownIcon } from '../icons';
import WuxiaStep from '../WuxiaStep';
import { VOLUME3_STEPS } from '../../data/attributes';

function Volume3({ isExpanded, onToggle }) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="w-full relative overflow-hidden rounded-sm shadow-sm cursor-pointer transition-all duration-300 group border border-purple-950"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-950"></div>
        <div className="absolute inset-[2px] border border-purple-400/30 rounded-sm"></div>
        <div className="relative z-10 flex items-center justify-between py-2.5 px-3">
          <div className="flex items-center">
            <div className="text-purple-200 mr-2 border border-purple-400/30 p-1 rounded-sm bg-purple-950/50 shadow-inner">
              <BookOpenIcon size={18} />
            </div>
            <div className="text-left flex flex-col">
              <span className="text-[15px] font-bold text-purple-50 tracking-widest font-serif drop-shadow-md">
                卷三 · 扬州拜师
              </span>
              <span className="text-[10px] text-purple-300/80 font-serif tracking-wide">初窥门径习双龙</span>
            </div>
          </div>
          <div className="text-purple-300">
            {isExpanded ? <ChevronUpIcon size={20} /> : <ChevronDownIcon size={20} />}
          </div>
        </div>
      </button>
      
      {isExpanded && (
        <div className="mt-4 px-2 py-1 animate-in fade-in duration-300">
          {VOLUME3_STEPS.map((step) => (
            <WuxiaStep key={step.index} index={step.index} title={step.title} imageSrc={step.imageSrc} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Volume3;
