import Wizard from "./_components/wizard";

export default function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return (
    <div className="flex-1">
      <Wizard slug={slug} />
    </div>
  );
}
