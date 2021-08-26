import React from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js'

class Stock extends React.Component {
    constructor(){
        super();
        this.state ={};
    }    
    componentDidMount(){
        const API_key = 'YJSAXPTTIZ8XWW71';
        const ticker = `SPY`
        let API_call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${ticker}&outputsize=compact&apikey=${API_key}`;
        let xValues = [];
        let yValues = [];

        axios(API_call)
            .then((data) =>{ 
                for(let key in data.data["Time Series (Daily)"]){
                    xValues.push(key);
                    yValues.push(data.data["Time Series (Daily)"][key]['4. close']);
                }
                console.log('this is my x values aka time' , yValues);    
                this.setState({
                    stockDate: xValues,
                    stockPrice: yValues
                });           
                console.log('this is my data', data)
            })
            .catch(console.log(`There's an Error with the Axios Request`))
    }  

    
    render(){
        return (
            <div>
                <h1>Stocks</h1>
                {/* <p>DATES: {this.state.stockDate}</p>
                <p>CLOSING PRICE: {this.state.stockPrice}</p> */}
                <button>SPY DATA CHART!</button>
                <div>
                <Plot data={[
                    {
                    x: this.state.stockDate,
                    y: this.state.stockPrice,
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: {color: 'green'},
                    },
                    ]}
                    layout={ {width: 720, height: 440, title: 'SPY 100 DAY END Price'} }
                 />
                </div> 
            </div>
        )
    }
}

export default Stock;

