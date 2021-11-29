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
  <div className="flex flex-col flex-1 pb-10">
    <div className="flex flex-1">
      <textarea
        className="flex-1 p-5 border rounded mr-5 bg-beige"
        value={value}
        onChange={(e) => handleChange(name, e.target.value)}
      ></textarea>
      <div className="flex-1 p-5 border border-gray-100 shadow-lg z-10 bg-white">
        <ReactMarkdown className="prose prose-sm">{value}</ReactMarkdown>
      </div>
    </div>
  </div>
)

export default MarkdownEditor
