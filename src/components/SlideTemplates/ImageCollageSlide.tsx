import React from 'react';
import { ImageCollageSlideProps } from './types';
import { SlideFooter } from './SlideFooter';
import './styles.css';

/**
 * ImageCollageSlide - Creative image collage with centered text
 *
 * Layout:
 * - Multiple images scattered around the slide (some blurred)
 * - Large centered title text
 * - Footer at bottom
 *
 * Figma Node: 1:1027, 1:558 (Content Page - images Section)
 */
export const ImageCollageSlide: React.FC<ImageCollageSlideProps> = ({
  title,
  images,
  footer,
  backgroundColor = '#fec',
  className = '',
}) => {
  // Predefined positions for collage effect
  const positions = [
    { top: '27.13%', left: '0', width: '19.1%', height: '40%', blur: true },
    { top: '18.6%', left: '28.59%', width: '12.5%', height: '23%', blur: false },
    { top: '0', left: '52.71%', width: '9.6%', height: '21.3%', blur: false },
    { top: '23.9%', left: '74.22%', width: '21.3%', height: '28.4%', blur: false },
    { top: '50.3%', left: '66.98%', width: '11.8%', height: '26.5%', blur: true },
    { top: '63.5%', left: '28.59%', width: '7.2%', height: '11.1%', blur: true },
    { top: '69.1%', left: '33.54%', width: '19.5%', height: '22.3%', blur: false },
  ];

  return (
    <div
      className={`mai-slide ${className}`}
      style={{
        backgroundColor,
        color: '#3b230e',
      }}
    >
      {/* Scattered Images */}
      {images.slice(0, positions.length).map((img, index) => {
        const pos = positions[index];
        const imgSrc = typeof img === 'string' ? img : img.src;
        const shouldBlur = typeof img === 'string' ? pos.blur : img.blur;

        return (
          <div
            key={index}
            className={`absolute mai-image ${shouldBlur ? 'mai-image-blur' : ''}`}
            style={{
              top: pos.top,
              left: pos.left,
              width: pos.width,
              height: pos.height,
              overflow: 'hidden',
            }}
          >
            <img
              src={imgSrc}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        );
      })}

      {/* Centered Title */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '34%',
          textAlign: 'center',
        }}
      >
        <p className="mai-title-serif-large">
          {title}
        </p>
      </div>

      {/* Footer */}
      <SlideFooter {...footer} variant="dark" />
    </div>
  );
};
