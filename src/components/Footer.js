import React from "react";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";

export default function Footer() {
  return (
    <React.Fragment>
      <Typography
        align="center"
        style={{ fontSize: 12, fontWeight: "bold", marginTop: 25 }}
      >
        Make
        <IconButton>
          <SentimentVerySatisfiedIcon />
        </IconButton>
        your Note
      </Typography>
    </React.Fragment>
  );
}
