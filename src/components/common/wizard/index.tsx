import { useEffect, useState } from "react"

import Stepper from "./stepper"
import Priorities from "./steps/priorities"
import Kpis from "./steps/kpis"
import Needs from "./steps/needs"
import Term from "./steps/term"
import Mood from "./steps/mood"

export type Status = "loading" | "success" | "failure" | "steps"

export interface Step {
  title: string
  value: string & KPI[]
  component:
    | typeof Priorities
    | typeof Term
    | typeof Mood
    | typeof Needs
    | typeof Kpis
}

const Wizard = ({
  data,
  onComplete,
}: {
  data: Post
  onComplete: (post: Post) => void
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0)
  const [post, setPost] = useState<Post>(data)

  const steps = [
    {
      component: Needs,
      value: post.needs,
      title: "Vos besoins immédiats",
    },
    {
      component: Priorities,
      value: post.priorities,
      title: "Vos priorités de la semaine",
    },
    {
      component: Term,
      value: post.term,
      title: "Vos prochaines échéances",
    },
    {
      component: Mood,
      value: post.mood,
      title: "L'état d'esprit de l'équipe",
    },
    {
      component: Kpis,
      value: post.kpis,
      title: "Les KPIs de votre produit",
    },
  ] as Step[]

  const { value, component: Step } = steps[activeStepIndex]

  useEffect(() => setPost(data), [data])

  const handleChange = (name: string, value: string | KPI[]) => {
    setPost({ ...post, [name]: value })
  }

  const PreviousButton = () => (
    <button
      className="primary"
      onClick={(e) => {
        e.preventDefault()
        setActiveStepIndex(activeStepIndex - 1)
      }}
    >
      Précédent
    </button>
  )

  const NextButton = ({
    activeStepIndex,
    isLastStep,
  }: {
    activeStepIndex: number
    isLastStep: boolean
  }) => (
    <button
      className="primary"
      onClick={(e) => {
        e.preventDefault()
        setActiveStepIndex(activeStepIndex + 1)
        if (isLastStep) onComplete(post)
      }}
    >
      {isLastStep ? "Terminer" : "Suivant"}
    </button>
  )

  return (
    <div className="wizard">
      <Stepper activeStepIndex={activeStepIndex} steps={steps} />
      <div className="steps">
        <Step onChange={handleChange} value={value} />
        {activeStepIndex ? (
          <div className={`actions justify-between`}>
            <PreviousButton />
            <NextButton
              activeStepIndex={activeStepIndex}
              isLastStep={activeStepIndex === steps.length - 1}
            />
          </div>
        ) : (
          <div className={`actions justify-end`}>
            <NextButton
              activeStepIndex={activeStepIndex}
              isLastStep={activeStepIndex === steps.length - 1}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Wizard
