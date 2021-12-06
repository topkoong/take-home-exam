import Menu, { MenuProps } from '@mui/material/Menu'
import React, { useState } from 'react'
import { alpha, styled } from '@mui/material/styles'

import Button from '@mui/material/Button'
import DeleteIcon from '../shared/components/DeleteIcon'
import Divider from '@mui/material/Divider'
import EditIcon from '../shared/components/EditIcon'
import FilterIcon from '../shared/components/FilterIcon'
import IconButton from '@mui/material/IconButton'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import MenuItem from '@mui/material/MenuItem'
import SelectToDisplayIcon from '../shared/components/SelectToDisplayIcon'
import dynamic from 'next/dynamic'

const ColumnReorderDialog = dynamic(() => import('./ColumnReorderDialog'), {
  ssr: false,
})
const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light'
        ? 'rgb(55, 65, 81)'
        : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}))

export default function DropdownMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [dialogOpen, setDialogOpen] = useState(false)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleDialogOpen = () => {
    setDialogOpen(true)
    setAnchorEl(null)
  }

  const handleDialogClose = () => {
    setDialogOpen(false)
  }

  return (
    <>
      <Button
        id="demo-customized-button"
        aria-controls="demo-customized-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        size="small"
        disableElevation
        onClick={handleClick}
        startIcon={<EditIcon />}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          height: '36px',
          width: '70px',
          backgroundColor: '#FFFFFF',
          color: '#111827',
          '&:hover, &:hover > span.MuiButton-startIcon > svg > path, & > span.MuiButton-startIcon > svg:hover > path':
            {
              color: '#FFFFFF',
              fill: '#FFFFFF',
            },
          borderColor: '#4B5563',
          boxShadow: '0px 1px 4px rgba(100, 116, 139, 0.12)',
        }}></Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}>
        <MenuItem onClick={handleDialogOpen} disableRipple>
          <IconButton>
            <SelectToDisplayIcon />
          </IconButton>
          Select to display
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <IconButton>
            <FilterIcon />
          </IconButton>
          Filter
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          Delete this Filter
        </MenuItem>
      </StyledMenu>
      <ColumnReorderDialog open={dialogOpen} onClose={handleDialogClose} />
    </>
  )
}
