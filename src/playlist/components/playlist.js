//importar react
import React from 'react';
//Importar minicomponente Media
import Media from './media.js';
//importar estilos
import './playlist.css';



//Creación de la funcion
function Playlist(props){
  //Toma los datos solo de una categoría - array playlist del data
  return(
    <div className="row text-center"      
      >
      {
        //Iteración sobre cada elemento de playlist
        props.playlist.map((item)=>{
          //Retorno el microcomponente enviando parametros 1 a 1
          //return<Media title={item.title} cover={this.props.imagen} key={item.id} />
          //Retorna microcomponente enviando todos los parametros
          return<Media {...item} key={item.id} />
        })
      }
    </div>
  )
}

//Exportar el componente para que sea utilizado
export default Playlist;
