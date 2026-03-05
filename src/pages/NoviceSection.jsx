import React, { useState } from 'react';
import { ChevronLeftIcon, LockIcon } from '../components/icons';
import { DAYS_DATA } from '../data/attributes';
import Volume1 from '../components/Volume1';
import Volume2 from '../components/Volume2';
import Volume3 from '../components/Volume3';
import Volume4 from '../components/Volume4';

function NoviceSection({ onBack }) {
  const [unlockedDay, setUnlockedDay] = useState(1);
  const [viewingDay, setViewingDay] = useState(1);
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (categoryName) => {
    setExpandedCategory(prev => prev === categoryName ? null : categoryName);
  };

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-300 bg-[#f4eadd] min-h-full pb-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23noise)\' opacity=\'0.05\'/%3E%3C/svg%3E")' }}>
      
      {/* 顶部悬浮返回条 (木牌质感) */}
      <div className="sticky top-0 z-20 bg-[#e8dcc7] border-b-2 border-[#c2aa80] p-3 flex items-center justify-between shadow-md">
        <div onClick={onBack} className="flex items-center cursor-pointer text-amber-950 hover:text-red-800 transition-colors">
          <ChevronLeftIcon size={22} className="mr-1" />
          <span className="font-bold text-[15px] font-serif">返回客栈</span>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            if(confirm('大侠，散功重修将失去当前所有进度，确定要重新来过吗？')) {
              setUnlockedDay(1);
              setViewingDay(1);
            }
          }}
          className="text-xs bg-gradient-to-b from-red-800 to-red-950 text-[#f7f2e8] px-3 py-1.5 rounded-sm border border-red-950 shadow-[1px_1px_0px_#450a0a] hover:translate-y-[1px] hover:shadow-none transition-all font-bold font-serif tracking-widest"
        >
          散功重修
        </button>
      </div>

      <div className="px-5 pt-8 pb-4 text-center relative">
        <h2 className="text-2xl font-black text-amber-950 tracking-widest drop-shadow-sm mb-1 font-serif border-b-2 border-double border-amber-900/30 pb-2 inline-block px-4">
          江湖历练 · 绝世秘卷
        </h2>
        <p className="text-xs text-amber-800/80 mt-2 font-medium">按部就班，五日登峰造极！</p>
      </div>

      <div className="p-4">
        <div className="relative pl-7 space-y-5">
          {/* 贯穿的垂直线 (竹简装订线) */}
          <div className="absolute left-[11px] top-4 bottom-6 w-1 bg-[#c2aa80] border-x border-[#8c744f]"></div>

          {DAYS_DATA.map((day) => {
            const isCompleted = day.id < unlockedDay;
            const isCurrent = day.id === unlockedDay;
            const isLocked = day.id > unlockedDay;
            const isViewing = day.id === viewingDay && (isCurrent || isCompleted);

            return (
              <div key={day.id} className="relative">
                {/* 节点大印章 */}
                <div className={`absolute -left-9 w-8 h-8 rounded-sm border-2 flex items-center justify-center shadow-md z-10 transition-colors duration-300 rotate-3 ${
                  isCompleted ? 'bg-[#f4eadd] border-emerald-700 text-emerald-700' :
                  isCurrent ? 'bg-red-900 border-red-950 text-red-100 ring-2 ring-red-900/30' :
                  'bg-[#e8dcc7] border-[#c2aa80] text-[#a38f6b]'
                }`}>
                  {isCompleted ? <span className="font-serif font-bold text-lg">成</span> :
                   isCurrent ? <span className="font-serif font-black text-lg">修</span> :
                   <LockIcon size={14} />}
                </div>

                <div 
                  onClick={() => { if (isCompleted || isCurrent) setViewingDay(day.id); }}
                  className={`rounded-sm p-4 transition-all duration-300 border-2 ${
                    isCompleted ? 'bg-[#fffdf8] border-[#c2aa80] shadow-[2px_2px_0px_#c2aa80] cursor-pointer' :
                    isCurrent ? 'bg-[#fffdf8] border-red-900 shadow-[3px_3px_0px_#7f1d1d] transform scale-[1.01] origin-left cursor-pointer' :
                    'bg-[#e8dcc7]/50 border-[#d4be9a] opacity-60 grayscale-[0.3]'
                  }`}>
                
                <div className="flex justify-between items-start mb-1">
                  <h4 className={`font-black text-base font-serif tracking-widest ${
                    isCompleted ? 'text-emerald-900' : isCurrent ? 'text-red-900' : 'text-amber-900/60'
                  }`}>
                    {day.title}
                  </h4>
                  {isCompleted && <span className="text-[10px] text-emerald-800 border border-emerald-800 px-1 rounded-sm font-bold font-serif rotate-[-5deg]">已勘破</span>}
                  {isCurrent && <span className="text-[10px] text-red-100 bg-red-900 px-1 rounded-sm font-bold font-serif animate-pulse">修炼中</span>}
                </div>

                <p className={`text-[12px] font-medium ${isViewing ? 'text-amber-900' : 'text-amber-700/70'}`}>
                  {day.teaser}
                  {(isCompleted || isCurrent) && !isViewing && (
                    <span className="text-red-700 ml-2 font-bold font-serif">点击翻阅 ▾</span>
                  )}
                </p>

                {/* 展开的秘籍详情区 */}
                {isViewing && (
                  <div className="mt-4 pt-4 border-t-2 border-dashed border-[#d4be9a] animate-in fade-in duration-500">
                    
                    {day.id === 1 && (
                      <div className="space-y-4">
                        <Volume1 
                          isExpanded={expandedCategory === 'account'} 
                          onToggle={() => toggleCategory('account')} 
                        />
                        <Volume2 
                          isExpanded={expandedCategory === 'money'} 
                          onToggle={() => toggleCategory('money')} 
                        />
                        <Volume3 
                          isExpanded={expandedCategory === 'yangzhou'} 
                          onToggle={() => toggleCategory('yangzhou')} 
                        />
                        <Volume4 
                          isExpanded={expandedCategory === 'afk'} 
                          onToggle={() => toggleCategory('afk')} 
                        />
                      </div>
                    )}

                    {day.id !== 1 && (
                       <div className="py-4 bg-[#fffdf8] border-2 border-dashed border-[#d4be9a] text-center rounded-sm">
                         <p className="text-sm text-amber-800 font-medium font-serif tracking-widest">
                           后续秘籍拼命中...
                         </p>
                       </div>
                    )}

                    {isCurrent && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (unlockedDay < DAYS_DATA.length) {
                            setUnlockedDay(unlockedDay + 1);
                            setViewingDay(unlockedDay + 1);
                          } else {
                            alert("恭喜大侠，神功大成，可出关矣！");
                          }
                        }}
                        className="w-full mt-5 py-3 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjwvcmVjdD4KPHBhdGggZD0iTTAgMEw4IDhaTThgMExgOFoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+Cjwvc3ZnPg==')] bg-red-900 text-[#f7f2e8] font-bold text-[15px] font-serif tracking-widest rounded-sm border-2 border-red-950 shadow-[2px_2px_0px_#450a0a] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#450a0a] active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-center"
                      >
                        {unlockedDay < DAYS_DATA.length ? "参透此卷，修炼下一日" : "神功大成，破关而出！"}
                      </button>
                    )}

                    {isCompleted && (
                      <div className="text-center text-sm text-emerald-800 font-bold mt-5 py-2 border-t border-b border-emerald-800/30 font-serif tracking-widest bg-emerald-50/50">
                        印：此卷已然勘破
                      </div>
                    )}
                  </div>
                )}

                {isLocked && (
                  <div className="mt-2.5 text-[10px] text-amber-900/40 flex items-center font-bold font-serif tracking-widest">
                    <LockIcon size={12} className="mr-1" /> 需前置心法方可解锁
                  </div>
                )}
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
}

export default NoviceSection;
