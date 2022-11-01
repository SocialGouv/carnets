import MarkdownEditor from "@/components/common/markdown-editor"

const Term = ({
  value,
  onChange,
}: {
  value: string
  onChange: (name: string, value: string | KPI[]) => void
}) => (
  <div className="step">
    <MarkdownEditor name="term" value={value} onChange={onChange} />
  </div>
)

export default Term
