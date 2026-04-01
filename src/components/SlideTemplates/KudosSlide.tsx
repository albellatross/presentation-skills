import React from 'react';
import { KudosSlideProps } from './types';
import { SlideFooter } from './SlideFooter';
import './styles.css';

/**
 * KudosSlide - Recognition/appreciation slide with 3 columns
 *
 * Layout (from Figma 1:412):
 * - Title "Kudos": left 64px (3.33%), top 100px (9.26%), 80px font
 * - Content columns: top calc(12.5%+105px) = 22.22%, width 540px (28.125%)
 * - Column 1: left 64px (3.33%)
 * - Column 2: left calc(33.33%+84px) = 37.71%
 * - Column 3: left calc(66.67%+100px) = 71.88%
 * - Images: 423x423px (22.03%), top calc(37.5%+69px) = 43.89%
 * - Image 2: centered with translateX(-50%)
 * - gap 20px
 *
 * Figma Node: 1:412 (Content Page - images Section)
 */
export const KudosSlide: React.FC<KudosSlideProps> = ({
  title = 'Kudos',
  kudos,
  footer,
  className = '',
}) => {
  // Column positions from Figma (percentages of 1920px)
  const columnPositions = [
    { left: '3.33%', imageLeft: '3.33%' },           // Column 1: left 64px
    { left: '37.71%', imageLeft: '48.72%', centered: true }, // Column 2: centered
    { left: '71.88%', imageLeft: '71.88%' },         // Column 3: left calc(66.67%+100px)
  ];

  return (
    <div className={`mai-slide mai-bg-light ${className}`}>
      {/* Main Title: 80px font, top 9.26% */}
      <h1
        className="mai-title-serif-large absolute"
        style={{
          left: '3.33%',
          top: '9.26%',
          width: '31.25%',
        }}
      >
        {title}
      </h1>

      {/* 3 Columns with separate text and image positioning */}
      {kudos.slice(0, 3).map((kudo, index) => {
        const pos = columnPositions[index];
        return (
          <React.Fragment key={index}>
            {/* Text Content */}
            <div
              className="absolute"
              style={{
                left: pos.left,
                top: '22.22%',
                width: '28.125%',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              <p className="mai-caption">{kudo.department}</p>
              <p className="mai-title-serif">{kudo.name}</p>
              <p className="mai-body-small" style={{ whiteSpace: 'pre-wrap' }}>
                {kudo.message}
              </p>
            </div>

            {/* Image: 423x423px (22.03%), top 43.89% */}
            <div
              className="absolute rounded-[5px] overflow-hidden"
              style={{
                left: pos.imageLeft,
                top: '43.89%',
                width: '22.03%',
                aspectRatio: '1',
                transform: pos.centered ? 'translateX(-50%)' : undefined,
              }}
            >
              <img
                src={kudo.imageSrc}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </React.Fragment>
        );
      })}

      {/* Footer */}
      <SlideFooter {...footer} variant="dark" />
    </div>
  );
};
