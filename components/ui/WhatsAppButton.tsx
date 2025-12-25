"use client";

import { useState } from 'react';
import { WhatsApp as WhatsAppIcon, Close as CloseIcon } from '@mui/icons-material';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappNumber = "919361801926";
  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}`;
  const message = "Need help? Chat with us!";

  const handleClick = () => {
    window.open(whatsappLink, '_blank', 'noopener,noreferrer');
  };

  const handleCloseTooltip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowTooltip(false);
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">

        {/* Tooltip Message */}
        {showTooltip && (
          <div className="hidden sm:flex items-center gap-2 bg-white shadow-2xl rounded-lg px-4 py-3 border border-gray-200 animate-bounce-subtle max-w-xs">
            <div className="flex-1">
              <p className="text-sm font-semibold text-secondary mb-1">
                Have questions?
              </p>
              <p className="text-xs text-gray-600">
                {message}
              </p>
            </div>
            <button
              onClick={handleCloseTooltip}
              className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
              aria-label="Close tooltip"
            >
              <CloseIcon sx={{ fontSize: 18 }} />
            </button>
          </div>
        )}

        {/* WhatsApp Button */}
        <button
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="group relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300"
          aria-label="Chat with us on WhatsApp"
        >
          {/* Pulse Animation Ring */}
          <span className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping"></span>

          {/* WhatsApp Icon */}
          <div className="relative z-10">
            <WhatsAppIcon sx={{ fontSize: 32 }} />
          </div>

          {/* Hover Tooltip (Mobile) */}
          {isHovered && (
            <div className="sm:hidden absolute bottom-full right-0 mb-2 bg-gray-900 text-white text-xs py-2 px-3 rounded-lg whitespace-nowrap shadow-lg">
              Chat on WhatsApp
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          )}
        </button>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </>
  );
}
