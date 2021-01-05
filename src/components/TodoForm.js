import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    width: "min-content",
  },
  root: {
    "& .MuiTextField-root": {
      marginTop: theme.spacing(2),
      margin: theme.spacing(2),
      width: 400,
    },
  },
  button: {
    width: 400,
    margin: theme.spacing(0, 2, 2),
  },
}));

export default function TodoForm({ note, setNote, handleOnSubmit }) {
  const classes = useStyles();
  const enabled = note.length > 0;
  return (
    <div>
      <Grid container justify="center">
        <form className={classes.root} onSubmit={handleOnSubmit}>
          <Paper className={classes.paper}>
            <Grid item>
              <TextField
                value={note}
                onChange={(e) => setNote(e.target.value)}
                id="outlined-multiline-static"
                label="Please, write your note"
                multiline
                rows={6}
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
                disabled={!enabled}
                startIcon={<SendIcon />}
              >
                Add the note?
              </Button>
            </Grid>
          </Paper>
        </form>
      </Grid>
    </div>
  );
}
