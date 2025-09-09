import React from 'react';
import { Post } from './Post';
import { CreatePost } from './CreatePost';
import type { Post as PostType, User } from '../types';

const mockUser: User = {
  id: 'u1',
  name: 'Pablo Nunes',
  handle: '@pablonunes',
  avatarUrl: 'https://picsum.photos/50/50?random=1',
  course: 'Desenvolvimento de Sistemas',
  etec: 'ETEC de Guarulhos',
};

const mockPosts: PostType[] = [
  {
    id: 'p1',
    author: {
      id: 'u2',
      name: 'Centro Paula Souza',
      handle: '@cps_oficial',
      avatarUrl: 'https://picsum.photos/50/50?random=2',
      course: 'Institucional',
      etec: 'CPS',
      isOfficial: true,
    },
    content: 'As inscrições para o #VestibulinhoETEC para o 2º semestre de 2024 estão abertas! Não perca a chance de estudar em uma das melhores instituições de ensino técnico do país. Acesse o site e inscreva-se!',
    type: 'text',
    timestamp: '2h ago',
    likes: 256,
    comments: 32,
    shares: 45,
  },
  {
    id: 'p2',
    author: {
      id: 'u3',
      name: 'Maria Oliveira',
      handle: '@maria_oliveira',
      avatarUrl: 'https://picsum.photos/50/50?random=3',
      course: 'Marketing',
      etec: 'ETEC de Artes',
    },
    content: 'Acabei de finalizar meu TCC sobre estratégias de marketing digital para pequenas empresas. Foi um desafio enorme, mas o resultado ficou incrível! Agradeço a todos os professores pelo apoio. #TCC #MarketingDigital',
    type: 'image',
    imageUrl: 'https://picsum.photos/600/400?random=5',
    timestamp: '5h ago',
    likes: 120,
    comments: 15,
    shares: 8,
  },
  {
    id: 'p5',
    author: {
      id: 'u4',
      name: 'Prof. Ricardo',
      handle: '@profricardo',
      avatarUrl: 'https://picsum.photos/50/50?random=4',
      course: 'Professor de T.I.',
      etec: 'ETEC de Guarulhos',
      isOfficial: true,
    },
    content: 'Pessoal, estou compartilhando o material de aula sobre Redes de Computadores. O arquivo contém os slides da apresentação e notas adicionais. Bons estudos! #Redes #MaterialDeAula',
    type: 'document',
    document: {
        name: 'Aula_05_-_Modelo_OSI.pdf',
        url: '#',
        type: 'PDF',
    },
    timestamp: '8h ago',
    likes: 78,
    comments: 9,
    shares: 21,
  },
  {
    id: 'p6',
    author: {
        id: 'u5',
        name: 'Júlia Santos',
        handle: '@juliasantos',
        avatarUrl: 'https://picsum.photos/50/50?random=7',
        course: 'Logística',
        etec: 'ETEC da Zona Leste',
    },
    content: 'Encontrei este artigo incrível sobre o futuro da logística com o uso de drones. Recomendo a leitura para quem se interessa pelo tema! #Logistica #Inovacao',
    type: 'link',
    linkPreview: {
        url: '#',
        title: 'The Future of Logistics: Drone Delivery and Automation',
        description: 'An in-depth look at how autonomous drones are set to revolutionize the supply chain and last-mile delivery processes across the globe.',
        image: 'https://picsum.photos/600/400?random=8'
    },
    timestamp: '1 day ago',
    likes: 92,
    comments: 11,
    shares: 14,
  }
];

export const Feed: React.FC = () => {
  // In a real app, this state would be managed more globally
  const [posts, setPosts] = React.useState<PostType[]>(mockPosts);

  const handleCreatePost = (content: string) => {
    const newPost: PostType = {
        id: `p${posts.length + 1}`,
        author: mockUser,
        content,
        type: 'text',
        timestamp: 'Just now',
        likes: 0,
        comments: 0,
        shares: 0,
    };
    setPosts([newPost, ...posts]);
  }

  return (
    <div className="space-y-6">
      <CreatePost user={mockUser} onCreatePost={handleCreatePost} />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};
