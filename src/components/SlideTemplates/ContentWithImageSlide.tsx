import React from 'react';
import { ContentWithImageSlideProps } from './types';
import { SlideFooter } from './SlideFooter';
import './styles.css';

/**
 * ContentWithImageSlide - Text content with large image
 *
 * Layout:
 * - Two-column layout
 * - Text side: Title + optional subtitle (vertically centered)
 * - Image side: Large rounded image (with mix-blend-multiply)
 * - Footer at bottom
 *
 * Figma Node: 1:261, 1:284, 1:292 (Content Page - images Section)
 */
export const ContentWithImageSlide: React.FC<ContentWithImageSlideProps> = ({
  title,
  subtitle,
  imageSrc,
  imagePosition = 'right',
  footer,
  backgroundColor = '#fef9ed',
  className = '',
}) => {
  const isImageRight = imagePosition === 'right';

  return (
    <div
      className={`mai-slide ${className}`}
      style={{
        backgroundColor,
        color: '#3b230e',
      }}
    >
      {/* Text Content */}
      <div
        className="absolute top-1/2 -translate-y-1/2"
        style={{
          left: isImageRight ? '64px' : 'auto',
          right: isImageRight ? 'auto' : '64px',
          width: '41.5%',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        <h1 className="mai-header">{title}</h1>
        {subtitle && (
          <p
            className="mai-title-serif"
            style={{ fontStyle: 'italic' }}
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* Image */}
      <div
        className="absolute top-[55px]"
        style={{
          left: isImageRight ? '51.3%' : '64px',
          right: isImageRight ? 'auto' : '51.3%',
          width: '46.7%',
          height: '87%',
        }}
      >
        <img
          src={imageSrc}
          alt=""
          className="mai-image mai-mix-blend-multiply w-full h-full"
        />
      </div>

      {/* Footer */}
      <SlideFooter {...footer} variant="dark" />
    </div>
  );
};
