/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CheckCircle, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  // Placeholder link - User should replace this with their actual Telegram invite link
  const telegramLink = "https://t.me/FoxConcursos";

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 font-sans text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md flex flex-col items-center"
      >
        {/* Success Icon */}
        <div className="bg-green-100 p-4 rounded-full mb-6">
          <CheckCircle className="w-16 h-16 text-green-600" strokeWidth={2} />
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight leading-tight">
          Seu acesso foi liberado!
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Seu pagamento foi confirmado. Clique no botão abaixo para entrar no grupo exclusivo do curso.
        </p>

        {/* CTA Button */}
        <a 
          href={telegramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full"
        >
          <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg py-4 px-6 rounded-xl shadow-lg shadow-green-600/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center gap-3 cursor-pointer">
            <MessageCircle className="w-6 h-6" />
            ENTRAR NO GRUPO AGORA
          </button>
        </a>

        {/* Important Message */}
        <p className="text-sm text-gray-500 mt-6 bg-gray-50 py-3 px-4 rounded-lg border border-gray-100">
          <span className="font-semibold text-gray-700">Importante:</span> entre no grupo agora para garantir seu acesso ao conteúdo.
        </p>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-gray-100 w-full">
          <p className="text-sm text-gray-400">
            Se tiver problemas para acessar, entre em contato com o suporte.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

