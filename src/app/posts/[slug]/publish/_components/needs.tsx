import MarkdownEditor from "@/components/common/markdown-editor";

export default function Needs({
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
      <MarkdownEditor name="needs" onChange={onChange} value={value} />
    </div>
  );
}
