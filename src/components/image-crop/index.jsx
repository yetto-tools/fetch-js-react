import React, { useState } from "react";

import ImageCropper from "./ImageCropper";

export const  CropPicture = () =>{
  const [imageToCrop, setImageToCrop] = useState(undefined);
  const [croppedImage, setCroppedImage] = useState(undefined);

  const onUploadFile = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();

      reader.addEventListener("load", () => {
        const image = reader.result;
        setImageToCrop(image);
      });
      
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={onUploadFile} />
      <div>
        <ImageCropper
          imageToCrop={imageToCrop}
          onImageCropped={(croppedImage) => setCroppedImage(croppedImage)}
        />
      </div>
      {croppedImage && (
        <div>
          <h2>Cropped Image</h2>
          <img alt="Cropped Img" src={croppedImage} />
        </div>
      )}
    </div>
  );
}

export default CropPicture;
