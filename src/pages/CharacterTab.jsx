import React, { useState } from 'react';
import { ShieldIcon, BookOpenIcon, FileTextIcon, HeartIcon } from '../components/icons';
import QuickLink from '../components/QuickLink';
import StatsSection from './StatsSection';
import SkillsSection from './SkillsSection';
import ExpSection from './ExpSection';
import HpSection from './HpSection';
import { SwordIcon, ManualIcon, ChevronRightIcon } from '../components/icons';

function CharacterTab({ onShowNovicePage }) {
  const [subCategory, setSubCategory] = useState('stats');

  return (
    <div className="p-4 space-y-5 animate-in fade-in slide-in-from-left-2 duration-300">
      {/* 欢迎横幅 */}
      <div className="bg-gradient-to-br from-red-900 via-red-800 to-amber-900 rounded-lg p-5 text-[#f7f2e8] shadow-lg relative overflow-hidden border border-red-950">
        <div className="absolute -right-4 -bottom-4 opacity-10">
          <SwordIcon size={120} />
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjwvcmVjdD4KPHBhdGggZD0iTTAgMEw4IDhaTThgMExgOFoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+Cjwvc3ZnPg==')] opacity-30"></div>
        <h2 className="text-2xl font-bold mb-2 relative z-10 tracking-widest font-serif drop-shadow-md">大侠，欢迎归来！</h2>
        <p className="text-sm opacity-90 relative z-10 font-light italic">武林至尊，宝刀屠龙，号令天下，莫敢不从。</p>
      </div>

      {/* 快捷链接 */}
      <div className="grid grid-cols-4 gap-3 text-center bg-[#fffbf2] p-3 rounded-lg shadow-sm border border-[#e3d1b5]">
        <QuickLink icon={<ShieldIcon size={24} />} label="基础属性" isActive={subCategory === 'stats'} onClick={() => setSubCategory('stats')} />
        <QuickLink icon={<BookOpenIcon size={24} />} label="基础武学" isActive={subCategory === 'skills'} onClick={() => setSubCategory('skills')} />
        <QuickLink icon={<FileTextIcon size={24} />} label="江湖资历" isActive={subCategory === 'exp'} onClick={() => setSubCategory('exp')} />
        <QuickLink icon={<HeartIcon size={24} />} label="人物气血" isActive={subCategory === 'hp'} onClick={() => setSubCategory('hp')} />
      </div>

      {/* 初出茅庐入口 */}
      <div
        onClick={onShowNovicePage}
        className="mt-4 relative overflow-hidden rounded-xl shadow-md cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-orange-600 to-red-700"></div>
        <div className="absolute inset-[2px] bg-[#f7f2e8] rounded-[10px] flex items-center p-3">
          <div className="w-11 h-11 bg-gradient-to-br from-amber-600 to-red-800 rounded-full flex items-center justify-center text-white shadow-inner shrink-0 mr-3 border-2 border-amber-200">
            <ManualIcon size={20} />
          </div>
          <div className="flex-1">
            <h3 className="text-[17px] font-black text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-red-600 tracking-widest drop-shadow-sm font-serif">
              初出茅庐
            </h3>
            <p className="text-[11px] font-bold text-amber-800 mt-0.5">
              🔥 无脑跟着国柱走，基本属性全都有
            </p>
          </div>
          <div className="text-red-700 shrink-0 opacity-80 animate-pulse bg-red-100 rounded-full p-1 ml-1 border border-red-200">
            <ChevronRightIcon size={20} />
          </div>
        </div>
        <div className="p-3 w-11 h-11 box-content"></div>
      </div>

      {/* 子分类内容 */}
      <div className="pt-2">
        {subCategory === 'stats' && <StatsSection />}
        {subCategory === 'skills' && <SkillsSection />}
        {subCategory === 'exp' && <ExpSection />}
        {subCategory === 'hp' && <HpSection />}
      </div>
    </div>
  );
}

export default CharacterTab;
