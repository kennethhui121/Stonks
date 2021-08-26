import React from 'react';
import ReactDOM from 'react-dom';
import Stock from './Stocks';
// import './App.css';

const App = () => {
    return(
      <div className="App">
        <Stock />
      </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
