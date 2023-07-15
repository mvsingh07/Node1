import React, { useState } from "react";

function ProductCustomizer() {
  const [mainImage, setMainImage] = useState(null);
  const [customImages, setCustomImages] = useState([]);

  const handleMainImageChange = (event) => {
    setMainImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleCustomImageChange = (event) => {
    setCustomImages([...customImages, URL.createObjectURL(event.target.files[0])]);
  };

  const handleCustomImagePosition = (index, x, y) => {
    let newCustomImages = [...customImages];
    newCustomImages[index].positionX = x;
    newCustomImages[index].positionY = y;
    setCustomImages(newCustomImages);
  };

  return (
    <div>
      <h1>Product Customizer</h1>
      <div>
        <label htmlFor="main-image">Main Image:</label>
        <input type="file" id="main-image" onChange={handleMainImageChange} />
        {mainImage && <img src={mainImage} alt="Main" />}
      </div>
      <div>
        <label htmlFor="custom-image">Custom Image:</label>
        <input type="file" id="custom-image" onChange={handleCustomImageChange} />
        {customImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Custom"
            style={{ position: "absolute", left: image.positionX, top: image.positionY }}
            onMouseDown={(event) => {
              event.preventDefault();
              let offsetX = event.clientX - event.target.offsetLeft;
              let offsetY = event.clientY - event.target.offsetTop;
              const handleMouseMove = (event) => {
                handleCustomImagePosition(index, event.clientX - offsetX, event.clientY - offsetY);
              };
              document.addEventListener("mousemove", handleMouseMove);
              document.addEventListener("mouseup", () => document.removeEventListener("mousemove", handleMouseMove));
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductCustomizer;
