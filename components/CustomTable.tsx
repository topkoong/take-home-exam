import {
  DataGridPro,
  GridActionsCellItem,
  GridColumns,
  GridEnrichedColDef,
  GridEventListener,
  GridEvents,
  GridRowParams,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
  MuiEvent,
  useGridApiRef,
} from '@mui/x-data-grid-pro'
import React, { ReactChild, ReactFragment, ReactPortal, useState } from 'react'

import AddIcon from '@mui/icons-material/Add'
import AvatarIcon from '../shared/components/AvatarIcon'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CancelIcon from '@mui/icons-material/Close'
import DeleteIcon from '@mui/icons-material/DeleteOutlined'
import EditIcon from '@mui/icons-material/Edit'
import { EditToolbarProps } from '../shared/types'
import IconButton from '@mui/material/IconButton'
import { LicenseInfo } from '@mui/x-data-grid-pro'
import SaveIcon from '@mui/icons-material/Save'
import { randomId } from '@mui/x-data-grid-generator'
import { useSharedContext } from '../src/context/SharedContext'

LicenseInfo.setLicenseKey(
  'x0jTPl0USVkVZV0SsMjM1kDNyADM5cjM2ETPZJVSQhVRsIDN0YTM6IVREJ1T0b9586ef25c9853decfa7709eee27a1e',
)

function CustomToolbar(props: EditToolbarProps) {
  const { apiRef } = props
  const handleClick = () => {
    const id = randomId()
    apiRef.current.updateRows([{ id, isNew: true }])
    apiRef.current.setRowMode(id, 'edit')
    // Wait for the grid to render with the new row
    setTimeout(() => {
      apiRef.current.scrollToIndexes({
        rowIndex: apiRef.current.getRowsCount() - 1,
      })
      apiRef.current.setCellFocus(id, 'contact')
    })
  }

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add Contact Person
      </Button>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  )
}

export default function CustomTable() {
  const apiRef = useGridApiRef()
  const { tableRows, tableColumns } = useSharedContext()
  const [pageSize, setPageSize] = useState<number>(25)
  const [page, setPage] = useState<number>(0)

  const handleRowEditStart = (
    params: GridRowParams,
    event: MuiEvent<React.SyntheticEvent>,
  ) => {
    event.defaultMuiPrevented = true
  }

  const handleRowEditStop: GridEventListener<GridEvents.rowEditStop> = (
    params,
    event,
  ) => {
    event.defaultMuiPrevented = true
  }

  const handleCellFocusOut: GridEventListener<GridEvents.cellFocusOut> = (
    params,
    event,
  ) => {
    event.defaultMuiPrevented = true
  }

  const handleEditClick = (id: any) => (event: any) => {
    event.stopPropagation()
    apiRef.current.setRowMode(id, 'edit')
  }

  const handleSaveClick = (id: any) => (event: any) => {
    event.stopPropagation()
    apiRef.current.commitRowChange(id)
    apiRef.current.setRowMode(id, 'view')

    const row = apiRef.current.getRow(id)
    apiRef.current.updateRows([{ ...row, isNew: false }])
  }

  const handleDeleteClick = (id: string) => (event: any) => {
    event.stopPropagation()
    apiRef.current.updateRows([{ id, _action: 'delete' }])
  }

  const handleCancelClick = (id: string) => (event: any) => {
    event.stopPropagation()
    apiRef.current.setRowMode(id, 'view')

    const row = apiRef.current.getRow(id)
    if (row!.isNew) {
      apiRef.current.updateRows([{ id, _action: 'delete' }])
    }
  }

  const columns: GridColumns = tableColumns.map((col: GridEnrichedColDef) =>
    col.field === 'contact'
      ? {
          ...col,
          renderCell: (params: {
            value:
              | boolean
              | ReactChild
              | ReactFragment
              | ReactPortal
              | null
              | undefined
          }) => (
            <Box
              sx={{
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <IconButton>
                <AvatarIcon />
              </IconButton>
              {params.value}
            </Box>
          ),
        }
      : col.field === 'updatedAt'
      ? {
          ...col,
          renderCell: (params: { value: any }) => `${params.value} น.`,
        }
      : col.field === 'actions'
      ? {
          ...col,
          getActions: ({ id }) => {
            const isInEditMode = apiRef.current.getRowMode(id) === 'edit'

            if (isInEditMode) {
              return [
                <GridActionsCellItem
                  icon={<SaveIcon />}
                  label="Save"
                  onClick={handleSaveClick(id)}
                  color="primary"
                />,
                <GridActionsCellItem
                  icon={<CancelIcon />}
                  label="Cancel"
                  className="textPrimary"
                  onClick={handleCancelClick(id)}
                  color="inherit"
                />,
              ]
            }

            return [
              <GridActionsCellItem
                icon={<EditIcon />}
                label="Edit"
                className="textPrimary"
                onClick={handleEditClick(id)}
                color="inherit"
              />,
              <GridActionsCellItem
                icon={<DeleteIcon />}
                label="Delete"
                onClick={handleDeleteClick(id)}
                color="inherit"
              />,
            ]
          },
        }
      : col,
  )
  return (
    <Box
      sx={{
        display: new Date().getFullYear() > 2021 ? 'none' : 'block',
        height: 740,
        width: '100%',
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
        },
      }}>
      <DataGridPro
        rows={tableRows.map((r) => ({ ...r, id: randomId() }))}
        sx={{
          '& .MuiDataGrid-columnHeaders': {
            fontSize: 15,
            fontFamily: 'Sukhumvit Set',
            fontStyle: 'normal',
            fontWeight: 500,
            border: 'none',
            lineHeight: '22px',
            color: '#454957',
            borderBottom: '3px solid #E8E8EA',
            outline: 'none',
          },
          '& .MuiDataGrid-row': {
            borderBottom: '2px solid #E8E8EA',
          },
          '& .MuiDataGrid-columnHeader, .MuiDataGrid-columnHeader:focus, .MuiDataGrid-columnHeader:focus-within':
            {
              outline: 'none',
            },
          '& .MuiDataGrid-row:nth-child(even)': {
            backgroundColor: '#F9F9FC',
          },
          '& .MuiDataGrid-row:nth-child(odd)': {
            backgroundColor: '#FFFFFF',
          },
          '& .MuiDataGrid-cell': {
            fontSize: 13,
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '20px',
          },
        }}
        columns={columns}
        apiRef={apiRef}
        editMode="row"
        onRowEditStart={handleRowEditStart}
        onRowEditStop={handleRowEditStop}
        onCellFocusOut={handleCellFocusOut}
        components={{
          Toolbar: CustomToolbar,
        }}
        componentsProps={{
          toolbar: { apiRef },
        }}
        rowsPerPageOptions={[25, 50, 75, 100]}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        onPageChange={(newPage) => setPage(newPage)}
        rowCount={tableRows.length}
        pagination
      />
    </Box>
  )
}
