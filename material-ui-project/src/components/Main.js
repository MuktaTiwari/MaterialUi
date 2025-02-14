import { Divider, Typography } from '@mui/material'
import { Grid } from '@mui/system'
import React from 'react'
import { posts } from '../Data/Data'
import ReactMarkdown from 'react-markdown';  // Import ReactMarkdown


const Main = ({title} ) => {
  return (
   <Grid item xs={12} md={8}>
    <Typography variant='h6' gutterBottom>
        {title}
    </Typography>
        <Divider />
        {
            posts.map(posts => (
                <ReactMarkdown key = {posts.body}>{posts.body}</ReactMarkdown>
            ))}
   </Grid>
  )
}

export default Main
