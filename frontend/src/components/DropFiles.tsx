// DropFiles.js
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import { useTagContext } from "../context/ProductFilterStore"; // Import your existing context
import { BsFillFileCodeFill } from "react-icons/bs";


function DropFiles(props: any) {
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
  const [prediction, setPrediction] = useState("");
  const { handleTagClick } = useTagContext(); // Get the handleTagClick function from your existing context

  const onDrop = async (acceptedFiles: (string | Blob)[]) => {
    const formData = new FormData();
    formData.append("image", acceptedFiles[0]);

    try {
      const response = await fetch("http://127.0.0.1:5001/predict", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        setPrediction(result.product);
        handleTagClick(result.product); // Update the selected tag based on the prediction
      } else {
        // Handle the error here
        console.error("Failed to make the prediction");
      }
    } catch (error) {
      // Handle network or other errors here
      console.error(error);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: ["image/jpeg", "image/png"],
    onDrop,
  });

  return (
    <Box
      mt={"50px"}
      mx="auto"
      w="75%"
      bg="brand.main"
      textAlign="center"
      sx={headerHover1}
      p={"12px"}
      rounded={"2xl"}
    >
      <Flex
        align="center"
        direction="row"
        textAlign="center"
        justifyContent={"center"}
        alignContent={"center"}
        width={"100%"}
      >
        <Box
          {...getRootProps({
            className: "dropzone",
            style: { cursor: "pointer", width: "inherit" },
          })}
        >
          <input {...getInputProps()} />
          <Heading size={"lg"}>Drag 'n' Drop or select files</Heading>
          <Text fontSize={"sm"} fontWeight={300} m={"5px"}>
            and wait for the prediction!
          </Text>
          <Flex
            my={"20px"}
            alignContent={"center"}
            alignItems={"center"}
            justifyContent={"center"}
            justifyItems={"center"}
          >
            <BsFillFileCodeFill size="120px" opacity="0.8" mx={"auto"} />
          </Flex>
          <Text size={"xm"} fontStyle={"italic"} fontWeight={"300"}>
            (Only *.jpeg and *.png images will be accepted)
          </Text>
        </Box>
      </Flex>
      {prediction && (
        <Text fontSize={"sm"} opacity={"0.5"}>
          Predicted product: {prediction}
        </Text>
      )}
    </Box>
  );
}

export default DropFiles;
