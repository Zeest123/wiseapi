const axios = require("axios");

// Replace 'YOUR_API_KEY' with your actual API key
const API_KEY = "5ebe388b-a1d1-4cd3-a4ce-b5f7e0fc9c75";
const BASE_URL = "https://api.transferwise.com/v3";

// const headers = {
//   Authorization: `Bearer ${API_KEY}`,
// };

// Function to get a quote
async function getQuote() {
  const headers = {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
  };

  // Quote request data
  const quoteData = {
    source: "SOURCE_CURRENCY", // Source currency (e.g., 'USD')
    target: "TARGET_CURRENCY", // Target currency (e.g., 'EUR')
    amount: 1000, // Transfer amount
    // Add other necessary quote details here...
  };

  try {
    // Make a POST request to get the quote
    const response = await axios.post(`${BASE_URL}/quotes`, quoteData, {
      headers,
    });
    const quoteUuid = response.data; // Extract the quoteUuid from the response
    console.log("Quote UUID:", quoteUuid);
  } catch (error) {
    console.error("Error getting quote:", error.message);
  }
}

// Call the function to get a quote
getQuote();
