import child_process from "child_process"
import { directory } from "tempy"
import util from "util"

const TIMEOUT = 1000 * 60

const exec = util.promisify(child_process.exec)

test(
  "generate k8s manifests",
  async () => {
    const dir = directory()

    const env = {
      GITHUB_JOB: "5678",
      GITHUB_REF: "refs/heads/mybranch",
      GITHUB_REPOSITORY: `socialgouv/carnets`,
      GITHUB_RUN_ID: "1234",
      GITHUB_SHA: "0123456789abcdefghijklmnopqrstuvwxyz0123",
      SOCIALGOUV_BASE_DOMAIN: "dev2.fabrique.social.gouv.fr",
      SOCIALGOUV_CONFIG_PATH: __dirname + "/../.socialgouv/config.json",
      SOCIALGOUV_PREPRODUCTION: "",
      SOCIALGOUV_PRODUCTION: "",
    }

    Object.assign(process.env, env)

    const cmd = `
      npx degit SocialGouv/kosko-charts/templates/autodevops#alpha ${dir}/autodevops; \
      yarn --cwd ${dir}/autodevops --silent; \
      yarn --cwd ${dir}/autodevops --silent generate --env dev
    `

    const { stdout: manifest } = await exec(cmd, { env: process.env })
    expect(manifest).toMatchSnapshot()
    // expect(result.exitCode).toEqual(0);
  },
  TIMEOUT
)
