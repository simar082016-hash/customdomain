
import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TutorAssistant } from './components/TutorAssistant';
import { IAM_TOPICS } from './constants';
import { SubTopic } from './types';

const App: React.FC = () => {
  const [activeSubTopic, setActiveSubTopic] = useState<SubTopic>(IAM_TOPICS[0].subTopics[0]);
  const [activeTopicId, setActiveTopicId] = useState<string>(IAM_TOPICS[0].id);

  const handleSelectSubTopic = (topicId: string, subTopic: SubTopic) => {
    setActiveTopicId(topicId);
    setActiveSubTopic(subTopic);
  };

  // Helper to find next subtopic
  const getNextSubTopic = () => {
    const currentTopic = IAM_TOPICS.find(t => t.id === activeTopicId);
    if (!currentTopic) return null;
    const currentIndex = currentTopic.subTopics.findIndex(s => s.id === activeSubTopic.id);
    
    if (currentIndex < currentTopic.subTopics.length - 1) {
      return { topicId: activeTopicId, subTopic: currentTopic.subTopics[currentIndex + 1] };
    }
    
    const topicIndex = IAM_TOPICS.findIndex(t => t.id === activeTopicId);
    if (topicIndex < IAM_TOPICS.length - 1) {
      const nextTopic = IAM_TOPICS[topicIndex + 1];
      return { topicId: nextTopic.id, subTopic: nextTopic.subTopics[0] };
    }
    
    return null;
  };

  const nextInfo = getNextSubTopic();

  return (
    <div className="flex h-screen w-full bg-slate-50">
      <Sidebar 
        topics={IAM_TOPICS} 
        activeSubTopicId={activeSubTopic.id}
        onSelectSubTopic={handleSelectSubTopic}
      />

      <main className="flex-1 flex flex-col overflow-hidden relative">
        {/* Navigation Breadcrumb */}
        <header className="h-16 bg-white border-b border-slate-200 px-8 flex items-center justify-between shadow-sm z-10">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-slate-400">Curriculum</span>
            <i className="fa-solid fa-chevron-right text-[10px] text-slate-300"></i>
            <span className="text-slate-500">{IAM_TOPICS.find(t => t.id === activeTopicId)?.title}</span>
            <i className="fa-solid fa-chevron-right text-[10px] text-slate-300"></i>
            <span className="text-blue-600 font-semibold">{activeSubTopic.title}</span>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors text-sm px-3 py-1.5 rounded-lg border border-transparent hover:border-slate-200">
              <i className="fa-solid fa-bookmark"></i>
              <span>Save Lesson</span>
            </button>
            <div className="h-4 w-px bg-slate-200"></div>
            <button 
              disabled={!nextInfo}
              onClick={() => nextInfo && handleSelectSubTopic(nextInfo.topicId, nextInfo.subTopic)}
              className="bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/10 disabled:opacity-50"
            >
              Next Lesson
            </button>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto bg-[#fafbfc]">
          <div className="max-w-4xl mx-auto px-8 py-12">
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
              {activeSubTopic.content}
            </div>

            {/* Footer Navigation */}
            <div className="mt-16 pt-8 border-t border-slate-200 flex justify-between items-center">
              <div className="flex items-center gap-3 text-slate-400">
                {/* Simplified for now */}
              </div>

              {nextInfo && (
                <button 
                  onClick={() => handleSelectSubTopic(nextInfo.topicId, nextInfo.subTopic)}
                  className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-all text-right group"
                >
                  <div className="text-right">
                    <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Next Up</p>
                    <p className="text-sm font-semibold">{nextInfo.subTopic.title}</p>
                  </div>
                  <div className="p-2 border border-slate-200 rounded-lg group-hover:border-blue-200 group-hover:bg-blue-50">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Floating Assistant */}
        <TutorAssistant currentContext={`${activeSubTopic.title} in Salesforce. Explaining how identity works via a hotel analogy.`} />
      </main>
    </div>
  );
};

export default App;
