import { ExternalLinkIcon } from "@chakra-ui/icons";

import {
  Box,
  Center,
  Circle,
  Flex,
  Link,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  LinkBox,
  LinkOverlay,
  HStack,
} from "@chakra-ui/react";
import { BsArrowUpRightSquareFill } from "react-icons/bs";
// Importing utils
import { Reveal } from "../components/utils/Reveal";

import ParallaxTextEffect from "../components/utils/ParallaxText";
import ProductFilters from "../components/ProductFilters";
import DropFiles from "../components/DropFiles";
import { TagProvider } from "../context/ProductFilterStore";

import ProductCardGrid from "../components/ProductCardGrid";

const LandingPage = () => {
  const headerHover1 = {
    transition: "500ms ease-in-out",
    background:
      "linear-gradient(135deg, rgba(248, 249, 253, 1) 0%, rgba(193, 243, 119, 1) 100%)",
    backgroundSize: "700%",
    backgroundPosition: "left",
    _hover: {
      backgroundPosition: "right",
    },
  };

  const headerHover2 = {
    transition: "500ms ease-in-out",

    ">:first-child": {
      transition: "500ms ease-in-out",
    },
    "&:hover > :first-child": {
      transform: "scale(1.2)",
      filter: "brightness(50%)",
      transition: "500ms ease-in-out",
    },
    _hover: {
      borderBottom: "15px solid rgba(193, 243, 119, 1)",
    },
    "&:hover >:nth-child(2)>:nth-child(1)": {
      color: "#a8f560",
      transition: "500ms ease-in-out",
    },
    ">:nth-child(2)>:nth-child(1)": {
      transition: "500ms ease-in-out",
    },
  };

  const headerHover3 = {
    transition: "500ms ease-in-out",
    backdropFilter: "blur(12px)",
    background:
      "linear-gradient(180deg, rgba(248, 249, 253, 0.4) 0%, rgba(193, 243, 119, 1) 100%)",
  };

  const images = {
    img1: "https://images.unsplash.com/photo-1605812860427-4024433a70fd?auto=format&fit=crop&q=80&w=3135&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    img2: "https://images.unsplash.com/photo-1656528049647-c82eb8174d04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=900&q=60",
    img3: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1626&q=80",
  };

  return (
    <Box mx={{ base: 5, md: "30px", lg: 50 }} mb={"140px"}>
      {/*  // * Hero Section */}
      <Grid
        templateRows={"repeat(2,1fr)"}
        templateColumns={"repeat(3, 1fr)"}
        gap={{ base: 5, md: 7, lg: 10 }}
        as="header"
        mb={"150px"}
      >
        <GridItem
          colSpan={{ base: 3, lg: 2, md: 2 }}
          bg="brand.background"
          borderRadius={15}
          sx={headerHover1}
        >
          <Reveal>
            <Box
              textAlign={{ base: "center", md: "start", lg: "start" }}
              w={{ base: "fit-content", md: "fit-content", lg: "65%" }}
              m={25}
            >
              <Heading as="h1" size={{ base: "3xl", md: "3xl", lg: "4xl" }}>
                Unleash your Street Style with our new Collection
              </Heading>
              <Text
                color="gray.600"
                mt={10}
                fontSize={{ base: "md", md: "xl", lg: "xl" }}
              >
                Shop Our Latest Collection and Discover the Hottest Streetwear
                Styles of the Season — Find Your Must-Have Pieces and Fresh
                Looks Now, Before They're Gone!
              </Text>
            </Box>
          </Reveal>
        </GridItem>

        <GridItem
          rowSpan={{ base: 1, lg: 2, md: 2 }}
          colSpan={{ base: 3, lg: 1, md: 1 }}
          bg="papayawhip"
          minH={{ base: 350 }}
          borderRadius={15}
          overflow="hidden"
          position="relative"
          sx={headerHover2}
        >
          <Image
            src={images.img1}
            objectFit="cover"
            h="100%"
            w="100%"
            zIndex={0}
            position="absolute"
            top={0}
            left={0}
          />

          <Box
            zIndex={1}
            position="absolute"
            bottom={0}
            left={0}
            py={4}
            w="100%"
            bgGradient="linear(to-b, rgba(0,0,0,0) 0%, rgba(0,0,0,1)) 100%"
            color="white"
            h={{ base: "40%", md: "24%", lg: "20%" }}
            px={10}
            backdropFilter={"blur(20px)"}
            borderTopRadius={"25px"}
          >
            <Reveal>
              <Heading mb={{ base: "5px", md: "5px", lg: "10px" }}>
                Boots
              </Heading>

              <Text>
                Discover our Latest Collection of Fashionable and Comfortable
                Clothes
              </Text>

              <Link
                colorScheme="green"
                variant={"link"}
                color={"brand.accent"}
                mt={"5px"}
                href="/articles"
              >
                <Flex
                  direction={"row"}
                  height={"max-content"}
                  w={"max-content"}
                  alignItems={"center"}
                >
                  <Text fontSize={"xl"} fontWeight={"700"}>
                    Shop All
                  </Text>

                  <ExternalLinkIcon boxSize={"18px"} ms={"6px"} />
                </Flex>
              </Link>
            </Reveal>
          </Box>
        </GridItem>

        <GridItem
          colSpan={{ base: 3, md: 1, lg: 1 }}
          borderRadius={15}
          overflow="hidden"
          position="relative"
          bg="papayawhip"
          minH={350}
          sx={headerHover2}
        >
          <Image
            src={images.img2}
            objectFit="cover"
            h="100%"
            w="100%"
            zIndex={0}
            position="absolute"
            top={0}
            left={0}
          />
          <Box
            zIndex={1}
            position="absolute"
            bottom={0}
            left={0}
            py={4}
            w="100%"
            bgGradient="linear(to-b, rgba(0,0,0,0) 0%, rgba(0,0,0,1)) 100%"
            color="white"
            h={{ base: "45%", md: "40%", lg: "40%" }}
            px={10}
            backdropFilter={"blur(20px)"}
            borderTopRadius={"25px"}
          >
            <Reveal>
              <Heading mb={{ base: "5px", md: "5px", lg: "5px" }}>Tops</Heading>
              <Text>
                Discover our Latest Collection of Fashionable and Comfortable
                Clothes
              </Text>
              <Link
                colorScheme="green"
                variant={"link"}
                color={"brand.accent"}
                mt={"5px"}
                href="/articles"
              >
                <Flex
                  direction={"row"}
                  height={"max-content"}
                  w={"max-content"}
                  alignItems={"center"}
                >
                  <Text fontSize={"xl"} fontWeight={"700"}>
                    Shop All
                  </Text>

                  <ExternalLinkIcon boxSize={"18px"} ms={"6px"} />
                </Flex>
              </Link>
            </Reveal>
          </Box>
        </GridItem>
        <GridItem
          colSpan={{ base: 3, md: 1, lg: 1 }}
          borderRadius={15}
          overflow="hidden"
          position="relative"
          bg="papayawhip"
          minH={350}
          sx={headerHover2}
        >
          <Image
            src={images.img3}
            objectFit="cover"
            h="100%"
            w="100%"
            zIndex={0}
            position="absolute"
            top={0}
            left={0}
          />
          <Box
            zIndex={1}
            position="absolute"
            bottom={0}
            left={0}
            py={4}
            w="100%"
            bgGradient="linear(to-b, rgba(0,0,0,0) 0%, rgba(0,0,0,1)) 100%"
            color="white"
            h={{ base: "45%", md: "40%", lg: "40%" }}
            px={10}
            backdropFilter={"blur(20px)"}
            borderTopRadius={"25px"}
          >
            <Reveal>
              <Heading mb={{ base: "5px", md: "5px", lg: "5px" }}>
                Bottoms
              </Heading>
              <Text>
                Discover our Latest Collection of Fashionable and Comfortable
                Clothes
              </Text>

              <Link
                colorScheme="green"
                variant={"link"}
                color={"brand.accent"}
                mt={"5px"}
                href="/articles"
              >
                <Flex
                  direction={"row"}
                  height={"max-content"}
                  w={"max-content"}
                  alignItems={"center"}
                >
                  <Text fontSize={"xl"} fontWeight={"700"}>
                    Shop All
                  </Text>

                  <ExternalLinkIcon boxSize={"18px"} ms={"6px"} />
                </Flex>
              </Link>
            </Reveal>
          </Box>
        </GridItem>
      </Grid>
      {/* //* Landing Page Products */}

      <Box position={"relative"}>
        <Box
          mx={{ base: -5, md: "-30", lg: -50 }}
          position={"absolute"}
          zIndex={0}
          top={{ base: "-55px", md: "-50px", lg: "-4.9%" }}
          overflow={"hidden"}
          maxW={"100dvw"}
        >
          <ParallaxTextEffect>
            <Center>
              <Heading
                as={"h1"}
                fontSize={{ lg: "96px", md: "64px", base: "64px" }}
                letterSpacing={"-2px"}
                fontWeight={600}
                m={0}
              >
                Latest Drops
              </Heading>
              <Circle size={"15px"} bg={"brand.main"} mx={"20px"} />
            </Center>
          </ParallaxTextEffect>
        </Box>
        <Box
          p={"50px"}
          bg={"brand.background"}
          borderRadius={"15px"}
          sx={headerHover3}
          zIndex={12}
          position={"relative"}
        >
          {/* //* Input Product Filters */}
          <TagProvider>
            <ProductFilters />
            <DropFiles />
            <ProductCardGrid />
          </TagProvider>
          {/*           <Grid
            templateRows={"repeat(2,1fr)"}
            templateColumns={"repeat(4, 1fr)"}
            gap={{ base: 5, md: 7, lg: 10 }}
            as="header"
          >

            {Array.from({ length: 4 }, (_, index) => (
              <GridItem key={index} colSpan={{ base: 4, md: 2, lg: 1 }}>
                <ProductCard />
              </GridItem>
            ))}
          </Grid> */}
        </Box>

        {/* //* Shop all button */}

        <Center>
          <LinkBox
            width={"fit-content"}
            height={"fit-content"}
            bg="brand.main"
            backgroundPosition={"left"}
            backgroundSize={"100%"}
            mx={"auto"}
            pt={7}
            pb={4}
            px={7}
            borderRadius={"15px"}
            position={"absolute"}
            bottom={{ base: "-40px", md: "-50px", lg: "-60px" }}
            zIndex={13}
          >
            <Box>
              <LinkOverlay href="/articles">
                <HStack justify={"space-between"}>
                  <Heading fontSize={{ lg: "4xl", md: "3xl", base: "2xl" }}>
                    SHOP ALL
                  </Heading>
                  <BsArrowUpRightSquareFill fontSize="24px" />
                </HStack>
              </LinkOverlay>
            </Box>
          </LinkBox>
        </Center>
      </Box>
    </Box>
  );
};

export default LandingPage;
