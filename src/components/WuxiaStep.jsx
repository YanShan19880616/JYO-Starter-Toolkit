import React from 'react';

// 武林秘籍专用组件：步骤条
function WuxiaStep({ index, title, imageSrc }) {
  const numerals = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖", "拾", "拾壹", "拾貳", "拾叄", "拾肆", "拾伍", "拾陸", "拾柒", "拾捌"];
  const numStr = numerals[index] || index;
  
  return (
    <div className="mb-5 relative pl-5 border-l-2 border-amber-700/30 ml-2">
      {/* 左侧的菱形连接点 */}
      <div className="absolute -left-[5px] top-1 w-2 h-2 rotate-45 bg-amber-600 border border-amber-900 shadow-sm"></div>
      
      {/* 标题栏 */}
      <div className="flex items-center mb-2">
        <div className="bg-gradient-to-b from-red-800 to-red-950 text-red-50 text-[11px] font-black px-1.5 py-0.5 rounded-sm border border-red-950 shadow-[1px_1px_0px_rgba(69,10,10,0.5)] mr-2 font-serif tracking-widest whitespace-nowrap">
          第{numStr}式
        </div>
        <h5 className="text-amber-950 font-bold text-sm flex-1 pb-0.5 border-b border-dashed border-amber-900/30" style={{fontFamily: 'serif'}}>
          {title}
        </h5>
      </div>

      {/* 图片容器 */}
      <div className="rounded-md overflow-hidden border-2 border-[#d4be9a] shadow-md bg-[#fffdf5] p-1">
        <img 
          src={"./" + imageSrc}
          alt={title} 
          className="w-full h-auto object-cover rounded-sm opacity-90 hover:opacity-100 transition-opacity"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/600x300/EAD8C3/78350F.png?text=图缺:+${imageSrc.split('/').pop()}`;
          }}
        />
      </div>
    </div>
  );
}

export default WuxiaStep;
