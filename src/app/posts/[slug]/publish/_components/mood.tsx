import MoodSelector from "@/components/common/mood-selector";

export type Mood = "good" | "average" | "bad";

export default function Mood({
  value,
  onChange,
}: {
  value: string;
  onChange: (name: string, value: string) => void;
}) {
  return (
    <div className="step">
      <MoodSelector value={value as Mood} onChange={onChange} />
    </div>
  );
}
