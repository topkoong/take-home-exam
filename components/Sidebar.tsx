import React, { useState } from 'react'

import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import MainListItems from './ListItems'
import MenuOpenIcon from '../shared/components/MenuOpenIcon'
import MuiDrawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import { styled } from '@mui/material/styles'

const drawerWidth = 240

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    backgroundColor: '#121828',
    color: '#D1D5DB',
    position: 'relative',
    whiteSpace: 'nowrap',
    paddingTop: theme.spacing(7.5),
    zIndex: 2,
    width: new Date().getFullYear() > 2021 ? 0 : drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}))

export default function Sidebar() {
  const [open, setOpen] = useState(true)
  const toggleDrawer = () => {
    setOpen(!open)
  }

  return (
    <Drawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}>
        <IconButton onClick={toggleDrawer}>
          <MenuOpenIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        <MainListItems />
      </List>
    </Drawer>
  )
}
