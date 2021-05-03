import * as Sentry from "@sentry/browser"
import Document, { Head, Html, Main, NextScript } from "next/document"
import React from "react"

process.on("unhandledRejection", (err) => {
  Sentry.captureException(err)
})

process.on("uncaughtException", (err) => {
  Sentry.captureException(err)
})

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Carnets</title>
          <link rel="shortcut icon" href="/favicon.png" />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                var _paq = window._paq || []
                /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
                _paq.push(["trackPageView"])
                _paq.push(["enableLinkTracking"])
                ;(function () {
                  var u = "https://matomo.fabrique.social.gouv.fr/"
                  _paq.push(["setTrackerUrl", u + "matomo.php"])
                  _paq.push(["setSiteId", "24"])
                  var d = document,
                    g = d.createElement("script"),
                    s = d.getElementsByTagName("script")[0]
                  g.type = "text/javascript"
                  g.async = true
                  g.defer = true
                  g.src = u + "matomo.js"
                  s.parentNode.insertBefore(g, s)
                })()
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
