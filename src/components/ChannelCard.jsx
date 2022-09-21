import { CheckCircle } from '@mui/icons-material'
import { CardContent, CardMedia, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/utils'

const ChannelCard = ({channelDetail,marginTop}) => (
    <Box sx={{boxShadow :'none',  borderRadius:'20px',display:'flex',justifyContent:'center',alignItems:'center',
    width:{md:'260px',xs:'100%'},
    height:'286px',margin:'auto',marginTop}}>
<Link to={`/channel/${channelDetail?.id?.channelId}`}>
    <CardContent sx={{display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center',color:'#fff'}} >
      <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt={channelDetail?.snippet?.title} 
      sx={{borderRadius:'50%',height:'180px',width:'180px',mb:'2',border:'1px solid #e3e3e3'}}
      />
      <Typography variant='h6'>{channelDetail?.snippet?.title} <CheckCircle sx={{fontSize:12,color:'gray',ml:'5px'}} /></Typography>
      {channelDetail?.statistics?.subscriberCount && (<Typography>
        {parseInt(channelDetail?.statistics?.subscriberCount).toString()} Subscriber
      </Typography>) }
    </CardContent>
</Link>
    </Box>
)

export default ChannelCard