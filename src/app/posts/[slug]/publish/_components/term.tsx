import MarkdownEditor from "@/components/common/markdown-editor";

export default function Term({
  value,
  onChange,
}: {
  value: string;
  onChange: (name: string, value: string) => void;
}) {
  return (
    <div className="step">
      <MarkdownEditor name="term" value={value} onChange={onChange} />
    </div>
  );
}
