import * as React from 'react'

import Box from '@mui/material/Box'
import ContentHeader from './ContentHeader'
import CustomTable from './CustomTable'

export default function ContentContainer() {
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, py: 8, height: '100vh', overflow: 'auto' }}>
      <ContentHeader />
      <CustomTable />
    </Box>
  )
}
