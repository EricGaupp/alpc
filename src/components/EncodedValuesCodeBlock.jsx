import React from "react";
import { Grid, Typography } from "@material-ui/core";
import encode from "../utils/encode";

const EncodedValuesCodeBlock = ({ text }) => (
  <Grid item xs={6}>
    <Typography variant="h6">Encoded Values:</Typography>
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

export default EncodedValuesCodeBlock;
