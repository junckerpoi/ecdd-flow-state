import React from 'react';
import StatCard from './StatCard';
import { Project, Task } from '../types';
import { motion } from 'framer-motion';
import { ArrowRight, Plus } from 'lucide-react';

interface DashboardProps {
  projects: Project[];
  tasks: Task[];
}

const stats = [
  { label: 'Active Projects', value: '12', change: '+2.5%', trend: 'up' },
  { label: 'Tasks Completed', value: '1,284', change: '+12.3%', trend: 'up' },
  { label: 'Team Members', value: '24', change: '-1.4%', trend: 'down' },
  { label: 'Success Rate', value: '98%', change: '+0.5%', trend: 'up' },
];

const Dashboard: React.FC<DashboardProps> = ({ projects, tasks }) => {
  return (
    <div className="space-y-8 pb-10">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            key={stat.label}
          >
            <StatCard stat={stat as any} />
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Main Projects Section */}
        <div className="xl:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-800">Featured Projects</h2>
            <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700 flex items-center gap-1 transition-colors">
              View All <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.slice(0, 4).map((project, i) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                key={project.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all group"
              >
                <div className="h-40 relative">
                  <img 
                    src={project.thumbnail} 
                    alt={project.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm text-indigo-600 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-slate-800 mb-1">{project.name}</h3>
                  <p className="text-sm text-slate-500 mb-4 line-clamp-1">{project.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-slate-500">Progress</span>
                      <span className="text-indigo-600">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className="bg-indigo-600 h-full rounded-full transition-all duration-1000"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex items-center -space-x-2 pt-1">
                      {project.members.map((m, idx) => (
                        <div key={idx} className="w-7 h-7 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">
                          {m[0]}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recent Activity / Upcoming Tasks */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-800">Recent Tasks</h2>
            <button className="p-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-lg transition-colors">
              <Plus size={16} />
            </button>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <div className="divide-y divide-slate-100">
              {tasks.slice(0, 6).map((task) => (
                <div key={task.id} className="p-4 hover:bg-slate-50 transition-colors cursor-pointer group">
                  <div className="flex gap-3">
                    <div className={`mt-1 w-2 h-2 rounded-full shrink-0 ${
                      task.priority === 'High' ? 'bg-rose-500' : 
                      task.priority === 'Medium' ? 'bg-amber-500' : 'bg-emerald-500'
                    }`}></div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">{task.title}</h4>
                      <div className="flex items-center gap-3 mt-1 text-[11px] text-slate-400 font-medium">
                        <span>{task.dueDate}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                        <span className={
                          task.status === 'In Progress' ? 'text-blue-500' :
                          task.status === 'Done' ? 'text-emerald-500' :
                          'text-slate-400'
                        }>{task.status}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full py-3 text-xs font-bold text-slate-400 hover:bg-slate-50 border-t border-slate-100 uppercase tracking-widest transition-colors">
              View All Tasks
            </button>
          </div>

          {/* Productivity Mini Chart Placeholder */}
          <div className="bg-gradient-to-br from-indigo-600 to-violet-700 p-6 rounded-2xl text-white">
            <h4 className="text-sm font-bold opacity-80 mb-1">Weekly Summary</h4>
            <div className="text-2xl font-bold mb-4">84% Efficiency</div>
            <div className="flex items-end gap-2 h-20">
              {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                <div 
                  key={i} 
                  className="flex-1 bg-white/20 rounded-t-sm hover:bg-white/40 transition-colors" 
                  style={{ height: `${h}%` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;