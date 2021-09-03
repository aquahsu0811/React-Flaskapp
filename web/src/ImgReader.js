import React from "react";
//Card
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";

import red from "@material-ui/core/colors/red";
import blue from "@material-ui/core/colors/blue";

import { withStyles } from '@material-ui/core/styles';
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import { makeStyles } from '@material-ui/core/styles';


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
    },
    secondaryButton: {
      color: "gray",
      margin: 10
    },
    typography: {
      margin: theme.spacing(2),
      backgroundColor: "default"
    },
  
    searchRoot: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: 400
    },
    searchInput: {
      marginLeft: 8,
      flex: 1
    },
    searchIconButton: {
      padding: 10
    },
    searchDivider: {
      width: 1,
      height: 28,
      margin: 4
    }
  }));

  const classes = useStyles();
  

  const  handleTest = (event) =>{
      var files = event.target.files;

      for (var i=0; i<files.length; i++) {
        //var item = document.createElement("li");
        //item.innerHTML = 
        //output.appendChild(item);
        console.log("file:",files[i].webkitRelativePath);
      };
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
                onChange={handleTest}
              />
              <label htmlFor="multiple-button-file">
              <Fab component="span" className={classes.button}>
                <AddPhotoAlternateIcon />
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