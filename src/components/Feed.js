import { Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { Video } from './index'
import SideBar from './SideBar'

import { fetchFromAPI } from '../utils/fetchDataFromAPI'

const Feed = () => {

  const [selectedcategory,setselectedcategory]=useState('New');

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedcategory}`)
  }, [selectedcategory])
  

  return (
    <Stack sx={{flexDirection:{sx:'column',md:'row'}}}>
<Box sx={{height:{sx:'auto',md:'92vh'},borderRight:'1px solid #3d3d3d',px:{sx:0,md:2}}}>
  <SideBar selectedcategory={selectedcategory} setselectedcategory={setselectedcategory} />
  <Typography className='copyright' variant='body2' sx={{mt:1.5,color:'#efefef'}} >
    Copyright 2022 R.K
  </Typography>
</Box>

<Box p={2} sx={{overflow:'auto',height:'90vh',flex:2}}>
  <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}} >
    New <span style={{color:'#F31505'}}>videos</span>
  </Typography>
 <Video videos={[]} />
 </Box>

    </Stack>
  )
}

export default Feed