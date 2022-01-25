import ReactMarkdown from "react-markdown"

const MarkdownEditor = ({
  name,
  value,
  handleChange,
}: {
  name: string
  value: string
  handleChange: (name: string, value: string) => void
}) => (
  <div className="markdown-editor">
    <div>
      <textarea
        value={value}
        onChange={(e) => handleChange(name, e.target.value)}
      ></textarea>
      <div>
        <ReactMarkdown className="prose prose-sm">{value}</ReactMarkdown>
      </div>
    </div>
  </div>
)

export default MarkdownEditor
