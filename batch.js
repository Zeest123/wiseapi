const axios = require("axios");

// Replace 'YOUR_API_KEY' with your actual API key
const API_KEY = "5ebe388b-a1d1-4cd3-a4ce-b5f7e0fc9c75";
const BASE_URL = "https://api.transferwise.com/v3";
// Replace with your actual profile ID
const PROFILE_ID = "25024664";

// Replace with the transfer ID you want to retrieve
const batchGroupId = "db47616e-2e03-4430-8a3b-480770d5d3c0";
// Endpoint URL
const endpointUrl = `https://api.transferwise.com/v3/profiles/${PROFILE_ID}/batch-groups/${batchGroupId}`;
//

let batchId;
// Function to get transfer information by ID
async function getTransferById() {
  try {
    const response = await axios.post(endpointUrl, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    // Print the transfer information
    console.log(response.data);
    batchId = response.data.transferIds;
    console.log("batch id:", batchId);

    getDetails(batchId);

    // You can access individual properties of the transfer object like this:
    // const transfer = response.data;
    // console.log('Transfer ID:', transfer.id);
    // console.log('Source Currency:', transfer.sourceCurrency);
    // console.log('Target Currency:', transfer.targetCurrency);
    // console.log('Status:', transfer.status);
    // ... other transfer details
  } catch (error) {
    console.error("Error getting transfer by ID:", error.message);
  }
}

// Call the function to get the transfer information by ID
getTransferById();
