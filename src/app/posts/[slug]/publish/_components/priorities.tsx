import MarkdownEditor from "@/components/common/markdown-editor";

export default function Priorities({
  value,
  visible,
  onChange,
}: {
  value: string;
  visible: boolean;
  onChange: (name: string, value: string) => void;
}) {
  return (
    <div className={`step ${visible ? "" : "hidden"}`}>
      <MarkdownEditor name="priorities" onChange={onChange} value={value} />
    </div>
  );
}
