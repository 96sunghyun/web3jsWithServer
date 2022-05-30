const express = require("express");
const app = express();
const port = 8080;
const Contract = require("web3-eth-contract");

async function helloWorld() {
  try {
    const abi = [
      {
        inputs: [
          {
            internalType: "string",
            name: "v",
            type: "string",
          },
        ],
        name: "renderHelloWorld",
        outputs: [
          {
            internalType: "string",
            name: "greeting",
            type: "string",
          },
        ],
        stateMutability: "pure",
        type: "function",
      },
    ];
    const address = "0x364c8f9096de7C07d8c734402a141FD77f325232";
    Contract.setProvider("http://127.0.0.1:7545");
    const contract = new Contract(abi, address);
    const result = await contract.methods.renderHelloWorld().call("hi!");
    console.log(result);
    return result;
  } catch (e) {
    console.log(e);
    return e;
  }
}
app.get("/helloworld", (req, res) => {
  helloWorld().then((result) => res.send(result));
});

app.listen(port, () => {
  console.log("Listening...");
});
