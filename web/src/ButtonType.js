import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import { useContext } from 'react';
import ImgContext from './store/image-context';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function sendJson(path) {
  //const ctx = useContext(ImgContext)
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ "path": path })
  };
  fetch('http://localhost:5000/api/v2.0/test', requestOptions)
  .then(res => res.json()) // res == result
  .then(
    (result) => {
      console.log("result:",result);
      console.log("path:", path);
    },
    (error) => {

    }
  )
}

export default function IconLabelButtons() {
  const classes = useStyles();
  const ctx = useContext(ImgContext)
  console.log("sendJson",ctx)
  console.log("item",ctx.items)
  
  return (
    <div>
      {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon>send</Icon>}
        onClick= {()=>sendJson(ctx.bImgDir)}
      >
        Send
      </Button>
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
      >
        Upload
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
    </div>
  );
}
