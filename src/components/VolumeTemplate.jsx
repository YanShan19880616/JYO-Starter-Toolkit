import React from 'react';
import { BookOpenIcon, ChevronUpIcon, ChevronDownIcon } from './icons';
import WuxiaStep from './WuxiaStep';
import { VOLUME_COLORS } from '../data/attributes';

function VolumeTemplate({ 
  title, 
  subtitle, 
  color = "amber", 
  steps = [], 
  isExpanded, 
  onToggle 
}) {
  const colorConfig = VOLUME_COLORS[color] || VOLUME_COLORS.amber;

  return (
    <div>
      <button
        onClick={onToggle}
        className={`w-full relative overflow-hidden rounded-sm shadow-sm cursor-pointer transition-all duration-300 group ${colorConfig.border}`}
      >
        <div className={`absolute inset-0 bg-gradient-to-r ${colorConfig.gradient}`}></div>
        <div className={`absolute inset-[2px] border ${colorConfig.innerBorder} rounded-sm`}></div>
        <div className="relative z-10 flex items-center justify-between py-2.5 px-3">
          <div className="flex items-center">
            <div className={`${colorConfig.text} mr-2 border ${colorConfig.innerBorder} p-1 rounded-sm ${colorConfig.bg} shadow-inner`}>
              <BookOpenIcon size={18} />
            </div>
            <div className="text-left flex flex-col">
              <span className="text-[15px] font-bold text-amber-50 tracking-widest font-serif drop-shadow-md">
                {title}
              </span>
              <span className={`text-[10px] ${colorConfig.subtext} font-serif tracking-wide`}>{subtitle}</span>
            </div>
          </div>
          <div className={colorConfig.text}>
            {isExpanded ? <ChevronUpIcon size={20} /> : <ChevronDownIcon size={20} />}
          </div>
        </div>
      </button>
      
      {isExpanded && (
        <div className="mt-4 px-2 py-1 animate-in fade-in duration-300 space-y-3">
          {steps.map((step, idx) => (
            <VolumeStep key={idx} step={step} />
          ))}
        </div>
      )}
    </div>
  );
}

// 单个步骤卡片（文字版，无图片时使用）
function VolumeStep({ step }) {
  const numerals = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖", "拾"];
  const numStr = numerals[step.index] || step.index;

  return (
    <div className="mb-3 relative pl-4 border-l-2 border-amber-700/30 ml-2">
      {/* 左侧菱形连接点 */}
      <div className="absolute -left-[5px] top-1 w-2 h-2 rotate-45 bg-amber-600 border border-amber-900 shadow-sm"></div>
      
      {/* 标题栏 */}
      <div className="flex items-center mb-2">
        <div className="bg-gradient-to-b from-red-800 to-red-950 text-red-50 text-[11px] font-black px-1.5 py-0.5 rounded-sm border border-red-950 shadow-[1px_1px_0px_rgba(69,10,10,0.5)] mr-2 font-serif tracking-widest whitespace-nowrap">
          第{numStr}式
        </div>
        <h5 className="text-amber-950 font-bold text-sm flex-1 pb-0.5 border-b border-dashed border-amber-900/30 font-serif">
          {step.title}
        </h5>
      </div>

      {/* 内容卡片 */}
      <div className="rounded-md overflow-hidden border-2 border-[#d4be9a] shadow-md bg-[#fffdf5] p-3">
        <p className="text-amber-900 text-sm leading-relaxed font-medium">
          {step.content || step.imageSrc ? (
            step.content
          ) : (
            <span className="text-amber-600 italic">待补充详细内容...</span>
          )}
        </p>
      </div>
    </div>
  );
}

export default VolumeTemplate;
