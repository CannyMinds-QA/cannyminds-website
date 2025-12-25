"use client";

import { useState } from 'react';
import {
  Share as ShareIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  WhatsApp as WhatsAppIcon,
  Reddit as RedditIcon,
  ContentCopy as CopyIcon,
  Check as CheckIcon,
} from '@mui/icons-material';

interface SocialShareProps {
  title: string;
  description: string;
  url?: string;
}

export default function SocialShare({ title, description, url }: SocialShareProps) {
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Get current URL if not provided
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    reddit: `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleShare = (platform: string) => {
    window.open(shareLinks[platform as keyof typeof shareLinks], '_blank', 'width=600,height=400');
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Share Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
        aria-label="Share this page"
      >
        <ShareIcon sx={{ fontSize: 20 }} />
        <span className="font-medium">Share</span>
      </button>

      {/* Share Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Share Options */}
          <div className="absolute top-full right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-200 p-4 z-50 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-secondary">Share this page</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Social Media Buttons */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <button
                onClick={() => handleShare('facebook')}
                className="flex items-center gap-2 px-3 py-2 bg-[#1877f2] hover:bg-[#0c63d4] text-white rounded-lg transition-colors text-sm"
              >
                <FacebookIcon sx={{ fontSize: 18 }} />
                <span>Facebook</span>
              </button>

              <button
                onClick={() => handleShare('twitter')}
                className="flex items-center gap-2 px-3 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors text-sm"
              >
                <TwitterIcon sx={{ fontSize: 18 }} />
                <span>Twitter</span>
              </button>

              <button
                onClick={() => handleShare('linkedin')}
                className="flex items-center gap-2 px-3 py-2 bg-[#0a66c2] hover:bg-[#004182] text-white rounded-lg transition-colors text-sm"
              >
                <LinkedInIcon sx={{ fontSize: 18 }} />
                <span>LinkedIn</span>
              </button>

              <button
                onClick={() => handleShare('whatsapp')}
                className="flex items-center gap-2 px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors text-sm"
              >
                <WhatsAppIcon sx={{ fontSize: 18 }} />
                <span>WhatsApp</span>
              </button>

              <button
                onClick={() => handleShare('reddit')}
                className="flex items-center gap-2 px-3 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors text-sm"
              >
                <RedditIcon sx={{ fontSize: 18 }} />
                <span>Reddit</span>
              </button>
            </div>

            {/* Copy Link */}
            <div className="pt-3 border-t border-gray-200">
              <button
                onClick={handleCopyLink}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors text-sm font-medium"
              >
                {copied ? (
                  <>
                    <CheckIcon sx={{ fontSize: 18, color: '#22c55e' }} />
                    <span className="text-green-600">Link Copied!</span>
                  </>
                ) : (
                  <>
                    <CopyIcon sx={{ fontSize: 18 }} />
                    <span>Copy Link</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
