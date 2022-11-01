import MarkdownEditor from "@/components/common/markdown-editor"

const Priorities = ({
  value,
  onChange,
}: {
  value: string
  onChange: (name: string, value: string | KPI[]) => void
}) => (
  <div className="step">
    <MarkdownEditor name="priorities" onChange={onChange} value={value} />
  </div>
)

export default Priorities
