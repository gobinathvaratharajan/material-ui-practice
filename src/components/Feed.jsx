import { Box, Skeleton, Stack } from '@mui/material'
import React, { useState } from 'react'
import Post from './Post'

const Feed = () => {
  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 3000);
  return (
    <Box flex={4} p={{ xs: 0, md: 2}}>
      {loading ?
      <Stack>
        <Skeleton variant="text" height={20} width={50} />
        <Skeleton variant="text" height={20} width={20} />
        <Skeleton variant="rectangular" height={300} />
        <Skeleton variant="text" height={20} />
        <Skeleton variant="text" height={20} width={20} />
      </Stack>
      :
      <>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </>}
    </Box>
  )
}

export default Feed
