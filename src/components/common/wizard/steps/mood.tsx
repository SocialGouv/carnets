import MoodSelector from "@/components/common/mood-selector"

const Mood = ({
  value,
  onChange,
}: {
  value: string
  onChange: (name: string, value: string | KPI[]) => void
}) => (
  <div className="step">
    <MoodSelector value={value as Mood} onChange={onChange} />
  </div>
)

export default Mood
