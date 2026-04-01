import React from 'react';
import { FourImageGridSlideProps } from './types';
import { SlideFooter } from './SlideFooter';
import './styles.css';

/**
 * FourImageGridSlide - Text sidebar with 2x2 image grid
 *
 * Layout:
 * - Left sidebar: Title + description text
 * - Right area: 2x2 grid of images
 * - Footer at bottom
 *
 * Figma Node: 1:357 (Content Page - images Section)
 */
export const FourImageGridSlide: React.FC<FourImageGridSlideProps> = ({
  title,
  description,
  images,
  footer,
  className = '',
}) => {
  return (
    <div className={`mai-slide mai-bg-light ${className}`}>
      {/* Text Content - Left Sidebar */}
      <div
        className="absolute left-[64px] top-[100px]"
        style={{
          width: '20%',
          height: '81.5%',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
        }}
      >
        <h1
          className="mai-title-serif"
          style={{ whiteSpace: 'pre-wrap' }}
        >
          {title}
        </h1>
        <p
          className="mai-body-small"
          style={{ flex: 1 }}
        >
          {description}
        </p>
      </div>

      {/* Image Grid - Right Area */}
      <div
        className="absolute left-[25.3%] top-1/2 -translate-y-1/2"
        style={{
          width: '71.6%',
          height: '81.5%',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridTemplateRows: 'repeat(2, 1fr)',
          gap: '32px',
        }}
      >
        {images.slice(0, 4).map((src, index) => (
          <div
            key={index}
            className="mai-image overflow-hidden"
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover rounded-[5px]"
            />
          </div>
        ))}
      </div>

      {/* Footer */}
      <SlideFooter {...footer} variant="dark" />
    </div>
  );
};
