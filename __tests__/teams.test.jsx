import { vi, expect, test } from "vitest";
import { render } from "@testing-library/react";
import Component from "../src/components/teams.tsx";

test("Component", async () => {
  const { container } = render(await Component({ selectedTeamSlug: "domifa" }));
  expect(container).toMatchSnapshot();
});
