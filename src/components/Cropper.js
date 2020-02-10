import React, { useState, useEffect } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
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

  const onImageLoaded = image => {
    console.log("image loaded");
  };
  const onCropComplete = async (crop, pixelCrop) => {
    getCroppedImg(img, crop, "bla");
  };
  const getCroppedImg = (src, crop, fileName) => {
    const canvas = canvasRef.current;
    const image = new Image();
    image.src = src;
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

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
  };

  return (
    <div>
      <ReactCrop
        src={img}
        crop={crop}
        ruleOfThirds
        onChange={newCrop => setCrop(newCrop)}
        onComplete={onCropComplete}
        onImageLoaded={onImageLoaded}
        locked={true}
      />
      <br></br>
      <canvas ref={canvasRef} id="canvas" />
    </div>
  );
};
