import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import KanbanBoard from './components/KanbanBoard';
import { Project, Task } from './types';
import { Toaster, toast } from 'sonner';

// Mock Data
const MOCK_PROJECTS: Project[] = [
  {
    id: 'p1',
    name: 'Smart Infrastructure 2024',
    description: 'Developing sustainable energy grids for urban environments.',
    progress: 72,
    members: ['Alex', 'Sarah', 'Tom', 'Emma'],
    thumbnail: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1b18f613-69ec-408f-a712-53048c77e2c4/project-thumb-1-7a2e9d54-1773043991010.webp',
    category: 'Innovation'
  },
  {
    id: 'p2',
    name: 'Digital Supply Chain',
    description: 'Implementing blockchain for end-to-end logistics transparency.',
    progress: 45,
    members: ['Alex', 'Mike', 'Lisa'],
    thumbnail: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1b18f613-69ec-408f-a712-53048c77e2c4/project-thumb-2-207f26a8-1773043990139.webp',
    category: 'Logistics'
  },
  {
    id: 'p3',
    name: 'Customer Experience Hub',
    description: 'Consolidating user touchpoints into a unified AI-driven platform.',
    progress: 88,
    members: ['John', 'Kate', 'Alex'],
    thumbnail: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1b18f613-69ec-408f-a712-53048c77e2c4/dashboard-bg-2c7ea2ef-1773043990405.webp',
    category: 'Marketing'
  },
  {
    id: 'p4',
    name: 'Enterprise Cloud Migration',
    description: 'Moving core infrastructure to scalable cloud services.',
    progress: 20,
    members: ['Sarah', 'Emma', 'Tom'],
    thumbnail: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1b18f613-69ec-408f-a712-53048c77e2c4/project-thumb-1-7a2e9d54-1773043991010.webp',
    category: 'Infrastructure'
  },
];

const MOCK_TASKS: Task[] = [
  {
    id: 't1',
    title: 'Review System Architecture',
    description: 'Verify the cloud migration blueprints with the security team.',
    status: 'In Progress',
    priority: 'High',
    assignee: { name: 'Alex', avatar: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1b18f613-69ec-408f-a712-53048c77e2c4/avatar-pm-db495ef5-1773043990036.webp' },
    dueDate: 'Oct 24, 2024',
    projectId: 'p1'
  },
  {
    id: 't2',
    title: 'Update UI Component Library',
    description: 'Incorporate new branding guidelines into the shared components.',
    status: 'Todo',
    priority: 'Medium',
    assignee: { name: 'Sarah', avatar: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1b18f613-69ec-408f-a712-53048c77e2c4/avatar-pm-db495ef5-1773043990036.webp' },
    dueDate: 'Oct 28, 2024',
    projectId: 'p3'
  },
  {
    id: 't3',
    title: 'Database Schema Finalization',
    description: 'Approve the final JSON schemas for the document store.',
    status: 'Review',
    priority: 'High',
    assignee: { name: 'Mike', avatar: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1b18f613-69ec-408f-a712-53048c77e2c4/avatar-pm-db495ef5-1773043990036.webp' },
    dueDate: 'Oct 22, 2024',
    projectId: 'p2'
  },
  {
    id: 't4',
    title: 'API Endpoint Documentation',
    description: 'Complete Swagger docs for all public endpoints.',
    status: 'Done',
    priority: 'Low',
    assignee: { name: 'Emma', avatar: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1b18f613-69ec-408f-a712-53048c77e2c4/avatar-pm-db495ef5-1773043990036.webp' },
    dueDate: 'Oct 15, 2024',
    projectId: 'p4'
  },
  {
    id: 't5',
    title: 'Load Testing for Beta Launch',
    description: 'Stress test the dashboard with 5000 concurrent users.',
    status: 'Todo',
    priority: 'High',
    assignee: { name: 'Tom', avatar: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1b18f613-69ec-408f-a712-53048c77e2c4/avatar-pm-db495ef5-1773043990036.webp' },
    dueDate: 'Nov 02, 2024',
    projectId: 'p1'
  },
];

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleNewProject = () => {
    toast.success('New project creation form opened');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard projects={MOCK_PROJECTS} tasks={MOCK_TASKS} />;
      case 'projects':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_PROJECTS.map(project => (
              <div key={project.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer">
                <h3 className="text-lg font-bold text-slate-800">{project.name}</h3>
                <p className="text-slate-500 text-sm mt-2 line-clamp-2">{project.description}</p>
                <div className="mt-6 flex items-center justify-between">
                  <div className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
                    {project.category}
                  </div>
                  <div className="text-sm font-medium text-slate-700">{project.progress}%</div>
                </div>
                <div className="mt-2 w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                   <div className="bg-indigo-600 h-full transition-all duration-1000" style={{ width: `${project.progress}%` }}></div>
                </div>
              </div>
            ))}
            <button 
              onClick={handleNewProject}
              className="border-2 border-dashed border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center text-slate-400 hover:border-indigo-400 hover:text-indigo-500 transition-all bg-slate-50/50"
            >
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mb-2">
                <span className="text-2xl">+</span>
              </div>
              <span className="font-semibold">Create New Project</span>
            </button>
          </div>
        );
      case 'tasks':
        return <KanbanBoard tasks={MOCK_TASKS} />;
      default:
        return (
          <div className="flex flex-col items-center justify-center py-20 text-slate-400">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl font-bold italic">?</span>
            </div>
            <p className="text-lg font-medium">Coming Soon</p>
            <p className="text-sm">We're building the {activeTab} view just for you.</p>
          </div>
        );
    }
  };

  const getPageTitle = () => {
    switch (activeTab) {
      case 'dashboard': return 'Project Overview';
      case 'projects': return 'All Projects';
      case 'tasks': return 'Task Board';
      case 'team': return 'Team Members';
      case 'calendar': return 'Project Calendar';
      case 'settings': return 'Account Settings';
      default: return 'ECDD Management';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Toaster richColors closeButton position="top-right" />
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="pl-64 min-h-screen flex flex-col">
        <Header title={getPageTitle()} />
        
        <div className="flex-1 p-8 max-w-7xl mx-auto w-full">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;