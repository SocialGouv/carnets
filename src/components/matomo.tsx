"use client";

import Script from "next/script";

import {
  NEXT_PUBLIC_MATOMO_URL,
  NEXT_PUBLIC_MATOMO_SITE_ID,
} from "@/utils/env";

export default function Matomo() {
  return (
    <>
      {NEXT_PUBLIC_MATOMO_URL && NEXT_PUBLIC_MATOMO_SITE_ID ? (
        <Script
          id="matomo"
          onReady={() => {
            // @ts-ignore
            var _paq = (window._paq = window._paq || []);
            /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
            _paq.push(["trackPageView"]);
            _paq.push(["enableLinkTracking"]);
            (function () {
              var u = NEXT_PUBLIC_MATOMO_URL;
              _paq.push(["setTrackerUrl", u + "matomo.php"]);
              _paq.push(["setSiteId", NEXT_PUBLIC_MATOMO_SITE_ID]);
              var d = document,
                g = d.createElement("script"),
                s = d.getElementsByTagName("script")[0];
              g.async = true;
              g.src = u + "matomo.js";
              s.parentNode?.insertBefore(g, s);
            })();
          }}
        />
      ) : null}
    </>
  );
}
