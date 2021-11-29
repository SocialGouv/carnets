const Mood = ({ mood }: { mood: "good" | "average" | "bad" }) => (
  <>
    {mood === "good" ? (
      <i className="flex items-center ri-sun-line ri-3x" />
    ) : mood === "average" ? (
      <i className="flex items-center ri-cloud-windy-line ri-3x" />
    ) : (
      <i className="flex items-center ri-thunderstorms-line ri-3x" />
    )}
  </>
)

export default Mood
