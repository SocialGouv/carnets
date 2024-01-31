import MarkdownEditor from "@/components/common/markdown-editor";

export default function Priorities({
  value,
  onChange,
}: {
  value: string;
  onChange: (name: string, value: string) => void;
}) {
  return (
    <div className="step">
      <MarkdownEditor name="priorities" value={value} onChange={onChange} />
    </div>
  );
}
