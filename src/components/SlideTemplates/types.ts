// Type definitions for Slide Templates

export interface SlideFooterProps {
  organization?: string;
  date?: string;
  cycle?: string;
  variant?: 'light' | 'dark';
}

export interface SlideProps {
  className?: string;
  children?: React.ReactNode;
}

export interface CoverSlideProps extends SlideProps {
  title: string | string[];
  backgroundImage?: string;
  logoSrc?: string;
  footer?: SlideFooterProps;
  variant?: 'image' | 'solid';
  backgroundColor?: string;
}

export interface AgendaSlideProps extends SlideProps {
  title?: string;
  topics: string[];
  footer?: SlideFooterProps;
  backgroundColor?: string;
  variant?: 'light' | 'dark' | 'accent';
}

export interface SectionTitleSlideProps extends SlideProps {
  teamName?: string;
  title: string;
  backgroundImage?: string;
  footer?: SlideFooterProps;
}

export interface DividerSlideProps extends SlideProps {
  title: string;
  footer?: SlideFooterProps;
  backgroundColor?: string;
}

export interface ContentWithImageSlideProps extends SlideProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imagePosition?: 'left' | 'right';
  footer?: SlideFooterProps;
  backgroundColor?: string;
}

export interface TeamShowcaseSlideProps extends SlideProps {
  teamName: string;
  title: string;
  description: string;
  teamMembers: { name: string; avatarSrc: string }[];
  images: string[];
  footer?: SlideFooterProps;
}

export interface FourImageGridSlideProps extends SlideProps {
  title: string;
  description: string;
  images: string[];
  footer?: SlideFooterProps;
}

export interface KudosSlideProps extends SlideProps {
  title?: string;
  kudos: {
    department: string;
    name: string;
    message: string;
    imageSrc: string;
  }[];
  footer?: SlideFooterProps;
}

export interface ImageCollageSlideProps extends SlideProps {
  title: string;
  images: { src: string; blur?: boolean }[];
  footer?: SlideFooterProps;
  backgroundColor?: string;
}

export interface ImageGallerySlideProps extends SlideProps {
  title?: string;
  images: string[];
  layout?: '4-column' | '3-column' | 'masonry';
  footer?: SlideFooterProps;
}
