import React from 'react';
import ThemeToggleButton from './ThemeToggleButton';

const Header = () => {
  return (
    <header className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        <ThemeToggleButton />
      </div>
    </header>
  );
};

export default Header;
