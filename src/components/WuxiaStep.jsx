import React, { useState, useRef, useEffect } from 'react';

// 武林秘籍专用组件：步骤条（带图片懒加载优化）
function WuxiaStep({ index, title, imageSrc }) {
  const numerals = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖", "拾", "拾壹", "拾貳", "拾叄", "拾肆", "拾伍", "拾陸", "拾柒", "拾捌"];
  const numStr = numerals[index] || index;
  
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  // Intersection Observer 实现懒加载
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        rootMargin: '100px', // 提前100px开始加载
        threshold: 0.1 
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative pl-5 border-l-2 border-amber-700/30 ml-2">
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
      <div 
        ref={imgRef}
        className="rounded-md overflow-hidden border-2 border-[#d4be9a] shadow-md bg-[#fffdf5] p-1"
      >
        {/* 加载占位符 - 骨架屏效果 */}
        {!isLoaded && (
          <div className="w-full h-48 bg-gradient-to-r from-[#f4eadd] via-[#e8dcc7] to-[#f4eadd] animate-pulse rounded-sm flex items-center justify-center">
            <div className="text-amber-600/50 font-serif text-sm tracking-widest">
              {isInView ? '画卷展开中...' : '📜'}
            </div>
          </div>
        )}
        
        {/* 图片 */}
        <img 
          src={isInView ? "./" + imageSrc : undefined}
          alt={title} 
          className={`w-full h-auto object-cover rounded-sm transition-all duration-500 ${isLoaded ? 'opacity-90 hover:opacity-100' : 'hidden'}`}
          onLoad={() => setIsLoaded(true)}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/600x300/EAD8C3/78350F.png?text=图缺:+${imageSrc.split('/').pop()}`;
            setIsLoaded(true);
          }}
        />
      </div>
    </div>
  );
}

export default WuxiaStep;
