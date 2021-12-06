import { GridColumns, GridEnrichedColDef } from '@mui/x-data-grid-pro'
import React, { useState } from 'react'

import Button from '@mui/material/Button'
import CloseIcon from '@mui/icons-material/Close'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { styled } from '@mui/material/styles'
import { useSharedContext } from '../src/context/SharedContext'

export interface ColumnDialogProps {
  open: boolean
  onClose: () => void
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}))

export interface DialogTitleProps {
  id: string
  children?: React.ReactNode
  onClose: () => void
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  )
}

export default function ColumnSelectorDialog(props: ColumnDialogProps) {
  const { onClose, open } = props
  const [selected, setSelected] = useState<string>('')
  const [item, setItem] = useState<GridEnrichedColDef>({
    field: '',
    headerName: '',
  })
  const { addTableColumn } = useSharedContext()
  const handleClose = () => {
    onClose()
  }

  const handleListItemClick = (value: GridEnrichedColDef) => {
    setSelected(value.field)
    setItem(value)
  }

  const handleOkayClick = () => {
    addTableColumn(item)
    onClose()
  }

  const items: GridColumns = [
    { field: 'Industrial', headerName: 'Industrial' },
    { field: 'Source', headerName: 'Source' },
    { field: 'Owner', headerName: 'Owner' },
    { field: 'Add Date', headerName: 'Add Date' },
    { field: 'Edit Date', headerName: 'Edit Date' },
    { field: 'Status', headerName: 'Status' },
    { field: 'Website', headerName: 'Website' },
    { field: 'Activity', headerName: 'Activity' },
    { field: 'Telephone', headerName: 'Telephone' },
  ]

  return (
    <BootstrapDialog onClose={handleClose} open={open}>
      <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        Select column{' '}
      </BootstrapDialogTitle>
      <DialogContent
        dividers
        sx={{ display: 'flex', flexWrap: 'wrap', overflowY: 'unset' }}>
        <List sx={{ width: '100%', textAlign: 'center', minWidth: 450 }}>
          {items.map((item) => (
            <ListItemButton
              key={item.field}
              onClick={() => handleListItemClick(item)}
              sx={{
                border: 1,
                borderRadius: 1,
                my: 1,
                borderColor: '#E6E8F0',
                backgroundColor:
                  selected === item.field
                    ? 'rgba(55, 65, 81, 0.04)'
                    : '#FFFFFF',
              }}
              alignItems="center">
              <ListItemText sx={{ textAlign: 'center' }}>
                {item.headerName}
              </ListItemText>
            </ListItemButton>
          ))}
        </List>
      </DialogContent>
      <DialogActions sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          sx={{ width: 100, borderRadius: 1 }}
          variant="contained"
          onClick={handleOkayClick}>
          Okay
        </Button>
        <Button
          variant="outlined"
          onClick={handleClose}
          sx={{
            width: 100,
            borderRadius: 1,
            borderColor: '#E6E8F0',
            color: '#374151',
            '&:hover': {
              backgroundColor: 'rgba(55, 65, 81, 0.04)',
              borderColor: '#E6E8F0',
            },
          }}>
          Cancel
        </Button>
      </DialogActions>
    </BootstrapDialog>
  )
}
