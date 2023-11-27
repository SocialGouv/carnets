import Mood from "@/components/common/mood";

// duplicated
type Mood = "good" | "average" | "bad";

const MoodSelector = ({
  value,
  onChange,
}: {
  value: Mood;
  onChange: (name: string, value: string) => void;
}) => {
  const moods = [
    { value: "good", label: "bon" },
    { value: "average", label: "moyen" },
    { value: "bad", label: "mauvais" },
  ] as { value: Mood; label: string }[];

  return (
    <div className="mood-selector">
      {moods.map((mood, i) => (
        <div
          key={i}
          onClick={() => onChange("mood", mood.value)}
          className={`mood${mood.value === value ? " selected" : ""}`}
        >
          <Mood mood={mood.value} />
          <p className="pt-5">{mood.label}</p>
        </div>
      ))}
    </div>
  );
};

export default MoodSelector;
