
import React from 'react';
import { LumusIcon, SearchIcon, BellIcon, MessageIcon } from './Icons';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-dark-surface/80 backdrop-blur-md border-b border-dark-border z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <LumusIcon className="h-8 w-8 text-brand-orange" />
          <h1 className="text-2xl font-bold text-dark-text tracking-tighter">Lumus</h1>
        </div>

        <div className="hidden md:flex flex-1 max-w-md items-center relative">
          <SearchIcon className="h-5 w-5 absolute left-3 text-dark-text-secondary" />
          <input
            type="text"
            placeholder="Search Lumus..."
            className="w-full bg-dark-bg border border-dark-border rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-brand-orange transition"
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-dark-border transition relative">
            <BellIcon className="h-6 w-6 text-dark-text-secondary" />
            <span className="absolute top-1 right-1 block h-2.5 w-2.5 rounded-full bg-brand-red ring-2 ring-dark-surface"></span>
          </button>
          <button className="p-2 rounded-full hover:bg-dark-border transition">
            <MessageIcon className="h-6 w-6 text-dark-text-secondary" />
          </button>
          <img
            src="https://picsum.photos/40/40?random=1"
            alt="User Avatar"
            className="w-10 h-10 rounded-full cursor-pointer border-2 border-transparent hover:border-brand-orange transition"
          />
        </div>
      </div>
    </header>
  );
};
