import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { DsfrHead } from "@codegouvfr/react-dsfr/next-appdir/DsfrHead";
import { DsfrProvider } from "@codegouvfr/react-dsfr/next-appdir/DsfrProvider";
import { getHtmlAttributes } from "@codegouvfr/react-dsfr/next-appdir/getHtmlAttributes";

import { StartDsfr } from "./start-dsfr";
import Header from "@/components/header";
import { defaultColorScheme } from "./default-color-scheme";
import authOptions from "../app/api/auth/[...nextauth]/options";

import "./globals.css";
import Footer from "@/components/footer";

export default async function RootLayout({
  children,
}: {
  children: JSX.Element;
}) {
  const lang = "fr";
  const session = await getServerSession(authOptions);

  return (
    <html {...getHtmlAttributes({ defaultColorScheme, lang })}>
      <head>
        <StartDsfr />
        <DsfrHead
          Link={Link}
          preloadFonts={[
            //"Marianne-Light",
            //"Marianne-Light_Italic",
            "Marianne-Regular",
            //"Marianne-Regular_Italic",
            "Marianne-Medium",
            //"Marianne-Medium_Italic",
            "Marianne-Bold",
            //"Marianne-Bold_Italic",
            //"Spectral-Regular",
            //"Spectral-ExtraBold"
          ]}
        />
      </head>
      <body>
        <DsfrProvider lang={lang}>
          <Header session={session} />
          <div className="fr-container flex py-12">{children}</div>
          <Footer />
        </DsfrProvider>
      </body>
    </html>
  );
}
