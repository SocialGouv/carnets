import MarkdownEditor from "@/components/common/markdown-editor";

export default function Needs({
  value,
  onChange,
}: {
  value: string;
  onChange: (name: string, value: string) => void;
}) {
  return (
    <div className="step">
      <MarkdownEditor name="needs" value={value} onChange={onChange} />
    </div>
  );
}
