const Step = ({
  type,
  children,
}: {
  children: JSX.Element | JSX.Element[]
  type?: "failure" | "success" | "loading" | "steps"
}) => {
  return <div className="step">{children}</div>
}

export default Step
