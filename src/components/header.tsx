import Link from "next/link";

// import Auth from "@/components/auth"
// import Logo from "@/components/common/logo"
import { Header as DsfrHeader } from "@codegouvfr/react-dsfr/Header";
import { signIn } from "next-auth/react";

// const Logo = ({ big = false }: { big?: boolean }) => (
//   <div className={`logo${big ? " big" : ""}`}>
//     Ministères
//     <br />
//     Sociaux
//   </div>
// );

const Header = () => (
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
    serviceTitle="Carnets"
    serviceTagline="Carnets de bord des produits de la Fabrique Numérique"
    quickAccessItems={[
      {
        iconId: "fr-icon-add-circle-line", //ri-bar-chart-fill
        linkProps: {
          href: "/stats",
        },
        text: "Statistiques",
      },
      // {
      //   iconId: "fr-icon-add-circle-line", //ri-bar-chart-fill
      //   buttonProps: {
      //     onClick: () => signIn(),
      //   },
      //   text: "Connexion",
      // },
    ]}
  />
  // <header>
  //   <div className="container">
  //     <Link href="/" passHref>
  //       <Logo />
  //       <div className="title">
  //         <h1>Carnets</h1>
  //         <p>Carnets de bord des produits de la Fabrique Numérique</p>
  //       </div>
  //     </Link>
  //     <nav>
  //       <Link href="/stats" passHref>
  //         <i className="ri-bar-chart-fill" />
  //         Statistiques
  //       </Link>
  //       {/* <Auth /> */}
  //     </nav>
  //   </div>
  // </header>
);

export default Header;
