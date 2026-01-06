
// Added React import to fix the namespace error for React.ReactNode
import React from 'react';

export interface SubTopic {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface Topic {
  id: string;
  title: string;
  icon: string;
  subTopics: SubTopic[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
