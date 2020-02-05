import React from "react";
import Button from "@material-ui/core/Button";

export const PhotoCropper = () => {
  return (
    <div>
      <input
        accept="image/*"
        style={{ display: "none" }}
        id="contained-button-file"
        multiple
        type="file"
      />

      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
    </div>
  );
};
