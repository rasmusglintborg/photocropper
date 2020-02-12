import React, { useState, useEffect } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import EXIF from "exif-js";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import RefreshIcon from "@material-ui/icons/Refresh";
import Grid from "@material-ui/core/Grid";

export const Cropper = props => {
  const canvasRef = React.createRef();
  const Defaultcrop = {
    unit: "px",
    width: 1280,
    height: 800,
    aspect: 16 / 9
  };

  const [crop, setCrop] = useState(Defaultcrop);
  const [img, setImg] = useState(null);
  const [croppedImg, setCroppedImg] = useState(null);

  useEffect(() => {
    fileSelected(props.file);
  }, [props.file]);

  const fileSelected = file => {
    if (file) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setImg(reader.result));
      reader.readAsDataURL(file);
    }
  };

  const getMetaDataTimeStampFromImage = image => {
    let dateString;
    EXIF.getData(image, () => {
      const metaData = EXIF.pretty(image);
      if (metaData) {
        dateString = EXIF.getTag(image, "GPSDateStamp");
      } else dateString = null;
    });
    return dateString;
  };
  const onImageLoaded = image => {
    console.log("image loaded");
  };
  const onCropComplete = async (crop, pixelCrop) => {
    console.log(crop);
    getCroppedImg(img, crop);
  };
  const getCroppedImg = (src, crop) => {
    const canvas = canvasRef.current;
    if (canvas == null) return;
    const image = new Image();
    image.src = src;
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");
    const x = crop.width - 150;
    const y = crop.height - 50;
    let text = "";

    if (getMetaDataTimeStampFromImage(image) !== null)
      text = getMetaDataTimeStampFromImage(image).toString();

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );
    ctx.font = "italic 20pt Arial";
    ctx.strokeStyle = "rgba(0, 0, 0, 0.7)";

    ctx.lineWidth = 5;
    ctx.lineJoin = "miter";
    ctx.miterLimit = 2;
    ctx.strokeText(text, x, y);
    ctx.fillStyle = "rgba(255, 250, 250, 0.7)";
    ctx.fillText(text, x, y);
    setCroppedImg(canvas.toDataURL("image/png"));
  };

  const download = () => {
    var link = document.createElement("a");
    link.download = "CroppedPicture.png";
    link.href = croppedImg;
    link.click();
    props.nextFile();
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} container direction="row" alignItems="center">
        <IconButton
          color="primary"
          style={{ float: "right" }}
          onClick={() => {
            props.nextFile();
          }}
        >
          <DeleteForeverIcon />
          Remove
        </IconButton>
        <IconButton
          color="primary"
          style={{ margin: "0 auto" }}
          onClick={() => {
            setCrop(Defaultcrop);
          }}
        >
          <RefreshIcon />
          Reset Crop
        </IconButton>
        <IconButton
          color="primary"
          onClick={download}
          style={{ float: "left" }}
        >
          <AddIcon />
          Download
        </IconButton>
        <br></br>
      </Grid>
      <Grid item xs={12}>
        <ReactCrop
          src={img}
          crop={crop}
          ruleOfThirds
          onChange={newCrop => setCrop(newCrop)}
          onComplete={onCropComplete}
          onImageLoaded={onImageLoaded}
          locked={true}
        />
      </Grid>
      <br></br>
      <Grid item xs={12}>
        <canvas style={{ margin: "auto" }} ref={canvasRef} id="canvas" />
      </Grid>
    </Grid>
  );
};
