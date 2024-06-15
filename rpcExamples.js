const axios = require('axios');

const rpcUrl = 'https://rpc-mainnet.uniultra.xyz';

async function getBlockNumber() {
  try {
    const requestData = {
      jsonrpc: '2.0',
      method: 'eth_blockNumber',
      params: [],
      id: 1
    };

    const response = await axios.post(rpcUrl, requestData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('Current Block Number:', response.data.result);
  } catch (error) {
    console.error('Error fetching block number:', error);
  }
}

async function ethCall() {
  try {
    const requestData = {
      jsonrpc: '2.0',
      method: 'eth_call',
      params: [{
        to: '0x<contract-address>',
        data: '0x<encoded-data>',
      }, 'latest'], // You can customize parameters as needed
      id: 2
    };

    const response = await axios.post(rpcUrl, requestData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('ETH Call Result:', response.data.result);
  } catch (error) {
    console.error('Error making eth_call:', error);
  }
}

async function getChainId() {
  try {
    const requestData = {
      jsonrpc: '2.0',
      method: 'eth_chainId',
      params: [],
      id: 3
    };

    const response = await axios.post(rpcUrl, requestData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('Chain ID:', parseInt(response.data.result, 16));
  } catch (error) {
    console.error('Error fetching chain ID:', error);
  }
}

async function estimateGas() {
  try {
    const requestData = {
      jsonrpc: '2.0',
      method: 'eth_estimateGas',
      params: [{
        to: '0x<to-address>',
        data: '0x<encoded-data>',
      }],
      id: 4
    };

    const response = await axios.post(rpcUrl, requestData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('Estimated Gas:', parseInt(response.data.result, 16));
  } catch (error) {
    console.error('Error estimating gas:', error);
  }
}

async function main() {
  await getBlockNumber();
  await ethCall();
  await getChainId();
  await estimateGas();
}

main();
