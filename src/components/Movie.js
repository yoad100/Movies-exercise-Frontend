import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';

export default function Movie({name,imageUrl,index,onClick}) {
  return (
    <Card sx={{ maxWidth: 345 }} onClick={onClick} id="movie_card">
		<Badge badgeContent={index} color="primary"  id="card_badge"/>
      <CardMedia
        component="img"
        height="170"
        image={imageUrl}
        alt="movie"
		id="card_media"
      />
      <CardContent id="card_content">
        <Typography gutterBottom variant="h5" component="div" id="card_title">
          {name}
        </Typography>
      </CardContent>

    </Card>
  );
}