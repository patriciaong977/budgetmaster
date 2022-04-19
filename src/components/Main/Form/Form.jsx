import React, { useState, useContext } from 'react';

import {
  TextField, Typography, Grid, Button, FormControl, InputLabel,
  Select, MenuItem
} from '@material-ui/core';

import { ExpenseTrackerContext } from '../../../context/context';
import { v4 as uuidv4 } from 'uuid';

import useStyles from './styles';

const initialState = {
  amount: '',
  category: '',
  type: 'Income',
  date: new Date(),
}

const Form = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);
  const { addTransaction } = useContext(ExpenseTrackerContext);

// Create Transaction Function
  const createTransaction = () => {
    const transaction = {
      ...formData, amount: Number(formData.amount), id: uuidv4()
    }

    addTransaction(transaction);
    setFormData(initialState); // Resetting all state fields, to add new transaction.
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align="center" variant="subtitle2" gutterBottom> {/*GutterBottom - add margin/padding */}
          {/* Speechly stuff */}
        </Typography>
      </Grid>

      <Grid item xs={6}>
        <FormControl fullWidth> {/*fullWidth - going to take the full width of its container */}
          <InputLabel>Type</InputLabel>
          <Select value={formData.type} onChange={(e) => setFormData({ ... formData, type: e.target.value })}>
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select value={formData.category} onChange={(e) => setFormData({ ... formData, category: e.target.value })}>
            <MenuItem value="Business">Business</MenuItem>
            <MenuItem value="Salary">Salary</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <TextField type="number" label="Amount" fullWidth onChange={(e) => setFormData({ ... formData, amount: e.target.value })}/>
      </Grid>

      <Grid item xs={6}>
        <TextField type="date" label="Date" fullWidth onChange={(e) => setFormData({ ... formData, date: e.target.value })}/>
      </Grid>

      <Button className={classes.button} variant="outlined" color="primary" fullWidth onClick={createTransaction}>Create</Button>

    </Grid>
  )
}

export default Form
