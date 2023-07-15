import React, { useState } from 'react';
import ImageSelection from './ImageSelection';
import ProductImage from './ProductImage';
import ImagePosition from './ImagePosition';
import './ProductCustomizer.css';

const ProdCustomizer = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [activeSelection, setActiveSelection] = useState(null);

  const handleImageSelect = (index) => {
    setActiveSelection(index);
  };

  const handleImagePosition = (position) => {
    const updatedImages = [...selectedImages];
    updatedImages[activeSelection].position = position;
    setSelectedImages(updatedImages);
  };

  return (
    <div className="product-customizer">
      <h1 className="product-customizer__title">Customize Your Product</h1>
      <div className="product-customizer__container">
        <div className="product-customizer__selection-container">
          <h2 className="product-customizer__subtitle">Select Images:</h2>
          <ImageSelection
            selectedImages={selectedImages}
            setSelectedImages={setSelectedImages}
            activeSelection={activeSelection}
            handleImageSelect={handleImageSelect}
          />
        </div>
        <div className="product-customizer__image-container">
          <h2 className="product-customizer__subtitle">Preview:</h2>
          <div className="product-customizer__image">
            <ProductImage selectedImages={selectedImages} />
            {activeSelection !== null && (
              <ImagePosition
                image={selectedImages[activeSelection]}
                handleImagePosition={handleImagePosition}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdCustomizer;
