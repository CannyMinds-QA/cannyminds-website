"use client";

import Script from 'next/script';

export default function TawkProvider() {
    return (
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
    );
}
