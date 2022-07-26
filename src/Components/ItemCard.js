import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


export default function ItemCard(props) {
    console.log(props);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={()=>{window.open((props.data.image), '_blank', 'noopener,noreferrer');}}>
        <CardMedia
          component="img"
          height="280"
          image= {props.data.image}
          alt={props.data.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.data.name.charAt(0).toUpperCase() + props.data.name.slice(1)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.data.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
