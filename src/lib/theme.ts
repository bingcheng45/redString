// RedString brand colors
export const brandColors = {
  primary: '#D83546', // Deep red - representing the red string concept
  secondary: '#FFBEC9', // Soft pink - for warmth and romance
  accent: '#F2A649', // Gold/Amber - representing exclusive deals/experiences
  neutralDark: '#1A2B47', // Deep blue - for contrast
  neutralLight: '#FFFFFF', // Clean white
};

// Animation timing variables
export const animationTiming = {
  fast: 0.3, // seconds
  medium: 0.6, // seconds
  slow: 1.0, // seconds
  extraSlow: 1.5, // seconds
};

// Theme configuration for light/dark mode
export type ThemeMode = 'light' | 'dark';

export const themeConfig = {
  light: {
    background: '#FFFFFF',
    foreground: '#1A2B47',
    primary: brandColors.primary,
    secondary: brandColors.secondary,
    accent: brandColors.accent,
    cardBackground: '#F8F9FA',
    gradient: 'linear-gradient(135deg, #FFE6EA 0%, #FFF 100%)',
  },
  dark: {
    background: '#0A121F',
    foreground: '#FFFFFF',
    primary: brandColors.primary,
    secondary: '#FF8A9A', // Brighter pink for dark mode
    accent: '#F7B05B', // Brighter gold for dark mode
    cardBackground: '#1E293B',
    gradient: 'linear-gradient(135deg, #1A0A0D 0%, #0A121F 100%)',
  },
}; 