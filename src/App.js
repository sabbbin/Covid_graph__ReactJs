import React, { Component } from 'react';
import styles from './App.module.css';

import {fetchData} from './api';

import {Cards ,Chart, CountryPicker } from './components';
class App extends Component {
    state = { 
         data:{},
         country:'',
    }
    async componentDidMount (){
        const fetchdata=await fetchData();
    
        
        this.setState({data:fetchdata})
        console.log (this.state.data)


    }

     handlecountrychange=async (country)=>{
        const fetchdata=await fetchData(country);
        this.setState({data:fetchdata, country:fetchdata})
    }
    render() { 
        const {data,country} =this.state;
        return (  
            <div className={styles.container}>
                <h1> app</h1>
                <Cards data={data} />
                <CountryPicker  handlecountrychange={this.handlecountrychange}/>
                <Chart data={data} country={country} />
              
            </div>
        );
    }
}
 
export default App;