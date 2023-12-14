import ReactMarkdown from "react-markdown";
import { Input } from "@codegouvfr/react-dsfr/Input";

const MarkdownEditor = ({
  name,
  value,
  onChange,
}: {
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
}) => (
  <div className="markdown-editor">
    <Input
      textArea
      hideLabel={true}
      label="Champ de saisie"
      nativeTextAreaProps={{
        name,
        value,
        onChange: (e) => onChange(name, e.target.value),
      }}
    />
    <div className="flex-1">
      <ReactMarkdown className="prose prose-sm">{value}</ReactMarkdown>
    </div>
  </div>
);

export default MarkdownEditor;
