import React from 'react';
import { CoverSlideProps } from './types';
import { SlideFooter } from './SlideFooter';
import './styles.css';

/**
 * CoverSlide - Full-screen cover page with background image
 *
 * Layout:
 * - Full-bleed background image with optional overlay
 * - Logo in top-left corner
 * - Large title text (left-aligned, vertically centered)
 * - Footer at bottom
 *
 * Figma Node: 1:101 (Cover Page Section)
 */
export const CoverSlide: React.FC<CoverSlideProps> = ({
  title,
  backgroundImage,
  logoSrc,
  footer,
  variant = 'image',
  backgroundColor,
  className = '',
}) => {
  const titleLines = Array.isArray(title) ? title : [title];

  return (
    <div
      className={`mai-slide relative ${className}`}
      style={{
        backgroundColor: variant === 'solid' ? (backgroundColor || '#fef9ed') : undefined,
      }}
    >
      {/* Background Image */}
      {variant === 'image' && backgroundImage && (
        <>
          <img
            src={backgroundImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
          {/* Dappled Light Overlay */}
          <div
            className="absolute inset-0 mix-blend-overlay opacity-40"
            style={{ backgroundColor: 'transparent' }}
          />
        </>
      )}

      {/* Logo */}
      {logoSrc && (
        <div className="absolute top-[5%] left-[3.33%] w-[4%] h-[3.15%]">
          <img src={logoSrc} alt="Logo" className="w-full h-full object-contain" />
        </div>
      )}

      {/* Title */}
      <div
        className="absolute left-[64px] top-1/2 -translate-y-1/2 w-[80%]"
        style={{ color: '#fec' }}
      >
        {titleLines.map((line, index) => (
          <p
            key={index}
            className="mai-header-large"
            style={{ marginBottom: index < titleLines.length - 1 ? 0 : undefined }}
          >
            {line}
          </p>
        ))}
      </div>

      {/* Footer */}
      <SlideFooter {...footer} variant="light" />
    </div>
  );
};
