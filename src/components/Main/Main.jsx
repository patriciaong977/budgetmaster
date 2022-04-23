import React, { useContext } from 'react';

import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import { ExpenseTrackerContext } from '../../context/context';

import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';

const Main = () => {
  const classes = useStyles(); // Use it as a hook.
  const { balance } = useContext(ExpenseTrackerContext);

  return (
    <Card className={classes.root}>
      <CardHeader title="BudgetMaster" subheader="Your personal financial organizer." />

      <CardContent>
        <Typography align="center" variant="h5">Total Balance ${balance}</Typography>
        <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
          {/* Infocard component .. */}
        <Typography variant="subtitle2"> </Typography>
        </Typography>
        <Divider />
        {/* Form */}
        <Form />

      </CardContent>

      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {/* List */}
            <List />
          </Grid>
        </Grid>
      </CardContent>

    </Card>
  )
}

export default Main
