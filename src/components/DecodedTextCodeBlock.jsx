import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import decode from "../utils/decode";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    borderRadius: "3px",
  },
});

const DecodedTextCodeBlock = ({ values }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={6} className={classes.root}>
      {values.length > 0 && (
        <pre style={{ whiteSpace: "pre-wrap" }}>
          <code>{decode(values)}</code>
        </pre>
      )}
    </Grid>
  );
};

export default DecodedTextCodeBlock;
