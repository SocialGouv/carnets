import Head from "next/head";

export default function Page() {
  return (
    <>
      <Head>
        <title>Carnets - Mentions Légales</title>
        <meta
          name="description"
          content="Carnets de bord des produits de la Fabrique Numérique des ministères sociaux."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Carnets - Legal" />
        <meta
          property="og:url"
          content="https://carnets.fabrique.social.gouv.fr/legal"
        />
        <meta
          property="og:description"
          content="Carnets de bord des produits de la Fabrique Numérique des ministères sociaux."
        />
      </Head>
      <main className="legal">
        <h2 className="fr-h2">Mentions légales</h2>
        <h3 className="fr-h3">Editeur de la plateforme</h3>
        <p className="fr-text--md">
          La Plateforme est éditée par la <a href="">Fabrique des Ministères</a>{" "}
          sociaux située:
        </p>
        <address className="my-6">
          Tour Mirabeau
          <br />
          39-43 Quai André Citroën
          <br />
          75015 PARIS
          <br />
          Tél : 01 40 56 60 00
        </address>
        <h3 className="fr-h3">Directeur de la publication</h3>
        <p className="fr-text--md">Anne Jeanjean - Directrice du Numérique</p>
        <h3 className="fr-h3">Hébergement de la plateforme</h3>
        <p className="fr-text--md">
          Ce site est hébergé par <strong>OVH</strong> (région France centre) :
        </p>
        <p className="fr-text--md">
          <i>
            OVH SAS Siège social : 2 rue Kellermann - 59100 Roubaix - France.
          </i>
        </p>
        <h3 className="fr-h3">À savoir</h3>
        <p className="fr-text text-justify">
          Le site ne récolte ni ne traite aucune donnée à caractère personnel.
          La mesure d&apos;audience (nombre de visites, pages consultées) est
          réalisée par un outil libre intitulé{" "}
          <a href="https://fr.matomo.org/" target="_blank">
            Matomo
          </a>{" "}
          spécifiquement paramétré, respectant les conditions d&apos;exemption
          du consentement de l&apos;internaute définies par la{" "}
          <a
            target="_blank"
            href="https://www.cnil.fr/sites/cnil/files/atoms/files/recommandation-cookies-et-autres-traceurs.pdf"
          >
            recommandation « Cookies »
          </a>{" "}
          de la Commission nationale informatique et libertés (CNIL). Cela
          signifie, notamment, que ces cookies ne servent qu&apos;à la
          production de statistiques anonymes et ne permettent pas de suivre la
          navigation de l&apos;internaute sur d&apos;autres sites.
        </p>
      </main>
    </>
  );
}
