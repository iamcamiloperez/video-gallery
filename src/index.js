//importa librerias para usar bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

//importa React y los render necesarios
import React from 'react';
import { render } from 'react-dom';

// Importa estilos para el index
import './index.css';

//Importa demas servicios necesarios
import * as serviceWorker from './serviceWorker';

//Importat Home
import Home from '../src/pages/containers/home.js'

//importa data
import data from './api.json';

//root es el id del index.html de public
const root = document.getElementById('root');
//ReactDOM.render(<App />, root);
render(<Home data={data}/>, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
