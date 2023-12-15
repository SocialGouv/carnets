import remarkGfm from "remark-gfm";
import Markdown from "react-markdown";
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
    <div className="preview markdown-body">
      <Markdown remarkPlugins={[remarkGfm]}>{value}</Markdown>
    </div>
  </div>
);

export default MarkdownEditor;
