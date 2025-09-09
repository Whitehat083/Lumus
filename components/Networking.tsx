
import React from 'react';
import { BriefcaseIcon } from './Icons';

const opportunities = [
  {
    id: 'o1',
    title: 'Estágio em Desenvolvimento Frontend',
    company: 'Cronos Swart',
    location: 'Remoto',
    type: 'Estágio',
    logo: 'https://picsum.photos/50/50?random=30',
  },
  {
    id: 'o2',
    title: 'Analista de Dados Jr.',
    company: 'Tech Solutions',
    location: 'São Paulo, SP',
    type: 'Júnior',
    logo: 'https://picsum.photos/50/50?random=31',
  },
  {
    id: 'o3',
    title: 'Estágio em Design UI/UX',
    company: 'Creative Minds',
    location: 'Híbrido',
    type: 'Estágio',
    logo: 'https://picsum.photos/50/50?random=32',
  },
];

const OpportunityCard: React.FC<typeof opportunities[0]> = ({ title, company, location, type, logo }) => (
    <div className="bg-dark-surface border border-dark-border p-4 rounded-lg flex items-start gap-4 hover:border-brand-orange/50 transition">
        <img src={logo} alt={`${company} logo`} className="w-12 h-12 rounded-md mt-1"/>
        <div className="flex-1">
            <h3 className="font-bold text-lg text-dark-text">{title}</h3>
            <p className="text-dark-text-secondary">{company}</p>
            <p className="text-dark-text-secondary text-sm mt-1">{location}</p>
            <div className="mt-2 flex items-center justify-between">
                <span className="text-xs bg-brand-orange/20 text-brand-orange font-semibold px-2 py-1 rounded-full">{type}</span>
                <button className="bg-brand-orange text-white text-sm font-semibold px-4 py-1.5 rounded-full hover:bg-opacity-90 transition">Apply Now</button>
            </div>
        </div>
    </div>
);


export const Networking: React.FC = () => {
  return (
    <div>
        <div className="mb-6 p-4 bg-dark-surface border border-dark-border rounded-lg">
            <h2 className="text-2xl font-bold flex items-center gap-2"><BriefcaseIcon className="h-7 w-7 text-brand-orange"/> Networking & Oportunidades</h2>
            <p className="text-dark-text-secondary mt-1">Conecte-se com empresas parceiras e encontre sua próxima oportunidade.</p>
        </div>
        <div className="space-y-4">
            {opportunities.map(op => <OpportunityCard key={op.id} {...op} />)}
        </div>
    </div>
  );
};
