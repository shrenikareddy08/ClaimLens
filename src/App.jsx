import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import ForYou from './pages/ForYou';
import PostDetails from './pages/PostDetails';
import Verify from './pages/Verify';
import History from './pages/History';
import About from './pages/About';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedPost, setSelectedPost] = useState(null);
  
  // Manage verification history in localStorage
  const [historyItems, setHistoryItems] = useState(() => {
    try {
      const saved = localStorage.getItem('claimlens_history');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('claimlens_history', JSON.stringify(historyItems));
    } catch (e) {
      console.warn("Could not persist history to localStorage:", e);
    }
  }, [historyItems]);

  const handleSaveToHistory = (item) => {
    setHistoryItems(prev => [item, ...prev.filter(h => h.id !== item.id)]);
  };

  const handleSelectPost = (post) => {
    setSelectedPost(post);
    setActivePage('postdetails');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToForYou = () => {
    setSelectedPost(null);
    setActivePage('foryou');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 flex flex-col selection:bg-brand-500/20 selection:text-brand-300">
      
      {/* Simple, Clean Product Navbar */}
      <Navbar 
        activePage={activePage === 'postdetails' ? 'foryou' : activePage} 
        setActivePage={setActivePage} 
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activePage === 'home' && (
          <Home
            onNavigateToVerify={() => { setActivePage('verify'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            onNavigateToForYou={() => { setActivePage('foryou'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          />
        )}

        {activePage === 'foryou' && (
          <ForYou 
            onSelectPost={handleSelectPost} 
          />
        )}

        {activePage === 'postdetails' && (
          <PostDetails
            post={selectedPost}
            onBack={handleBackToForYou}
            onSaveToHistory={handleSaveToHistory}
          />
        )}

        {activePage === 'verify' && (
          <Verify 
            onSaveToHistory={handleSaveToHistory} 
          />
        )}

        {activePage === 'history' && (
          <History
            historyItems={historyItems}
            onNavigateToVerify={() => { setActivePage('verify'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          />
        )}

        {activePage === 'about' && (
          <About />
        )}
      </main>

      {/* Clean Product Footer */}
      <Footer setActivePage={setActivePage} />

    </div>
  );
}
