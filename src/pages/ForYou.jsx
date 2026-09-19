import React, { useState } from 'react';
import PostCard from '../components/PostCard';
import { SAMPLE_POSTS } from '../data/posts';
import { Sparkles } from 'lucide-react';

export default function ForYou({ onSelectPost }) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const categories = [
    'ALL',
    'LOCAL NEWS',
    'WORLD',
    'ENVIRONMENT',
    'CURRENT AFFAIRS',
    'SCIENCE & TECH'
  ];

  const filteredPosts = selectedCategory === 'ALL'
    ? SAMPLE_POSTS
    : SAMPLE_POSTS.filter(p => p.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-fadeIn">
      
      {/* Header */}
      <div className="border-b border-slate-800 pb-6 space-y-2">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Content Discovery</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">
          For You
        </h1>
        <p className="text-slate-400 text-sm max-w-xl">
          Explore stories and check the evidence behind them. Click any story to inspect its claim with ClaimLens.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
              selectedCategory === cat
                ? 'bg-brand-500 text-slate-950 font-semibold'
                : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700/80'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            onSelect={onSelectPost}
          />
        ))}
      </div>

    </div>
  );
}
