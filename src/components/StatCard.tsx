import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { Stat } from '../types';

interface StatCardProps {
  stat: Stat;
}

const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  const isUp = stat.trend === 'up';
  
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</p>
        <div className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full ${
          isUp ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
        }`}>
          {isUp ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
          {stat.change}
        </div>
      </div>
      <div className="flex items-baseline gap-2">
        <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
      </div>
    </div>
  );
};

export default StatCard;