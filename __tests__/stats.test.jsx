import { vi, expect, test } from "vitest";
import { render } from "@testing-library/react";
import Page from "../src/app/stats/page";

vi.mock("@/actions/get-stats", async (importOriginal) => {
  const actual = await importOriginal();

  return {
    ...actual,
    default: () => ({
      posts_stat: [
        { count: 5, week: 6, year: 2020 },
        { count: 2, week: 7, year: 2020 },
        { count: 1, week: 8, year: 2020 },
        { count: 4, week: 9, year: 2020 },
        { count: 4, week: 10, year: 2020 },
        { count: 7, week: 11, year: 2020 },
        { count: 3, week: 12, year: 2020 },
        { count: 4, week: 13, year: 2020 },
        { count: 8, week: 14, year: 2020 },
        { count: 5, week: 15, year: 2020 },
        { count: 7, week: 16, year: 2020 },
        { count: 7, week: 17, year: 2020 },
        { count: 8, week: 18, year: 2020 },
        { count: 7, week: 19, year: 2020 },
        { count: 9, week: 20, year: 2020 },
        { count: 6, week: 21, year: 2020 },
        { count: 6, week: 22, year: 2020 },
        { count: 6, week: 23, year: 2020 },
        { count: 7, week: 24, year: 2020 },
        { count: 7, week: 25, year: 2020 },
        { count: 7, week: 26, year: 2020 },
        { count: 6, week: 27, year: 2020 },
        { count: 8, week: 28, year: 2020 },
        { count: 3, week: 30, year: 2020 },
        { count: 5, week: 31, year: 2020 },
        { count: 8, week: 32, year: 2020 },
        { count: 5, week: 33, year: 2020 },
        { count: 6, week: 34, year: 2020 },
        { count: 7, week: 35, year: 2020 },
        { count: 4, week: 36, year: 2020 },
        { count: 5, week: 37, year: 2020 },
        { count: 7, week: 38, year: 2020 },
        { count: 7, week: 39, year: 2020 },
        { count: 7, week: 40, year: 2020 },
        { count: 8, week: 41, year: 2020 },
        { count: 9, week: 42, year: 2020 },
        { count: 7, week: 43, year: 2020 },
        { count: 8, week: 44, year: 2020 },
        { count: 8, week: 45, year: 2020 },
        { count: 10, week: 46, year: 2020 },
        { count: 10, week: 47, year: 2020 },
        { count: 7, week: 48, year: 2020 },
        { count: 9, week: 49, year: 2020 },
        { count: 8, week: 50, year: 2020 },
        { count: 5, week: 51, year: 2020 },
        { count: 4, week: 52, year: 2020 },
        { count: 3, week: 53, year: 2020 },
        { count: 7, week: 1, year: 2021 },
        { count: 5, week: 2, year: 2021 },
        { count: 6, week: 3, year: 2021 },
        { count: 3, week: 4, year: 2021 },
        { count: 5, week: 5, year: 2021 },
        { count: 4, week: 6, year: 2021 },
        { count: 6, week: 7, year: 2021 },
        { count: 7, week: 8, year: 2021 },
        { count: 10, week: 9, year: 2021 },
        { count: 7, week: 10, year: 2021 },
        { count: 5, week: 11, year: 2021 },
        { count: 5, week: 12, year: 2021 },
        { count: 7, week: 13, year: 2021 },
        { count: 9, week: 14, year: 2021 },
        { count: 7, week: 15, year: 2021 },
        { count: 8, week: 16, year: 2021 },
        { count: 9, week: 17, year: 2021 },
        { count: 11, week: 18, year: 2021 },
      ],
      teams_status: [
        {
          mood: "average",
          kpis_count: 4,
          last_post: "2023-12-14T10:26:11.394668+00:00",
          team_slug: "archifiltre",
        },
        {
          mood: "good",
          kpis_count: 3,
          last_post: "2023-03-07T08:48:24.382673+00:00",
          team_slug: "bpco",
        },
        {
          mood: "average",
          kpis_count: 2,
          last_post: "2023-12-14T09:37:06.725605+00:00",
          team_slug: "bpco-mieux",
        },
        {
          mood: "good",
          kpis_count: 3,
          last_post: "2021-12-07T10:59:53.763344+00:00",
          team_slug: "carnet-de-bord",
        },
        {
          mood: "average",
          kpis_count: 1,
          last_post: "2023-06-06T07:41:35.199012+00:00",
          team_slug: "causes-medicales-de-deces",
        },
        {
          mood: "good",
          kpis_count: 3,
          last_post: "2023-12-14T08:29:20.133928+00:00",
          team_slug: "code-du-travail",
        },
        {
          mood: "average",
          kpis_count: 1,
          last_post: "2021-01-05T10:33:03.544189+00:00",
          team_slug: "covid-19",
        },
        {
          mood: "average",
          kpis_count: 1,
          last_post: "2022-03-29T09:34:22.430957+00:00",
          team_slug: "dashlord",
        },
        {
          mood: "average",
          kpis_count: 1,
          last_post: "2020-12-15T10:40:01.458244+00:00",
          team_slug: "data-dgt",
        },
        {
          mood: "average",
          kpis_count: 1,
          last_post: "2021-10-19T08:21:11.02241+00:00",
          team_slug: "didoc",
        },
        {
          mood: "average",
          kpis_count: 2,
          last_post: "2021-05-10T14:09:59.932222+00:00",
          team_slug: "diversite",
        },
      ],
    }),
  };
});

test("Page", async () => {
  const { container } = render(await Page());
  expect(container).toMatchSnapshot();
});