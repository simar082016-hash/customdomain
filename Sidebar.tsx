
import React from 'react';
import { Topic, SubTopic } from '../types';

interface SidebarProps {
  topics: Topic[];
  activeSubTopicId: string;
  onSelectSubTopic: (topicId: string, subTopic: SubTopic) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ topics, activeSubTopicId, onSelectSubTopic }) => {
  return (
    <aside className="w-80 h-full bg-white border-r border-slate-200 flex flex-col overflow-y-auto">
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <i className="fa-solid fa-shield-heart text-white"></i>
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            IAM Academy
          </h1>
        </div>
        <p className="text-xs text-slate-400 uppercase font-semibold tracking-wider">Salesforce Specialization</p>
      </div>

      <nav className="flex-1 p-4">
        {topics.map((topic) => (
          <div key={topic.id} className="mb-6">
            <h3 className="flex items-center gap-2 px-3 mb-2 text-sm font-bold text-slate-500 uppercase tracking-tighter">
              <i className={`fa-solid ${topic.icon}`}></i>
              {topic.title}
            </h3>
            <ul className="space-y-1">
              {topic.subTopics.map((sub) => (
                <li key={sub.id}>
                  <button
                    onClick={() => onSelectSubTopic(topic.id, sub)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl transition-all duration-200 text-sm flex items-center justify-between group
                      ${activeSubTopicId === sub.id 
                        ? 'bg-blue-50 text-blue-700 font-semibold shadow-sm border border-blue-100' 
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
                  >
                    <span>{sub.title}</span>
                    {activeSubTopicId === sub.id && (
                      <i className="fa-solid fa-chevron-right text-[10px] animate-pulse"></i>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-100">
        <div className="bg-slate-900 rounded-2xl p-4 text-white">
          <p className="text-xs font-medium text-slate-400 mb-2">Learning Progress</p>
          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mb-2">
            <div className="bg-blue-500 h-full w-[15%] rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
          </div>
          <p className="text-[10px] text-slate-500">2 of 12 lessons completed</p>
        </div>
      </div>
    </aside>
  );
};
