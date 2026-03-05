import React, { useState } from 'react';
import { UserIcon, BookIcon, SwordIcon, ZapIcon, InfoIcon } from './components/icons';
import TabBarItem from './components/TabBarItem';
import PlaceholderTab from './components/PlaceholderTab';
import CharacterTab from './pages/CharacterTab';
import NoviceSection from './pages/NoviceSection';

function App() {
  const [activeTab, setActiveTab] = useState('character');
  const [showNovicePage, setShowNovicePage] = useState(false);

  // 如果显示新手页面，直接返回NoviceSection
  if (showNovicePage) {
    return <NoviceSection onBack={() => setShowNovicePage(false)} />;
  }

  return (
    <div className="flex justify-center bg-gray-900 min-h-screen font-sans">
      <div className="w-full max-w-md bg-[#f7f2e8] min-h-screen relative flex flex-col shadow-2xl overflow-hidden text-gray-800">
        
        {/* 顶部导航栏 */}
        <div className="bg-red-900 text-[#f7f2e8] py-4 px-4 text-center shadow-[0_2px_4px_rgba(0,0,0,0.3)] z-10 sticky top-0 flex justify-between items-center border-b border-amber-600/30">
          <div className="w-6"></div>
          <h1 className="text-xl font-bold tracking-widest font-serif">
            {activeTab === 'character' && "人物主页"}
            {activeTab === 'skills' && "武功秘籍"}
            {activeTab === 'weapons' && "神兵利器"}
            {activeTab === 'cheats' && "外挂辅助"}
          </h1>
          <div className="w-6"><InfoIcon size={20} className="opacity-80" /></div>
        </div>

        {/* 主要内容区域 */}
        <div className="flex-1 overflow-y-auto pb-20">
          {activeTab === 'character' && <CharacterTab onShowNovicePage={() => setShowNovicePage(true)} />}
          {activeTab === 'skills' && <PlaceholderTab title="武功秘籍" desc="门派武功树、绝学条件、消点计算器等功能，等待数据导入..." />}
          {activeTab === 'weapons' && <PlaceholderTab title="神兵利器" desc="武器图鉴、打造材料、耐久度说明等功能，等待数据导入..." />}
          {activeTab === 'cheats' && <PlaceholderTab title="外挂辅助" desc="挂机脱机辅助说明、跑图坐标大全、自动运镖设置等内容..." />}
        </div>

        {/* 底部导航栏 */}
        <div className="bg-[#ebdabe] border-t border-[#d4be9a] flex justify-around py-2 absolute bottom-0 w-full z-10 pb-safe shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
          <TabBarItem icon={<UserIcon size={22} />} label="人物" isActive={activeTab === 'character'} onClick={() => setActiveTab('character')} />
          <TabBarItem icon={<BookIcon size={22} />} label="武功" isActive={activeTab === 'skills'} onClick={() => setActiveTab('skills')} />
          <TabBarItem icon={<SwordIcon size={22} />} label="武器" isActive={activeTab === 'weapons'} onClick={() => setActiveTab('weapons')} />
          <TabBarItem icon={<ZapIcon size={22} />} label="外挂" isActive={activeTab === 'cheats'} onClick={() => setActiveTab('cheats')} />
        </div>
      </div>
    </div>
  );
}

export default App;
