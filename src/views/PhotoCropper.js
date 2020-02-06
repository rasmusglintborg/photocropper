import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { PhotoList } from "../components/PhotoList";
export const PhotoCropper = () => {
  const initialValue = [];
  const [images, setImages] = useState(initialValue);

  const fileHandler = e => {
    const imageArray = Array.from(e.target.files);
    setImages(images.concat(imageArray));
  };

  return (
    <div style={{ marginTop: "5px", marginLeft: "5px", marginRight: "5px" }}>
      <p>numbers of files : {images.length}</p>
      <input
        accept="image/*"
        style={{ display: "none" }}
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
        <Grid item xs={4}>
          <div>
            <PhotoList images={images}></PhotoList>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div>4</div>
        </Grid>
        <Grid item xs={4}>
          <div>4</div>
        </Grid>
      </Grid>
    </div>
  );
};
