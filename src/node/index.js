import fetch from "isomorphic-fetch";
import { HttpAgent } from "@dfinity/agent";
import { canisterId, createActor } from "../declarations/beefy_light_client_on_icp_backend/index.js";
import { identity } from "./identity.js";
import { createRequire } from "node:module";
// import path from "path";
// import fs from "fs";
// import mmm from "mmmagic";
// import { fileURLToPath } from "url";
// import sha256File from "sha256-file";
// import { Blob } from "buffer";

const require = createRequire(import.meta.url);
const localCanisterIds = require("../../canister_ids.json");

const encoder = new TextEncoder();

export const host = "http://127.0.0.1:4943";
// export const host = "https://ic0.app",    //main net will use this
const agent = new HttpAgent({
  host,
  identity: await identity,
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