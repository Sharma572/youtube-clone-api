import React from 'react';
import { Box,Stack } from '@mui/material';
import loadingPic from '../utils/loadingPic.gif'

const Loader = () =>  (
  <Box minHeight="95vh">
    <Stack direction='row' justifyContent='center' alignItems='center' height='80vh' >
      {/* <CircularProgress /> */}
     <img src={loadingPic} alt='loading' height='240' />
    </Stack>
  </Box>
);

export default Loader;