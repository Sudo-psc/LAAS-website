'use client';

import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setShowBanner(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());

    // Enable Google Analytics if present
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted'
      });
    }

    setShowBanner(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());

    // Disable Google Analytics if present
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied'
      });
    }

    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-4 border-blue-600 shadow-2xl"
        >
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              {/* Icon and Text */}
              <div className="flex items-start gap-4 flex-1">
                <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                  <Cookie className="text-blue-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    Cookies e Privacidade 🍪
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Utilizamos cookies para melhorar sua experiência, personalizar conteúdo e analisar nosso tráfego.
                    Ao clicar em "Aceitar", você concorda com o uso de cookies conforme nossa{' '}
                    <a href="/privacidade" className="text-blue-600 underline hover:text-blue-800">
                      Política de Privacidade
                    </a>.
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    Conforme LGPD (Lei Geral de Proteção de Dados)
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <button
                  onClick={rejectCookies}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Recusar
                </button>
                <button
                  onClick={acceptCookies}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl"
                >
                  Aceitar Cookies
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setShowBanner(false)}
                className="absolute top-4 right-4 md:relative md:top-0 md:right-0 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Fechar"
              >
                <X size={24} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
