const axios = require("axios");

// Replace 'YOUR_API_KEY' with your actual API key
const API_KEY = "5ebe388b-a1d1-4cd3-a4ce-b5f7e0fc9c75";
const BASE_URL = "https://api.transferwise.com/v3";
// Replace with your actual profile ID
const PROFILE_ID = "25024664";

// Endpoint URL
const endpointUrl = `https://api.transferwise.com/v1/profiles/${PROFILE_ID}/activities`;

// Function to fetch activities for a profile
async function getActivitiesForProfile() {
  try {
    const response = await axios.get(endpointUrl, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
      //   WyJQUklPUklUWSIsMTAwMDAxNjg5NzM3NTM1Nzg2MDA2MTkzNV0=
      //   params: {
      //     nextCursor: "WyJQUklPUklUWSIsMTAwMDAxNjg5NzAwNzY4NjE3MDQyODQ3Ml0=", // Add the cursor as a query parameter

      // You can add more query parameters here based on your requirements
      // For example:
      params: {
        //   monetaryResourceType: 'CARD_TRANSACTION', // To filter by resource type
        //   status: 'COMPLETED', // To filter by activity status
        // nextCursor: "WyJQUklPUklUWSIsMTAwMDAxNjg4MTc2ODE2NDA4MDAwODc2Nl0=",
        since: "2023-07-19T00:00:00.000Z", // To filter by starting timestamp
        // until: "2023-07-02T00:00:00.000Z", // To filter by ending timestamp
        size: 100, // Desired size of the query (max 100)
      },
    });

    // Print the list of activities
    // console.log(response.data);
    // console.log(response.data.activities[0]);

    // You can access individual activities in response.data.activities
    // For example:
    const activities = response.data.activities;
    activities.forEach((activity) => {
      //   console.log("activity:", activity);
      //   console.log("Activity ID:", activity.id);
      console.log("Type:", activity.createdOn);
      //   console.log("Status:", activity.status);
      // ... other activity details
    });
    console.log("cursor: ", response.data.cursor);
    console.log(response.data.activities.length);
  } catch (error) {
    console.error("Error fetching activities:", error);
  }
}

// Call the function to fetch activities
getActivitiesForProfile();
