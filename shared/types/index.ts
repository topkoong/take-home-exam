import {
  GridApiRef,
  GridColumns,
  GridEnrichedColDef,
} from '@mui/x-data-grid-pro'
export interface Data {
  id?: string
  contact: string
  tel: string
  company: string
  updatedAt: string
  action: any
  isEditMode?: boolean
  isNew?: boolean
}

export interface Column {
  id: 'contact' | 'tel' | 'company' | 'updatedAt' | 'action'
  label: string
  minWidth?: number
  align?: 'right'
  format?: (value: number) => string
}

export interface EditToolbarProps {
  apiRef: GridApiRef
}

export interface TableColumnInfo {
  id: string
  label: string
  minWidth?: number
  align?: 'right'
  format?: (value: number) => string
}

export interface SharedContext {
  tableColumns: GridColumns
  tableRows: Data[]
  updateTableColumn: (columns: GridColumns) => void
  addTableColumn: (col: GridEnrichedColDef) => void
  removeTableColumn: (field: string) => void
}
