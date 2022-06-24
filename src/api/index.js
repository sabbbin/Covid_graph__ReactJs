import axios from 'axios';

const url='https://covid19.mathdro.id/api';

 export const fetchData=async(country)=>{
     let changeableurl=url;
     if (country){
         changeableurl=`${url}/countries/${country}`;
     }
    try{
           const { data:{confirmed, recovered,deaths,lastUpdate} }=await axios.get(changeableurl);
           
           return{
               confirmed,
               recovered,
               deaths,
               lastUpdate
           }

    }
    catch(error){

        console.log (error)
    }
 }
 export const fetchDailyData=async()=>{
        try{
            const {data} =await axios.get(`${url}/daily`);
            const modifiedData= data.map((dailyDate)=>({
                confirmed:dailyDate.confirmed.total,
                deaths:dailyDate.deaths.total.total,
                date:dailyDate.reportDate,
            }

            ));
            return modifiedData;

        }catch (error){

        }
    }
export const fetchCountries=async()=>{
    try{
        const {data:{countries}}= await axios.get(`${url}/countries`);
   
        return((countries.map((countryname)=>countryname.name)))


    }catch(error){
        console.log('error')
    }
}
