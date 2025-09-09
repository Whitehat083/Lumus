
import React from 'react';
import type { View } from '../types';
import { HomeIcon, ExploreIcon, ProjectIcon, BriefcaseIcon, UserIcon, MessageIcon, BellIcon } from './Icons';

interface SidebarProps {
  activeView: View;
  setActiveView: (view: View) => void;
}

const NavItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ icon, label, isActive, onClick }) => {
  return (
    <li
      onClick={onClick}
      className={`flex items-center gap-4 px-4 py-3 rounded-full cursor-pointer transition ${
        isActive ? 'bg-brand-orange/20 text-brand-orange font-bold' : 'hover:bg-dark-border text-dark-text'
      }`}
    >
      {icon}
      <span className="text-xl hidden xl:block">{label}</span>
    </li>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView }) => {
  const navItems: { view: View; label: string; icon: React.ReactNode }[] = [
    { view: 'feed', label: 'Home', icon: <HomeIcon className="h-7 w-7" /> },
    { view: 'networking', label: 'Networking', icon: <BriefcaseIcon className="h-7 w-7" /> },
    { view: 'projects', label: 'Projects', icon: <ProjectIcon className="h-7 w-7" /> },
    { view: 'profile', label: 'Profile', icon: <UserIcon className="h-7 w-7" /> },
  ];

  return (
    <aside className="w-16 xl:w-1/4 h-screen sticky top-16 px-2 py-6">
      <nav>
        <ul className="space-y-2">
          {navItems.map((item) => (
            <NavItem
              key={item.view}
              icon={item.icon}
              label={item.label}
              isActive={activeView === item.view}
              onClick={() => setActiveView(item.view)}
            />
          ))}
        </ul>
        <button className="mt-6 w-full bg-brand-orange text-white font-bold py-3 px-4 rounded-full hover:bg-opacity-90 transition">
          <span className="hidden xl:block">Post</span>
          <span className="block xl:hidden">+</span>
        </button>
      </nav>
    </aside>
  );
};
