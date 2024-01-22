import { ArrowRightIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  VStack,
  Spacer,
  Grid,
  GridItem,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Heading,
  Button,
} from "@chakra-ui/react";

interface DrawerComponentProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<DrawerComponentProps> = ({ isOpen, onClose }) => {
  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      size={{ base: "full", lg: "md", md: "md" }}
      closeOnEsc={true}
      closeOnOverlayClick={true}
      colorScheme="green"
    >
      <DrawerOverlay>
        <DrawerContent borderStartRadius={20} overflow={"hidden"} mt={"15px"}>
          <DrawerCloseButton top={"20px"} right={"26px"} size={"lg"} />
          <DrawerHeader
            bg={"brand.main"}
            m={"10px"}
            borderRadius={20}
            as="h1"
            textAlign={"center"}
            justifyContent={"center"}
          >
            Cart
          </DrawerHeader>

          <DrawerBody>
            <Grid templateRows={"repeat(2,1fr)"} h={"80dvh"}>
              <GridItem overflowY={"scroll"} h="60dvh">
                <Box h="20px" bg="green.300"></Box>
              </GridItem>
              <GridItem alignSelf={"flex-end"}>
                <Box
                  minH="20px"
                  bg="brand.main"
                  color={"black"}
                  borderRadius={20}
                  py={"20px"}
                  px={5}
                >
                  <Flex alignItems={"center"}>
                    <VStack alignItems={"start"}>
                      <Heading as={"h4"} size={"sm"} color="blackAlpha.600">
                        TOTAL:
                      </Heading>
                      <Heading as={"h1"}>₹500.00 </Heading>
                    </VStack>
                    <Spacer />
                    <Button
                      size={"lg"}
                      bg="white"
                      color={"black"}
                      justifySelf={"flex-end"}
                      rightIcon={<ArrowRightIcon />}
                      borderRadius={50}
                      transition={"500ms ease-in-out"}
                      _hover={{
                        color: "brand.secondary",
                        background: "brand.main_dark",
                        transition: "500ms ease-in-out",
                      }}
                    >
                      Buy Now
                    </Button>
                  </Flex>
                </Box>
              </GridItem>
            </Grid>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default CartDrawer;
