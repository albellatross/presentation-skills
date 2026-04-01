import React from 'react';
import { SectionTitleSlideProps } from './types';
import { SlideFooter } from './SlideFooter';
import './styles.css';

/**
 * SectionTitleSlide - Section divider with background image
 *
 * Layout:
 * - Full-bleed background image
 * - Team name (small caption, top)
 * - Large section title (below team name)
 * - Footer at bottom
 *
 * Figma Node: 1:208, 1:215, 1:222 (Title Page/Ending Page Section)
 */
export const SectionTitleSlide: React.FC<SectionTitleSlideProps> = ({
  teamName,
  title,
  backgroundImage,
  footer,
  className = '',
}) => {
  return (
    <div className={`mai-slide relative ${className}`}>
      {/* Background Image */}
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
      )}

      {/* Content */}
      <div
        className="absolute left-[64px] top-[43.75%] translate-y-[54px] w-[84%]"
        style={{
          color: '#fec',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        {teamName && (
          <p className="mai-caption-large">{teamName}</p>
        )}
        <h1 className="mai-header-large">{title}</h1>
      </div>

      {/* Footer */}
      <SlideFooter {...footer} variant="light" />
    </div>
  );
};
