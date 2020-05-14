import React, { useState } from "react";
import { CssBaseline, Container, Grid, Typography } from "@material-ui/core";
import EncodeTextInput from "./EncodeTextInput";
import EncodedValuesCodeBlock from "./EncodedValuesCodeBlock";

const App = () => {
  const [text, setText] = useState("");
  const [encodedValues, setEncodedValues] = useState([]);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Grid container justify="center" spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              Art and Logic Encoder
            </Typography>
          </Grid>
          <EncodeTextInput text={text} handleTextChange={handleTextChange} />
          <EncodedValuesCodeBlock text={text} />
        </Grid>
      </Container>
    </>
  );
};

export default App;
