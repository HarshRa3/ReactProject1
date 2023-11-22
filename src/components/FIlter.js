import React from 'react'
import FilterButton from './FilterButton'
import { Stack } from '@mui/material'

const FIlter = () => {
  return (
    <>
    <Stack direction={'row'} gap={3} sx={{alignItem:'center',justifyContent:'center',margin:'10px',position:'relative',zIndex:'1'}} >
      <FilterButton/>
    </Stack>
    </>
  )
}

export default FIlter
