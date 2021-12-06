import * as React from 'react'

import Box from '@mui/material/Box'
import ContentContainer from '../components/ContentContainer'
import NavBar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useRouter } from 'next/router'

export default function Index() {
  const router = useRouter()
  const currentDate = new Date()
  // Make sure we're in the browser
  // Self destruction
  if (typeof window !== 'undefined' && currentDate.getFullYear() > 2021) {
    router.push('/about')
  }
  return (
    <Box
      sx={{
        backgroundColor: '#FFFFFF',
        display: 'flex',
        minHeight: '100vh',
        minWidth: 1024,
        zIndex: 1,
        position: 'relative',
        overflow: 'hidden',
      }}>
      <NavBar />
      <Sidebar />
      <ContentContainer />
    </Box>
  )
}
