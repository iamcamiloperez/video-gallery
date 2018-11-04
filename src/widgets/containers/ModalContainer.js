import React, { Component } from 'react';
//Para importar portales
import {createPortal} from 'react-dom';

class ModalContainer extends Component{
  render(){
    //Que renderizar, donde
    return createPortal(
      this.props.children,
      document.getElementById('modal-container'))
    }
}

export default ModalContainer
