import { Form, Formik, useFormikContext } from "formik"
import { debounce } from "lodash"
import React, { useCallback, useEffect, useState } from "react"

import Controls from "./controls"
import Items from "./items"

const originalData = {
  fields: [
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

originalData.fields.map((section, i) => {
  section.items.map((item, j) => {
    item.fieldIndex = `fields.${i}.items.${j}`
    item.items?.map((sub, k) => {
      sub.fieldIndex = `fields.${i}.items.${j}.items.${k}`
    })
    // console.log("ITEM:", item)
    item.options?.map((option, k) => {
      option.items?.map((sub, l) => {
        sub.fieldIndex = `fields.${i}.items.${j}.options.${k}.items.${l}`
      })
    })
  })
})

// console.log("DATA:", originalData.fields[0].items)

const AutoSave = ({ debounceMs = 1000 }) => {
  const formik = useFormikContext()
  const [isSaved, setIsSaved] = useState(null)
  const debouncedSubmit = useCallback(
    debounce(() => {
      return formik.submitForm().then(() => setIsSaved(true))
    }, debounceMs),
    [formik.submitForm, debounceMs]
  )

  useEffect(() => debouncedSubmit, [debouncedSubmit, formik.values])

  return (
    <p className="text-center text-success">
      {formik.isSubmitting
        ? "Saving..."
        : isSaved
        ? "Your changes saved."
        : null}
    </p>
  )
}

const Followup = ({ slug }) => {
  const [edit, setEdit] = useState(false)
  const [data, setData] = useState(originalData)
  console.log("slug", slug, 42)

  const onSubmit = (data) => {
    console.log("onSubmit", data)
    setData(data)
  }

  const toggle = () => setEdit(!edit)

  return (
    <div className="followup">
      <Controls toggle={toggle} edit={edit} data={data} />
      <Formik onSubmit={onSubmit} initialValues={data}>
        {({ values }) => (
          <Form>
            {values.fields.map((section, i) => (
              <div key={i} className="section">
                <div key={i} className="section-wrapper">
                  <h4>{section.title}</h4>
                  <Items items={section.items} edit={edit} />
                </div>
              </div>
            ))}
            {/* <AutoSave debounceMs={500} /> */}
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Followup
