import { useEffect } from "react";
import { useRouter, Router } from "next/router";
import Script from "next/script";

declare global {
  interface Window {
    fbq: any;
  }
}

const handleRouteChange = () => {
  pageview();
};

const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

const pageview = () => {
  window.fbq("track", "PageView");
};

const FacebookPixel = () => {
  useEffect(() => {
    // This pageview only trigger first time (it is important for Pixel to have real information)
    pageview();
  }, []);

  useEffect(() => {
    // This hook works once the FB object is loaded
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <Script id="facebook-pixel">
      {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', ${FB_PIXEL_ID});
        fbq('track', 'PageView');
      `}
    </Script>
  );
};

export default FacebookPixel;
