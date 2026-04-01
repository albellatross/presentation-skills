import React from 'react';
import { ImageGallerySlideProps } from './types';
import { SlideFooter } from './SlideFooter';
import './styles.css';

/**
 * ImageGallerySlide - Grid layout for multiple images
 *
 * Layout variations:
 * - 4-column: 4 equal images in a row
 * - 3-column: 3 images with mixed sizes
 * - masonry: Varied sizes in artistic arrangement
 * - Title with underline at top
 * - Footer at bottom
 *
 * Figma Node: 1:926, 1:1040, 1:1051, 1:1065, 1:1079, 1:1116 (Content Page - images Section)
 */
export const ImageGallerySlide: React.FC<ImageGallerySlideProps> = ({
  title,
  images,
  layout = '4-column',
  footer,
  className = '',
}) => {
  const renderGallery = () => {
    switch (layout) {
      case '4-column':
        return (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '16px',
              width: '100%',
            }}
          >
            {images.slice(0, 4).map((src, index) => (
              <div
                key={index}
                className="mai-image"
                style={{ aspectRatio: '1 / 1.4' }}
              >
                <img src={src} alt="" className="w-full h-full object-cover rounded-[5px]" />
              </div>
            ))}
          </div>
        );

      case '3-column':
        return (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr 1fr',
              gridTemplateRows: 'repeat(2, 1fr)',
              gap: '16px',
              width: '100%',
              height: '100%',
            }}
          >
            <div className="mai-image" style={{ gridRow: 'span 2' }}>
              <img src={images[0]} alt="" className="w-full h-full object-cover rounded-[5px]" />
            </div>
            {images.slice(1, 5).map((src, index) => (
              <div key={index} className="mai-image">
                <img src={src} alt="" className="w-full h-full object-cover rounded-[5px]" />
              </div>
            ))}
          </div>
        );

      case 'masonry':
      default:
        return (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              gridTemplateRows: 'repeat(4, 1fr)',
              gap: '16px',
              width: '100%',
              height: '100%',
            }}
          >
            {/* Large image spanning 2x2 */}
            <div className="mai-image" style={{ gridColumn: 'span 2', gridRow: 'span 2' }}>
              <img src={images[0]} alt="" className="w-full h-full object-cover rounded-[5px]" />
            </div>
            {/* Remaining images */}
            {images.slice(1, 8).map((src, index) => (
              <div key={index} className="mai-image">
                <img src={src} alt="" className="w-full h-full object-cover rounded-[5px]" />
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <div className={`mai-slide mai-bg-light ${className}`}>
      {/* Title with underline */}
      {title && (
        <div
          className="absolute left-[62px] top-[100px] right-[62px]"
          style={{
            borderBottom: '1px solid #5f4e41',
            paddingBottom: '40px',
          }}
        >
          <h1 className="mai-title-serif" style={{ marginTop: '40px' }}>{title}</h1>
        </div>
      )}

      {/* Image Gallery */}
      <div
        className="absolute"
        style={{
          top: title ? '31.5%' : '100px',
          left: '64px',
          right: '64px',
          bottom: '100px',
        }}
      >
        {renderGallery()}
      </div>

      {/* Footer */}
      <SlideFooter {...footer} variant="dark" />
    </div>
  );
};
