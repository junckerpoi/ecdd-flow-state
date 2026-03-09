import React from 'react';
import { Search, Bell, Menu, Plus } from 'lucide-react';
import { toast } from 'sonner';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="h-16 border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-40 px-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button className="md:hidden p-2 hover:bg-slate-100 rounded-lg">
          <Menu size={20} />
        </button>
        <h1 className="text-xl font-semibold text-slate-800 tracking-tight">{title}</h1>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative hidden lg:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search tasks, projects..." 
            className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 w-64 transition-all"
            onChange={() => {}}
          />
        </div>

        <button 
          onClick={() => toast.info('No new notifications')}
          className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors"
        >
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
        </button>

        <button 
          onClick={() => toast.success('New project modal opened')}
          className="hidden sm:flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all active:scale-95 shadow-sm shadow-indigo-200"
        >
          <Plus size={18} />
          <span>New Project</span>
        </button>

        <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-slate-800 leading-none">Alex Johnson</p>
            <p className="text-[10px] text-slate-500 mt-1 uppercase font-bold tracking-wider">Project Manager</p>
          </div>
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/1b18f613-69ec-408f-a712-53048c77e2c4/avatar-pm-db495ef5-1773043990036.webp" 
            alt="Profile" 
            className="w-9 h-9 rounded-full object-cover border-2 border-indigo-100 cursor-pointer hover:ring-2 ring-indigo-500/20 transition-all"
            onClick={() => toast.info('User profile clicked')}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;