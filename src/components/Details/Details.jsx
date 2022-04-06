import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';

import useStyles from './styles';

const Details = ({title}) => {    // Gets the title from app.js
  const classes = useStyles();
  return (
    // If title == Income then classes.income else classes.expense
    <Card className={ title === 'Income' ? classes.income : classes.expense}>
      <CardHeader title={title} />  {/*Title is changing based on title parameter */}
      <CardContent>
        <Typography variant="h5">$50</Typography>
        {/*<Doughnut data="DATA" />*/}
      </CardContent>
    </Card>
  )
}

export default Details
