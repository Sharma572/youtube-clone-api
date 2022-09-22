import { CheckCircle } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system"
import { useEffect, useState } from "react";
import ReactPlayer from "react-player"
import { Link, useParams } from "react-router-dom"

import {Video} from './'
import {fetchFromAPI} from '../utils/fetchDataFromAPI'

const VideoDetails = () => {
 const [videoDetail, setvideoDetail] = useState(null)
  const {id} = useParams();

const [videos, setvideos] = useState(null)
  
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data)=> setvideoDetail(data.items[0]));   
    
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data)=> setvideos(data.items))
  }, [id]);

  if (!videoDetail?.snippet) return 'Loading...'
  
  // snippet and statistics are being destructured 
  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;
  return (
    <Box minHeight='80vh'>
      <Stack direction={{xs:'column',md:'row'}}>
       <Box flex={1}>
            <Box sx={{width:'100%',position:'sticky',top:'76px'}}>
                <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} 
                className="react-player" controls
               />
               <Typography color='#fff' variant='h6' fontWeight='bold' p={2} >
                {title}
               </Typography>
               <Stack direction='row' justifyContent="space-between"
                 sx={{color:'#fff'}} py={1} px={2} 
                 >
                 <Link to={`/channel/${channelId}`}>
                  <Typography variant={{sm:'subtitle1',md:'h6'}} color='#fff'>
                    {channelTitle}
                    <CheckCircle sx={{fontSize:'12px',color:'gray',ml:'5px'}} />
                  </Typography>
                 </Link>
                 <Stack direction='row' gap="20px" alignItems="center">
                  <Typography variant="body1" sx={{opacity:'0.7'}}>
                     {parseInt(viewCount).toLocaleString()}views
                  </Typography>
                  <Typography variant="body1" sx={{opacity:'0.7'}}>
                     {parseInt(likeCount).toLocaleString()}views
                  </Typography>
                 </Stack> 
                </Stack>
            </Box>
       </Box>
       
       <Box px={2} py={{md:'1',xs:'5'}} justifyContent='center' alignItems='center'>
        <Video videos={videos} direction="column"/>
       </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetails