import {
  Box,


  Center,
  Circle,

  Heading,


  Text,

} from "@chakra-ui/react";
import ParallaxTextEffect from "../components/utils/ParallaxText";


const About = () => {
  const headerHover3 = {
    transition: "500ms ease-in-out",
    backdropFilter: "blur(12px)",
    background:
      "linear-gradient(180deg, rgba(248, 249, 253, 0.4) 0%, rgba(193, 243, 119, 1) 100%)",
  };
  return (
    <Box>
      <Box
        borderRadius={"15px"}
        py={10}
        bg={"brand.main"}
        mx={"50px"}
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
              Get to Know More About Us
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
        p={"50px"}
        bg={"brand.background"}
        mx={{ base: 5, md: "30px", lg: 50 }}
        mb={"140px"}
        borderRadius={"15px"}
        sx={headerHover3}
        zIndex={12}
        paddingX={{ base: "10px", lg: "200px", md: "100px", sm: "50px" }}
        position={"relative"}
      >
        <Center>
          <Heading mb={10} fontSize={"60px"}>
            About Us
          </Heading>
        </Center>
        <Text mb={10} fontSize={"xl"} fontWeight={"700"}>
          Elevé is a personalized recommendation on image input shopping website
          that helps you find the products you love, faster and easier. We use
          advanced image recognition and machine learning to understand your
          style and preferences, and then recommend products that you're sure to
          love.
        </Text>
        <Heading fontSize={"30px"} mb={4}>
          How it works?
        </Heading>
        <Text mb={10} fontSize={"xl"}>
          To use Elevé , simply upload a photo of a product that you like, or
          take a photo with your camera. Elevé will then use its image
          recognition technology to identify the product and find similar
          products from a variety of retailers. Once Elevé has found similar
          products, it will rank them based on your personal style and
          preferences. You can then browse the products and purchase the ones
          that you like.
        </Text>

        <Heading fontSize={"30px"} mb={4}>
          Why use Elevé
        </Heading>
        <Text mb={10} fontSize={"xl"}>
          There are many benefits to using Elevé , including: Personalized
          recommendations: Elevé uses its advanced image recognition and machine
          learning technology to understand your style and preferences, and then
          recommend products that you're sure to love. Wide selection of
          products: Elevé offers a wide selection of products from a variety of
          retailers, so you're sure to find what you're looking for. Easy to
          use: Elevé is very easy to use. Simply upload a photo of a product
          that you like, or take a photo with your camera, and Elevé will do the
          rest. Time-saving: Elevé can help you save time on your shopping by
          finding the products you love faster and easier. Our mission Our
          mission at Elevé is to make shopping easier and more enjoyable for
          everyone. We believe that everyone should have the opportunity to find
          the products they love, at the best prices.
        </Text>
        <Heading fontSize={"30px"} mb={4}>
          We value your privacy
        </Heading>
        <Text mb={10} fontSize={"xl"}>
          We take your privacy very seriously. We do not sell or share your
          personal information with any third parties. We also do not use your
          personal information for any other purpose than to provide you with
          the best possible shopping experience.
        </Text>
        <Heading mb={4}>Thank you for choosing Elevé !</Heading>
        <Text fontSize={"xl"}>
          Thank you for choosing Elevé ! We hope that you enjoy using Elevé to
          find the products you love. If you have any questions or feedback,
          please feel free to contact us.
        </Text>
      </Box>
    </Box>
  );
};

export default About;
