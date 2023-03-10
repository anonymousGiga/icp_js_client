import fetch from "isomorphic-fetch";
import { HttpAgent } from "@dfinity/agent";
import { canisterId, createActor } from "../declarations/beefy_light_client_on_icp_backend/index.js";
import { identity } from "./identity.js";
import { createRequire } from "node:module";
import {Ed25519KeyIdentity} from "@dfinity/identity";

const require = createRequire(import.meta.url);
const canisterIds = require("../../canister_ids.json");

// export const host = "http://127.0.0.1:4943";
export const host = "https://ic0.app";    //mainnet
const agent = new HttpAgent({
  host,
  identity: await identity,
  fetch,
});

const effectiveCanisterId = canisterIds.beefy_light_client_on_icp_backend.ic;

export const actor = createActor(effectiveCanisterId, {
    agent,
});