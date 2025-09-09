
import React from 'react';
import { ProjectIcon } from './Icons';

const projects = [
  {
    id: 'proj1',
    title: 'Sistema de Gestão para Biblioteca Escolar',
    supervisor: 'Prof. Ricardo Almeida',
    members: ['Ana Beatriz', 'Carlos Eduardo', 'Fernanda Lima'],
    status: 'Concluído',
    imageUrl: 'https://picsum.photos/400/200?random=40',
  },
  {
    id: 'proj2',
    title: 'Aplicativo de Gamificação para Estudo de Química',
    supervisor: 'Prof.ª Mônica Souza',
    members: ['Lucas Pereira', 'Juliana Costa', 'Rafael Martins', 'Beatriz Santos'],
    status: 'Em Andamento',
    imageUrl: 'https://picsum.photos/400/200?random=41',
  },
  {
    id: 'proj3',
    title: 'Análise de Sentimentos em Redes Sociais com IA',
    supervisor: 'Prof. Fábio Gusmão',
    members: ['Pablo Nunes', 'Vinicius Moraes'],
    status: 'Em Andamento',
    imageUrl: 'https://picsum.photos/400/200?random=42',
  },
];

const ProjectCard: React.FC<typeof projects[0]> = ({ title, supervisor, members, status, imageUrl }) => (
    <div className="bg-dark-surface border border-dark-border rounded-lg overflow-hidden hover:shadow-lg hover:shadow-brand-orange/10 transition">
        <img src={imageUrl} alt={`Project ${title}`} className="w-full h-40 object-cover" />
        <div className="p-4">
            <h3 className="font-bold text-lg text-dark-text">{title}</h3>
            <p className="text-dark-text-secondary text-sm mt-1">Supervisor: {supervisor}</p>
            <div className="mt-3">
                <h4 className="font-semibold text-sm">Membros:</h4>
                <div className="flex flex-wrap gap-2 mt-1">
                    {members.map(member => (
                        <span key={member} className="text-xs bg-dark-bg px-2 py-1 rounded-full">{member}</span>
                    ))}
                </div>
            </div>
            <div className="mt-4 flex justify-between items-center">
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${status === 'Concluído' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                    {status}
                </span>
                <button className="text-brand-orange text-sm font-semibold hover:underline">View Details</button>
            </div>
        </div>
    </div>
);

export const Projects: React.FC = () => {
    return (
        <div>
            <div className="mb-6 p-4 bg-dark-surface border border-dark-border rounded-lg">
                <h2 className="text-2xl font-bold flex items-center gap-2"><ProjectIcon className="h-7 w-7 text-brand-orange"/> Espaço de Projetos</h2>
                <p className="text-dark-text-secondary mt-1">Explore os trabalhos acadêmicos e projetos da comunidade.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map(proj => <ProjectCard key={proj.id} {...proj} />)}
            </div>
        </div>
    );
};
