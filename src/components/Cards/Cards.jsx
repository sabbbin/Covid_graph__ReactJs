import React, { Component } from 'react';
import {Card, CardContent, Typography, Grid, StylesProvider} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards=({ data: {confirmed, recovered, deaths, lastUpdate } })=>{
    if (!confirmed){
        return 'loading.....'
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify='center'>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                <Typography color='textSecondary' gutterBottom>
                    Infected
                </Typography>
            
                <Typography color='textSecondary'>
                    <CountUp 
                        start={0}
                        end= {confirmed.value}
                        duration={2.5}
                        separator=','
                    />
           
                </Typography>
                <Typography variant='h5'> 
                {new Date(lastUpdate).toDateString()}
</Typography>
                <Typography variant='body2'>number of active case of covid 19</Typography>
                </Grid>
        

    
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)} >
                <Typography color='textSecondary' gutterBottom>
                Recovered
                </Typography>
               
                <Typography color='textSecondary'>
                <CountUp 
                        start={0}
                        end= {recovered.value}
                        duration={2.5}
                        separator=','
                    />

                </Typography>
                <Typography variant='h5'> 
                {new Date(lastUpdate).toDateString()}
</Typography>
                <Typography variant='body2'>number of recoverd case of covid 19</Typography>
                </Grid>
              

            
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)} >
                <Typography color='textSecondary' gutterBottom>
                    
                </Typography>
                <Typography variant='h5'> Deaths

                </Typography>
                <Typography color='textSecondary'>
                <CountUp 
                        start={0}
                        end= {deaths.value}
                        duration={2.5}
                        separator=','
                    />
                </Typography>
                <Typography variant='h5'> 
                {new Date(lastUpdate).toDateString()}
</Typography>
                <Typography variant='body2'>number of death case of covid 19</Typography>
                </Grid>


                </Grid>

    
        </div>
      
    )

}

export default Cards;