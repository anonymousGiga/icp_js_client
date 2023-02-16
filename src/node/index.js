import fetch from "isomorphic-fetch";
import { HttpAgent } from "@dfinity/agent";
import { canisterId, createActor } from "../declarations/beefy_light_client_on_icp_backend/index.js";
import { identity } from "./identity.js";
import { createRequire } from "node:module";
import {Ed25519KeyIdentity} from "@dfinity/identity";

const require = createRequire(import.meta.url);
const localCanisterIds = require("../../canister_ids.json");

export const aliceIdentity = Ed25519KeyIdentity.generate();

export const host = "http://127.0.0.1:4943";
// export const host = "https://ic0.app";    //mainnet
const agent = new HttpAgent({
  host,
  identity: aliceIdentity,
  fetch,
});
const effectiveCanisterId =
  canisterId?.toString() ?? localCanisterIds.beefy_light_client_on_icp_backend.local;
const actor = createActor(effectiveCanisterId, {
    agent,
});

async function main() {
    const publicKey = await actor.public_key();
    console.log("public key: ", publicKey);
}
main();