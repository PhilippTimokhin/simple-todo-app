import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    width: 400,
  },
}));

export default function NotFound() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container justify="center">
        <Paper className={classes.paper}>
          <Box mt={4} mb={4}>
            <Typography align="center" variant="h6">
              Oooops! It looks like your note was not found! This is a reason to
              make a note!
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </React.Fragment>
  );
}
