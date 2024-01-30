import { vi, expect, test } from "vitest";
import { render } from "@testing-library/react";
import Page from "../src/app/posts/page";

vi.mock("@/components/teams", () => {
  return {
    __esModule: true,
    default: () => {
      return <div />;
    },
  };
});

vi.mock("@/actions/get-last-posts", async (importOriginal) => {
  const actual = await importOriginal();

  return {
    ...actual,
    default: () => [
      {
        id: "1be7bfd2-ed4a-43df-b1be-b7502b544755",
        mood: "average",
        term: "",
        needs: "",
        author: "revolunet",
        team_slug: "sre",
        priorities:
          "## WIP\n" +
          "\n" +
          " - Migrations OVH en cours (46%) et progressivement dans les semaines à venir\n" +
          "\n" +
          "## Nouveaux services\n" +
          "\n" +
          " - BitWarden (gestion mots de passe équipes)\n" +
          " - Service d'antivirus pour les produits",
        created_at: "2023-12-14T10:50:24.261968+00:00",
        kpis: [
          {
            id: "d0bdf09f-c13e-4b3c-9712-0a6bb026bdaa",
            name: "Migration OVH",
            value: "46%",
          },
        ],
        team: {
          name: "SRE",
          avatarUrl:
            "https://avatars.githubusercontent.com/t/3729659?s=400&v=4",
        },
      },
    ],
  };
});

test("Page", async () => {
  const { container } = render(await Page());
  expect(container).toMatchSnapshot();
});
