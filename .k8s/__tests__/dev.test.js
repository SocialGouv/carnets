const { getEnvManifests } = require("./lib/helpers")

const envVars = {
  CI_COMMIT_REF_NAME: "carnets-branch",
  CI_ENVIRONMENT_NAME: "carnets-branch-dev2",
  CI_ENVIRONMENT_SLUG: "carnets-branch-42",
  CI_ENVIRONMENT_URL:
    "https://carnets-branch-dev2-sample-next-app.dev2.fabrique.social.gouv.fr",
  CI_PROJECT_NAME: "carnets",
  CI_PROJECT_PATH_SLUG: "carnets",
  CI_REGISTRY_IMAGE:
    "registry.gitlab.factory.social.gouv.fr/socialgouv/carnets",
  CI_REPOSITORY_URL: "git@github.com:SocialGouv/carnets.git",
  KUBE_INGRESS_BASE_DOMAIN: "dev2.fabrique.social.gouv.fr",
  KUBE_NAMESPACE: "carnets-24-branch-42",
  RANCHER_PROJECT_ID: "c-kk8xm:p-4fxg8",
  CI_COMMIT_SHA: "8843083edb7f873cad1d1420731a60773594ffae",
  CI_COMMIT_SHORT_SHA: "8843083",
}

test(`k8s for DEV environment`, async () => {
  const yaml = await getEnvManifests({ envName: "dev", envVars })
  expect(yaml).toMatchSnapshot()
})
