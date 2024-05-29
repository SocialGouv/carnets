import Vault from "node-vault";

var options = {
  apiVersion: "v1",
  endpoint: "https://vaul.fabrique.fr",
};

export async function GET() {
  var vault = Vault(options);

  try {
    const result = await vault.init({ secret_shares: 1, secret_threshold: 1 });
    var keys = result.keys;
    vault.token = result.root_token;
    const secrets = vault.unseal({ secret_shares: 1, key: keys[0] });
    console.log("SECRETS:", secrets);
  } catch (error) {
    console.log(error);
  }

  return new Response("It Works!", { status: 200 });
}
