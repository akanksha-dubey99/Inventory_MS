import React, { Component } from 'react';
import { render } from 'react-dom';
import CanvasJSReact from '@canvasjs/react-charts';
import '../Style/Dashboard.css'; 

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var chart;
function ViewEmployee(){
  const options1 = {
    theme: 'light2', // "light1", "dark1", "dark2"
    animationEnabled: true, //Change to false
    animationDuration: 3000, //Change it to 2000
    title: {
      // text: 'Column Chart in React',
    },
    data: [
      {
        //Change type to "line", "bar", "area", "pie", etc.
        type: 'column',
        dataPoints: [
          { label: 'apple', y: 10 },
          { label: 'orange', y: 15 },
          { label: 'banana', y: 25 },
          { label: 'mango', y: 30 },
          { label: 'grape', y: 28 },
        ],
      },
    ],
  },
  options2 = {
    animationEnabled: true, //Change to false
    animationDuration: 4000, //Change it to 2000
    title: {
      // text: 'Column Chart in React',
    },
    data: [
      {
        //Change type to "line", "bar", "area", "pie", etc.
        type: 'line',
        dataPoints: [
          { label: 'apple', y: 10 },
          { label: 'orange', y: 15 },
          { label: 'banana', y: 25 },
          { label: 'mango', y: 30 },
          { label: 'grape', y: 28 },
        ],
      },
    ],
  },
  options3 = {
    animationEnabled: true, //Change to false
    animationDuration: 4000, //Change it to 2000
    title: {
      // text: 'Column Chart in React',
    },
    data: [
      {
        //Change type to "line", "bar", "area", "pie", etc.
        type: 'bar',
        dataPoints: [
          { label: 'apple', y: 10 },
          { label: 'orange', y: 15 },
          { label: 'banana', y: 25 },
          { label: 'mango', y: 30 },
          { label: 'grape', y: 28 },
        ],
      },
    ],
  },
  options4 = {
    animationEnabled: true, //Change to false
    animationDuration: 4000, //Change it to 2000
    title: {
      // text: 'Column Chart in React',
    },
    data: [
      {
        //Change type to "line", "bar", "area", "pie", etc.
        type: 'pie',
        dataPoints: [
          { label: 'apple', y: 10 },
          { label: 'orange', y: 15 },
          { label: 'banana', y: 25 },
          { label: 'mango', y: 30 },
          { label: 'grape', y: 28 },
        ],
      },
    ],
  },
  //Styling Chart Container
  containerProps = {
    width: '80%',
    height: '200px',
    margin: '40px',
  };
  return(
    <>
      <div className='graph1'>
        <CanvasJSChart
          options={options1}
          onRef={(ref) => (chart = ref)} //Reference to the chart-instance
          containerProps={containerProps}
        />
        <CanvasJSChart
          options={options2}
          onRef={(ref) => (chart = ref)} //Reference to the chart-instance
          containerProps={containerProps}
        />
      </div>
      <div className='graph1'>
        <CanvasJSChart
          options={options3}
          onRef={(ref) => (chart = ref)} //Reference to the chart-instance
          containerProps={containerProps}
        />
        <CanvasJSChart
          options={options4}
          onRef={(ref) => (chart = ref)} //Reference to the chart-instance
          containerProps={containerProps}
        />
      </div>
    </>
  );
}

export default ViewEmployee