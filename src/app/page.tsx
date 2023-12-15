import Button from "@codegouvfr/react-dsfr/Button";

export default function Page() {
  return (
    <>
      HOME
      <Button priority="secondary" linkProps={{ href: `/posts` }}>
        Go to POSTS !
      </Button>
    </>
  );
}
