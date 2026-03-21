"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import Link from "next/link";

type ConsentState = "accepted" | "rejected" | null;

export default function CookieConsent() {
    const [consent, setConsent] = useState<ConsentState>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem("cookie_consent") as ConsentState;
        if (stored === "accepted" || stored === "rejected") {
            setConsent(stored);
        } else {
            const timer = setTimeout(() => setVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie_consent", "accepted");
        setConsent("accepted");
        setVisible(false);
    };

    const handleReject = () => {
        localStorage.setItem("cookie_consent", "rejected");
        setConsent("rejected");
        setVisible(false);
    };

    return (
        <>
            {/* Analytics & chat scripts — only loaded after explicit consent */}
            {consent === "accepted" && (
                <>
                    <Script
                        id="tawk-to-integration"
                        strategy="afterInteractive"
                        dangerouslySetInnerHTML={{
                            __html: `
                                var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                                (function(){
                                    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                                    s1.async=true;
                                    s1.src='https://embed.tawk.to/60c47dbe7f4b000ac0373a0c/1f7vomd3j';
                                    s1.charset='UTF-8';
                                    s1.setAttribute('crossorigin','*');
                                    if (s0 && s0.parentNode) {
                                        s0.parentNode.insertBefore(s1,s0);
                                    } else {
                                        document.head.appendChild(s1);
                                    }
                                })();
                            `,
                        }}
                    />
                    <Script
                        id="clarity-script"
                        strategy="afterInteractive"
                        dangerouslySetInnerHTML={{
                            __html: `
                                (function(c,l,a,r,i,t,y){
                                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                                })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
                            `,
                        }}
                    />
                    <Script
                        src="https://analytics.ahrefs.com/analytics.js"
                        data-key="0QPPhEaCa6E3iNGO8b5ttw"
                        strategy="lazyOnload"
                    />
                </>
            )}

            {/* Cookie consent bottom banner — min 20vh, removed from DOM on dismiss */}
            {visible && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label="Cookie consent"
                    className="fixed bottom-0 left-0 right-0 z-[200] min-h-[20vh] bg-gray-900 border-t-2 border-primary/40 shadow-2xl animate-cookie-slide-up"
                >
                    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">

                        {/* Col 1 — Branding + description */}
                        <div className="flex items-start gap-4">
                            <span className="text-5xl shrink-0 mt-1" aria-hidden="true">🍪</span>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-widest text-primary-300 mb-1">Privacy Notice</p>
                                <h2 className="text-xl font-bold text-white mb-2 leading-snug">
                                    We value your privacy
                                </h2>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    CannyMinds Technology uses cookies to improve your experience,
                                    power our live chat support, and understand how visitors use our site.
                                    Your data is never sold to third parties.
                                </p>
                                <p className="text-xs text-gray-500 mt-2">
                                    Read our{" "}
                                    <Link href="/privacy-policy" className="text-primary-300 underline hover:text-white transition-colors font-medium">
                                        Privacy Policy
                                    </Link>{" "}
                                    and{" "}
                                    <Link href="/privacy-policy#cookies" className="text-primary-300 underline hover:text-white transition-colors font-medium">
                                        Cookie Policy
                                    </Link>{" "}
                                    for full details.
                                </p>
                            </div>
                        </div>

                        {/* Col 2 — Cookie categories */}
                        <div className="flex flex-col gap-3">
                            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">What we use</p>
                            <div className="flex items-start gap-3">
                                <span className="mt-0.5 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                                    <span className="text-green-400 text-xs">✓</span>
                                </span>
                                <div>
                                    <p className="text-sm font-semibold text-white">Essential Cookies</p>
                                    <p className="text-xs text-gray-500">Always active — required for core site functionality</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                    <span className="text-primary-300 text-xs">◎</span>
                                </span>
                                <div>
                                    <p className="text-sm font-semibold text-white">Analytics Cookies</p>
                                    <p className="text-xs text-gray-500">Microsoft Clarity &amp; Ahrefs — page behaviour &amp; traffic insights</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                    <span className="text-primary-300 text-xs">◎</span>
                                </span>
                                <div>
                                    <p className="text-sm font-semibold text-white">Live Chat Cookies</p>
                                    <p className="text-xs text-gray-500">Tawk.to — enables real-time visitor support chat</p>
                                </div>
                            </div>
                        </div>

                        {/* Col 3 — Actions */}
                        <div className="flex flex-col gap-3 lg:pl-4">
                            <button
                                onClick={handleAccept}
                                className="w-full px-6 py-3 text-base font-semibold text-white bg-primary rounded-xl hover:bg-primary/90 transition-colors duration-200 shadow-lg"
                            >
                                Accept All Cookies
                            </button>
                            <button
                                onClick={handleReject}
                                className="w-full px-6 py-3 text-base font-medium text-gray-300 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 hover:border-white/40 transition-colors duration-200"
                            >
                                Reject Non-Essential
                            </button>
                            <p className="text-center text-xs text-gray-600 leading-relaxed">
                                You can change your preferences at any time by clearing your browser cookies.
                            </p>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
}
