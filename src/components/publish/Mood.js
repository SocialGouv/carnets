import React from "react";
import { Field } from "formik";
import styled from "styled-components";

const Icon = styled.span`
  opacity: 0.5;
  outline: none;
  cursor: pointer;
  font-size: 1.6em;

  @media (max-width: 576px) {
    top: 20px;
    position: relative;
  }

  &:hover {
    opacity: 0.8;
  }

  &.selected {
    opacity: 1;
  }
`;

const Mood = () => {
  const values = ["😤", "😓", "😐", "😁", "🤩"];

  const onClick = (value, field) => {
    field.onChange({
      persist: () => {},
      target: {
        id: field.name,
        name: field.name,
        value: value,
        type: "change"
      }
    });
  };

  return (
    <Field name="mood">
      {({ field }) => (
        <>
          {values.map((value, i) => (
            <Icon
              key={value}
              tabIndex={i}
              value={value}
              id={field.name}
              role="menuitem"
              onBlur={() => onClick(value, field)}
              onClick={() => onClick(value, field)}
              onKeyPress={() => onClick(value, field)}
              className={value === field.value ? "selected" : ""}
            >
              {value}
            </Icon>
          ))}
        </>
      )}
    </Field>
  );
};

export default Mood;
