import { GridColumns } from '@mui/x-data-grid-pro'
import { TableColumnInfo } from '../shared/types'

export const mockTableColumnSelector: TableColumnInfo[] = [
  { id: 'Industrial', label: 'Industrial' },
  { id: 'Source', label: 'Source' },
  { id: 'Owner', label: 'Owner' },
  { id: 'Add Date', label: 'Add Date' },
  { id: 'Edit Date', label: 'Edit Date' },
  { id: 'Status', label: 'Status' },
  { id: 'Website', label: 'Website' },
  { id: 'Activity', label: 'Activity' },
  { id: 'Telephone', label: 'Telephone' },
]

// export const mockTableColumns: TableColumnInfo[] = [
//   { id: 'contact', label: 'ผู้ติดต่อ', minWidth: 170 },
//   { id: 'tel', label: 'เบอร์โทรศัพท์มือถือ', minWidth: 100 },
//   {
//     id: 'เบอร์โทรศัพท์มือถือ',
//     label: 'บริษัท',
//     minWidth: 170,
//     // align: 'left',
//     // format: (value: number) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'updatedAt',
//     label: 'ติดต่อล่าสุด',
//     minWidth: 170,
//     // align: 'left',
//     format: (value: number) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'action',
//     label: '',
//     minWidth: 170,
//     align: 'right',
//     format: (value: number) => value.toFixed(2),
//   },
// ]

export const mockTableColumns: GridColumns = [
  {
    field: 'contact',
    headerName: 'ผู้ติดต่อ',
    width: 280,
    editable: true,
    align: 'left',
  },
  {
    field: 'tel',
    headerName: 'เบอร์โทรศัพท์มือถือ',
    headerAlign: 'left',
    minWidth: 300,
    align: 'left',
    editable: true,
  },
  {
    field: 'company',
    headerName: 'บริษัท',
    minWidth: 370,
    align: 'left',
    editable: true,
  },
  {
    field: 'updatedAt',
    headerName: 'ติดต่อล่าสุด',
    type: 'dateTime',
    minWidth: 240,
    editable: true,
    align: 'left',
    renderCell: (params) => `${params.value} น.`,
  },
  {
    field: 'actions',
    type: 'actions',
    headerName: 'Actions',
    minWidth: 240,
    cellClassName: 'actions',
  },
]
