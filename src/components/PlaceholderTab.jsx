import React from 'react';
import { InfoIcon } from './icons';

function PlaceholderTab({ title, desc }) {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 text-center mt-20">
      <div className="w-16 h-16 bg-[#e8dcc7] rounded-full flex items-center justify-center text-amber-900 mb-4 shadow-inner border border-[#d4be9a]">
        <InfoIcon size={32} />
      </div>
      <h2 className="text-xl font-bold text-amber-950 mb-2 font-serif">{title}：修缮中</h2>
      <p className="text-sm text-amber-800/70 leading-relaxed max-w-xs">{desc}</p>
    </div>
  );
}

export default PlaceholderTab;
