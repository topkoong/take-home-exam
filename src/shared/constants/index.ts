/* eslint-disable @typescript-eslint/no-empty-function */
import { GridColumns, GridEnrichedColDef } from '@mui/x-data-grid-pro'

import { SharedContext } from '../types'
import { mockTableColumns } from '../../data/mockColumns'

const initialState: SharedContext = {
  tableColumns: mockTableColumns,
  tableRows: [],
  updateTableColumn: (_columns: GridColumns) => {},
  addTableColumn: (_col: GridEnrichedColDef) => {},
  removeTableColumn: (_field: string) => {},
}

export default initialState
