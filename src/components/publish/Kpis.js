import React from "react";
import styled from "styled-components";
import { Field, FieldArray } from "formik";

const KPIWrapper = styled.div`
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }

  .form-control:first-child {
    margin-right: 5px;
  }

  .form-control:last-child {
    margin-left: 5px;
  }

  .form-control:is-invalid {
    padding-right: 0;
  }
`;

const KPI = ({ index, errors, touched }) => (
  <KPIWrapper className="kpi d-flex">
    <Field
      placeholder="label"
      name={`kpis.${index}.name`}
      className={`flex-fill form-control ${
        !index &&
        errors.kpis &&
        touched.kpis &&
        errors.kpis[index] &&
        touched.kpis[index]
          ? "is-invalid"
          : ""
      }`}
    />
    <Field
      placeholder="valeur"
      name={`kpis.${index}.value`}
      className={`flex-fill form-control ${
        !index &&
        errors.kpis &&
        touched.kpis &&
        errors.kpis[index] &&
        touched.kpis[index]
          ? "is-invalid"
          : ""
      }`}
    />
  </KPIWrapper>
);

const KPIs = ({ values }) => {
  return (
    <FieldArray name="kpis">
      {({ form: { errors, touched } }) => (
        <>
          {values.kpis.map((kpi, index) => (
            <KPI
              index={index}
              errors={errors}
              touched={touched}
              key={`kpis.${index}`}
            />
          ))}
        </>
      )}
    </FieldArray>
  );
};

export default KPIs;
