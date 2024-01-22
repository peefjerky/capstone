import { useState, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";

interface DataItem {
  label: string; // Assuming label is a string, adjust the type as needed
  // Add other properties if there are more in your data objects
}
const LoadingPredData = () => {
  // Initialize data state as an object with an empty array
  const [data, setData] = useState({ output: [] });

  useEffect(() => {
    // Debugging: Log the request URL
    const requestURL = "http://127.0.0.1:5000/get_output_json";
    console.log("Sending request to:", requestURL);

    fetch(requestURL, {
      headers: {
        Accept: "application/json", // Ensure JSON response
      },
    })
      .then((res) => {
        // Debugging: Log the response status
        console.log("Response status:", res.status);

        // Ensure that the response is valid JSON and parse it
        if (res.status === 200) {
          return res.json(); // This line parses the JSON data
        } else {
          throw new Error("Response status is not 200 OK");
        }
      })
      .then((responseData) => {
        // Update the data state with the parsed response data
        setData(responseData);
        console.log("Response data:", responseData);
      })
      .catch((error) => {
        // Handle errors, such as network issues or non-JSON responses
        console.error("Request error:", error);
      });
  }, []); // The empty dependency array ensures this runs once when the component mounts
  return (
    <Box>
      <Flex>
        <ul>
          {data.output.map((item: DataItem, index: number) => (
            <li key={index}>{item.label}</li>
          ))}
        </ul>
      </Flex>
    </Box>
  );
};

export default LoadingPredData;
