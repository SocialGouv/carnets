import Button from "@codegouvfr/react-dsfr/Button";

export default function Pagination({
  slug,
  totalPages,
  currentPage,
}: {
  slug: string;
  totalPages: number;
  currentPage: number;
}) {
  const isFirstPage = currentPage - 1 < 1;
  const isLastPage = currentPage + 1 > totalPages;

  return (
    <div className="pagination flex">
      <Button
        iconPosition="left"
        priority="tertiary no outline"
        iconId="fr-icon-arrow-left-line"
        linkProps={{
          "aria-disabled": isFirstPage,
          href: isFirstPage ? "#" : `/${slug}?page=${currentPage - 1}`,
        }}
      >
        Précédent
      </Button>
      <div className="flex flex-1 justify-center items-center text-sm">{`${currentPage} / ${totalPages}`}</div>
      <Button
        iconPosition="right"
        priority="tertiary no outline"
        iconId="fr-icon-arrow-right-line"
        linkProps={{
          "aria-disabled": isLastPage,
          href: isLastPage ? "#" : `/${slug}?page=${currentPage + 1}`,
        }}
      >
        Suivant
      </Button>
    </div>
  );
}
