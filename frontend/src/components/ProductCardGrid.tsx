import { useEffect } from "react";
import { Grid, GridItem, Skeleton } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import { useTagContext } from "../context/ProductFilterStore";
import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

interface ImageData {
  id: number;
  product_type: string;
  color: string;
  gender: string;
  description: string;
  image_data: string; // The base64-encoded image data
}

const fetchData = async (selectedTag: string, isArticles: boolean) => {
  const response = await axios.get("http://127.0.0.1:5000/api/get_data");
  const data = await response.data;

  if (!isArticles) {
    // If it's not the "/articles" route, load data based on the selected tag
    if (selectedTag === "All") {
      return data.slice(0, 8); // Load all items for "All" tag
    } else {
      const filteredData = data.filter(
        (item: ImageData) => item.product_type === selectedTag
      );
      return filteredData.slice(0, 8); // Only load the first 8 items for the selected tag
    }
  } else {
    // If it's the "/articles" route, load all items for the selected tag
    if (selectedTag === "All") {
      return data;
    } else {
      const filteredData = data.filter(
        (item: ImageData) => item.product_type === selectedTag
      );
      return filteredData;
    }
  }
};

const ProductCardGrid = React.memo(() => {
  const { selectedTag } = useTagContext();
  const isArticlesRoute = window.location.pathname === "/articles"; // Check if the current URL is "/articles"

  const { data, isLoading, error } = useQuery(
    ["imageData", selectedTag],
    () => fetchData(selectedTag, isArticlesRoute), // Pass isArticlesRoute as a parameter
    {
      enabled: !!selectedTag,
    }
  );

  useEffect(() => {
    if (error) {
      console.error("Error fetching image data:", error);
    }
  }, [error]);
  const skeletonData = new Array(8).fill(null);

  return (
    <Grid
      templateRows={"repeat(2,1fr)"}
      templateColumns={"repeat(4, 1fr)"}
      gap={{ base: 5, md: 7, lg: 10 }}
      mt={"50px"}
      as="header"
    >
      {isLoading ? (
        skeletonData.map((_, index) => (
          <GridItem key={index} colSpan={{ base: 4, md: 2, lg: 1 }}>
            <Skeleton
              mx={"auto"}
              h={"530px"}
              maxW={{ lg: "330px", base: "300px" }}
              borderRadius={"15px"}
            />
          </GridItem>
        ))
      ) : error ? (
        <p>Error loading data</p>
      ) : (
        data.map((imageData: ImageData, index: number) => (
          <React.Fragment key={index}>
            <GridItem colSpan={{ base: 4, md: 2, lg: 1 }}>
              <ProductCard key={index} imageData={imageData} />
            </GridItem>
          </React.Fragment>
        ))
      )}
    </Grid>
  );
});

export default ProductCardGrid;
