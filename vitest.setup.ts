import { vi } from "vitest";

process.env.HASURA_URL = "http://hasura:8080/v1/graphql";
process.env.NEXT_PUBLIC_HASURA_URL = "http://localhost:8080/v1/graphql";

vi.mock("next/navigation", async () => {
  const originalModule = await vi.importActual("react");
  return {
    ...originalModule,
    useRouter: () => ({
      push: () => {},
      refresh: () => {},
    }),
  };
});

vi.mock("react", async () => {
  const testCache = <T extends (...args: Array<unknown>) => unknown>(func: T) =>
    func;
  const originalModule = await vi.importActual("react");
  return {
    ...originalModule,
    cache: testCache,
  };
});

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
