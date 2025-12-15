import React from 'react';
import ThemeToggleButton from './ThemeToggleButton';

const Header = () => {
  return (
    <header className="p-4">
      <div className="container mx-auto flex justify-between items-center sticky top-0 z-10 bg-white dark:bg-gray-900">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        <ThemeToggleButton />
      </div>
    </header>
  );
};

export default Header;
