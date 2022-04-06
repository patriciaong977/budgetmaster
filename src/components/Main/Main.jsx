import React from 'react';

import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';

import useStyles from './styles';
import Form from './Form/Form';

const Main = () => {
  const classes = useStyles(); // Use it as a hook.

  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" subheader="Here's where you at right now. " />

      <CardContent>
        <Typography align="center" variant="h5">Total Balance $100</Typography>
        <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
          {/* Infocard component .. */}
        <Typography variant="subtitle2">Enter the following information below: </Typography>
        </Typography>
        <Divider />
        {/* Form */}
        <Form />

      </CardContent>

      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {/* <List /> */}
          </Grid>
        </Grid>
      </CardContent>

    </Card>
  )
}

export default Main