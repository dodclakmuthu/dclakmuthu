import React, { useState, useRef, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import {NotificationContext} from '../context.js'

import './ImageUploder.css'


const ImageUploder = () => {

  const addNotification = useContext(NotificationContext)

  const [image, setImage] = useState(null)
  const [preview, setPreview] = useState('/noimage.jpg')
  const inputRef = useRef(null)

  const handleClick = () => {
    inputRef.current.click()
  }

  const changeFileInput = (e) => {
    let file = e.target.files[0]
    var re = new RegExp("^image")
    if (re.test(file.type)) {
      setImage(file)

    }
  }

  const handleDelete = (e) => {
    setImage(null)
    inputRef.current.value = ''
    addNotification("success", "Image Deleted successfully")
  }

  useEffect(() => {
    if (image) {
      setPreview(URL.createObjectURL(image))
      return () => URL.revokeObjectURL(image)
    }
    else {
      setPreview('/noimage.jpg')
    }
  }, [image])


  return (
    <>
      <label htmlFor="main-image-uploader">
        <h5>Choose a main image</h5>
        <div className="image">
          <div onClick={handleClick}>
            <img src={preview} alt="" />
            <div className="mask"></div>
          </div>
          <FontAwesomeIcon icon={faXmark} className="x-icon" onClick={(e) => handleDelete(e)} />
        </div>
      </label>
      <input accept='image/*' type="file" id="uploader-input" ref={inputRef} onChange={e => changeFileInput(e)}></input>
    </>
  );
}

export default ImageUploder;
