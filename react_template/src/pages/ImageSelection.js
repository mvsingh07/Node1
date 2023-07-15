import React from "react";

function ImageSelection(props) {
  const handleImageChange = (event) => {
    props.onImageChange(event.target.files[0]);
  };

  return (
    <div>
      <label htmlFor={props.id}>{props.label}:</label>
      <input type="file" id={props.id} onChange={handleImageChange} />
    </div>
  );
}

export default ImageSelection;
