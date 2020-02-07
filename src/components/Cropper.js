import React, { useState, useEffect } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

export const Cropper = props => {
  const Defaultcrop = {
    width: 1280,
    height: 800,
    aspect: 16 / 9
  };

  const [crop, setCrop] = useState(Defaultcrop);
  const [img, setImg] = useState(null);

  useEffect(() => {
    fileSelected(props.img);
  }, [props.img]);

  const fileSelected = file => {
    if (file) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setImg(reader.result));
      reader.readAsDataURL(file);
    }
  };

  const onCropChange = (crop, percentCrop) => {
    setCrop(crop);
  };
  const onImageLoaded = image => {
    console.log(image);
  };
  const onCropComplete = (crop, pixelCrop) => {
    console.log(crop, pixelCrop);
  };
  return (
    <div>
      <ReactCrop
        src={img}
        crop={crop}
        ruleOfThirds
        onChange={newCrop => setCrop(newCrop)}
      />
    </div>
  );
};
