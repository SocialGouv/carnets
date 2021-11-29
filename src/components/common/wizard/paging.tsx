import { Fragment } from "react"

const Paging = ({
  activeStep,
  totalSteps,
}: {
  activeStep: number
  totalSteps: number
}) => {
  return (
    <div className="paging">
      {[...Array(totalSteps)].map((e, i) => (
        <Fragment key={i}>
          <div
            className={`indicator${i === activeStep ? " active" : ""}${
              i < activeStep ? " completed" : ""
            }`}
          >
            {i + 1}
          </div>
          {i < totalSteps - 1 && (
            <div className={`line${i < activeStep ? " completed" : ""}`}></div>
          )}
        </Fragment>
      ))}
    </div>
  )
}

export default Paging
