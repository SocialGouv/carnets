import Mood, { type Mood as MoodType } from "@/components/common/mood";

const MoodSelector = ({
  value,
  onChange,
}: {
  value: MoodType;
  onChange: (name: string, value: string) => void;
}) => {
  const moods = [
    { value: "good", label: "bon" },
    { value: "average", label: "moyen" },
    { value: "bad", label: "mauvais" },
  ] as { value: MoodType; label: string }[];

  return (
    <div className="mood-selector">
      {moods.map((mood, i) => (
        <div
          key={i}
          onClick={() => onChange("mood", mood.value)}
          className={`mood${mood.value === value ? " selected" : ""}`}
        >
          <Mood mood={mood.value} />
          <p>{mood.label}</p>
        </div>
      ))}
    </div>
  );
};

export default MoodSelector;
