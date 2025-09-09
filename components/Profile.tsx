
import React from 'react';
import { Post } from './Post';
import type { Post as PostType } from '../types';

const mockProfileUser = {
  id: 'u1',
  name: 'Pablo Nunes',
  handle: '@pablonunes',
  avatarUrl: 'https://picsum.photos/150/150?random=1',
  course: 'Desenvolvimento de Sistemas',
  etec: 'ETEC de Guarulhos',
  bio: 'Desenvolvedor Chefe na Cronos Swart. Entusiasta de IA e tecnologias web. Focado em criar soluções que impactam positivamente a educação.',
  followers: 1250,
  following: 340,
  postsCount: 58,
  bannerUrl: 'https://picsum.photos/1000/300?random=20'
};

const mockUserPosts: PostType[] = [
    {
        id: 'p3',
        author: mockProfileUser,
        content: 'Explorando a integração da API Gemini no nosso novo projeto da faculdade. As possibilidades para IA generativa na educação são incríveis!',
        // FIX: Added missing 'type' property to conform to PostType.
        type: 'text',
        timestamp: '1 day ago',
        likes: 98,
        comments: 12,
        shares: 5
    },
    {
        id: 'p4',
        author: mockProfileUser,
        content: 'Sessão de mentoria hoje com os alunos do primeiro semestre. É ótimo poder compartilhar um pouco de experiência e ajudar a nova geração. #Mentoria #ETEC',
        // FIX: Added missing 'type' property to conform to PostType.
        type: 'image',
        imageUrl: 'https://picsum.photos/600/400?random=6',
        timestamp: '3 days ago',
        likes: 154,
        comments: 22,
        shares: 11
    }
];

export const Profile: React.FC = () => {
  return (
    <div className="bg-dark-surface border border-dark-border rounded-lg overflow-hidden">
      <div>
        <img src={mockProfileUser.bannerUrl} alt="Banner" className="w-full h-48 object-cover" />
      </div>
      <div className="p-4 -mt-20">
        <div className="flex justify-between items-end">
          <img src={mockProfileUser.avatarUrl} alt={mockProfileUser.name} className="w-32 h-32 rounded-full border-4 border-dark-surface" />
          <button className="bg-brand-red text-white font-bold py-2 px-4 rounded-full hover:bg-opacity-90 transition">
            Edit Profile
          </button>
        </div>
        <div className="mt-4">
          <h2 className="text-2xl font-bold">{mockProfileUser.name}</h2>
          <p className="text-dark-text-secondary">{mockProfileUser.handle}</p>
        </div>
        <p className="mt-4">{mockProfileUser.bio}</p>
        <div className="mt-4 text-dark-text-secondary text-sm">
          <p>{mockProfileUser.course} @ {mockProfileUser.etec}</p>
        </div>
        <div className="mt-4 flex gap-6">
          <p><span className="font-bold text-dark-text">{mockProfileUser.following}</span> Following</p>
          <p><span className="font-bold text-dark-text">{mockProfileUser.followers}</span> Followers</p>
           <p><span className="font-bold text-dark-text">{mockProfileUser.postsCount}</span> Posts</p>
        </div>
      </div>
      <div className="border-t border-dark-border mt-4">
        <h3 className="p-4 text-lg font-bold">Posts</h3>
        <div className="space-y-px">
            {mockUserPosts.map(post => <Post key={post.id} post={post} />)}
        </div>
      </div>
    </div>
  );
};
