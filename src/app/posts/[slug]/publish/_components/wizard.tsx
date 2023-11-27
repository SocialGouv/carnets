"use client";

import { useState } from "react";
import Button from "@codegouvfr/react-dsfr/Button";
import { useFormState, useFormStatus } from "react-dom";
import { Stepper } from "@codegouvfr/react-dsfr/Stepper";

import Term from "./term";
import Mood from "./mood";
import Needs from "./needs";
import Priorities from "./priorities";
import Kpis, { type KPI } from "./kpis";
import { addPost } from "@/actions/add-post";

const steps = [
  { title: "Step 1" },
  { title: "Step 2" },
  { title: "Step 3" },
  { title: "Step 4" },
  { title: "Step 5" },
];

export const defaultData = {
  mood: "good",
  kpis: [{ value: "42", name: "My First KPI" }],
  term: `### Nos prochaines échéances

- Mise en production de la version \`1.42.0\`
- Présentation FAST
  `,
  needs: `### Nos besoins immédiats

#### Besoins fonctionnels
- besoin numéro 1
- besoin numéro 2

#### Besoins techniques
- besoin numéro 1
- besoin numéro 2`,
  priorities: `### Exemple de titre

Un petit texte d'introduction. Lorem ipsum dolor sit amet. Est quidem sint sed accusamus molestias ea deleniti beatae. Quo laboriosam sequi qui dolor nisi et soluta velit et asperiores totam qui labore temporibus.

Un exemple de liste:
- élément 1
- élément 2
- sous élément 1
- sous élément 2`,
};

const initialState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit" priority="secondary">
      Publier
    </Button>
  );
}

export default function Wizard({ slug }: { slug: string }) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState(defaultData);
  const [state, formAction] = useFormState(addPost, initialState);
  console.log("WIZARD", { state });

  function handleChange(name: string, value: string | KPI[]) {
    setData({ ...data, ...{ [name]: value } });
  }

  function NextButton() {
    return (
      <Button
        priority="secondary"
        disabled={step > steps.length - 1}
        onClick={() => setStep(step + 1)}
      >
        Suivant
      </Button>
    );
  }

  function PreviousButton() {
    return (
      <Button
        priority="secondary"
        disabled={step < 2}
        onClick={() => setStep(step - 1)}
      >
        Précédent
      </Button>
    );
  }

  return (
    <>
      <Stepper
        currentStep={step}
        stepCount={steps.length}
        title={steps[step - 1].title}
        nextTitle={step < steps.length ? steps[step].title : ""}
      />
      <form action={formAction}>
        <input type="hidden" value={slug} name="slug" />
        <Needs
          value={data.needs}
          visible={step === 1}
          onChange={handleChange}
        />
        <Priorities
          visible={step === 2}
          value={data.priorities}
          onChange={handleChange}
        />
        <Term onChange={handleChange} value={data.term} visible={step === 3} />
        <Mood onChange={handleChange} value={data.mood} visible={step === 4} />
        <Kpis onChange={handleChange} value={data.kpis} visible={step === 5} />
        <PreviousButton />
        <NextButton />
        {step === steps.length && <SubmitButton />}
      </form>
    </>
  );
}
