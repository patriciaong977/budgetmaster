import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';

import useStyles from './styles';
import useTransactions from '../../useTransactions';

const Details = ({title, subheader}) => {    // Gets the title from app.js
  const classes = useStyles();
  const { total, chartData } = useTransactions(title);


  return (
    // If title == Income then classes.income else classes.expense
    <Card className={ title === 'Income' ? classes.income : classes.expense}>
      <CardHeader title={title} />  {/*Title is changing based on title parameter */}
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        {/* Had to install a different version of chart.js and react-chartjs-2 for Doughnut to work */}
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  )
}

export default Details
