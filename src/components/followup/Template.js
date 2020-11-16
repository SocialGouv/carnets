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
          status: "ko",
        },
        {
          label: "Matrice des flux",
          status: "ko",
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
                  status: "ko",
                },
                {
                  label: "Gestion des ingress",
                  status: "ko",
                },
                {
                  label: "Gestion des releases",
                  status: "ko",
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
          status: "ko",
        },
        {
          items: [
            {
              label: "Hébergeur certifié HDS",
              status: "ko",
            },
            {
              label: "Chiffrement des données",
              status: "ko",
            },
          ],
          label: "Données de santé",
          status: "ko",
        },
        {
          items: [
            {
              label: "Chiffrement des données",
              status: "ko",
            },
          ],
          label: "Données sensibles",
          status: "ko",
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
          status: "ko",
        },
        {
          label: "Maintenance du code (eslint, prettier)",
          status: "ko",
        },
        {
          label: "Tests (jest, gerkins)",
          status: "ko",
        },
        {
          label: "Analytics (matomo)",
          status: "ko",
        },
        {
          label: "Rapport de bugs (sentry)",
          status: "ko",
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
              status: "ko",
            },
          ],
          label: "Utilisation des cookies",
          status: "ko",
        },
        {
          label: "Mentions légales",
          status: "ko",
        },
        {
          label: "CGU",
          status: "ko",
        },
        {
          label: "Politique de confidentialité",
          status: "ko",
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
