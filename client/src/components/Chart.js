import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
import '../App.css' 

const Chart = (props) => {
    console.log(props);
    return(
        <div className="chart">
            <LineChart width={1500} height={300} data={props.data}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey="name"/>
                <YAxis dataKey="searches"/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend />
                <Line type="monotone" dataKey="searches" stroke="#8884d8" activeDot={{r: 8}}/>
            </LineChart>
        </div>
    )
    
}

export default Chart;