import React from "react";

import * as Yup from "yup";
import KPIs from "./Kpis";
import Mood from "./Mood";
import Teams from "./Teams";
import { Formik, Form, Field } from "formik";

const PublishForm = ({ teams, onSubmit }) => {
  const initialValues = {
    team: "",
    // team: { name: "", slug: "" },
    term: "",
    needs: "",
    mood: "😐",
    priorities: "",
    kpis: [
      { name: "", value: "" },
      { name: "", value: "" },
      { name: "", value: "" }
    ]
  };

  const validationSchema = Yup.object().shape({
    mood: Yup.string().required("Mood obligatoire"),
    team: Yup.string().required("Equipe obligatoire"),
    // team: Yup.object()
    //   .shape({
    //     name: Yup.string(),
    //     slug: Yup.string()
    //   })
    //   .required("Equipe obligatoire"),
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
      {({ values, errors, touched, isSubmitting }) =>
      console.log("values", values) || console.log("errors", errors) || (
        <Form>
          <div className="form-group row">
            <div className="col-sm-8">
              <Teams teams={teams} errors={errors} touched={touched} />
            </div>
            <div className="col-sm-4 d-flex justify-content-center align-items-center">
              <Mood />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="kpis" className="col-form-label">
              KPIs:
            </label>
            <KPIs values={values} />
          </div>

          <div className="form-group">
            <label htmlFor="priorities" className="col-form-label">
              Priorités:
            </label>
            <Field
              as="textarea"
              name="priorities"
              className={`form-control ${errors.priorities &&
                touched.priorities &&
                "is-invalid"}`}
            />
          </div>

          <div className="form-group">
            <label htmlFor="term" className="col-form-label">
              Echéances:
            </label>
            <Field as="textarea" name="term" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="needs" className="col-form-label">
              Besoins:
            </label>
            <Field as="textarea" name="needs" className="form-control" />
          </div>

          {!isSubmitting ? (
            <button type="submit" className="btn btn-primary btn-block">
              Publier
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
              <span>Publication...</span>
            </button>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default PublishForm;
