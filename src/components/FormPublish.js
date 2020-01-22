import React, { useState, useEffect } from "react";

import { Formik } from "formik";

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

const Selector = ({ value, values, onChange }) => {
  const [selection, setSelection] = useState(value);
  const selectedStyle = {
    filter: null,
    border: "1px solid silver"
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

const FormPublish = ({ onSubmit, className }) => {
  const buttonStyle = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };
  return (
    <Formik
      className={className}
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
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(async () => {
          await onSubmit(values);
          setSubmitting(false);
        }, 400);
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
            <Label for="team" sm={2}>
              Equipe
            </Label>
            <Col sm={10}>
              <Input
                invalid={touched.team && !!errors.team}
                type="select"
                name="team"
                id="team"
                onChange={handleChange}
                onBlur={handleChange}
                value={values.team || ""}
              >
                <option value="">----</option>
                {teams.map(team => (
                  <option key={team.id}>{team.name}</option>
                ))}
              </Input>
              {touched.team && errors.team && (
                <FormFeedback>{errors.team}</FormFeedback>
              )}
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={2}>Mood</Label>
            <Col sm={10} style={{ fontSize: 40 }}>
              <Selector
                name="mood"
                values={["😤", "😓", "😐", "😁", "🤩"]}
                onChange={handleChange}
                onBlur={handleChange}
                value={values.mood}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="priorities" sm={2}>
              Priorités
            </Label>
            <Col sm={10}>
              <Input
                type="textarea"
                invalid={touched.priorities && !!errors.priorities}
                rows="5"
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
            <Label for="kpis" sm={2}>
              KPIs / OKR
            </Label>
            <Col sm={10}>
              <Input
                onChange={handleChange}
                invalid={touched.kpis && !!errors.kpis}
                onBlur={handleChange}
                value={values.kpis}
                type="textarea"
                rows="5"
                name="kpis"
                id="kpis"
              />
              {touched.kpis && errors.kpis && (
                <FormFeedback>{errors.kpis}</FormFeedback>
              )}
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="term" sm={2}>
              Échéances
            </Label>
            <Col sm={10}>
              <Input
                onChange={handleChange}
                onBlur={handleChange}
                value={values.term}
                type="textarea"
                rows="5"
                name="term"
                id="term"
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="needs" sm={2}>
              Besoins
            </Label>
            <Col sm={10}>
              <Input
                onChange={handleChange}
                onBlur={handleChange}
                value={values.needs}
                type="textarea"
                rows="5"
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
