import React from "react";
import {
  fade,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { green } from "@material-ui/core/colors";

const Form = () => {
  return (
    <div className='form-container'>
      <h1>Share your amazing story!</h1>
      <FormControl className="">
        <InputLabel shrink htmlFor='bootstrap-input'>
          Bootstrap
        </InputLabel>
        {/* <BootstrapInput defaultValue='react-bootstrap' id='bootstrap-input' /> */}
      </FormControl>
    </div>
  );
};

export default Form;
