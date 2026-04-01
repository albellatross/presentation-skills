import React from 'react';
import { SlideFooterProps } from './types';
import './styles.css';

/**
 * SlideFooter - Common footer component for all slides
 * Layout: Left (Organization) | Center (Date) | Right (Cycle)
 */
export const SlideFooter: React.FC<SlideFooterProps> = ({
  organization = 'Microsoft AI',
  date = 'Month Day, Year',
  cycle = 'Cycle X',
  variant = 'dark',
}) => {
  const colorClass = variant === 'light'
    ? 'text-[#fec]'
    : 'text-[#5f4e41]';

  return (
    <div className={`mai-footer ${colorClass}`}>
      <span className="mai-footer-left">{organization}</span>
      <span className="mai-footer-center">{date}</span>
      <span className="mai-footer-right">{cycle}</span>
    </div>
  );
};
