import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  Heading,
  Center,
  Circle,
} from "@chakra-ui/react";
import ParallaxTextEffect from "./utils/ParallaxText";
import { Reveal } from "./utils/Reveal";
import "../scss/ParallaxText.scss";

const Footer = () => {
  return (
    <Box>
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
              Step Up Your Style
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

      <Box
        borderRadius={"15px"}
        py={10}
        bg={"rgba(248, 249, 253, 1)"}
        mx={"15px"}
        mb={"50px"}
        textAlign={"center"}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Reveal>
            <Stack direction={"row"} spacing={6}>
              <Link href={"/"}>Home</Link>
              <Link href={"/about"}>About</Link>
              <Link href={"/articles"}>Collections</Link>
              <Link href={"/team"}>Team</Link>
            </Stack>
          </Reveal>
          <Reveal>
            <Heading>Elevé</Heading>
          </Reveal>
          <Reveal>
            <Text>© 2023 Elevé. All rights reserved</Text>
          </Reveal>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
