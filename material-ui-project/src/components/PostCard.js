import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import Grid from "@mui/material/Grid";


const useStyles = makeStyles({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

export default function FeaturedPost({ post }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={12}>
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {post.date}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>
              <Typography variant="subtitle1" style={{ color: "skyblue" }}>
                Continue reading...
              </Typography>
            </CardContent>
          </div>
          <CardMedia
            className={classes.cardMedia}
            image={post.image}
            title={post.imageTitle}
            sx={{ display: { xs: "none", sm: "block" } }} // Hides on small screens
/>
        </Card>

      </CardActionArea>
    </Grid>
  );
}
