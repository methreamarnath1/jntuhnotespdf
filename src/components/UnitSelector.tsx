import React from 'react';
import { Book } from 'lucide-react';

interface Unit {
  id: string;
  title: string;
  description: string;
}

interface UnitSelectorProps {
  units: Unit[];
  onSelectUnit: (unit: Unit) => void;
}

export const UnitSelector: React.FC<UnitSelectorProps> = ({ units, onSelectUnit }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {units.map((unit) => (
        <div
          key={unit.id}
          className="bg-gradient-to-br from-indigo-900/50 to-blue-900/50 rounded-lg p-4 border border-indigo-500/20 hover:border-indigo-500/40 transition-all cursor-pointer group"
          onClick={() => onSelectUnit(unit)}
        >
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform">
              <Book size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors">
                {unit.title}
              </h3>
              <p className="text-sm text-indigo-200/70 mt-1">
                {unit.description}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Ad Section */}
      <div className="col-span-full bg-gradient-to-r from-indigo-900/30 to-blue-900/30 p-4 rounded-lg border border-indigo-500/10">
        <div className="h-20 flex items-center justify-center text-indigo-300/50">
          Advertisement
        </div>
      </div>
    </div>
  );
};