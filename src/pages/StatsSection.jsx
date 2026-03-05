import React, { useState } from 'react';
import { ATTRIBUTES_DATA } from '../../data/attributes';
import { AlertIcon, StarIcon, ChevronUpIcon, ChevronDownIcon } from '../icons';

function StatsSection() {
  const [isWarningExpanded, setIsWarningExpanded] = useState(false);
  const [isWuxingExpanded, setIsWuxingExpanded] = useState(false);

  return (
    <div className="space-y-4 animate-in fade-in duration-300">
      
      {/* 新人避坑警告 */}
      <div
        className="bg-[#fcf5eb] border-l-4 border-red-800 p-3 rounded shadow-sm cursor-pointer hover:bg-[#faeedd] transition-colors duration-200 border-y border-r border-[#e8dcc7]"
        onClick={() => setIsWarningExpanded(!isWarningExpanded)}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-start">
            <AlertIcon className="text-red-800 mr-2 shrink-0 mt-0.5" size={18} />
            <div>
              <h4 className="text-sm font-bold text-red-900 mb-1 flex items-center font-serif">
                新人必看避坑警告！
                <span className="text-[10px] bg-red-900 text-white px-1.5 py-0.5 rounded ml-2 font-normal whitespace-nowrap font-sans">
                  {isWarningExpanded ? "收起详情" : "点击查看原理"}
                </span>
              </h4>
              {!isWarningExpanded && (
                <p className="text-xs text-red-800/80 leading-relaxed font-medium">
                  属性超过60点后，系统将<span className="font-bold underline text-red-800">不让通过基本技能加属性</span>了！<br/>
                  <span className="font-bold mt-1 inline-block text-red-900">结论：</span>吃丹药前，务必先练满 <span className="text-red-700 font-bold bg-red-100 px-1 rounded">[基内/搏击/闪躲]</span>。
                </p>
              )}
            </div>
          </div>
          <div className="text-red-800 mt-1 shrink-0 ml-2">
            {isWarningExpanded ? <ChevronUpIcon size={18} /> : <ChevronDownIcon size={18} />}
          </div>
        </div>

        {isWarningExpanded && (
          <div className="mt-3 pt-3 border-t border-red-200/60 text-xs animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="space-y-2.5 text-red-900 mb-4">
              <div className="flex items-start">
                <div className="bg-red-800 text-white rounded w-4 h-4 flex items-center justify-center shrink-0 mt-0.5 mr-2 text-[10px] font-bold">1</div>
                <p className="leading-relaxed">
                  <span className="font-bold">免费属性与限制：</span>在网金中，特定的基本功每升10级，就会"免费"赠送1点先天属性。但是官方设定了一个阈值：<span className="font-bold underline decoration-red-400 underline-offset-2">当单项属性达到或超过60点时，再升级基本功，系统就不再赠送那1点属性了。</span>
                </p>
              </div>
              <div className="flex items-start">
                <div className="bg-red-800 text-white rounded w-4 h-4 flex items-center justify-center shrink-0 mt-0.5 mr-2 text-[10px] font-bold">2</div>
                <p className="leading-relaxed">
                  <span className="font-bold">丹药的机制是"强行附加"：</span>游戏里有很多珍贵的丹药（如腊八粥、脱胎换骨丹）可以永久增加属性。这些丹药增加的属性是直接算在你的面板里的。
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 堆悟性终极指南 */}
      <div 
        className="bg-gradient-to-br from-[#fffdf5] to-[#f5ebd3] border border-[#d4be9a] p-3 rounded shadow-sm cursor-pointer hover:shadow-md transition-all duration-200 relative overflow-hidden"
        onClick={() => setIsWuxingExpanded(!isWuxingExpanded)}
      >
        <div className="absolute right-0 top-0 w-16 h-16 bg-amber-500/10 rounded-bl-full"></div>
        <div className="flex items-start justify-between relative z-10">
          <div className="flex items-start">
            <div className="bg-amber-800 text-amber-50 p-1 rounded-sm mr-2 shrink-0 mt-0.5 shadow-inner">
               <StarIcon size={16} />
            </div>
            <div>
              <p className="text-xs text-amber-900 leading-relaxed font-bold">
                新人上手，最应该堆哪个属性点：<br/>
                <span className="text-[15px] font-black text-red-700 tracking-widest inline-block mt-1 font-serif drop-shadow-sm">悟性！悟性！悟性！</span>
              </p>
              {!isWuxingExpanded && (
                <div className="mt-2 inline-block bg-amber-100 text-amber-900 text-[11px] px-2.5 py-1 rounded border border-amber-300 font-bold shadow-sm animate-pulse">
                  👉 翻阅《悟性速成三十至九十秘卷》
                </div>
              )}
            </div>
          </div>
          <div className="text-amber-800 mt-1 shrink-0 ml-2 bg-amber-200/50 p-1 rounded">
            {isWuxingExpanded ? <ChevronUpIcon size={16} /> : <ChevronDownIcon size={16} />}
          </div>
        </div>

        {isWuxingExpanded && (
          <div className="mt-3 pt-3 border-t border-amber-300/50 animate-in fade-in slide-in-from-top-2 duration-300 relative z-10">
           <p className="text-xs text-amber-800 text-center mb-3 font-serif">—— 请大侠参照下表，将悟性推至化境 ——</p>
           <div className="text-center text-xs text-amber-700 mt-2">（展开详情同上版本，篇幅所限折叠展示）</div>
          </div>
        )}
      </div>
      
      {/* 人物根骨剖析 */}
      <div>
        <div className="flex items-center mb-3">
          <div className="w-1.5 h-4 bg-red-900 rounded-sm mr-2"></div>
          <h3 className="text-lg font-bold text-amber-950 font-serif">人物根骨剖析</h3>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {ATTRIBUTES_DATA.panel4.map((attr, idx) => (
            <div key={idx} className="bg-[#fffdf8] border border-[#e8dcc7] p-3 rounded shadow-[1px_1px_0px_#e8dcc7] flex flex-col justify-center">
              <span className="font-bold text-red-900 text-sm mb-1 font-serif">{attr.name}</span>
              <span className="text-xs text-gray-600 leading-tight">{attr.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StatsSection;
