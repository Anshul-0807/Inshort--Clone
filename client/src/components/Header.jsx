import React from 'react'
import {AppBar, Toolbar , styled } from '@mui/material'

const StyledHeader = styled(AppBar)`
background: #fff;
height: 70px;
`;

const Header = () => {
  return (
    <StyledHeader>
        <Toolbar>

        </Toolbar>
    </StyledHeader>
  )
}

export default Header