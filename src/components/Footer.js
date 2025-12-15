import React from 'react';
import { Home, User, Code, Rss, Mail } from 'lucide-react';

const navLinks = [
  { name: 'Home', icon: <Home className="h-5 w-5 mx-auto" />, href: '#' },
  { name: 'About', icon: <User className="h-5 w-5 mx-auto" />, href: '#about' },
  { name: 'Projects', icon: <Code className="h-5 w-5 mx-auto" />, href: '#projects' },
  { name: 'Blog', icon: <Rss className="h-5 w-5 mx-auto" />, href: '#blog' },
  { name: 'Contact', icon: <Mail className="h-5 w-5 mx-auto" />, href: '#contact' },
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 sticky bottom-0 z-10">
      <div className="container mx-auto px-4">
        <nav className="flex justify-around py-3">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="flex flex-col items-center text-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
              {link.icon}
              <span className="text-xs mt-1">{link.name}</span>
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
