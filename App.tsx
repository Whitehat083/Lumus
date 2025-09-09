import React, { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Feed } from './components/Feed';
import { Profile } from './components/Profile';
import { Networking } from './components/Networking';
import { Projects } from './components/Projects';
import { Registration } from './components/Registration';
import type { View } from './types';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View>('feed');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleRegistrationSuccess = () => {
    setIsAuthenticated(true);
  };

  const renderView = () => {
    switch (activeView) {
      case 'feed':
        return <Feed />;
      case 'profile':
        return <Profile />;
      case 'networking':
        return <Networking />;
      case 'projects':
        return <Projects />;
      default:
        return <Feed />;
    }
  };
  
  if (!isAuthenticated) {
    return <Registration onRegisterSuccess={handleRegistrationSuccess} />;
  }

  return (
    <div className="bg-dark-bg min-h-screen text-dark-text">
      <Header />
      <div className="container mx-auto flex">
        <aside className="w-16 xl:w-1/4 h-screen sticky top-0 pt-16">
           <Sidebar activeView={activeView} setActiveView={setActiveView} />
        </aside>
        <main className="w-full xl:w-1/2 pt-16 border-l border-r border-dark-border min-h-screen">
          <div className="p-6">
            {renderView()}
          </div>
        </main>
        <aside className="hidden xl:block xl:w-1/4 h-screen sticky top-0 pt-16 p-6">
            {/* Right sidebar content can go here */}
        </aside>
      </div>
    </div>
  );
};

export default App;
