import React from 'react'
import { Box, Typography } from '@mui/material'


const InfoHeader = () => {

    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
    const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';


  return (
    <Box>
        <Typography>
            For the best experience use inshorts in your smartphones
        </Typography>
        <Box>
            <img src={appleStore} alt="" />
            <img src={googleStore} alt="" />
        </Box>
    </Box>
  )
}

export default InfoHeader