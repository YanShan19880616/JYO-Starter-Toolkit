import React from 'react';
import VolumeTemplate from './VolumeTemplate';

// 通用日期内容组件
function DayContent({ volumes = [], expandedCategory, onToggle }) {
  return (
    <div className="space-y-4">
      {volumes.map((volume, idx) => (
        <VolumeTemplate
          key={idx}
          title={volume.title}
          subtitle={volume.subtitle}
          color={volume.color}
          steps={volume.steps}
          isExpanded={expandedCategory === `volume${idx + 1}`}
          onToggle={() => onToggle(`volume${idx + 1}`)}
        />
      ))}
    </div>
  );
}

export default DayContent;
