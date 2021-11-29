import { useEffect, useState } from "react"

import Paging from "./paging"

export { default as Step } from "./step"
export type Status = "loading" | "success" | "failure" | "steps"

const Wizard = ({
  status,
  children,
  onComplete,
}: {
  status: Status
  onComplete: () => void
  children: JSX.Element[]
}) => {
  const [activeStep, setActiveStep] = useState(0)
  const steps = children.filter((child: JSX.Element) => !child.props.type)
  const step = steps.find((child: JSX.Element, i: number) => i === activeStep)

  return (
    <div className="wizard">
      <Paging activeStep={activeStep} totalSteps={steps.length} />
      <div className="steps">
        {status === "loading"
          ? children.find(
              (child: JSX.Element) => child.props.type === "loading"
            )
          : status === "success"
          ? children.find(
              (child: JSX.Element) => child.props.type === "success"
            )
          : status === "failure"
          ? children.find(
              (child: JSX.Element) => child.props.type === "failure"
            )
          : step}
        {status === "steps" && (
          <div className="actions">
            <button
              className="primary"
              onClick={(e) => {
                e.preventDefault()
                setActiveStep(activeStep + 1)
                if (activeStep === steps.length - 1) onComplete()
              }}
            >
              Suivant
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Wizard
