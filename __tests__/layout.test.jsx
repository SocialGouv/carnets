import { vi, expect, test } from "vitest";
import { render } from "@testing-library/react";
import Layout from "../src/app/layout";
import Page from "../src/app/page";

vi.mock("next-auth/next", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    getServerSession: () => {
      user: "bob";
    },
  };
});

test("Page", async () => {
  const { container } = render(await Layout({ children: Page }));
  expect(container).toMatchSnapshot();
});
