import React, { Component ,useState,useEffect} from 'react';
import { fetchDailyData } from '../../api';
import {Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart=({data:{confirmed, recovered, deaths} ,country })=>{
    const [dailyDate, setDailyData]=useState({});
    useEffect(()=>{
        const fetchAPI=async()=>{
            
      setDailyData(await fetchDailyData());
        }

       
      fetchAPI();
    },[]);


const barChart=(
confirmed?

(<Bar
    
    data={{
        labels:['infected', 'recoverd', 'deaths'],
        datasets:[{
            label:'people',
            background:[
                'rgba(0,0,225,0.5)',
                'rgba(0,225,0,0.5)',
                'rgba(225,0,0,0.5)',
                

            ], 
            data:[confirmed.value, recovered.value, deaths.value]
        }]
    }}
    options={{
        legend:{display:false},
        title:{display:true, text:`current state in ${country}`},
    }}
    />):null

)

    const lineChart=(
        dailyDate.length?(
        <Line
        data={{
            labels:dailyDate.map(({date})=> date),
            datasets:[{
                data:dailyDate.map(({confirmed})=>confirmed),
                label:'infected',
                borderColor:'#3333ff',
                fill:true,
            },{
                data:dailyDate.map(({deaths})=>deaths),
                label:'Deaths',
                borderColor:'red',
             
                fill:true,
            }]
        }} />):null

    );

    return (
<div className={styles.container}>
   
      {country?barChart:lineChart}
</div>
    )

}
export default Chart;