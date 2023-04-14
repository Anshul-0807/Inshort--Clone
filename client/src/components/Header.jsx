import React from 'react'
import {AppBar, Toolbar , styled } from '@mui/material'
// import {Menu} from '@mui/icons-material';

const StyledHeader = styled(AppBar)`
background: #fff;
height: 70px;
`;

const Header = () => {
  return (
    <StyledHeader>
        <Toolbar>
            {/* <Menu/> */}
        </Toolbar>
    </StyledHeader>
  )
}

export default Header