import React, { Component } from 'react';
import { render } from 'react-dom';
import CanvasJSReact from '@canvasjs/react-charts';
import '../Style/Dashboard.css'; 
import { useEffect, useState } from "react";
import dashboardServices from "../shared/dashboard_services";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var chart;
function ViewDashboard(){
  const [used,setUsed]=useState([{category:'',quantity:0}]);
  const [left,setLeft]=useState([{item_category:'',quantity:0}]);
  const [sportsGoods,setsportsGoods]=useState([{sub_category:'',quantity:0}]);
  const [Stationary,setStationary]=useState([{sub_category:'',quantity:0}]);
  const [Sanitation,setSanitation]=useState([{sub_category:'',quantity:0}]);
  const [Accessories,setAccessories]=useState([{sub_category:'',quantity:0}]);
  const [WelcomeKit,setWelcomeKit]=useState([{sub_category:'',quantity:0 }]);
  useEffect(()=>{
    fetchDUsedUnits()
    fetchLeftUnits()
    fetchsportsGoods()
    fetchStationary()
    fetchSanitation()
    fetchAccessories()
    fetchWelcomeKit()
},[])
const fetchDUsedUnits=()=>{
  dashboardServices.getUsedUnit().then(
      (response)=>{
          if(response.status == 200){
            setUsed(response.data)
              console.log(response.data)
          }
      } ,(error) => {
          console.log("error: ",error)
      });}
const fetchLeftUnits=()=>{
  dashboardServices.getLeftUnit().then(
      (response)=>{
          if(response.status == 200){
            setLeft(response.data)
              console.log(response.data)
          }
      } ,(error) => {
          console.log("error: ",error)
        });}
const fetchsportsGoods=()=>{
  dashboardServices.sportsGoods().then(
      (response)=>{
          if(response.status == 200){
            setsportsGoods(response.data)
              console.log(response.data)
          }
      } ,(error) => {
          console.log("error: ",error)
        });}
const fetchStationary=()=>{
  dashboardServices.Stationary().then(
      (response)=>{
          if(response.status == 200){
            setStationary(response.data)
              console.log(response.data)
          }
      } ,(error) => {
          console.log("error: ",error)
        });}
const fetchSanitation=()=>{
  dashboardServices.Sanitation().then(
      (response)=>{
          if(response.status == 200){
            setSanitation(response.data)
              console.log(response.data)
          }
      } ,(error) => {
          console.log("error: ",error)
        });}
const fetchAccessories=()=>{
  dashboardServices.Accessories().then(
      (response)=>{
          if(response.status == 200){
            setAccessories(response.data)
              console.log(response.data)
          }
      } ,(error) => {
          console.log("error: ",error)
        });}
const fetchWelcomeKit=()=>{
  dashboardServices.WelcomeKit().then(
      (response)=>{
          if(response.status == 200){
            setWelcomeKit(response.data)
              console.log(response.data)
          }
      } ,(error) => {
          console.log("error: ",error)
        });}
  const options1 = {
    animationEnabled: true,
    animationDuration: 4000,
    title: {
      text: "Units Used"
  },
    data: [
      {type: 'column',
        color: "rgba(63,222,7,.5)",
        dataPoints: used.map((dp) => ({ label: dp.category, y: dp.quantity, label: String(dp.category) })),
      },], },
  options2 = {
    animationEnabled: true,
    animationDuration: 4000,
    title: {
      text: "Units Left"
  },
    data: [
      {type: 'column',
        color: "rgba(2,12,232,.3)",
        dataPoints: left.map((dp) => ({ label: dp.item_category, y: dp.quantity, label: String(dp.item_category) })),
      },], },
  options3 = {
    animationEnabled: true,
    animationDuration: 4000, 
    title: {
      text: "Sports Goods"
    },
    data: [
      {type: 'splineArea',
        color: "rgba(3,202,107,.5)",
        dataPoints:sportsGoods.map((dp) => ({ label: dp.sub_category, y: dp.quantity, label: String(dp.sub_category) })),
      },], },
  options4 = {
    animationEnabled: true,
    animationDuration: 4000,
    title: {
      text: "Stationary"
    },
    data: [
      {type: 'splineArea',
        color: "rgba(192,12,2,.3)",
        dataPoints: Stationary.map((dp) => ({ label: dp.sub_category, y: dp.quantity, label: String(dp.sub_category) })),
      },], },
  options5 = {
    animationEnabled: true,
    animationDuration: 4000, 
    title: {
      text: "Sanitation"
    },
    data: [
      {type: 'pie',
        color: "rgba(163,22,7,.5)",
        dataPoints:Sanitation.map((dp) => ({ label: dp.sub_category, y: dp.quantity, label: String(dp.sub_category) })),
      },], },
  options6 = {
    animationEnabled: true,
    animationDuration: 4000,
    title: {
      text: "Accessories"
    },
    data: [
      {type: 'pie',
        //color: "rgba(2,12,32,.3)",
        dataPoints: Accessories.map((dp) => ({ label: dp.sub_category, y: dp.quantity, label: String(dp.sub_category) })),
      },], },
  options7 = {
    animationEnabled: true,
    animationDuration: 4000, 
    title: {
      text: "Welcome-Kit"
    },
    data: [
      {type: 'line',
        color: "rgba(163,22,7,.5)",
        dataPoints:WelcomeKit.map((dp) => ({ label: dp.sub_category, y: dp.quantity, label: String(dp.sub_category) })),
      },], },
  options8 = {
    animationEnabled: true,
    animationDuration: 4000,
    title: {
      text: "Miscellaneous"
    },
    data: [
      {type: 'line',
        dataPoints: Accessories.map((dp) => ({ label: dp.sub_category, y: dp.quantity, label: String(dp.sub_category) })),
      },], },
  containerProps = {width: '95%',height: '420px',margin: '20px',};
  return(
    <>
      <div className='graphDiv' style={{marginLeft: "5%",marginRight: "5%"}}>
      <div className='graph1'>
        <CanvasJSChart
          options={options1}
          onRef={(ref) => (chart = ref)}
          containerProps={containerProps}
        />
        <CanvasJSChart
          options={options2}
          onRef={(ref) => (chart = ref)}
          containerProps={containerProps}
        />
      </div>
      <div className='graph1'>
        <CanvasJSChart
          options={options3}
          onRef={(ref) => (chart = ref)}
          containerProps={containerProps}/>
        <CanvasJSChart
          options={options4}
          onRef={(ref) => (chart = ref)}
          containerProps={containerProps}/></div>
      <div className='graph1'>
        <CanvasJSChart
          options={options5}
          onRef={(ref) => (chart = ref)}
          containerProps={containerProps}/>
        <CanvasJSChart
          options={options6}
          onRef={(ref) => (chart = ref)}
          containerProps={containerProps} /></div>
      <div className='graph1'>
        <CanvasJSChart
          options={options7}
          onRef={(ref) => (chart = ref)}
          containerProps={containerProps}/>
        <CanvasJSChart
          options={options8}
          onRef={(ref) => (chart = ref)}
          containerProps={containerProps}/></div>
      </div>
    </>
  );
}

export default ViewDashboard