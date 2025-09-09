import React, { useState } from 'react';
// FIX: Import UserIcon, which was used without being imported.
import { LumusIcon, CameraIcon, UserIcon } from './Icons';

interface RegistrationProps {
    onRegisterSuccess: () => void;
}

const etecList = [
    "ETEC de Guarulhos",
    "ETEC de Artes",
    "ETEC da Zona Leste",
    "ETEC Albert Einstein",
    "ETEC de São Paulo",
    "ETEC Getúlio Vargas",
    "ETEC Martin Luther King",
];

export const Registration: React.FC<RegistrationProps> = ({ onRegisterSuccess }) => {
    const [name, setName] = useState('');
    const [etec, setEtec] = useState('');
    const [bio, setBio] = useState('');
    const [avatar, setAvatar] = useState<File | null>(null);
    const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            // Validation
            if (!['image/jpeg', 'image/png'].includes(file.type)) {
                setErrors(prev => ({ ...prev, avatar: 'Formato inválido. Use JPG ou PNG.' }));
                return;
            }
            if (file.size > 2 * 1024 * 1024) { // 2MB
                setErrors(prev => ({ ...prev, avatar: 'A imagem deve ter no máximo 2MB.' }));
                return;
            }

            setAvatar(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatarPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
            setErrors(prev => ({ ...prev, avatar: '' }));
        }
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (name.trim().length < 3) {
            newErrors.name = 'O nome completo é obrigatório (mín. 3 caracteres).';
        }
        if (!etec) {
            newErrors.etec = 'Por favor, selecione sua ETEC.';
        }
        if (bio.length > 200) {
            newErrors.bio = 'A bio deve ter no máximo 200 caracteres.';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            // In a real app, you would send this data to a backend API
            console.log({ name, etec, bio, avatar });
            onRegisterSuccess();
        }
    };


  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center p-4">
      <div className="bg-dark-surface p-8 rounded-lg shadow-lg w-full max-w-md border border-dark-border">
        <div className="flex flex-col items-center mb-6">
            <LumusIcon className="h-12 w-12 text-brand-orange" />
            <h2 className="text-2xl font-bold text-center text-dark-text mt-2">Crie sua conta no Lumus</h2>
            <p className="text-dark-text-secondary text-center">Junte-se à rede da sua comunidade escolar.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div className="flex justify-center">
                 <input
                    type="file"
                    id="avatar-upload"
                    className="hidden"
                    accept="image/png, image/jpeg"
                    onChange={handleAvatarChange}
                />
                <label htmlFor="avatar-upload" className="relative cursor-pointer group">
                    {avatarPreview ? (
                        <img src={avatarPreview} alt="Preview" className="w-24 h-24 rounded-full object-cover border-2 border-dark-border" />
                    ) : (
                        <div className="w-24 h-24 rounded-full bg-dark-bg border-2 border-dashed border-dark-border flex items-center justify-center">
                           <UserIcon className="w-12 h-12 text-dark-text-secondary" />
                        </div>
                    )}
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                       <CameraIcon className="w-8 h-8 text-white"/>
                    </div>
                </label>
            </div>
            {errors.avatar && <p className="text-red-500 text-sm text-center">{errors.avatar}</p>}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-dark-text-secondary">Nome completo</label>
            <input 
                id="name"
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite seu nome completo..."
                className={`w-full bg-dark-bg border ${errors.name ? 'border-red-500' : 'border-dark-border'} rounded-lg py-2 px-4 mt-1 focus:outline-none focus:ring-2 focus:ring-brand-orange`} 
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="etec" className="block text-sm font-medium text-dark-text-secondary">ETEC de origem</label>
            <select
                id="etec"
                value={etec}
                onChange={(e) => setEtec(e.target.value)}
                className={`w-full bg-dark-bg border ${errors.etec ? 'border-red-500' : 'border-dark-border'} rounded-lg py-2 px-4 mt-1 focus:outline-none focus:ring-2 focus:ring-brand-orange`}
            >
                <option value="" disabled>Selecione sua unidade de ensino...</option>
                {etecList.map(item => <option key={item} value={item}>{item}</option>)}
            </select>
            {errors.etec && <p className="text-red-500 text-sm mt-1">{errors.etec}</p>}
          </div>
           <div>
            <label htmlFor="bio" className="block text-sm font-medium text-dark-text-secondary">Bio (Opcional)</label>
            <textarea 
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                maxLength={200}
                placeholder="Escreva algo sobre você (opcional)"
                className={`w-full bg-dark-bg border ${errors.bio ? 'border-red-500' : 'border-dark-border'} rounded-lg py-2 px-4 mt-1 focus:outline-none focus:ring-2 focus:ring-brand-orange resize-none`}
                rows={3}
             />
             <p className="text-xs text-right text-dark-text-secondary mt-1">{bio.length}/200</p>
            {errors.bio && <p className="text-red-500 text-sm mt-1">{errors.bio}</p>}
          </div>
          <button type="submit" className="w-full bg-brand-orange text-white font-bold py-3 px-6 rounded-full hover:bg-opacity-90 transition-transform active:scale-95">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};