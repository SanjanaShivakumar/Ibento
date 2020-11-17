import React, { useState } from 'react';
import firebase from '../Authentication/base';
import { v4 as uuid } from 'uuid';


export default function UploadImage() {
  const [imageUrl, setImageUrl] = useState([]);
  const readImages = async (e) => {
    const file = e.target.files[0];
    const id = uuid();
    const storageRef = firebase.storage().ref('images').child(id);
    const imageRef = firebase.database().ref('images').child('daily').child(id);
    await storageRef.put(file);
    storageRef.getDownloadURL().then((url) => {
      imageRef.set(url);
      const newState = [...imageUrl, { id, url }];
      setImageUrl(newState);
    });
  };

  
  return (
    <div>
      <h1>Upload image</h1>
      <input type="file" accept="image/*" onChange={readImages} />
    </div>
  );
}
