import { CardActions, CardContent, Typography, Button, Card } from '@mui/material';
import React from 'react';

const FeaturePost = () => {
  return (
   <Card  sx={{
    padding: 2, 
    boxShadow: 3,
    backgroundImage: `url(/2.avif)`, // Unsplash Image
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white" // Ensure text is visible
  }}>
    <CardContent>
        <Typography sx={{ fontSize: 40, fontFamily: "Montserrat", fontWeight: "bold" }} gutterBottom>
            Title: of this card component
        </Typography>
        <Typography variant='h6' sx={{ color: "white", marginTop: 1 }}>
          A paragraph is a group of sentences that support a single main idea. Paragraphs 
          are a key part of writing because they help the reader understand the structure of the writing.
        </Typography>
    </CardContent>
    <CardActions>
        <Button variant='contained' sx={{ textTransform: 'none', backgroundColor: 'black', color: "white" }}>
            Read More
        </Button>
    </CardActions>
   </Card>
  );
}

export default FeaturePost;
