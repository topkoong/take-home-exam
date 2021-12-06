import { Data, SharedContext } from '../shared/types'
import { GridColumns, GridEnrichedColDef } from '@mui/x-data-grid-pro'
import { ReactNode, createContext, useContext, useState } from 'react'

import initialState from '../shared/constants'
import { mockTableColumns } from '../data/mockColumns'
import mockTableRows from '../data/mockData.json'

const AppContext = createContext<SharedContext>(initialState)

export function useSharedContext() {
  return useContext(AppContext)
}

type Props = {
  children: ReactNode
}

export function AppWrapper({ children }: Props) {
  const [tableColumns, setTableColumns] =
    useState<GridColumns>(mockTableColumns)
  const [tableRows] = useState<Data[]>(mockTableRows)

  const updateTableColumn = (columns: GridColumns) => {
    setTableColumns(columns)
  }
  const removeTableColumn = (field: string) => {
    const updatedTableCols = tableColumns.filter((r) => r.field !== field)
    setTableColumns(updatedTableCols)
  }
  const addTableColumn = (col: GridEnrichedColDef) => {
    const updatedTableCols = [...tableColumns, col]
    setTableColumns(updatedTableCols)
  }

  const sharedState = {
    tableRows,
    tableColumns,
    updateTableColumn,
    removeTableColumn,
    addTableColumn,
  }
  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  )
}
