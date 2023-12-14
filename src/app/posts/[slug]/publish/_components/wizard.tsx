"use client";

import Term from "./term";
import Mood from "./mood";
import Needs from "./needs";
import { useState } from "react";
import Priorities from "./priorities";
import Kpis, { type KPI } from "./kpis";
import fetcher from "@/utils/graphql-fetcher";
import Button from "@codegouvfr/react-dsfr/Button";
import { Stepper } from "@codegouvfr/react-dsfr/Stepper";
import { createPost as createPostQuery } from "@/queries";

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

export default function Wizard({
  author,
  slug,
}: {
  author?: string;
  slug: string;
}) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState(defaultData);

  const steps = [
    { title: "Step 1" },
    { title: "Step 2" },
    { title: "Step 3" },
    { title: "Step 4" },
    { title: "Step 5" },
  ];

  function handleChange(name: string, value: string | KPI[]) {
    setData({ ...data, ...{ [name]: value } });
  }

  function PreviousButton() {
    return (
      <Button
        disabled={step < 2}
        priority="tertiary no outline"
        iconId="fr-icon-arrow-left-line"
        onClick={() => setStep(step - 1)}
      >
        Précédent
      </Button>
    );
  }

  function NextButton() {
    return (
      <Button
        iconPosition="right"
        priority="tertiary no outline"
        iconId="fr-icon-arrow-right-line"
        onClick={() => setStep(step + 1)}
        disabled={step > steps.length - 1}
      >
        Suivant
      </Button>
    );
  }

  function SubmitButton() {
    return (
      <Button
        type="submit"
        priority="secondary"
        iconPosition="right"
        onClick={handleSubmit}
        disabled={step < steps.length}
        iconId="fr-icon-send-plane-fill"
      >
        Publier
      </Button>
    );
  }

  async function handleSubmit(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    await createPost(data);
  }

  const createPost = async (post: Post) => {
    console.log("POST", post);
    const kpis = {
      data: post.kpis?.filter((kpi: KPI) => kpi.name && kpi.name.length),
    };
    await fetcher({
      query: createPostQuery,
      includeCookie: true,
      parameters: {
        post: { ...post, kpis, team_slug: slug, author },
      },
    });
  };

  console.log("STEP", step);

  return (
    <>
      <Stepper
        currentStep={step}
        stepCount={steps.length}
        title={steps[step - 1].title}
        nextTitle={step < steps.length ? steps[step].title : ""}
      />
      <form>
        {step === 1 && <Needs value={data.needs} onChange={handleChange} />}
        {step === 2 && (
          <Priorities value={data.priorities} onChange={handleChange} />
        )}
        {step === 3 && <Term onChange={handleChange} value={data.term} />}
        {step === 4 && <Mood onChange={handleChange} value={data.mood} />}
        {step === 5 && <Kpis onChange={handleChange} value={data.kpis} />}
        <div className="actions">
          <div className="paging">
            <PreviousButton />
            <NextButton />
          </div>
          <SubmitButton />
        </div>
      </form>
    </>
  );
}
