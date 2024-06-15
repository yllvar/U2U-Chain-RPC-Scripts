// Importing axios library
const axios = require('axios');

// RPC endpoint URL
const rpcUrl = 'https://rpc-mainnet.uniultra.xyz';

// Function to fetch current block number
async function getBlockNumber() {
  try {
    // RPC request data
    const requestData = {
      jsonrpc: '2.0',
      method: 'eth_blockNumber',
      params: [],
      id: 1 // Use any ID you want to track the request
    };

    // Making POST request to the RPC endpoint
    const response = await axios.post(rpcUrl, requestData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // Logging the response
    console.log('Current Block Number:', response.data.result);
  } catch (error) {
    console.error('Error fetching block number:', error);
  }
}

// Calling the function to fetch block number
getBlockNumber();
