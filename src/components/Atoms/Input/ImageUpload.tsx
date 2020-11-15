import React, { useState } from "react";
import { CameraIcon } from "../../../assets/images/index";

interface Props {
  name: string;
}

const ImageUpload: React.FC<Props> = (props) => {
  const [image, setImage] = useState("");
  const handleImage = (event: any) => {
    const image = event.target.files[0];
    const imageUrl = URL.createObjectURL(image);
    setImage(imageUrl);
  };
  return (
    <div className="thumbnail-upload">
      <p className="thumbnail-upload__heading">サムネイル画像</p>
      <label htmlFor="PhotoUpaload">
        <div>
          <img src={CameraIcon} alt="" />
          <span>画像を選択する</span>
        </div>
        <img className="image-preview" src={image} alt="" />
      </label>
      <input
        name={props.name}
        id="PhotoUpaload"
        type="file"
        onChange={handleImage}
      />
    </div>
  );
};

export default ImageUpload;
