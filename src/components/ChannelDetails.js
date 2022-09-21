import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchDataFromAPI";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";


const ChannelDetails = () => {
  const {id} = useParams();
  const [channelDetail, setChannelDetals] = useState(null)
  const [videos, setVideos] = useState([])
 
  console.log(channelDetail, videos);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data)=> setChannelDetals(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=> setVideos(data?.items));
  }, [id])
  
  return (
   <Box minHeight='95vh'>
    <Box>
    <div style={{
background: 'linear-gradient(90deg, rgba(23,244,202,1) 0%, rgba(117,9,121,1) 52%, rgba(255,0,161,1) 100%)',zIndex:10,height:'250px'}} />
   <ChannelCard channelDetail={channelDetail} marginTop='-115px' />
    </Box>
    <Box display='flex' p="2" >
      <Box sx={{m:{sm:'5%'}}} />
        <Videos videos={videos} />
     
    </Box>
   </Box>
  )
}
export default ChannelDetails;