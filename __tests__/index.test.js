import React from "react"
import Index from "../src/pages/index"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

test("renders header title", () => {
  const { getByText } = render(<Index />)
  const headerElement = getByText(/Carnets de bord des produits/)
  expect(headerElement).toBeInTheDocument()
})
