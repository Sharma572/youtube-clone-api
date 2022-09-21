// import { link } from 'react-router-dom';

import { CheckCircle } from "@mui/icons-material"
import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl } from "../utils/utils"





const VideoCard = ({video :{id :{videoId},snippet}}) => {
 
  return (

    <Card sx={{width:{sm:'260px'},boxShadow:'none',borderRadius:0}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} >
        <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title}
        sx={{width:'100%',height:146}} />
      </Link>
      <CardContent sx={{backgroundColor:'#1e1e1e',height:'106px'}}>
       <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography varient="subtitle1" fontWeight="500" fontSize='1rem' color="#fff" >
            {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
        </Typography>
       </Link>

       <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
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