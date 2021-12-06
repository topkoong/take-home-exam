import { GridColumns, GridEnrichedColDef } from '@mui/x-data-grid-pro'

import { SharedContext } from '../types'
import { mockTableColumns } from '../../data/mockColumns'

const initialState: SharedContext = {
  tableColumns: mockTableColumns,
  tableRows: [],
  updateTableColumn: (columns: GridColumns) => {},
  addTableColumn: (col: GridEnrichedColDef) => {},
  removeTableColumn: (field: string) => {},
}

export default initialState
