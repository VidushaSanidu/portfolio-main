// Typography utilities for consistent heading styles across themes

export const getHeadingClasses = (level = 'section', theme = 'neon') => {
  const baseClasses = "font-bold bg-clip-text text-transparent";
  
  // Only neon gradient
  const gradient = 'bg-gradient-to-r from-cyan-400 to-purple-400';

  // Size patterns by hierarchy level
  const sizes = {
    hero: 'text-5xl md:text-7xl',
    section: 'text-3xl md:text-4xl',
    subsection: 'text-2xl md:text-3xl',
    card: 'text-xl md:text-2xl'
  };

  const size = sizes[level] || sizes.section;

  return `${baseClasses} ${size} ${gradient}`;
};

// Predefined heading component classes
export const headingStyles = {
  // Hero section - largest and most prominent
  hero: {
    neon: 'text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'
  },
  
  // Main section headings - consistent across all sections
  section: {
    neon: 'text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'
  },

  // Sub-section headings
  subsection: {
    neon: 'text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'
  },

  // Card/component headings
  card: {
    neon: 'text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'
  }
};

// Helper function to get spacing classes for consistent margins
export const getHeadingSpacing = (level = 'section') => {
  const spacing = {
    hero: 'mb-6 md:mb-8',
    section: 'mb-6 md:mb-8',
    subsection: 'mb-4 md:mb-6', 
    card: 'mb-3 md:mb-4'
  };
  
  return spacing[level] || spacing.section;
};

// Complete heading utility that combines classes and spacing
export const getCompleteHeadingClasses = (level = 'section', theme = 'neon') => {
  const headingClass = headingStyles[level]?.neon || headingStyles.section.neon;
  const spacingClass = getHeadingSpacing(level);
  
  return `${headingClass} ${spacingClass}`;
};