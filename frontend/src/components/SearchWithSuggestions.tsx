import { VStack, Flex, Input } from "@chakra-ui/react";

import { useTagContext } from "../context/ProductFilterStore"; // Import the useTagContext hook

const SearchWithSuggestions = () => {
  const { selectedTag, handleTagClick } = useTagContext(); // Get selectedTag and handleTagClick from the context

  const handleInputChange = (event: { target: { value: string } }) => {
    const inputValue = event.target.value.toLowerCase();
    let tag = "All";

    // Map the input value to the corresponding tag
    if (inputValue === "tshirt" || inputValue === "Tshirt") {
      tag = "T-shirt";
    } else if (inputValue === "shirt") {
      tag = "Shirt";
    } else if (inputValue === "sweater") {
      tag = "Sweater";
    } else if (inputValue === "boots") {
      tag = "Boots";
    } else if (inputValue === "trousers") {
      tag = "Trousers";
    } else if (inputValue === "dress") {
      tag = "Dress";
    }

    handleTagClick(tag); // Update the selected tag in the context
  };

  return (
    <VStack>
      <Flex align={"center"}>
        <Input
          type="text"
          placeholder="Enter product name..."
          rounded={"3xl"}
          background={"brand.background"}
          onChange={handleInputChange} // Call handleInputChange on input change
        ></Input>
      </Flex>
    </VStack>
  );
};

export default SearchWithSuggestions;
