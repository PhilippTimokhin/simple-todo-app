import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    width: 400,
  },
  button: {
    width: 300,
    margin: theme.spacing(2, 6, 2),
  },
}));
export default function Todo({ note, handleOnDelete }) {
  const classes = useStyles();
  return (
    <div>
      <Grid container justify="center">
        <Paper className={classes.paper}>
          <Grid item>
            <Box mt={2}>
              <Typography align="center">{note}</Typography>
            </Box>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => handleOnDelete(note)}
              startIcon={<DeleteIcon />}
            >
              Delete the note?
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}
