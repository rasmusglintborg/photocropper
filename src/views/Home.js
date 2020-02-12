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
          <Typography
            align="center"
            variant="subtitle2"
            gutterBottom
            display="initial"
            paragraph={true}
          >
            This image cropper is made for the digital photoframe from
            Denver-eletronics. The model of the photoframe is&nbsp;
            <a href="https://denver-electronics.com/products/frameo/denver-pff-1010black/c-1024/c-1262/p-2991">
              PFF-1010BLACK MK2
            </a>
            &nbsp;with the app Denver-eletronic made for cropping images,
            <br></br>
            you cant display the timestamp for when the photo was taken which is
            important context for some photos, which is why i made this website.
            <br></br>
            After you crop an image to the digital photoframe's resolution:
            1280x800.<br></br> A timestamp of when the picture was taken will
            appear in the bottom right corner
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
