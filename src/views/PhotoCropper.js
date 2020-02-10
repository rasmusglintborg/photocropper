import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { PhotoList } from "../components/PhotoList";
import { Cropper } from "../components/Cropper";
import { CropperFooter } from "../components/CropperFooter";

export const PhotoCropper = () => {
  const initialValue = [];
  const [images, setImages] = useState(initialValue);

  const fileHandler = e => {
    const imageArray = Array.from(e.target.files);
    setImages(images.concat(imageArray));
  };

  return (
    <div style={{ marginTop: "5px", marginLeft: "5px", marginRight: "5px" }}>
      <input
        accept="image/*"
        style={{ display: "none", marginBottom: "5px" }}
        id="contained-button-file"
        multiple
        type="file"
        onChange={fileHandler}
      />

      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div>
            <PhotoList images={images}></PhotoList>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Cropper file={images[0]}></Cropper>
        </Grid>
        <Grid item xs={12} style={{ marginTop: "50px" }}>
          <CropperFooter></CropperFooter>
        </Grid>
      </Grid>
    </div>
  );
};
