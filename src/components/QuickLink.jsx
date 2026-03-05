import React from 'react';

function QuickLink({ icon, label, isActive, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center justify-center cursor-pointer transition-all duration-200 py-1 ${isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
    >
      <div className={`w-12 h-12 rounded-full shadow-sm border flex items-center justify-center mb-1.5 transition-colors ${isActive ? 'bg-red-900 text-[#f7f2e8] border-red-950' : 'bg-[#f4eadd] text-amber-900 border-[#d4be9a]'}`}>
        {icon}
      </div>
      <span className={`text-[11px] font-bold font-serif tracking-wider ${isActive ? 'text-red-900' : 'text-amber-900'}`}>{label}</span>
    </div>
  );
}

export default QuickLink;
