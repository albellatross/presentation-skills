import React from 'react';
import { AgendaSlideProps } from './types';
import { SlideFooter } from './SlideFooter';
import './styles.css';

/**
 * AgendaSlide - Topic list with large header
 *
 * Layout:
 * - Two-column layout
 * - Left: Large "Agenda" title (vertically centered)
 * - Right: List of topics with horizontal dividers
 * - Footer at bottom
 *
 * Variants:
 * - light: Cream background (#fef9ed) with dark text
 * - dark: Brown background (#72675b) with cream text
 * - accent: Dark brown background (#3b230e) with cream text
 *
 * Figma Node: 1:157, 1:174, 1:191 (Agenda Page Section)
 */
export const AgendaSlide: React.FC<AgendaSlideProps> = ({
  title = 'Agenda',
  topics,
  footer,
  backgroundColor,
  variant = 'dark',
  className = '',
}) => {
  const bgColors = {
    light: '#fef9ed',
    dark: '#72675b',
    accent: '#3b230e',
  };

  const textColor = variant === 'light' ? '#5f4e41' : '#fec';
  const footerVariant = variant === 'light' ? 'dark' : 'light';

  return (
    <div
      className={`mai-slide ${className}`}
      style={{
        backgroundColor: backgroundColor || bgColors[variant],
        color: textColor,
      }}
    >
      {/* Title - Left Side */}
      <div
        className="absolute left-[64px] top-1/2 -translate-y-1/2 w-[43%]"
      >
        <h1 className="mai-header-large">{title}</h1>
      </div>

      {/* Topics List - Right Side */}
      <div
        className="absolute left-[58.33%] top-1/2 -translate-y-1/2 w-[38.5%]"
        style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
      >
        {topics.map((topic, index) => (
          <React.Fragment key={index}>
            <p className="mai-body-large">{topic}</p>
            {index < topics.length - 1 && (
              <hr
                style={{
                  border: 'none',
                  borderTop: `1px solid ${textColor}`,
                  opacity: 0.3,
                  width: '100%',
                  margin: 0,
                }}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Footer */}
      <SlideFooter {...footer} variant={footerVariant} />
    </div>
  );
};
