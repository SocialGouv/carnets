import React from "react";

import * as Yup from "yup";
import KPIs from "./Kpis";
import Mood from "./Mood";
import Teams from "./Teams";
import { Formik, Form, Field } from "formik";

const PublishForm = ({ teams, onSubmit, unauthorized, post }) => {
  const kpi = { name: "", value: "" };

  const initialValues = {
    ...{
      term: "",
      needs: "",
      mood: "😐",
      team_slug: "",
      priorities: "",
      kpis: []
    },
    ...post
  };

  initialValues.kpis = [
    ...initialValues.kpis,
    ...new Array(3 - initialValues.kpis.length).fill(kpi)
  ];

  const validationSchema = Yup.object().shape({
    mood: Yup.string().required("Mood obligatoire"),
    team_slug: Yup.string().required("Equipe obligatoire"),
    priorities: Yup.string().required("Priorités obligatoire"),
    kpis: Yup.array().of(
      Yup.object()
        .shape({
          name: Yup.string(),
          value: Yup.string()
        })
        .test("first-kpi", "Au moin un KPI requis", function(value) {
          return !(this.path === "kpis[0]" && (!value.name || !value.value));
        })
    )
  });

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({ values, errors, touched, isSubmitting }) => (
        <Form>
          <div className="row">
            <div className="col-sm-4">
              <Teams teams={teams} errors={errors} touched={touched} />
            </div>

            <div className="col-sm-2 d-flex justify-content-center align-items-center">
              <Mood />
            </div>
          </div>

          <div className="form-group row" style={{ marginTop: 20 }}>
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="kpis" className="col-form-label">
                  KPIs:
                </label>
                <KPIs values={values} />
              </div>

              <div className="form-group flex-fill d-flex flex-column">
                <label htmlFor="priorities" className="col-form-label">
                  Priorités:
                </label>
                <Field
                  rows="5"
                  as="textarea"
                  name="priorities"
                  className={`form-control flex-fill ${errors.priorities &&
                    touched.priorities &&
                    "is-invalid"}`}
                />
              </div>
            </div>

            <div className="col-6 d-flex flex-column">
              <div className="form-group flex-fill d-flex flex-column">
                <label htmlFor="term" className="col-form-label">
                  Échéances / Événements:
                </label>
                <Field
                  rows="5"
                  name="term"
                  as="textarea"
                  className="form-control flex-fill"
                />
              </div>

              <div className="form-group flex-fill d-flex flex-column">
                <label htmlFor="needs" className="col-form-label">
                  Besoins:
                </label>
                <Field
                  rows="5"
                  name="needs"
                  as="textarea"
                  className="form-control flex-fill"
                />
              </div>
            </div>
          </div>

          {unauthorized && (
            <div className="alert alert-danger" role="alert">
              Vous n&#39;êtes pas autorisé(e) à publier une nouvelle.
            </div>
          )}

          {!isSubmitting ? (
            <button type="submit" className="btn btn-primary btn-block">
              {post ? "Editer" : "Publier"}
            </button>
          ) : (
            <button
              disabled
              type="button"
              className="btn btn-primary btn-block"
            >
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
                style={{ marginRight: "4px" }}
              ></span>
              <span>{post ? "Edition" : "Publication"}...</span>
            </button>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default PublishForm;
