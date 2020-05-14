import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import encode from "../utils/encode";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    borderRadius: "3px",
  },
});

const EncodedValuesCodeBlock = ({ text }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={6} className={classes.root}>
      {text.length > 0 && (
        <pre style={{ whiteSpace: "pre-wrap" }}>
          <code>
            [
            {encode(text).length > 1
              ? encode(text).map(
                  (value, i) =>
                    `${value}${i === encode(text).length - 1 ? "" : ", "}`
                )
              : encode(text)}
            ]
          </code>
        </pre>
      )}
    </Grid>
  );
};

export default EncodedValuesCodeBlock;
