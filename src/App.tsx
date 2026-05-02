/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CheckCircle, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const devProLink = "https://t.me/+egChYklTC8o1Yjkx";
  const concursosProLink = "https://t.me/FoxConcursos";
  const englishProLink = "https://t.me/+twPMpDMNKl85ZDAx";
  const digitalProLink = "#"; // Faltou você me enviar o link!

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center p-6 font-sans text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md flex flex-col items-center"
      >
        {/* Success Icon */}
        <div className="bg-green-900/30 p-4 rounded-full mb-6">
          <CheckCircle className="w-16 h-16 text-green-400" strokeWidth={2} />
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight leading-tight">
          Seu acesso foi liberado!
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          Seu pagamento foi confirmado. Clique nos botões abaixo para entrar nos grupos exclusivos.
        </p>

        {/* CTA Buttons */}
        <div className="w-full flex flex-col gap-4">
          <a 
            href={devProLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full"
          >
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-4 px-6 rounded-xl shadow-lg shadow-blue-900/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center gap-3 cursor-pointer">
              <MessageCircle className="w-6 h-6" />
              ENTRAR NO DEVPRO
            </button>
          </a>

          <a 
            href={concursosProLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full"
          >
            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg py-4 px-6 rounded-xl shadow-lg shadow-green-900/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center gap-3 cursor-pointer">
              <MessageCircle className="w-6 h-6" />
              ENTRAR NO CONCURSOSPRO
            </button>
          </a>

          <a 
            href={englishProLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full"
          >
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg py-4 px-6 rounded-xl shadow-lg shadow-purple-900/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center gap-3 cursor-pointer">
              <MessageCircle className="w-6 h-6" />
              ENTRAR NO ENGLISHPRO
            </button>
          </a>

          <a 
            href={digitalProLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full"
          >
            <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg py-4 px-6 rounded-xl shadow-lg shadow-orange-900/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center gap-3 cursor-pointer">
              <MessageCircle className="w-6 h-6" />
              ENTRAR NO DIGITALPRO+
            </button>
          </a>
        </div>

        {/* Important Message */}
        <p className="text-sm text-gray-400 mt-8 bg-gray-900 py-3 px-4 rounded-lg border border-gray-800">
          <span className="font-semibold text-gray-200">Importante:</span> entre nos grupos agora para garantir seu acesso ao conteúdo.
        </p>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-gray-800 w-full">
          <p className="text-sm text-gray-500">
            Se tiver problemas para acessar, entre em contato com o suporte.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

