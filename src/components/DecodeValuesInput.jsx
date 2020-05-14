import React from "react";
import { Grid, InputAdornment, TextField } from "@material-ui/core";

const DecodeValuesInput = ({ value, handleValueChange, error }) => (
  <Grid item xs={12} md={6}>
    <TextField
      id="decode-values-input"
      label="Decode Values Here!"
      color="secondary"
      fullWidth
      value={value}
      error={error}
      helperText={
        error ? "Invalid Input" : "Delimit decimal integers with commas"
      }
      onChange={handleValueChange}
      InputProps={{
        startAdornment: <InputAdornment position="start">[</InputAdornment>,
        endAdornment: <InputAdornment position="end">]</InputAdornment>,
      }}
    />
  </Grid>
);

export default DecodeValuesInput;
