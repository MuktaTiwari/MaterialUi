import React from 'react'
import { Divider, IconButton, makeStyles, Toolbar, Typography } from '@mui/material'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Badge} from '@mui/material';
import SideDrawer from './SideDrawer';
import { useLocation } from 'react-router-dom';


const Header = () => {

    const location = useLocation();

  return (
    <>
    <Toolbar>
        <SideDrawer>
            <IconButton color='inherit'>
                <MenuOpenIcon />
            </IconButton>
        </SideDrawer>

        <Typography variant='h6' sx={{ flexGrow: 1 }}>
            Blogging Website
        </Typography>

        <IconButton>
        <Badge badgeContent={4} color="error">

            <NotificationsActiveIcon />
        </Badge>
        </IconButton>
        <IconButton>
            <AccountCircleIcon />
        </IconButton>
    </Toolbar>
    <Divider />
  
    </>
  )
}

export default Header
