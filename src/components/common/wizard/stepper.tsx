import type { Step } from "."

const Stepper = ({
  steps,
  activeStepIndex,
}: {
  steps: Step[]
  activeStepIndex: number
}) => {
  console.log("activeStepIndex", activeStepIndex)
  console.log("steps", steps.length)
  return (
    <div className="stepper">
      <h2 className="title">
        <span>{`Étape ${activeStepIndex + 1} sur ${steps.length}`}</span>
        {steps[activeStepIndex].title}
      </h2>
      <div className="steps" data-fr-current-step="1" data-fr-steps="3">
        {[...Array(steps.length)].map((e, i) => (
          <div
            key={i}
            className={`step${
              i === activeStepIndex
                ? " active"
                : i < activeStepIndex
                ? " completed"
                : ""
            }`}
          ></div>
        ))}
      </div>
      <p className="details">
        {activeStepIndex + 1 < steps.length && (
          <>
            <span>Étape suivante:</span> {steps[activeStepIndex + 1].title}
          </>
        )}
      </p>
    </div>
  )
}

export default Stepper
