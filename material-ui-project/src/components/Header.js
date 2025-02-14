import React from 'react'
import { Divider, IconButton, makeStyles, Toolbar, Typography } from '@mui/material'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Badge} from '@mui/material';
import SideDrawer from './SideDrawer';


const Header = () => {

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
    <Toolbar sx={{ flexGrow: 1 }}>Blogging Website</Toolbar>
    </>
  )
}

export default Header
