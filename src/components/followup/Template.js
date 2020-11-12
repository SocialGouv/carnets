const Template = {
  data: [
    {
      items: [
        {
          label: "Services:",
          list: ["hasura", "postgres", "Azure blob storage"],
        },
        {
          label: "Schema d'architecture technique",
          status: false,
        },
        {
          label: "Matrice des flux",
          status: false,
        },
        {
          comment: "Ceci est un super commentaire",
          label: "Commentaires:",
        },
      ],
      title: "Architecture",
    },
    {
      items: [
        {
          label: "Environnement:",
          options: [
            {
              name: "VM",
            },
            {
              items: [
                {
                  label: "Version de l'autodevops:",
                  value: "",
                },
                {
                  label: "Gestion des secrets",
                  status: false,
                },
                {
                  label: "Gestion des ingress",
                  status: false,
                },
                {
                  label: "Gestion des releases",
                  status: false,
                },
              ],
              name: "Cluster Azure",
            },
          ],
          selected: 0,
        },
        {
          comment: "Ceci est un super commentaire",
          label: "Commentaires:",
        },
      ],
      title: "CI/CD",
    },
    {
      items: [
        {
          items: [
            {
              date: new Date(),
              label: "Date d'expiration:",
            },
          ],
          label: "Application homologuée",
          status: false,
        },
        {
          items: [
            {
              label: "Hébergeur certifié HDS",
              status: false,
            },
            {
              label: "Chiffrement des données",
              status: false,
            },
          ],
          label: "Données de santé",
          status: false,
        },
        {
          items: [
            {
              label: "Chiffrement des données",
              status: false,
            },
          ],
          label: "Données sensibles",
          status: false,
        },
        {
          comment: "Ceci est un super commentaire",
          label: "Commentaires:",
        },
      ],
      title: "Sécurité",
    },
    {
      items: [
        {
          label: "Mise à jour des dépendences (renovate)",
          status: false,
        },
        {
          label: "Maintenance du code (eslint, prettier)",
          status: false,
        },
        {
          label: "Tests (jest, gerkins)",
          status: false,
        },
        {
          label: "Analytics (matomo)",
          status: false,
        },
        {
          label: "Rapport de bugs (sentry)",
          status: false,
        },
        {
          comment: "Ceci est un super commentaire",
          label: "Commentaires:",
        },
      ],
      title: "Qualité",
    },
    {
      items: [
        {
          items: [
            {
              label: "Bandeau de consentement",
              status: false,
            },
          ],
          label: "Utilisation des cookies",
          status: false,
        },
        {
          label: "Mentions légales",
          status: false,
        },
        {
          label: "CGU",
          status: false,
        },
        {
          label: "Politique de confidentialité",
          status: false,
        },
        {
          comment: "Ceci est un super commentaire",
          label: "Commentaires:",
        },
      ],
      title: "RGPD",
    },
  ],
}

Template.data.map((section, i) => {
  section.items.map((item, j) => {
    item.fieldIndex = `data.${i}.items.${j}`
    item.items?.map((sub, k) => {
      sub.fieldIndex = `data.${i}.items.${j}.items.${k}`
    })
    item.options?.map((option, k) => {
      option.items?.map((sub, l) => {
        sub.fieldIndex = `data.${i}.items.${j}.options.${k}.items.${l}`
      })
    })
  })
})

export default Template
