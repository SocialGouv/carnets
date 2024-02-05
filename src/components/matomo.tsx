"use client";

import Script from "next/script";
import { ENV } from "@/utils/env";

export default function Matomo() {
  return (
    <>
      {ENV === "prod" ? (
        <Script
          id="matomo"
          onReady={() => {
            // @ts-ignore
            var _paq = (window._paq = window._paq || []);
            /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
            _paq.push(["trackPageView"]);
            _paq.push(["enableLinkTracking"]);
            (function () {
              var u = "https://matomo.fabrique.social.gouv.fr/";
              _paq.push(["setTrackerUrl", u + "matomo.php"]);
              _paq.push(["setSiteId", "24"]);
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
