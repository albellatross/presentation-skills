import React from 'react';
import { TeamShowcaseSlideProps } from './types';
import { SlideFooter } from './SlideFooter';
import './styles.css';

/**
 * TeamShowcaseSlide - Team info with avatars and dual images
 *
 * Layout:
 * - Header row: Team name, title, description (left) + avatar stack (right)
 * - Image row: Two equal-width images side by side
 * - Footer at bottom
 *
 * Figma Node: 1:312 (Content Page - images Section)
 */
export const TeamShowcaseSlide: React.FC<TeamShowcaseSlideProps> = ({
  teamName,
  title,
  description,
  teamMembers,
  images,
  footer,
  className = '',
}) => {
  return (
    <div
      className={`mai-slide mai-bg-light ${className}`}
    >
      {/* Content Container */}
      <div
        className="absolute left-[64px] top-[100px] right-[66px]"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
        }}
      >
        {/* Header Row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '32px',
          }}
        >
          {/* Text Content */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            <p className="mai-caption-large">{teamName}</p>
            <h2 className="mai-title">{title}</h2>
            <p className="mai-body" style={{ maxWidth: '61%' }}>{description}</p>
          </div>

          {/* Avatar Stack */}
          <div className="mai-avatar-stack">
            {teamMembers.slice(0, 3).map((member, index) => (
              <div
                key={index}
                className="mai-avatar"
                style={{ zIndex: 3 - index }}
              >
                <img
                  src={member.avatarSrc}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Image Row */}
        <div
          style={{
            display: 'flex',
            gap: '24px',
            flexWrap: 'wrap',
          }}
        >
          {images.slice(0, 2).map((src, index) => (
            <div
              key={index}
              className="mai-image"
              style={{
                flex: '1 1 0',
                aspectRatio: '883 / 600',
                minWidth: '300px',
              }}
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover rounded-[5px]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <SlideFooter {...footer} variant="dark" />
    </div>
  );
};
