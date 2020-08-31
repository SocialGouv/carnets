const { getEnvManifests } = require("./lib/helpers")

const envVars = {
  CI_COMMIT_REF_NAME: "v1.5.4",
  CI_ENVIRONMENT_NAME: "carnets-v1.5.4",
  CI_ENVIRONMENT_SLUG: "carnets-v1.5.4",
  CI_ENVIRONMENT_URL: "https://preprod-carnets.dev2.fabrique.social.gouv.fr",
  CI_PROJECT_NAME: "carnets",
  CI_PROJECT_PATH_SLUG: "socialgouv-carnets",
  CI_REGISTRY_IMAGE:
    "registry.gitlab.factory.social.gouv.fr/socialgouv/carnets",
  CI_REPOSITORY_URL: "git@github.com:SocialGouv/carnets.git",
  KUBE_INGRESS_BASE_DOMAIN: "dev2.fabrique.social.gouv.fr",
  KUBE_NAMESPACE: "carnets-24-v1.5.4",
  RANCHER_PROJECT_ID: "c-kk8xm:p-4fxg8",
  CI_COMMIT_SHA: "8843083edb7f873cad1d1420731a60773594ffae",
  CI_COMMIT_SHORT_SHA: "8843083",
}

test(`k8s for PREPROD environment`, async () => {
  const yaml = await getEnvManifests({ envName: "preprod", envVars })
  expect(yaml).toMatchSnapshot()
})
