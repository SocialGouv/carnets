import MarkdownEditor from "@/components/common/markdown-editor"

const Needs = ({
  value,
  onChange,
}: {
  value: string
  onChange: (name: string, value: string | KPI[]) => void
}) => (
  <div className="step">
    <MarkdownEditor name="needs" onChange={onChange} value={value} />
  </div>
)

export default Needs
