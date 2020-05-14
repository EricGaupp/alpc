import React, { useState } from "react";
import {
  CssBaseline,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

//Components
import EncodeTextInput from "./EncodeTextInput";
import EncodedValuesCodeBlock from "./EncodedValuesCodeBlock";
import DecodeValuesInput from "./DecodeValuesInput";
import DecodedTextCodeBlock from "./DecodedTextCodeBlock";

const useStyles = makeStyles({
  marginTop: {
    marginTop: "2em",
  },
});

const App = () => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [encodedValues, setEncodedValues] = useState("");

  const encodedValuesArray = encodedValues
    .replace(/ /g, "")
    .split(",")
    .filter((value) => value !== "")
    .map((value) => parseInt(value, 10));

  const encodedValuesInputError = !encodedValuesArray.every((value) => {
    return typeof value === "number" && value >= 0 && value <= 4294967296;
  });

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleValueChange = (event) => {
    setEncodedValues(event.target.value);
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Grid container direction="column" justify="center" spacing={6}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              Art and Logic Encoder Challenge
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            container
            spacing={3}
            className={classes.marginTop}
          >
            <EncodeTextInput text={text} handleTextChange={handleTextChange} />
            <EncodedValuesCodeBlock text={text} />
          </Grid>
          <Grid
            item
            xs={12}
            container
            spacing={3}
            className={classes.marginTop}
          >
            <DecodeValuesInput
              value={encodedValues}
              handleValueChange={handleValueChange}
              error={encodedValuesInputError}
            />
            <DecodedTextCodeBlock values={encodedValuesArray} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default App;
