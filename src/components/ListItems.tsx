import React, { useState } from 'react'

import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined'
import Collapse from '@mui/material/Collapse'
import ContactListIcon from '../shared/components/ContactListIcon'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MarginOutlinedIcon from '@mui/icons-material/MarginOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import ReportIcon from '../shared/components/ReportIcon'
import SettingsIcon from '../shared/components/SettingsIcon'
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined'

export default function MainListItems() {
  const [open, setOpen] = useState(true)
  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <div>
      <ListItem
        button
        sx={{
          '&:hover': {
            backgroundColor: 'rgba(255,255,255, 0.08)',
          },
        }}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem
        button
        sx={{
          '&:hover': {
            backgroundColor: 'rgba(255,255,255, 0.08)',
          },
        }}>
        <ListItemIcon>
          <ContactListIcon />
        </ListItemIcon>
        <ListItemText primary="Contact Person List" />
      </ListItem>
      <ListItem
        button
        sx={{
          '&:hover': {
            backgroundColor: 'rgba(255,255,255, 0.08)',
          },
        }}>
        <ListItemIcon>
          <ReportIcon />
        </ListItemIcon>
        <ListItemText primary="Report" />
      </ListItem>
      <ListItem
        onClick={handleClick}
        button
        sx={{
          '&:hover': {
            backgroundColor: 'rgba(255,255,255, 0.08)',
          },
        }}>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="ul" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <MarginOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Manage Layout" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <PersonOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Member" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <VpnKeyOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Data Access" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <ArticleOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="System log" />
          </ListItemButton>
        </List>
      </Collapse>
    </div>
  )
}
