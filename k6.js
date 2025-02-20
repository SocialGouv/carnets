import http from "k6/http";

import { Rate } from "k6/metrics";
import { check } from "k6";

const failRate = new Rate("failed_requests");

export const options = {
  vus: 100,
  duration: "10m",
  thresholds: {
    failed_requests: ["rate<=0"],
  },
  ext: {
    loadimpact: {
      projectID: 3699330,
    },
  },
};

const urls = [
  "https://carnets.fabrique.social.gouv.fr/",
  "https://carnets.fabrique.social.gouv.fr/sre",
  "https://carnets.fabrique.social.gouv.fr/code-du-travail",
];

// run test
export default function test() {
  const responses = http.batch(urls);
  for (const response of responses) {
    check(response, { "status 200": (r) => r.status == 200 });
    failRate.add(result.status !== 200);
  }
}
