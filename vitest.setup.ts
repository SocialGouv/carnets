import { vi } from "vitest";

process.env.NEXT_PUBLIC_HASURA_URL = "http://localhost:8080/v1/graphql";

vi.mock("react", async () => {
  const testCache = <T extends (...args: Array<unknown>) => unknown>(func: T) =>
    func;
  const originalModule = await vi.importActual("react");
  return {
    ...originalModule,
    cache: testCache,
  };
});
