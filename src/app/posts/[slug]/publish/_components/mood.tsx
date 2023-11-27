import MoodSelector from "@/components/common/mood-selector";

export type Mood = "good" | "average" | "bad";

export default function Mood({
  value,
  visible,
  onChange,
}: {
  value: string;
  visible: boolean;
  onChange: (name: string, value: string) => void;
}) {
  return (
    <div className={`step ${visible ? "" : "hidden"}`}>
      <MoodSelector value={value as Mood} onChange={onChange} />
      <input type="hidden" value={value} name="mood" />
    </div>
  );
}
