console.log("Rest API assignment");

// Your valid NASA API key
const apiKey = 'DYx2toeby0ZcxYJ04PcMKtIhXgB8kGlNuudhH1uO';
const baseURL = 'https://api.nasa.gov/planetary/apod';

// Function to get APOD data based on user input or default to today
async function getData() {
  // Simulate user input for the date (in place of an HTML input element)
  let dateInput = prompt("Enter a date (YYYY-MM-DD) for the APOD, or leave blank for today:");

  // If no date is provided, default to today's date
  if (!dateInput) {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;  // getMonth() is zero-based
    let day = today.getDate();
    
    // Ensure month and day are 2 digits
    if (month < 10) month = '0' + month;
    if (day < 10) day = '0' + day;

    dateInput = `${year}-${month}-${day}`;
  }

  // Construct the API URL with the provided or default date
  let finalURL = `${baseURL}?date=${dateInput}&api_key=${apiKey}`;

  try {
    // Fetch the data from NASA APOD API
    let result = await fetch(finalURL);

    // Check if the fetch was successful
    if (!result.ok) {
      console.error("HTTP Error: ", result.status);
      return;
    }

    // Parse the JSON response
    let jsonRes = await result.json();

    // Debug: Log the entire response to inspect its structure
    console.log("Full API Response:", jsonRes);

    // Log specific fields from the API response
    console.log(`Title: ${jsonRes.title || "No title available"}`);
    console.log(`Date: ${jsonRes.date || "No date available"}`);
    console.log(`Explanation: ${jsonRes.explanation || "No explanation available"}`);

    // Display URL based on media type (image or video)
    if (jsonRes.media_type === "image") {
      console.log(`Image URL: ${jsonRes.url || "No image available"}`);
    } else if (jsonRes.media_type === "video") {
      console.log(`Video URL: ${jsonRes.url || "No video available"}`);
    } else {
      console.log("Unknown media type");
    }
  } catch (error) {
    console.error("Error fetching the APOD: ", error);
  }
}

// Call the function to get the data
getData();
