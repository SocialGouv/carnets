import { vi, expect, test } from "vitest";
import { render } from "@testing-library/react";
import Component from "../src/components/teams.tsx";

vi.mock("@/actions/get-teams", async (importOriginal) => {
  const actual = await importOriginal();

  return {
    ...actual,
    default: () => [
      {
        name: "domifa",
        slug: "domifa",
        avatarUrl: "https://avatar.domifa.com",
      },
    ],
  };
});

test("Component", async () => {
  const { container } = render(await Component({ selectedTeamSlug: "domifa" }));
  expect(container).toMatchSnapshot();
});
