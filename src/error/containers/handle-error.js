import React,{Component} from 'react';
import RegularError from '../components/regular-error.js';


class HandleError extends Component {
//Iniciamos el estado
  state = {
    handleError: false
  }
//capturamos el error
  componentDidCatch(error, info){
    this.setState({
      //ponemos el estado en true
      handleError: true,
    })
  }

  render(){
    if(this.state.handleError){
      return(
        <RegularError></RegularError>
      )
    }
    return this.props.children
  }
}

export default HandleError
