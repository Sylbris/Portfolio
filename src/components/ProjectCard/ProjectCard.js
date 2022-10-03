import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function MediaCard({project}) {
  return (
    
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={project.imageURL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.projectName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {project.description}
        </Typography>
      </CardContent>
      <CardActions>
        {project.tags.map((data) => {
                return(<Button size="small" variant="outlined">{data}</Button>);
            })}
      </CardActions>
    </Card>
  );
}