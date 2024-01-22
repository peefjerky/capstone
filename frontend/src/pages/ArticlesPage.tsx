import {
  Box,
  Button, // @ts-ignore
  Divider,
  Center,
  Circle,
  Grid,
  GridItem,
  Heading,
  Image, // @ts-ignore
  Stack,
  Text,
  LinkBox,
  LinkOverlay,
  HStack,
} from "@chakra-ui/react";
import { TagProvider } from "../context/ProductFilterStore";
import ParallaxTextEffect from "../components/utils/ParallaxText";
import { BsArrowUpRightSquareFill } from "react-icons/bs";
// Importing utils
import { Reveal } from "../components/utils/Reveal";
import DropFiles from "../components/DropFiles";
import ProductCard from "../components/ProductCard";
import ProductCardGrid from "../components/ProductCardGrid";

import ProductFilters from "../components/ProductFilters";

const ArticlesPage = () => {
  const headerHover3 = {
    transition: "500ms ease-in-out",
    backdropFilter: "blur(12px)",
    background:
      "linear-gradient(180deg, rgba(248, 249, 253, 0.4) 0%, rgba(193, 243, 119, 1) 100%)",
  };

  return (
    <Box mx={{ base: 5, md: "30px", lg: 50 }} mb={"140px"} mt={"100px"}>
      <Box
        borderRadius={"15px"}
        py={10}
        bg={"brand.main"}
        mx={"15px"}
        mb={"15px"}
        textAlign={"center"}
      >
        {/*   <Heading as="h1" fontSize={{ lg: "75px", md: "50px", base: "25px" }}>
        Step up your Style Game
      </Heading> */}
        <ParallaxTextEffect>
          <Center>
            <Heading
              as={"h1"}
              fontSize={{ lg: "64px", md: "48px", base: "36px" }}
              letterSpacing={"-2px"}
              fontWeight={600}
              m={0}
            >
              Browser Latest Drops
            </Heading>
            <Circle size={"15px"} bg={"brand.main_dark"} mx={"20px"} />
          </Center>
          <Center>
            <Heading
              as={"h1"}
              fontSize={{ lg: "64px", md: "48px", base: "36px" }}
              letterSpacing={"-2px"}
              fontWeight={600}
              m={0}
            >
              Upgrade to Elevé
            </Heading>
            <Circle size={"15px"} bg={"brand.secondary"} mx={"20px"} />
          </Center>
        </ParallaxTextEffect>
      </Box>
      <Box position={"relative"}>
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
      </Box>
    </Box>
  );
};

export default ArticlesPage;
