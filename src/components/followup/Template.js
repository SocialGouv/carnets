const Template = {
  data: [
    {
      items: [
        {
          label: "Services",
          list: ["hasura", "postgres", "Azure blob storage"],
        },
        {
          label: "Schema d'architecture technique",
          status: true,
        },
        {
          label: "Matrice des flux",
          status: false,
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
                  value: 17,
                },
                {
                  label: "Gestion des secrets",
                  status: false,
                },
                {
                  label: "Gestion des ingress",
                  status: true,
                },
                {
                  label: "Gestion des releases",
                  status: true,
                },
              ],
              name: "Cluster Azure",
            },
          ],
          selected: 1,
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
          status: true,
        },
        {
          items: [
            {
              label: "Hébergeur certifié HDS",
              status: true,
            },
            {
              label: "Chiffrement des données",
              status: true,
            },
          ],
          label: "Données de santé",
          status: false,
        },
        {
          items: [
            {
              label: "Chiffrement des données",
              status: true,
            },
          ],
          label: "Données sensibles",
          status: false,
        },
      ],
      title: "Sécurité",
    },
    {
      items: [
        {
          label: "Mise à jour des dépendences (renovate)",
          status: true,
        },
        {
          label: "Maintenance du code (eslint, prettier)",
          status: true,
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
          status: true,
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
          status: true,
        },
        {
          label: "CGU",
          status: true,
        },
        {
          label: "Politique de confidentialité",
          status: true,
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
