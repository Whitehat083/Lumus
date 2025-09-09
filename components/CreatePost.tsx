import React, { useState } from 'react';
import type { User } from '../types';
import { ImageIcon, AIGenerateIcon, VideoIcon, DocumentIcon } from './Icons';
import { generatePostIdea } from '../services/geminiService';
import { Modal } from './Modal';

interface CreatePostProps {
  user: User;
  onCreatePost: (content: string) => void;
}

export const CreatePost: React.FC<CreatePostProps> = ({ user, onCreatePost }) => {
  const [content, setContent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [aiTopic, setAiTopic] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');

  const handlePost = () => {
    if (content.trim()) {
      onCreatePost(content);
      setContent('');
    }
  };

  const handleGenerateIdea = async () => {
    if (!aiTopic.trim()) return;
    setIsGenerating(true);
    setGeneratedContent('');
    const idea = await generatePostIdea(aiTopic);
    setGeneratedContent(idea);
    setIsGenerating(false);
  };
  
  const useGeneratedContent = () => {
    setContent(generatedContent);
    setIsModalOpen(false);
    setGeneratedContent('');
    setAiTopic('');
  }

  return (
    <>
      <div className="bg-dark-surface border border-dark-border rounded-lg p-4">
        <div className="flex items-start gap-4">
          <img src={user.avatarUrl} alt={user.name} className="w-12 h-12 rounded-full" />
          <div className="flex-1">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Compartilhe algo com sua comunidade..."
              className="w-full bg-transparent text-lg text-dark-text placeholder-dark-text-secondary focus:outline-none resize-none"
              rows={3}
            ></textarea>
            <div className="flex justify-between items-center mt-2 pt-2 border-t border-dark-border">
              <div className="flex items-center gap-2 text-brand-orange">
                <button className="p-2 rounded-full hover:bg-dark-border transition" title="Add Image">
                  <ImageIcon className="h-6 w-6" />
                </button>
                <button className="p-2 rounded-full hover:bg-dark-border transition" title="Add Video">
                  <VideoIcon className="h-6 w-6" />
                </button>
                 <button className="p-2 rounded-full hover:bg-dark-border transition" title="Add Document">
                  <DocumentIcon className="h-6 w-6" />
                </button>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="p-2 rounded-full hover:bg-dark-border transition"
                  title="Generate idea with AI"
                >
                  <AIGenerateIcon className="h-6 w-6" />
                </button>
              </div>
              <button
                onClick={handlePost}
                disabled={!content.trim()}
                className="bg-brand-orange text-white font-bold py-2 px-6 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-opacity-90 transition"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4">Generate Post Idea with AI</h2>
        <p className="text-dark-text-secondary mb-4">Describe the topic, and our AI will help you craft a post.</p>
        <input
          type="text"
          value={aiTopic}
          onChange={(e) => setAiTopic(e.target.value)}
          placeholder="e.g., My final project on renewable energy"
          className="w-full bg-dark-bg border border-dark-border rounded-lg py-2 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-brand-orange"
        />
        <button
          onClick={handleGenerateIdea}
          disabled={isGenerating || !aiTopic.trim()}
          className="w-full bg-brand-orange text-white font-bold py-2 px-6 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-opacity-90 transition"
        >
          {isGenerating ? 'Generating...' : 'Generate Idea'}
        </button>

        {generatedContent && (
            <div className="mt-4 p-4 bg-dark-bg rounded-lg border border-dark-border">
                <p className="whitespace-pre-wrap">{generatedContent}</p>
                <button onClick={useGeneratedContent} className="mt-4 bg-gray-600 text-white font-bold py-2 px-4 rounded-full w-full hover:bg-gray-500 transition">
                    Use This Text
                </button>
            </div>
        )}
      </Modal>
    </>
  );
};
