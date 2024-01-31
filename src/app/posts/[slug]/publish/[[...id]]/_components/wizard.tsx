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
import {
  createPost as createPostQuery,
  updatePost as updatePostQuery,
} from "@/queries";

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
} as Post;

interface Step {
  title: string;
  value: string & KPI[];
  Step:
    | typeof Priorities
    | typeof Term
    | typeof Mood
    | typeof Needs
    | typeof Kpis;
}

export default function Wizard({
  author,
  slug,
  post,
}: {
  author?: string;
  slug: string;
  post?: Post;
}) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<Post>(post || defaultData);

  const steps = [
    {
      title: "Vos priorités de la semaine",
      Step: Priorities,
      value: data.priorities,
    },
    { title: "Vos besoins immédiats", Step: Needs, value: data.needs },
    { title: "Vos prochaines échéances", Step: Term, value: data.term },
    { title: "L'état d'esprit de l'équipe", Step: Mood, value: data.mood },
    {
      title: "Les indicateurs de votre produit (3 maximum)",
      Step: Kpis,
      value: data.kpis,
    },
  ] as Step[];

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
        {post ? "Mettre à jour" : "Publier"}
      </Button>
    );
  }

  async function handleSubmit(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    post && post.id ? await updatePost(data, post.id) : await createPost(data);
  }

  const updatePost = async (post: Post, id: string) => {
    const kpis = post.kpis?.filter((kpi: KPI) => kpi.name && kpi.name.length);

    await fetcher({
      query: updatePostQuery,
      includeCookie: true,
      parameters: {
        id,
        kpis,
        post: { ...post, team_slug: slug, author },
      },
    });
  };

  const createPost = async (post: Post) => {
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

  const { value, Step, title } = steps[step - 1];

  return (
    <>
      <Stepper
        title={title}
        currentStep={step}
        stepCount={steps.length}
        nextTitle={step < steps.length ? steps[step].title : ""}
      />
      <form>
        <Step value={value} onChange={handleChange} />
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
