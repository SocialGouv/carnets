import { Client } from "@litehex/node-vault";

// Get a new instance of the client
const vc = new Client({
  apiVersion: "v1",
  endpoint: "https://vaul.fabrique.fr",
});

export async function GET() {
  const init = await vc.init({ secret_shares: 1, secret_threshold: 1 });
  console.log(init);

  const { keys, root_token } = init;
  vc.token = root_token;

  const unsealed = await vc.unseal({ key: keys[0] });

  console.log(unsealed);
  return new Response("It Works!", { status: 200 });
}
