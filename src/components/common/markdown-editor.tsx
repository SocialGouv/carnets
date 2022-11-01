import ReactMarkdown from "react-markdown"

const MarkdownEditor = ({
  name,
  value,
  onChange,
}: {
  name: string
  value: string
  onChange: (name: string, value: string) => void
}) => (
  <div className="markdown-editor">
    <div>
      <textarea
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
      ></textarea>
      <div>
        <ReactMarkdown className="prose prose-sm">{value}</ReactMarkdown>
      </div>
    </div>
  </div>
)

export default MarkdownEditor
