import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Grid,
  GridItem,
  Flex,
  Text,
  Stack,

  useColorModeValue,
} from "@chakra-ui/react";

const TeamData = [
  {
    id: 1,
    name: "Preet Jha",
    img: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?auto=format&fit=crop&q=80&w=2970&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    img_prof: "/preet.jpg",
    job: "Frontend + Backend + API Developemnt",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2970&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    img_prof: "/vedant.png",
    name: "Vedant Sahai",
    job: "Python Model + Backend + Data Preprocessing",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=2970&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    img_prof: "/shritin.png",
    name: "Shritin Shetty",
    job: "Model + Data Preprocessing + Documentation",
  },
];

const Team = () => {
  return (
    <Grid
      templateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap={{ base: 5, md: 7, lg: 10 }}
      mt={"50px"}
      as="header"
    >
      {TeamData.map((teamMember) => (
        <GridItem key={teamMember.id}>
          <Center py={6}>
            <Box
              mb={"100px"}
              maxW={"450px"}
              w={"full"}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={useColorModeValue("white", "gray.800")}
              boxShadow={"2xl"}
              rounded={"md"}
              overflow={"hidden"}
            >
              <Image
                h={"auto"}
                w={"full"}
                src={teamMember.img}
                objectFit="cover"
                alt="#"
              />
              <Flex justify={"center"} mt={-12}>
                <Avatar
                  size={"xl"}
                  src={teamMember.img_prof}
                  css={{
                    border: "2px solid white",
                  }}
                />
              </Flex>

              <Box p={6}>
                <Stack spacing={0} align={"center"} mb={5}>
                  <Heading
                    mb={4}
                    fontSize={"2xl"}
                    fontWeight={500}
                    fontFamily={"body"}
                  >
                    {teamMember.name}
                  </Heading>
                  <Text color={"gray.500"} fontWeight={700} fontSize={"sm"}>
                    {teamMember.job}
                  </Text>
                </Stack>
              </Box>
            </Box>
          </Center>
        </GridItem>
      ))}
    </Grid>
  );
};

export default Team;
