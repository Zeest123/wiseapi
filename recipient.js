const axios = require("axios");

// Replace 'YOUR_API_KEY' with your actual API key
const API_KEY = "5ebe388b-a1d1-4cd3-a4ce-b5f7e0fc9c75";
const BASE_URL = "https://api.transferwise.com/v3";
const currency = "CAD"; // Replace with the recipient account ID you want to retrieve

const PROFILE_ID = "25024664";
const baseUrl = `https://api.transferwise.com/v1/accounts?profile=${PROFILE_ID}&currency=${currency}`;

const config = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
};

async function getRecipientAccount() {
  try {
    const response = await axios.get(`${baseUrl}`, config);
    const recipientAccount = response.data;
    console.log("Recipient Account:", recipientAccount.length);
  } catch (error) {
    console.error("Error getting recipient account:", error.message);
  }
}

getRecipientAccount();
