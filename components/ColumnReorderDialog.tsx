import React, { useEffect, useState } from 'react'

import AddIcon from '@mui/icons-material/Add'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CloseIcon from '@mui/icons-material/Close'
import ColumnSelectorDialog from './ColumnSelectorDialog'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { DropResult } from 'react-beautiful-dnd'
import { GridColumns } from '@mui/x-data-grid-pro'
import IconButton from '@mui/material/IconButton'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import dynamic from 'next/dynamic'
import { reorder } from '../shared/libs'
import { styled } from '@mui/material/styles'
import { useSharedContext } from '../src/context/SharedContext'

const DraggableList = dynamic(() => import('./DraggableList'), { ssr: false })

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

export default function ColumnReorderDialog(props: ColumnDialogProps) {
  const { onClose, open } = props
  const { tableColumns, updateTableColumn } = useSharedContext()
  const [items, setItems] = useState<GridColumns>(tableColumns)

  const [dialogOpen, setDialogOpen] = useState(false)

  const handleClose = () => {
    onClose()
  }
  const handleSave = () => {
    updateTableColumn(items)
    onClose()
  }

  const handleColumnSelectorDialog = () => {
    setDialogOpen(true)
  }

  const handleColumnSelectorDialogClose = () => {
    setDialogOpen(false)
  }

  const onDragEnd = ({ destination, source }: DropResult) => {
    // dropped outside the list
    if (!destination) return

    const newItems = reorder(items, source.index, destination.index)

    setItems(newItems)
  }

  useEffect(() => {
    setItems(tableColumns)
  }, [tableColumns])

  return (
    <>
      <BootstrapDialog onClose={handleClose} open={open}>
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}>
          Select the fields to display{' '}
        </BootstrapDialogTitle>
        <DialogContent
          dividers
          sx={{
            backgroundColor: '#F9FAFC',
            display: 'flex',
            flexWrap: 'wrap',
            overflowY: 'unset',
          }}>
          <Paper
            elevation={0}
            sx={{
              backgroundColor: '#F9FAFC',
              flex: 1,
              margin: 4,
              minWidth: 450,
            }}>
            <DialogContentText>
              <Typography variant="h5" sx={{ color: 'black' }}>
                Column Info
              </Typography>
            </DialogContentText>
            <DraggableList items={items} onDragEnd={onDragEnd} />
            <Box
              sx={{
                my: 2,
                border: 2,
                borderStyle: 'dashed',
                borderColor: 'secondary',
                borderRadius: 1,
                display: 'flex',
                justifyContent: 'center',
              }}>
              <ListItemButton onClick={handleColumnSelectorDialog}>
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
                <ListItemText>Add Field</ListItemText>
              </ListItemButton>
            </Box>
          </Paper>
        </DialogContent>
        <DialogActions
          sx={{
            backgroundColor: '#F9FAFC',
            display: 'flex',
            justifyContent: 'center',
          }}>
          <Button
            sx={{ width: 100, borderRadius: 1 }}
            variant="contained"
            onClick={handleSave}>
            Save
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
      <ColumnSelectorDialog
        open={dialogOpen}
        onClose={handleColumnSelectorDialogClose}
      />
    </>
  )
}
