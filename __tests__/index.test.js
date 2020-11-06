import "@testing-library/jest-dom/extend-expect"

import { render } from "@testing-library/react"
import React from "react"

import Index from "../src/pages/index"

test("renders header index content", () => {
  const { asFragment } = render(<Index />)
  expect(asFragment()).toMatchSnapshot()
})
