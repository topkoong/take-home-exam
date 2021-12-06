import AddIcon from '@mui/icons-material/Add'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import DropdownIcon from '../shared/components/DropdownIcon'
import DropdownMenu from './DropdownMenu'
import IconButton from '@mui/material/IconButton'
import LockPinIcon from '../shared/components/LockPinIcon'
import Paper from '@mui/material/Paper'
import React from 'react'
import SettingsOutlinedIcon from '../shared/components/SettingsOutlinedIcon'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

const CommonButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: '#111827',
  '&:hover': {
    color: theme.palette.primary.contrastText,
  },
  borderColor: '#4B5563',
  boxShadow: theme.shadows[3],
}))

export default function ContentHeader() {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          py: 1,
        }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h5" sx={{ marginLeft: 2 }}>
            Contact Person List
          </Typography>
          <IconButton sx={{ mx: 1 }}>
            <DropdownIcon />
          </IconButton>
        </Box>
        <div>
          <CommonButton
            sx={{ mx: 1 }}
            variant="contained"
            size="small"
            startIcon={<AddIcon />}>
            Add Contact Person
          </CommonButton>
          <CommonButton sx={{ mx: 1 }} variant="contained" size="small">
            Imported
          </CommonButton>
          <IconButton sx={{ mx: 1 }}>
            <SettingsOutlinedIcon />
          </IconButton>
        </div>
      </Box>
      <Paper
        elevation={0}
        sx={{
          display: new Date().getFullYear() > 2021 ? 'none' : 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 50,
          padding: 2,
          backgroundColor: '#F8F8F9',
        }}>
        <Box>
          <Typography variant="h6">
            Filter Data:
            <Typography variant="body1" component="span">
              {' '}
              Customer 2021
            </Typography>
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <IconButton>
            <LockPinIcon />
          </IconButton>
          <DropdownMenu />
        </Box>
      </Paper>
    </Box>
  )
}
