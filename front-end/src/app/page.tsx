import HomePage from "./homePage/page";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-5RFJH56K92"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-5RFJH56K92');
        `}
      </Script>

      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6187276285459648"
        crossOrigin="anonymous"
      />

      <div>
        <HomePage />
      </div>
    </>
  );
}
