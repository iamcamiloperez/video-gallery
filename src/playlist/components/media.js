import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import './media.css';

class Media extends PureComponent{
  //Constructor para vincular el componente con el DOM
   // constructor(props){ //Se usa para instanciar una clase (bind y estado inicial)
   //   super(props) // Para usar propiedades
   //   this.state = {score: props.scrore}}
   //Inicia el estado
   state = {
     score: this.props.score

   }
  //Funcion de clic en la imagen - con el arrow se heredan las props del padre
  movieClick = (event) => {
    //Modificar estado
    this.setState({

      score: this.state.score + 1
    })
    //console.log(this.props.title)//Atributo tomado de props
  }
  render(){
    //en el render se hacen calculos
    //Guarda los datos recibidos en un arreglo
    //title,year,score,description,director,running,type,cover,src,id
    const {title,year,scrore,description,director,running,type,cover,score} = this.props;
    return(
          <div className="mt-4 col-10 offset-1 col-md-4 offset-md-0 col-lg-4">
            <div className="card">
              <img className="card-img-top pointer"
                src={cover}
                alt="Card image cap"
                height="300em"
                data-toggle="modal"
                data-target="#exampleModalCenter"
                />
              <div className="card-body">
                <h5 className="card-title">{title} ({year})</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">{score}/100</small></p>

                <div className="badge mt-2">
                  <span className="mr-1 badge badge-dark">Terror</span>
                  <span className="mr-1 badge badge-secondary">Suspenso</span>
                </div>
              </div>
            </div>
          </div>
    )
  }
}

//title,year,score,description,director,running,type,cover,src,id
Media.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number,
  score: PropTypes.number,
  description: PropTypes.string,
  director: PropTypes.string,
  running: PropTypes.number,
  type: PropTypes.oneOf(['video', 'audio']),
  cover: PropTypes.string,
  src: PropTypes.string,
  id: PropTypes.number
}
export default Media;
