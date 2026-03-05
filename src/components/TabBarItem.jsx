import React from 'react';

function TabBarItem({ icon, label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center w-full py-1.5 transition-colors duration-200 ${isActive ? 'text-red-900' : 'text-amber-900/60 hover:text-amber-900'}`}
    >
      <div className={`mb-1 transition-transform duration-200 ${isActive ? 'scale-110 drop-shadow-sm' : 'scale-100'}`}>
        {icon}
      </div>
      <span className="text-[12px] font-bold font-serif tracking-widest">{label}</span>
    </button>
  );
}

export default TabBarItem;
