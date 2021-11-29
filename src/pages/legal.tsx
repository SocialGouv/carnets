import Head from "next/head"
import { NextPage } from "next"

const Legal: NextPage = () => (
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
      <h2>Mentions légales</h2>
      <h3>Editeur de la plateforme</h3>
      <p>
        La Plateforme est éditée par la <a href="">Fabrique des Ministères</a>{" "}
        sociaux situé :
      </p>
      <address>
        Tour Mirabeau
        <br />
        39-43 Quai André Citroën
        <br />
        75015 PARIS
        <br />
        Tél : 01 40 56 60 00
      </address>
      <h3>Directeur de la publication</h3>
      <p>Hélène Brisset - Directrice du Numérique</p>
      <h3>Hébergement de la plateforme</h3>
      <p>
        Ce site est hébergé par <strong>Microsoft Azure France</strong> (région
        France centre) :
      </p>
      <p>
        <i>
          Microsoft France 37 Quai du Président Roosevelt 92130
          ISSY-LES-MOULINEAUX
        </i>
      </p>
      <h3>À savoir</h3>
      <p className="text-justify">
        Le site ne récole ni ne traite aucune donnée à caractère personnel. La
        mesure d&apos;audience (nombre de visites, pages consultées) est
        réalisée par un outil libre intitulé <a href="">Matomo</a>{" "}
        spécifiquement paramétré, respectant les conditions d&apos;exemption du
        consentement de l&apos;internaute définies par la{" "}
        <a href="">recommandation « Cookies »</a> de la Commission nationale
        informatique et libertés (CNIL). Cela signifie, notamment, que ces
        cookies ne servent qu&apos;à la production de statistiques anonymes et
        ne permettent pas de suivre la navigation de l&apos;internaute sur
        d&apos;autres sites.
      </p>
    </main>
  </>
)

export default Legal
