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
      livenessProbe: {
        initialDelaySeconds: 60,
        periodSeconds: 20,
      },
      readinessProbe: {
        initialDelaySeconds: 60,
        periodSeconds: 20,
      },
    },
  },
})

export default manifests
