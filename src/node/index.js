import {actor} from "./lib.js";
import {state, messages, messages2, header, mmr_leaf, mmr_proof} from "./data.js";

async function main() {
    const publicKey = await actor.public_key();
    console.log("public key: ", publicKey);

    const signature = await actor.test_beefy();
    console.log("signature: ", signature);

    const signature2 = await actor.test_beefy2();
    console.log("signature2: ", signature2);

    const initial_public_keys = [
        "0x020a1091341fe5664bfa1782d5e04779689068c916b04cb365ec3153755684d9a1", // Alice
        "0x0390084fdbf27d2b79d26a4f13f0ccd982cb755a661969143c37cbc49ef5b91f27", // Bob
        "0x0389411795514af1627765eceffcbd002719f031604fadd7d188e2dc585b4e1afb", // Charlie
        "0x03bc9d0ca094bd5b8b3225d7651eac5d18c1c04bf8ae8f8b263eebca4e1410ed0c", // Dave
        "0x031d10105e323c4afce225208f71a6441ee327a65b9e646e772500c74d31f669aa", // Eve
    ];
    console.log(initial_public_keys);
    const ret = await actor.set_client("test-chain", initial_public_keys);
    console.log("after set client: ", ret);


    const ret1 = await actor.update_state(state);
    console.log("after update state: ", ret1);

    const sig = await actor.sign_messages(messages);
    console.log("signature is: ", sig);

    const sig2 = await actor.sign_messages2(messages2, header, mmr_leaf, mmr_proof);
    console.log("signature2 is: ", sig2);
}
main();