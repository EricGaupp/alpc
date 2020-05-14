import React from "react";
import { Grid, TextField } from "@material-ui/core";

const EncodeTextInput = ({ text, handleTextChange }) => (
  <Grid item xs={12} md={6}>
    <TextField
      id="encode-text-input"
      label="Encode Text Here!"
      color="secondary"
      fullWidth
      multiline
      rowsMax={12}
      value={text}
      onChange={handleTextChange}
    />
  </Grid>
);

export default EncodeTextInput;
