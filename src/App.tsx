import React, { useState } from 'react';
import { User, Phone, MapPin, Calendar, ArrowRight, CheckCircle, MessageSquare } from 'lucide-react';

export default function App() {
    const [submitted, setSubmitted] = useState(false);

    // Link do WhatsApp fornecido pelo usuário
    const whatsappLink = "https://chat.whatsapp.com/DXJR7TD0viR5Fu05WtBjCn?mode=hq1tcli";

    // Link real do Google Forms (ajustado para /formResponse para permitir o envio programático)
    const googleFormAction = "https://docs.google.com/forms/d/e/1FAIpQLSdoKIWvuIN4il5iokYQEvBFHwU6bZJEJ1GxMdc3DREV5xhwBg/formResponse";

    // IMPORTANTE: O usuário deve substituir os IDs abaixo pelos IDs reais do seu Google Form.
    // Como achar os IDs: 
    // 1. Abra o formulário no Google (visualização pública).
    // 2. Clique com o botão direito no campo e escolha "Inspecionar".
    // 3. Procure pelo atributo 'name' que começa com "entry.XXXXXXXX" (ex: entry.12345678).
    const entryIds = {
        name: "entry.909365028",
        phone: "entry.882237367",
        address: "entry.574474001",
        age: "entry.203718756"
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        // Simulação de envio para o Google Forms via No-Cors (evita erro de cross-origin bloqueando o envio)
        try {
            await fetch(googleFormAction, {
                method: 'POST',
                mode: 'no-cors',
                body: formData
            });
        } catch (error) {
            console.error("Erro ao enviar para o Google Forms:", error);
        }

        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
                <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center space-y-6 animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
                        <CheckCircle className="w-12 h-12" />
                    </div>
                    <h2 className="text-3xl font-black text-slate-800 uppercase italic">Cadastrado!</h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        Seja bem-vindo(a) à família Nova Geração! Agora você também faz parte dessa história. 🎭💙
                    </p>
                    <div className="pt-4">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-black py-5 px-8 rounded-2xl shadow-xl shadow-green-200 transform transition hover:-translate-y-1 active:translate-y-0 text-xl uppercase tracking-wider"
                        >
                            <MessageSquare className="w-7 h-7" />
                            Entrar no Grupo
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                    <p className="text-sm text-slate-400">Clique no botão acima para participar do nosso grupo exclusivo.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center p-4 py-8">
            <div className="max-w-3xl w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                {/* Header com Logo e Texto de Boas-vindas */}
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                    <div className="w-40 h-40 flex-shrink-0 flex items-center justify-center relative group">
                        <img
                            src="./logo.jpg"
                            alt="Logo Nova Geração"
                            className="w-full h-full object-contain rounded-full shadow-lg border-4 border-blue-50 group-hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                                // Fallback caso a imagem não carregue
                                e.currentTarget.src = "https://api.placeholder.com/160/160?text=NOVA+GERAÇÃO";
                            }}
                        />
                    </div>

                    <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
                        <h1 className="text-2xl font-black text-blue-950 uppercase tracking-tighter leading-none mb-2">Seja muito bem-vindo(a) à Turma Nova Geração! 🎭</h1>
                        <p>Recebemos você com muita alegria. A partir de agora, você passa a fazer parte de uma história construída com amizade, respeito e amor pela cultura popular.</p>
                        <p>A Turma Nova Geração nasceu no bairro de Campo Grande, Zona Oeste do Rio de Janeiro, há <span className="font-extrabold text-blue-700 px-1.5 py-0.5 bg-blue-50 rounded italic">26 anos</span> formada inicialmente por amigos e familiares que compartilhavam o mesmo sonho: manter viva a tradição do bate-bola, valorizando a cultura, a criatividade e a união.</p>
                        <p>Ao longo dos anos, a Nova Geração se tornou muito mais do que uma turma de carnaval. Tornou-se uma família cultural, que promove amizade, tradição, eventos culturais e ações sociais, sempre com o objetivo de fortalecer nossa identidade e preservar essa manifestação tão importante da cultura carioca.</p>
                        <p>Aqui acreditamos que quem tem amigo tem tudo, e cada novo integrante fortalece ainda mais essa corrente de união.</p>
                        <p>Por isso, queremos parabenizar você pela escolha de fazer parte da Nova Geração. Que essa caminhada seja marcada por alegria, companheirismo e muitas histórias boas para contar.</p>
                        <div className="pt-4 border-t border-slate-100 text-blue-900 font-bold text-center md:text-left italic text-base">
                            Seja bem-vindo(a) à família Nova Geração!<br />
                            Agora você também faz parte dessa história. 🎭💙
                        </div>
                    </div>
                </div>

                {/* Bloco do Formulário */}
                <div className="max-w-md mx-auto w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
                    <div className="bg-gradient-to-r from-blue-800 to-indigo-950 p-6 text-white text-center">
                        <h2 className="text-2xl font-black tracking-tight uppercase">Faça seu Cadastro</h2>
                        <p className="text-blue-200 text-xs font-bold mt-1">É rápido e garante sua vaga no grupo</p>
                    </div>

                    <form
                        className="p-8 space-y-5"
                        onSubmit={handleSubmit}
                    >
                        {/* Nome */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-500 uppercase ml-1 tracking-wider">Nome Completo</label>
                            <div className="relative group">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-blue-700 transition-colors" />
                                <input
                                    required
                                    name={entryIds.name}
                                    type="text"
                                    placeholder="Como está no seu RG"
                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:outline-none focus:border-blue-700 focus:bg-white transition-all text-slate-700 font-medium"
                                />
                            </div>
                        </div>

                        {/* Telefone */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-500 uppercase ml-1 tracking-wider">Telefone (WhatsApp)</label>
                            <div className="relative group">
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-blue-700 transition-colors" />
                                <input
                                    required
                                    name={entryIds.phone}
                                    type="tel"
                                    placeholder="(21) 99999-9999"
                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:outline-none focus:border-blue-700 focus:bg-white transition-all text-slate-700 font-medium"
                                />
                            </div>
                        </div>

                        {/* Endereço */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-500 uppercase ml-1 tracking-wider">Endereço</label>
                            <div className="relative group">
                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-blue-700 transition-colors" />
                                <input
                                    required
                                    name={entryIds.address}
                                    type="text"
                                    placeholder="Rua, número e bairro"
                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:outline-none focus:border-blue-700 focus:bg-white transition-all text-slate-700 font-medium"
                                />
                            </div>
                        </div>

                        {/* Idade */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-500 uppercase ml-1 tracking-wider">Idade</label>
                            <div className="relative group">
                                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-blue-700 transition-colors" />
                                <input
                                    required
                                    name={entryIds.age}
                                    type="number"
                                    placeholder="Ex: 25"
                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:outline-none focus:border-blue-700 focus:bg-white transition-all text-slate-700 font-medium"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-black py-5 rounded-2xl shadow-xl shadow-blue-100 transform transition hover:-translate-y-1 active:translate-y-0 text-lg uppercase tracking-widest mt-4"
                        >
                            Concluir Cadastro
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
