import "@testing-library/jest-dom/extend-expect"

import { render } from "@testing-library/react"
import React from "react"

import Index from "../src/pages/index"

test("renders header title", () => {
  const { getByText } = render(<Index />)
  const headerElement = getByText(/Carnets de bord des produits/)
  expect(headerElement).toBeInTheDocument()
})
