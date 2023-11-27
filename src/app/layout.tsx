import Link from "next/link";
import { DsfrHead } from "@codegouvfr/react-dsfr/next-appdir/DsfrHead";
import { DsfrProvider } from "@codegouvfr/react-dsfr/next-appdir/DsfrProvider";
import { getHtmlAttributes } from "@codegouvfr/react-dsfr/next-appdir/getHtmlAttributes";

import { StartDsfr } from "./StartDsfr";
import Header from "@/components/header";
import { defaultColorScheme } from "./defaultColorScheme";

import "./globals.css";

export default function RootLayout({ children }: { children: JSX.Element }) {
  //NOTE: The lang parameter is optional and defaults to "fr"
  const lang = "fr";
  return (
    <html {...getHtmlAttributes({ defaultColorScheme, lang })}>
      <head>
        <StartDsfr />
        <DsfrHead Link={Link} />
      </head>
      <body>
        <DsfrProvider lang={lang}>
          <Header />
          <div className="fr-container bg-pink-50">{children}</div>
        </DsfrProvider>
      </body>
    </html>
  );
}
