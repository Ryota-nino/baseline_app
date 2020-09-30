import React,{useEffect} from 'react';
import {CameraIcon} from '../../assets/images/index';

const ThumbnailUploadInput:React.FC = props => {
  
  return (
    <div className="thumbnail-upload">
        <p className="thumbnail-upload__heading">サムネイル画像</p>
        <label htmlFor="PhotoUpaload">
          <div>
            <img src={CameraIcon} alt=""/>
            <span>画像を選択する</span>
          </div>
        </label>
        <input id="PhotoUpaload" type="file"/>
    </div>
  );
}

export default ThumbnailUploadInput;
