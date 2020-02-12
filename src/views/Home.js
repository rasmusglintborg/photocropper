import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  header: {
    padding: "60px",
    overflow: "hidden"
  }
}));

export const Home = () => {
  const classes = useStyles();

  return (
    <Grid style={{ marginTop: "2px", marginLeft: "5px", marginRight: "5px" }}>
      <Grid>
        <div className={classes.header}>
          <Typography align="center" variant="h2" color="primary" gutterBottom>
            image cropper
          </Typography>
          <Typography align="center" variant="h4" gutterBottom>
            This is a quick and dirty image cropper
          </Typography>
        </div>
      </Grid>
      <Grid>
        <div>
          <Typography align="center" variant="subtitle1" gutterBottom>
            This image cropper is made for the digital photoframe from
            Denver-eletronics. The model of the photoframe is&nbsp;
            <a href="https://denver-electronics.com/products/frameo/denver-pff-1010black/c-1024/c-1262/p-2991">
              PFF-1010BLACK MK2
            </a>
            &nbsp;with the app Denver-eletronic made for cropping images,{" "}
            <br></br>
            you cant display the timestamp for when the photo was taken which is
            important context for some photos.
          </Typography>

          <Typography align="center" variant="h4" gutterBottom>
            source code can be found on&nbsp;
            <a href="https://github.com/rasmusglintborg/photocropper">github</a>
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};
