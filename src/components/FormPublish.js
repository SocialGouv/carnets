import { Formik } from "formik";
import Router from "next/router";
import styled from "styled-components";
import React, { useState, useEffect } from "react";

import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  FormFeedback,
  Input,
  Row
} from "reactstrap";

import teams from "../lib/teams";

const StyledLabel = styled(Label)`
  white-space: nowrap;
`;

const Selector = ({ value, values, onChange }) => {
  const [selection, setSelection] = useState(value);
  const selectedStyle = {
    opacity: "1",
    filter: null
  };

  useEffect(() => {
    if (selection) {
      onChange({
        persist: () => {},
        target: {
          type: "change",
          id: "mood",
          name: "mood",
          value: selection
        }
      });
    }
  }, [selection, onChange]);

  return (
    <React.Fragment>
      {values.map((v, i) => {
        const style = {
          opacity: "0.8",
          cursor: "pointer",
          filter: "grayscale(80%)",
          ...(v === selection && selectedStyle)
        };
        return (
          <span
            key={v}
            tabIndex={i}
            style={style}
            role="menuitem"
            onClick={() => setSelection(v)}
            onKeyPress={() => setSelection(v)}
          >
            {v}
          </span>
        );
      })}
    </React.Fragment>
  );
};

const FormPublish = ({ onSubmit }) => {
  const buttonStyle = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };
  return (
    <Formik
      initialValues={{
        team: null,
        mood: null,
        priorities: "",
        kpis: "",
        term: "",
        needs: ""
      }}
      validate={values => {
        const errors = {};
        if (!values.team) {
          errors.team = "Champ obligatoire";
        }
        if (!values.priorities) {
          errors.priorities = "Champ obligatoire";
        }
        if (!values.kpis) {
          errors.kpis = "Champ obligatoire";
        }

        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
        await onSubmit(values);
        setSubmitting(false);
        Router.push("/teams/[team]", `/teams/${values.team}`);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        isSubmitting
        /* and other goodies */
      }) => (
        <Form onSubmit={handleSubmit}>
          <FormGroup row>
            <Col sm={2}></Col>
            <Col sm={5}>
              <Input
                invalid={touched.team && !!errors.team}
                type="select"
                name="team"
                id="team"
                onChange={handleChange}
                onBlur={handleChange}
                value={values.team || ""}
              >
                <option value="">Equipe</option>
                {teams.map(team => (
                  <option key={team.id} value={team.id}>
                    {team.name}
                  </option>
                ))}
              </Input>
              {touched.team && errors.team && (
                <FormFeedback>{errors.team}</FormFeedback>
              )}
            </Col>
            <Col
              sm={5}
              className="d-flex align-items-center justify-content-center"
            >
              <Col
                style={{ fontSize: 35, lineHeight: "35px" }}
                className=" d-flex justify-content-center"
              >
                <Selector
                  name="mood"
                  value={values.mood}
                  onBlur={handleChange}
                  onChange={handleChange}
                  values={["😤", "😓", "😐", "😁", "🤩"]}
                />
              </Col>
            </Col>
          </FormGroup>

          <FormGroup row>
            <StyledLabel for="priorities" sm={2}>
              Priorités
            </StyledLabel>
            <Col sm={10}>
              <Input
                type="textarea"
                invalid={touched.priorities && !!errors.priorities}
                rows="3"
                name="priorities"
                id="priorities"
                onChange={handleChange}
                onBlur={handleChange}
                value={values.priorities}
              />
              {touched.priorities && errors.priorities && (
                <FormFeedback>{errors.priorities}</FormFeedback>
              )}
            </Col>
          </FormGroup>

          <FormGroup row>
            <StyledLabel for="kpis" sm={2}>
              KPIs / OKR
            </StyledLabel>
            <Col sm={10}>
              <Input
                onChange={handleChange}
                invalid={touched.kpis && !!errors.kpis}
                onBlur={handleChange}
                value={values.kpis}
                type="textarea"
                rows="3"
                name="kpis"
                id="kpis"
              />
              {touched.kpis && errors.kpis && (
                <FormFeedback>{errors.kpis}</FormFeedback>
              )}
            </Col>
          </FormGroup>

          <FormGroup row>
            <StyledLabel for="term" sm={2}>
              Échéances
            </StyledLabel>
            <Col sm={10}>
              <Input
                onChange={handleChange}
                onBlur={handleChange}
                value={values.term}
                type="textarea"
                rows="3"
                name="term"
                id="term"
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <StyledLabel for="needs" sm={2}>
              Besoins
            </StyledLabel>
            <Col sm={10}>
              <Input
                onChange={handleChange}
                onBlur={handleChange}
                value={values.needs}
                type="textarea"
                rows="3"
                name="needs"
                id="needs"
              />
            </Col>
          </FormGroup>
          <Row>
            <Col sm={{ size: 10, offset: 2 }}>
              {!isSubmitting ? (
                <Button size="lg" block color="primary" onClick={handleSubmit}>
                  Publier
                </Button>
              ) : (
                <Button
                  style={buttonStyle}
                  size="lg"
                  color="primary"
                  type="button"
                  disabled
                >
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                    style={{ marginRight: "4px" }}
                  ></span>
                  <span>Publishing...</span>
                </Button>
              )}
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default FormPublish;
