import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';

import PropTypes from 'prop-types'

const CardVideo = ({title, videolink}) => {

  return (
    <>
 
      <Grid container spacing={1} justifyContent="center" >        
            <Card sx={{ maxWidth: 540 }}>
              <CardActionArea>
                <CardMedia sx={{height:290}} component="iframe" src={videolink}/>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Video introductorio de {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
      </Grid> 
     
    </>
  )
}

export default CardVideo;

CardVideo.propTypes = {
  title: PropTypes.string.isRequired,
  videolink: PropTypes.string.isRequired
}

