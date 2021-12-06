import * as React from 'react'

import MuiLink from '@mui/material/Link'
import Typography from '@mui/material/Typography'

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://topkoong.github.io/">
        Theeruttop
      </MuiLink>{' '}
      {new Date().getFullYear()}.
    </Typography>
  )
}
