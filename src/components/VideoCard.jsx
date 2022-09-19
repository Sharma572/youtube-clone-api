// import { link } from 'react-router-dom';

import { CheckCircle } from "@mui/icons-material"
import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl } from "../utils/utils"

const VideoCard = ({video :{id :{videoId},snippet}}) => {
    
  return (
    <Card sx={{width:{md:'250px',xs:'100%'},boxShadow:'none',borderRadius:'none'}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} >
        <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title}
        sx={{width:358,height:180}} />
      </Link>
      <CardContent sx={{backgroundColor:'#1e1e1e',height:'106px'}}>
       <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography varient="subtitle1" fontWeight="Bold" color="#fff" >
            {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
        </Typography>
       </Link>

       <Link to={snippet.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl}>
        <Typography varient="subtitle1" fontWeight="Bold" color="gray" >
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{fontSize:12,color:'gray',ml:'5px'}} />
        </Typography>
       </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard