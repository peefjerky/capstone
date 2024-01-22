
import {
  Box,
  Divider,
  Flex,
  Popover,
  PopoverTrigger,
  IconButton,
  useDisclosure,
  PopoverContent,
  PopoverArrow,
  HStack,
  TagLabel,
  Tag,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import SearchWithSuggestions from "../components/SearchWithSuggestions";
import { useTagContext } from "../context/ProductFilterStore";

const ProductFilters = () => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const { selectedTag, handleTagClick } = useTagContext(); // Get the selectedTag and handleTagClick from the context

  const tags = [
    "All",
    "T-shirt",
    "Shirt",
    "Trousers",
    "Dress",
    "Boots",
    "Sweater",
  ];

  return (
    <Box
      bg="white"
      borderRadius={"15px"}
      my={"20px"}
      p={3}
      mx={{ base: "-25px", md: "-25px" }}
    >
      <Flex align={"center"} h="35px">
        <Popover
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          placement="bottom-end"
          closeOnBlur={true}
        >
          <PopoverTrigger>
            <IconButton
              size="sm"
              bg={"brand.main"}
              color={"brand.main_dark"}
              px={"20px"}
              rounded={"3xl"}
              icon={<BsSearch fontSize="15px" />}
              aria-label={""}
            />
          </PopoverTrigger>
          <PopoverContent
            p={5}
            maxW="fit-content"
            bg="rgba(248, 249, 253, 0.7)"
            backdropFilter={"blur(12px)"}
          >
            <PopoverArrow />
            <SearchWithSuggestions />
          </PopoverContent>
        </Popover>
        <Divider
          orientation="vertical"
          mx={"15px"}
          colorScheme="blackAlpha"
          size="3xl"
        />
        <Box overflowX="auto" flex={1}>
          <HStack spacing={4} flexWrap={"nowrap"}>
            {tags.map((tag: string, index: number) => (
              <Tag
                minW={"fit-content"}
                key={index}
                size={"lg"}
                borderRadius="full"
                variant={selectedTag === tag ? "solid" : "subtle"}
                bg={selectedTag === tag ? "brand.main" : "brand.background"}
                color="black"
                onClick={() => handleTagClick(tag)} // Call handleTagClick with the clicked tag
                data-tag={tag}
                cursor={"pointer"}
                transition={"200ms ease-in-out"}
              >
                <TagLabel>{tag}</TagLabel>
              </Tag>
            ))}
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProductFilters;
