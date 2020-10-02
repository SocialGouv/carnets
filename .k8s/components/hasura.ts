import env from "@kosko/env"

import { create } from "@socialgouv/kosko-charts/components/hasura"

const manifests = create({
  env,
  config: { containerPort: 3000 },
  deployment: {
    container: {
      resources: {
        requests: {
          cpu: "50m",
          memory: "256Mi",
        },
        limits: {
          cpu: "500m",
          memory: "256Mi",
        },
      },
      // livenessProbe: {
      //   httpGet: {
      //     path: "/api/healthz",
      //     port: "http",
      //   },
      //   initialDelaySeconds: 30,
      //   periodSeconds: 15,
      // },
      // readinessProbe: {
      //   httpGet: {
      //     path: "/api/healthz",
      //     port: "http",
      //   },
      //   initialDelaySeconds: 30,
      //   periodSeconds: 15,
      // },
    },
  },
})

export default manifests
