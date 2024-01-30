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

test("Page", async () => {
  const { container } = render(await Page());
  expect(container).toMatchSnapshot();
});
