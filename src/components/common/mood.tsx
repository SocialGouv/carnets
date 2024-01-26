export type Mood = "good" | "average" | "bad";

const icones = {
  good: "fr-icon-sun-line",
  bad: "fr-icon-flashlight-line",
  average: "fr-icon-cloudy-2-line",
} as Record<Mood, string>;

const Mood = ({ mood }: { mood: Mood }) => (
  <i className={`flex items-center before:w-10 before:h-10 ${icones[mood]}`} />
);

export default Mood;
