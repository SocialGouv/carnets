import { Footer as DsfrFooter } from "@codegouvfr/react-dsfr/Footer";
import { headerFooterDisplayItem } from "@codegouvfr/react-dsfr/Display";

export default function Footer() {
  return (
    <DsfrFooter
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
      bottomItems={[headerFooterDisplayItem]}
      accessibility="partially compliant"
      contentDescription="Carnets est une application permettant de publier et
  de mettre à jour les supports de présentation du standup hebdomadaire
  de la Fabrique Numérique."
    />
  );
}
