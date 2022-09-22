import { Grid } from '@mui/material';
import { Box, Container, display, Stack } from '@mui/system';
import React from 'react'
import ChannelCard from './ChannelCard';
import VideoCard from './VideoCard';
import  Loader from './Loader'


const Videos = ({videos,direction}) => {
    console.log(videos);

    if(!videos?.length) return <Loader />

  return (

  
    <Stack direction={ direction ||'row' } flexWrap="wrap" justifyContent="start" gap={2}>
        {videos.map((item,id)=>(
            <Box key={id}>
              {item.id.videoId && <VideoCard video={item} />}
              {item.id.channelId && <ChannelCard channelDetail={item} />}
           </Box>
        ))}

    </Stack>
  )
}

export default Videos