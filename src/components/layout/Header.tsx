import React from 'react';
import { BookOpen } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-gray-800 shadow-xl border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen size={32} className="text-blue-400" />
            <h1 className="text-2xl font-bold text-white">JNTUH Notes PDF</h1>
          </div>
        </div>
      </div>
    </header>
  );
};