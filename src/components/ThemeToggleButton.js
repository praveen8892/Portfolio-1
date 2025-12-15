import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';
import { Sun, Moon } from 'lucide-react';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="p-2 rounded-full focus:outline-none">
      {theme === 'dark' ? (
        <Sun className="h-6 w-6 text-yellow-500" />
      ) : (
        <Moon className="h-6 w-6 text-gray-900" />
      )}
    </button>
  );
};

export default ThemeToggleButton;
