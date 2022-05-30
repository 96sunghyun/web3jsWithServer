const express = require("express");
const app = express();
const port = 8080;
const Web3 = require("web3");

const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));

// accounts를 가져오는 함수
// async function getAccounts() {
//   try {
//     const accounts = await web3.eth.getAccounts();
//     console.log(accounts);
//     return accounts;
//   } catch (e) {
//     console.log(e);
//     return e;
//   }
// }

// app.get("/", (req, res) => {
//   getAccounts().then((accounts) => {
//     res.send(accounts);
//   });
// });

// 가스비를 가져오는 함수
// async function getGasPrice() {
//   try {
//     const gasPrice = await web3.eth.getGasPrice();
//     console.log(gasPrice);
//     return gasPrice;
//   } catch (e) {
//     console.log(e);
//     return e;
//   }
// }

// app.get("/", (req, res) => {
//   getGasPrice().then((gasPrice) => {
//     res.send(gasPrice);
//   });
// });

//블록 정보를 가져오는 함수

let blockNum = "latest";
async function getBlock(blockNum) {
  try {
    const block = await web3.eth.getBlock(blockNum, true);
    console.log(block);
    return block;
  } catch (e) {
    console.log(e);
    return e;
  }
}

app.get("/", (req, res) => {
  getBlock(blockNum).then((block) => res.send(block));
});

app.listen(port, () => {
  console.log("Listening...");
});
