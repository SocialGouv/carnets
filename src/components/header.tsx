"use client";

import type { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import { Header as DsfrHeader } from "@codegouvfr/react-dsfr/Header";

const Header = ({ session }: { session: Session | null }) => (
  <DsfrHeader
    brandTop={
      <>
        Ministères
        <br />
        Sociaux
      </>
    }
    homeLinkProps={{
      href: "/",
      title: "Accueil - La Fabrique Numérique des ministères sociaux",
    }}
    id="fr-header-simple-header"
    serviceTitle={<span style={{ fontSize: "1.5rem" }}>Carnets</span>}
    serviceTagline={
      <span style={{ fontSize: "1rem" }}>
        Carnets de bord des produits de la Fabrique Numérique
      </span>
    }
    operatorLogo={{
      orientation: "vertical",
      imgUrl: "/images/logo-fabrique.svg",
      alt: "logo de la Fabrique Numérique",
      style: { width: "50px", height: "50px" },
    }}
    quickAccessItems={[
      {
        iconId: "fr-icon-line-chart-line",
        linkProps: {
          href: "/stats",
        },
        text: "Statistiques",
      },
      session && session.user && session.user.name && session.user.name.length
        ? {
            iconId: "fr-icon-user-line",
            text: session.user.name,
            buttonProps: {
              onClick: () => signOut(),
            },
          }
        : {
            iconId: "fr-icon-add-circle-line",
            text: "Connexion",
            buttonProps: {
              onClick: () => signIn("github"),
            },
          },
    ]}
  />
);

export default Header;
