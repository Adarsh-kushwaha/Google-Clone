import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./global.css";
import {BrowserRouter as Router} from "react-router-dom"
import ResultProvider from "./Context/ResultProvider"


ReactDOM.render( <ResultProvider><Router><App /></Router></ResultProvider>,document.getElementById('root'));

