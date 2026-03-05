import React from 'react';
import { BookOpenIcon, ChevronUpIcon, ChevronDownIcon, InfoIcon } from '../icons';
import WuxiaStep from '../WuxiaStep';
import { VOLUME4_STEPS } from '../../data/attributes';

function Volume4({ isExpanded, onToggle }) {
  // 分割步骤：前8步和后10步（中间插入提示）
  const firstPart = VOLUME4_STEPS.slice(0, 8);
  const secondPart = VOLUME4_STEPS.slice(8);

  return (
    <div>
      <button
        onClick={onToggle}
        className="w-full relative overflow-hidden rounded-sm shadow-sm cursor-pointer transition-all duration-300 group border border-emerald-950"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950"></div>
        <div className="absolute inset-[2px] border border-emerald-400/30 rounded-sm"></div>
        <div className="relative z-10 flex items-center justify-between py-2.5 px-3">
          <div className="flex items-center">
            <div className="text-emerald-200 mr-2 border border-emerald-400/30 p-1 rounded-sm bg-emerald-950/50 shadow-inner">
              <BookOpenIcon size={18} />
            </div>
            <div className="text-left flex flex-col">
              <span className="text-[15px] font-bold text-emerald-50 tracking-widest font-serif drop-shadow-md">
                卷四 · 闭关苦修
              </span>
              <span className="text-[10px] text-emerald-300/80 font-serif tracking-wide">自动挂机与打点</span>
            </div>
          </div>
          <div className="text-emerald-300">
            {isExpanded ? <ChevronUpIcon size={20} /> : <ChevronDownIcon size={20} />}
          </div>
        </div>
      </button>
      
      {isExpanded && (
        <div className="mt-4 px-2 py-1 animate-in fade-in duration-300">
          {/* 第一部分步骤 */}
          {firstPart.map((step) => (
            <WuxiaStep key={step.index} index={step.index} title={step.title} imageSrc={step.imageSrc} />
          ))}
          
          {/* 提示：物品购买渠道 */}
          <div className="my-4 mx-1 p-3 bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-600 rounded-r shadow-sm">
            <div className="flex items-start">
              <div className="text-amber-600 mr-2 mt-0.5">
                <InfoIcon size={16} />
              </div>
              <div>
                <p className="text-sm text-amber-800 font-medium leading-relaxed">
                  <span className="font-bold text-amber-900">💡 温馨提示：</span>
                  以下物品可从<span className="text-amber-900 font-bold">其他玩家(商人)</span>处购买，请自行对比价格，择优而入。
                </p>
              </div>
            </div>
          </div>
          
          {/* 第二部分步骤 */}
          {secondPart.map((step) => (
            <WuxiaStep key={step.index} index={step.index} title={step.title} imageSrc={step.imageSrc} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Volume4;
