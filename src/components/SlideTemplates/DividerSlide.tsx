import React from 'react';
import { DividerSlideProps } from './types';
import { SlideFooter } from './SlideFooter';
import './styles.css';

/**
 * DividerSlide - Simple text divider slide
 *
 * Layout:
 * - Solid background color (yellow/cream)
 * - Large centered title (vertically centered, left-aligned)
 * - Footer at bottom
 *
 * Figma Node: 1:236 (Title Page/Ending Page Section)
 */
export const DividerSlide: React.FC<DividerSlideProps> = ({
  title,
  footer,
  backgroundColor = '#fec',
  className = '',
}) => {
  return (
    <div
      className={`mai-slide ${className}`}
      style={{
        backgroundColor,
        color: '#5f4e41',
      }}
    >
      {/* Title */}
      <p
        className="mai-header absolute left-[64px] top-1/2 -translate-y-1/2"
        style={{ width: '84%' }}
      >
        {title}
      </p>

      {/* Footer */}
      <SlideFooter {...footer} variant="dark" />
    </div>
  );
};
