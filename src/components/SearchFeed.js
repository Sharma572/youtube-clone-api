import { Typography } from "@mui/material";
import { Box} from "@mui/system";
import React, { useEffect, useState } from "react";
import { Video } from "./index";


import { fetchFromAPI } from "../utils/fetchDataFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "95vh", flex: 2 }}>
    <Typography
      variant="h4"
      fontWeight="bold"
      mb={2}
      sx={{ color: "white" }}
    >
      Search Results for : <span style={{ color: "#F31505" }}>{searchTerm}</span>
      videos
    </Typography>
    <Video videos={videos} />
  </Box>
  );
};

export default SearchFeed;
