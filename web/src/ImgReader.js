import React from "react";
//Card
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";

import red from "@material-ui/core/colors/red";
import blue from "@material-ui/core/colors/blue";

import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import { makeStyles } from '@material-ui/core/styles';
import { useContext } from 'react';
import ImgContext from './store/image-context';


const  ImageUploadCard = () =>  {  

  const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: 500,
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end"
    },
    icon: {
      margin: theme.spacing(2)
    },
    iconHover: {
      margin: theme.spacing(2),
      "&:hover": {
        color: red[800]
      }
    },
    cardHeader: {
      textalign: "center",
      align: "center",
      backgroundColor: "white"
    },
    input: {
      display: "none"
    },
    title: {
      color: blue[800],
      fontWeight: "bold",
      fontFamily: "Montserrat",
      align: "center"
    },
    button: {
      color: blue[300],
      margin: 10
    }
  }));

  const classes = useStyles();
  console.log("classes:", classes);
  const ctx = useContext(ImgContext)
  
  const  handleBackgroundFiles = (event) =>{
    var files = event.target.files;
    let imgPath = [];
    for (var i=0; i<files.length; i++) {
      imgPath[i] = files[i].webkitRelativePath;
    };
    console.log("type background");
    ctx.getbImgDir(imgPath);
    /*if( type.type === "background"){
      ctx.getbImgDir(imgPath);
    }
    else if( type.type === "foreground"){
      ctx.getfImgDir(imgPath);
    }*/
  }

  const  handleForegroundFiles = (event) =>{
    var files = event.target.files;
    let imgPath = [];
    for (var i=0; i<files.length; i++) {
      imgPath[i] = files[i].webkitRelativePath;
    };

    //console.log("image path:", imgPath);
    console.log("type foreground");
    ctx.getfImgDir(imgPath);
  }

  const renderInitialState = () => {
    return (
      <React.Fragment>
        <CardContent>
          <Grid container justifyContent="center" alignItems="center">
            <input
              accept="image/*"
              className={classes.input}
              id="multiple-button-file"
              type="file"
              multiple
              webkitdirectory="true"
              onChange={handleBackgroundFiles}
            />
            <label htmlFor="multiple-button-file">
              <Fab variant="extended" color="primary" component="span" className={classes.button}>
                <AddPhotoAlternateIcon />
                Background
              </Fab>
            </label>
            <input
              accept="image/*"
              className={classes.input}
              id="multiple-button-file-fore"
              type="file"
              multiple
              webkitdirectory="true"
              onChange={handleForegroundFiles}
            />
            <label htmlFor="multiple-button-file-fore">
              <Fab variant="extended" color="primary" component="span" className={classes.button}>
                <AddPhotoAlternateIcon />
                Foreground
              </Fab>
            </label>
          </Grid>
        </CardContent>
      </React.Fragment>
    );
  }
  return (
      <React.Fragment>
        <div className={classes.root}>
          <Card >
            {renderInitialState()}
          </Card>
        </div>
      </React.Fragment>
  );
    // }
}
  
export default ImageUploadCard;