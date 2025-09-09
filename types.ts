export interface User {
  id: string;
  name: string;
  handle: string;
  avatarUrl: string;
  course: string;
  etec: string;
  isOfficial?: boolean;
}

export interface Post {
  id: string;
  author: User;
  content: string;
  type: 'text' | 'image' | 'video' | 'document' | 'link';
  imageUrl?: string;
  linkPreview?: {
    url: string;
    title: string;
    description: string;
    image: string;
  };
  document?: {
    name: string;
    url: string;
    type: 'PDF' | 'DOCX' | 'PPTX';
  };
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
}

export type View = 'feed' | 'explore' | 'notifications' | 'messages' | 'profile' | 'projects' | 'networking';
