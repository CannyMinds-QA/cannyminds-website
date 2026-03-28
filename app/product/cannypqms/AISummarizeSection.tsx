"use client";

import { useState } from "react";

const basePrompt =
  "Act as a pharmaceutical quality management expert. Please read the CannyPQMS pharmaceutical quality management system page at https://www.cannymindstech.com/product/cannypqms and provide a professional summary of the software's key modules, compliance capabilities, and which types of pharma manufacturers it is best suited for.";

const encodedPrompt = encodeURIComponent(basePrompt);

export default function AISummarizeSection() {
  const [isGeminiModalOpen, setIsGeminiModalOpen] = useState(false);
  const [isPromptCopied, setIsPromptCopied] = useState(false);

  const handleCopyAndOpenGemini = () => {
    navigator.clipboard.writeText(basePrompt);
    setIsPromptCopied(true);
    setTimeout(() => {
      window.open("https://gemini.google.com/app", "_blank", "noopener,noreferrer");
      setIsGeminiModalOpen(false);
      setIsPromptCopied(false);
    }, 1500);
  };

  return (
    <>
      <section className="py-12 bg-slate-950 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>
                <span className="text-slate-400 text-xs font-semibold uppercase tracking-widest">AI-Ready Content</span>
              </div>
              <p className="text-white font-bold text-lg">Too long? Let AI summarize it for you.</p>
              <p className="text-slate-400 text-sm mt-1">Ask your AI assistant to read and explain which modules matter for your facility.</p>
            </div>
            <div className="flex flex-wrap gap-2 sm:flex-shrink-0">
              <a
                href={`https://chatgpt.com/?q=${encodedPrompt}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-700 bg-slate-800 hover:bg-emerald-600 hover:border-emerald-600 text-slate-300 hover:text-white text-sm font-medium transition-all"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.032.067L9.72 19.95a4.5 4.5 0 0 1-6.12-1.645zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.843-3.372L15.115 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.403-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/></svg>
                ChatGPT
              </a>
              <a
                href={`https://claude.ai/new?q=${encodedPrompt}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-700 bg-slate-800 hover:bg-amber-600 hover:border-amber-600 text-slate-300 hover:text-white text-sm font-medium transition-all"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.304 1.153c-.41-1.537-2.63-1.537-3.04 0L11.97 9.528a1.6 1.6 0 0 1-1.066 1.072L2.53 12.94c-1.537.41-1.537 2.63 0 3.04l8.375 2.294a1.6 1.6 0 0 1 1.072 1.067l2.29 8.346c.41 1.537 2.63 1.537 3.04 0l2.294-8.374a1.6 1.6 0 0 1 1.067-1.073l8.346-2.29c1.537-.41 1.537-2.63 0-3.04l-8.374-2.294a1.6 1.6 0 0 1-1.073-1.067z"/></svg>
                Claude
              </a>
              <button
                onClick={() => setIsGeminiModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-700 bg-slate-800 hover:bg-blue-600 hover:border-blue-600 text-slate-300 hover:text-white text-sm font-medium transition-all"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 24A14.304 14.304 0 0 0 0 12 14.304 14.304 0 0 0 12 0a14.305 14.305 0 0 0 12 12 14.305 14.305 0 0 0-12 12"/></svg>
                Gemini
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gemini Prompt Modal */}
      {isGeminiModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 sm:p-8 border border-gray-100 overflow-hidden relative">
            <button
              onClick={() => setIsGeminiModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>

            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 border border-blue-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Summarize with Gemini</h3>
                <p className="text-sm text-gray-500 mt-0.5">Google Gemini requires manual prompt pasting.</p>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              To ensure security, Gemini restricts auto-filling prompts from external links. Please copy the optimized prompt below and paste it into the chat once Gemini opens.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6">
              <p className="text-sm font-medium text-slate-800 break-words font-mono leading-relaxed">
                {basePrompt}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-end mt-2">
              <button
                onClick={() => setIsGeminiModalOpen(false)}
                className="px-5 py-2.5 rounded-xl font-medium text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 hover:text-gray-900 transition-colors w-full sm:w-auto"
              >
                Cancel
              </button>
              <button
                onClick={handleCopyAndOpenGemini}
                disabled={isPromptCopied}
                className="px-6 py-2.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-sm w-full sm:w-auto disabled:opacity-90 disabled:cursor-not-allowed"
              >
                {isPromptCopied ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                    Copied! Opening tab...
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                    Copy Prompt &amp; Open Gemini
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
