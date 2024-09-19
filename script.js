//your JS code here. If required.
// Array of URLs
const urls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/3'
];

// Function to fetch data from each URL asynchronously
async function fetchDataFromURLs(urls) {
  try {
    // Iterate over each URL and fetch data
    for (const url of urls) {
      const response = await fetch(url);  // Make an HTTP GET request
      const data = await response.json(); // Parse the response as JSON

      // Log the response in a human-readable format
      console.log(`Response from ${url}:`, data);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Call the function to fetch data
fetchDataFromURLs(urls);
