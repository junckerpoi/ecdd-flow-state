import React from 'react';
import { motion } from 'framer-motion';
import { MoreHorizontal, Clock, AlertCircle } from 'lucide-react';
import { Task, Status } from '../types';

interface KanbanBoardProps {
  tasks: Task[];
}

const columns: { title: Status; color: string }[] = [
  { title: 'Todo', color: 'bg-slate-500' },
  { title: 'In Progress', color: 'bg-blue-500' },
  { title: 'Review', color: 'bg-amber-500' },
  { title: 'Done', color: 'bg-emerald-500' },
];

const KanbanBoard: React.FC<KanbanBoardProps> = ({ tasks }) => {
  const getTasksByStatus = (status: Status) => tasks.filter(t => t.status === status);

  return (
    <div className="flex gap-6 overflow-x-auto pb-6">
      {columns.map((column) => (
        <div key={column.title} className="flex-shrink-0 w-80">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${column.color}`}></span>
              <h3 className="font-semibold text-slate-700">{column.title}</h3>
              <span className="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                {getTasksByStatus(column.title).length}
              </span>
            </div>
            <button className="text-slate-400 hover:text-slate-600">
              <MoreHorizontal size={18} />
            </button>
          </div>

          <div className="space-y-4">
            {getTasksByStatus(column.title).map((task) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                key={task.id}
                className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="flex justify-between items-start mb-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                    task.priority === 'High' ? 'bg-rose-50 text-rose-600' :
                    task.priority === 'Medium' ? 'bg-amber-50 text-amber-600' :
                    'bg-emerald-50 text-emerald-600'
                  }`}>
                    {task.priority}
                  </span>
                  <button className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-slate-600 transition-opacity">
                    <MoreHorizontal size={16} />
                  </button>
                </div>
                
                <h4 className="font-semibold text-slate-800 mb-1 line-clamp-2">{task.title}</h4>
                <p className="text-sm text-slate-500 mb-4 line-clamp-2">{task.description}</p>
                
                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Clock size={14} />
                    <span className="text-xs">{task.dueDate}</span>
                  </div>
                  <img 
                    src={task.assignee.avatar} 
                    alt={task.assignee.name} 
                    className="w-6 h-6 rounded-full border border-white ring-1 ring-slate-100"
                    title={task.assignee.name}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;