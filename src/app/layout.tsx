import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { DsfrHead } from "@codegouvfr/react-dsfr/next-appdir/DsfrHead";
import { DsfrProvider } from "@codegouvfr/react-dsfr/next-appdir/DsfrProvider";
import { getHtmlAttributes } from "@codegouvfr/react-dsfr/next-appdir/getHtmlAttributes";

import { StartDsfr } from "./start-dsfr";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Matomo from "@/components/matomo";
import { defaultColorScheme } from "./default-color-scheme";
import authOptions from "@/app/api/auth/[...nextauth]/options";

import "github-markdown-css";
import "./globals.css";

export default async function Layout({ children }: { children: JSX.Element }) {
  const lang = "fr";
  const session = await getServerSession(authOptions);

  return (
    <html {...getHtmlAttributes({ defaultColorScheme, lang })}>
      <head>
        <StartDsfr />
        <DsfrHead
          Link={Link}
          preloadFonts={[
            "Marianne-Bold",
            "Marianne-Medium",
            "Marianne-Regular",
          ]}
        />
        <Matomo />
      </head>
      <body>
        <DsfrProvider lang={lang}>
          <Header session={session} />
          <div className="fr-container flex">{children}</div>
          <Footer />
        </DsfrProvider>
      </body>
    </html>
  );
}
