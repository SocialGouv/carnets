export type Mood = "good" | "average" | "bad";

const Mood = ({ mood }: { mood: Mood }) => (
  <>
    {mood === "good" ? (
      <i className="flex items-center ri-sun-line before:w-10 before:h-10" />
    ) : mood === "average" ? (
      <i className="flex items-center ri-cloud-windy-line before:w-10 before:h-10" />
    ) : (
      <i className="flex items-center ri-thunderstorms-line before:w-10 before:h-10" />
    )}
  </>
);

export default Mood;
