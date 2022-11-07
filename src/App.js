import logo from './logo.svg';
import './App.css';
import Data from './Components/Data';
import React, {Component} from "react";

import Header from "./Components/Header";
import RealHeader from "./Components/RealHeader"
import Squad from './Components/Squad'
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, RadialChart} from 'react-vis';
import Weighting from './Components/Weighting';
import GraphHandler from './Components/GraphHandler';

class App extends Component {

  render() {
    
    return (
      <div className="App" >
        <RealHeader/>
        <Squad/>
        <Header/>
        
      </div>
    );
  }
}


export default App;
