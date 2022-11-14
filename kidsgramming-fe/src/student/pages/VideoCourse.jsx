import * as React from 'react';

import { useParams } from 'react-router-dom';

import CardVideo from '../components/CardVideo';
import Sidebar from '../../student/components/Sidebar';

const posts = [
    {id: 1, videourl: 'https://www.youtube.com/embed/27axs9dO7AE'},
    {id: 2, videourl: 'https://www.youtube.com/embed/mAtkPQO1FcA'},
    {id: 3, videourl: 'https://www.youtube.com/embed/ld4nzao5XAc'},
    {id: 4, videourl: 'https://www.youtube.com/embed/htjRUL3neMg'},
    {id: 5, videourl: 'https://www.youtube.com/embed/ODktW2sLjA0'},
    {id: 6, videourl: 'https://www.youtube.com/embed/Y8Tko2YC5hA'}
  
  ];

function url(id){

  var a =''
    posts.forEach(element => {
        if(element.id == id)
            a = element.videourl
    });   
    return a; 
}    

export const VideoCourse = () => {

  let params = useParams();
  const {title} = useParams()
  const {id} = useParams()

  // con el ID de curso que se recibe, se hace una peticion al server 
  // para traer el objeto completo, y de ahi extraer el enlace embebido del video de youtube


  const enlace = url(id);
 
  return (
    <>
      <Sidebar body={
        <CardVideo title={title} videolink={enlace}/>
      }/>
    </>
              
  );
}

