import React, { useState, useEffect } from 'react';
import {NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';



const CountryPicker=({handlecountrychange})=>{
const [Countries, setFetchedCountries]= useState([]);


 useEffect(()=>{
     const fetchAPI=async()=>{
         setFetchedCountries(await fetchCountries());

     }
     fetchAPI();
   
 },[])

    return (
      <FormControl className={styles.formcontrol}>
          <NativeSelect defaultValue='' onChange={(e)=>handlecountrychange(e.target.value)}>

            {Countries.map((country,i)=>{
              return (  <option key={i} value={country}>
                   {country} 
                </option>)
            })}

          </NativeSelect>
      </FormControl>
    )

}

export default CountryPicker;