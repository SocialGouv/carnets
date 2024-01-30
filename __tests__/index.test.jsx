import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import Page from "../src/app/page";

test("Page", () => {
  const { container } = render(<Page />);
  expect(container).toMatchSnapshot();
});
