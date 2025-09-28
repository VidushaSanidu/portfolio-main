import { useTheme } from '../../../contexts/ThemeContext';

export default function ThemeSwitcherButton({ 
  isMobile = false, 
  className = '',
  buttonSize = 'w-10 h-10',
}) {
  const { currentTheme, themes } = useTheme();
  const currentThemeData = themes[currentTheme];

  // Since we only have neon theme, just display the theme indicator
  return (
    <div className={`${className}`}>
      <div
        className={`${buttonSize} flex items-center justify-center rounded-lg 
          bg-neutral-900 border border-cyan-500/50 
          ${isMobile ? 'text-lg' : 'text-base'}`}
        aria-label={`Current theme: ${currentThemeData.name}`}
      >
        <span className="text-cyan-400">
          {currentThemeData.icon}
        </span>
      </div>
    </div>
  );
}