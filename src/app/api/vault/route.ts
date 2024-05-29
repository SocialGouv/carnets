import * as fs from "fs";

const vault = require("node-vault");

class VaultModule {
  private vaultClient: any;
  private readonly vaultRole: string;
  private isKubelogged: boolean;

  constructor(vaultRole: string) {
    this.vaultClient = vault({
      apiVersion: "v1",
      endpoint: "https://vaul.fabrique.fr",
    });
    this.vaultRole = vaultRole;
    this.isKubelogged = false;
  }

  async readSecret(path: string): Promise<any> {
    const JWT_TOKEN_FILE =
      "/var/run/secrets/kubernetes.io/serviceaccount/token";
    const jwt = fs.readFileSync(JWT_TOKEN_FILE);

    if (!this.isKubelogged) {
      try {
        const result = await this.vaultClient.kubernetesLogin({
          role: this.vaultRole,
          jwt: jwt.toString(),
        });
        this.vaultClient.token = result.auth.client_token;
      } catch (error) {
        console.error("Error authenticating to vault instance:", error);
        throw error;
      }
      this.isKubelogged = true;
    }
    try {
      const res = await this.vaultClient.read(path);
      let obj = Object.keys(res.data.data);
      return res.data.data[obj[0]];
    } catch (error) {
      console.error("Error reading secret:", error);
      throw error;
    }
  }
}

// export default VaultModule;

// import VaultModule from './VaultModule';

// async function main() {
export const dynamic = "force-dynamic";

export async function GET() {
  const vaultModule = new VaultModule("carnets-carnets-vault");
  try {
    const secretData = await vaultModule.readSecret("toto");
    console.log("Read secret successfull");
  } catch (error) {
    console.error("Error:", error);
  }
}

// main();

// import Vault from "node-vault";

// var options = {
//   apiVersion: "v1",
//   endpoint: "https://vault-dev.factory.social.gouv.fr",
// };

// export const dynamic = "force-dynamic";

// export async function GET() {
//   var vault = Vault(options);
//   process.stdout.write("VAULT: " + JSON.stringify(vault));

//   try {
//     const result = await vault.init({ secret_shares: 1, secret_threshold: 1 });
//     console.log("RESULT", result);
//     var keys = result.keys;
//     vault.token = result.root_token;
//     const secrets = vault.unseal({ secret_shares: 1, key: keys[0] });
//     console.log("SECRETS:", secrets);
//   } catch (error) {
//     console.log(error);
//   }

//   return new Response("It Works!", { status: 200 });
// }
