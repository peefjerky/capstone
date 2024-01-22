import { ReactNode } from "react";

import {
  Box,
  Flex,
  Avatar,
  Text,
  HStack,
  Link,
  Heading,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = ["About", "Collection", "Team"];
// @ts-ignore
const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg="rgba(193,243,119,0.7)"
        px={4}
        backdropFilter={"blur(12px)"}
        m={"0px 10px 40px 10px"}
        borderRadius={"15px"}
        position={"sticky"}
        top={"15px"}
        zIndex={999}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            colorScheme="green"
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box ms="20px">
              <Link href="/">
                <Heading as="h1">Elevé</Heading>
              </Link>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link href="/about">About</Link>
              <Link href="/articles">Collection</Link>
              <Link href="/team">Team</Link>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={{ base: "sm", md: "md", lg: "md" }}
                  src={"/vedant.png"}
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Vedant</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }} mx="10px">
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <Text key={link}>{link}</Text>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
