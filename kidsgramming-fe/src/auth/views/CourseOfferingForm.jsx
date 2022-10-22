import {Grid, Card, CardMedia, CardContent, CardActions, Typography, Button}
 from '@mui/material'

 const images = [
  '../../../public/auth/courses/sql.png',
  '../../../public/auth/courses/java.jpg',
  '../../../public/auth/courses/cplusplus.png',
  '../../../public/auth/courses/robotica.jpeg',
  '../../../public/auth/courses/net.jpeg',
  '../../../public/auth/courses/python.png'
 ]
const posts = [
  {id: 1, title: 'SQL', content: 'Bienvenidos al curso para aprender SQL para manejo de datos en BD!', 
  img: images[0]},
  {id: 2, title: 'JAVA', content: 'Bienvenidos al curso para aprender el lenguaje Java!',
  img: images[1]},
  {id: 3, title: 'C++', content: 'Bienvenidos al curso para aprender el lenguaje C++!',
  img: images[2]},
  {id: 4, title: 'ROBOTICA', content: 'Bienvenidos al curso para aprender de lenguajes de Robotica!', 
  img: images[3]},
  {id: 5, title: '.NET', content: 'Bienvenidos al curso para aprender el lenguaje .NET!',
  img: images[4]},
  {id: 6, title: 'PYTHON', content: 'Bienvenidos al curso para aprender el lenguaje PYTHON!', 
  img: images[5]}

];

const content = posts.map((post) =>
  <div key={post.id}>
    <Grid item sx={{m: 4, boxShadow: 3}}>  
          <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                  component="img"
                  alt="imgCourse"
                  height="150"
                  image={post.img}/>
              
              <CardContent>
                  <Typography variant="h6" sx={{ textAlign: 'center' }}>
                  {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  {post.content}
                  </Typography>
              </CardContent>
              <CardActions>
             
                  <Button sx={{mx: 'auto'}} size="small" >
                    Aprender más
                  </Button>
              </CardActions>
            </Card>
      </Grid>
  </div>
);

export const CourseOfferingForm = () => {


  return (
    <>
      <Grid container spacing={1} justifyContent="center" >
        {content}
      </Grid>    
    </>
  )
}

