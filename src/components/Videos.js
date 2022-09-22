import { Grid } from '@mui/material';
import { Box, Container, display, Stack } from '@mui/system';
import React from 'react'
import ChannelCard from './ChannelCard';
import VideoCard from './VideoCard';
import  Loader from './Loader'

// marginLeft={margin || '2%' }

const Videos = ({videos,direction,justifyContent}) => {
    console.log(videos);

    if(!videos?.length) return <Loader />

  return (

  
    <Stack justifyContent={ justifyContent  || "start"}  direction={ direction ||'row' } flexWrap="wrap"  gap={2}>
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