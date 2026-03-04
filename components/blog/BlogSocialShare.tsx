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
            <div className="flex flex-wrap items-center gap-2">
                <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-2.5 bg-[#0a66c2]/10 hover:bg-[#0a66c2]/20 text-[#0a66c2] rounded-lg transition-colors"
                    title="Share on LinkedIn"
                    aria-label="Share on LinkedIn"
                >
                    <LinkedIn sx={{ fontSize: 20 }} />
                </a>
                <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-2.5 bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20 text-[#1DA1F2] rounded-lg transition-colors"
                    title="Share on Twitter"
                    aria-label="Share on Twitter"
                >
                    <Twitter sx={{ fontSize: 20 }} />
                </a>
                <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-2.5 bg-[#1877f2]/10 hover:bg-[#1877f2]/20 text-[#1877f2] rounded-lg transition-colors"
                    title="Share on Facebook"
                    aria-label="Share on Facebook"
                >
                    <Facebook sx={{ fontSize: 20 }} />
                </a>
                <a
                    href={`https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-2.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] rounded-lg transition-colors"
                    title="Share on WhatsApp"
                    aria-label="Share on WhatsApp"
                >
                    <WhatsApp sx={{ fontSize: 20 }} />
                </a>
                <a
                    href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Check out this article: ${url}`)}`}
                    className="flex items-center justify-center p-2.5 bg-gray-500/10 hover:bg-gray-500/20 text-gray-600 rounded-lg transition-colors"
                    title="Share via Email"
                    aria-label="Share via Email"
                >
                    <Email sx={{ fontSize: 20 }} />
                </a>
                <button
                    onClick={handleCopyLink}
                    className="flex items-center justify-center p-2.5 bg-gray-500/10 hover:bg-gray-500/20 text-gray-600 rounded-lg transition-colors"
                    title="Copy link"
                    aria-label="Copy link"
                >
                    {copied ? (
                        <Check sx={{ fontSize: 20 }} className="text-green-600" />
                    ) : (
                        <ContentCopy sx={{ fontSize: 20 }} />
                    )}
                </button>
            </div>
        </div>
    );
}
