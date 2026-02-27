'use client';

import { useState } from 'react';
import {
    LinkedIn,
    Twitter,
    Facebook,
    Share,
    WhatsApp,
    Email,
    ContentCopy,
    Check,
} from '@mui/icons-material';

interface BlogSocialShareProps {
    url: string;
    title: string;
}

export default function BlogSocialShare({ url, title }: BlogSocialShareProps) {
    const [copied, setCopied] = useState(false);

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            alert('Failed to copy link');
        }
    };

    return (
        <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
                <Share sx={{ fontSize: 18 }} className="text-gray-500" />
                <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide">Share Article</h3>
            </div>
            <div className="space-y-2">
                <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0a66c2] hover:bg-[#004182] text-white rounded-lg transition-colors text-sm font-medium"
                    aria-label="Share on LinkedIn"
                >
                    <LinkedIn sx={{ fontSize: 18 }} />
                    <span>LinkedIn</span>
                </a>
                <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#1DA1F2] hover:bg-[#1a8cd8] text-white rounded-lg transition-colors text-sm font-medium"
                    aria-label="Share on Twitter"
                >
                    <Twitter sx={{ fontSize: 18 }} />
                    <span>Twitter</span>
                </a>
                <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#1877f2] hover:bg-[#0c63d4] text-white rounded-lg transition-colors text-sm font-medium"
                    aria-label="Share on Facebook"
                >
                    <Facebook sx={{ fontSize: 18 }} />
                    <span>Facebook</span>
                </a>
                <a
                    href={`https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#1da851] text-white rounded-lg transition-colors text-sm font-medium"
                    aria-label="Share on WhatsApp"
                >
                    <WhatsApp sx={{ fontSize: 18 }} />
                    <span>WhatsApp</span>
                </a>
                <a
                    href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Check out this article: ${url}`)}`}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors text-sm font-medium"
                    aria-label="Share via Email"
                >
                    <Email sx={{ fontSize: 18 }} />
                    <span>Email</span>
                </a>
                <button
                    onClick={handleCopyLink}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors text-sm font-medium"
                    aria-label="Copy link"
                >
                    {copied ? (
                        <>
                            <Check sx={{ fontSize: 18 }} />
                            <span>Copied!</span>
                        </>
                    ) : (
                        <>
                            <ContentCopy sx={{ fontSize: 18 }} />
                            <span>Copy Link</span>
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}
