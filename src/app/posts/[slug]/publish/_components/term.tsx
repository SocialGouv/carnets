import MarkdownEditor from "@/components/common/markdown-editor";

export default function Term({
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
      <MarkdownEditor name="term" value={value} onChange={onChange} />
    </div>
  );
}
