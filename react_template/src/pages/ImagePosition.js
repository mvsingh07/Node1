import React from "react";

function ImagePosition(props) {
  const handleMouseDown = (event) => {
    event.preventDefault();
    let offsetX = event.clientX - event.target.offsetLeft;
    let offsetY = event.clientY - event.target.offsetTop;
    const handleMouseMove = (event) => {
      props.onImagePosition(event.clientX - offsetX, event.clientY - offsetY);
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", () => document.removeEventListener("mousemove", handleMouseMove));
  };

  return (
    <img
      src={props.src}
      alt={props.alt}
      style={{ position: "absolute", left: props.positionX, top: props.positionY }}
      onMouseDown={handleMouseDown}
    />
  );
}

export default ImagePosition;
