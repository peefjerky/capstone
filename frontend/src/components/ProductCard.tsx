
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Divider,
  Text,
  Stack,
  Flex,
  Image,
  Tag,
  HStack,
  VStack,
} from "@chakra-ui/react";

import { Reveal } from "./utils/Reveal";

interface ImageData {
  id: number;
  product_type: string;
  color: string;
  gender: string;
  description: string;
  image_data: string; // The base64-encoded image data
}

interface ProductCardProps {
  imageData: ImageData;
}


const ProductCard: React.FC<ProductCardProps> = ({ imageData }) => {

  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        borderRadius={"15px"}
        pos={"relative"}
        zIndex={1}
        transition={"500ms ease-in-out"}
        _hover={{ transform: "scale(1.05)" }}
      >
        <Flex justifyContent={"center"}>
          <Box
            rounded={"lg"}
            mt={-12}
            pos={"relative"}
            height={"230px"}
            _after={{
              transition: "all .5s ease-in-out",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,
              backgroundImage: `url(${`data:image/png;base64,${imageData.image_data}`})`,
              filter: "blur(12px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(24px)",
              },
            }}
          >
            <Image
              rounded={"15px"}
              height={"200px"}
              width={"auto"}
              objectFit={"cover"}
              src={`data:image/png;base64,${imageData.image_data}`}
              alt={imageData.product_type}
            />
          </Box>
        </Flex>
        <Stack pt={10} spacing={"20px"}>
          <Tag bg="brand.main" color={"black"} size={"md"} alignSelf={"center"}>
            {imageData.product_type}
          </Tag>
          <Divider />
          <Flex justify={"space-between"} align={"center"} w="100%">
            <Reveal>
              <Heading fontSize={"xl"} alignSelf={"center"} m={0}>
                {imageData.product_type}
              </Heading>
            </Reveal>
            <VStack align={"flex-end"} gap={0}>
              <Reveal>
                <Text fontSize={"sm"} align={"start"} color={"blackAlpha.500"}>
                  {imageData.color}
                </Text>
                <Text fontSize={"sm"} align={"start"} color={"blackAlpha.500"}>
                  {imageData.gender}
                </Text>
              </Reveal>
            </VStack>
          </Flex>
          <HStack align={"start"} justify={"space-between"}>
            <Reveal>
              <Text
                fontSize={"sm"}
                noOfLines={2}
                overflow="hidden"
                textOverflow="ellipsis"
              >
                {imageData.description}
              </Text>
            </Reveal>
          </HStack>
        </Stack>
      </Box>
    </Center>
  );
};

export default ProductCard;
