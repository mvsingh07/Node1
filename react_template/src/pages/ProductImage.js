import React from "react";
// import "./ProductImage.css";

class ProductImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: null,
      dragStart: { x: 0, y: 0 },
      dragEnd: { x: 0, y: 0 },
    };
    this.imageRef = React.createRef();
  }

  handleDragStart = (e) => {
    const index = parseInt(e.target.getAttribute("data-index"));
    this.setState({
      selectedImage: index,
      dragStart: { x: e.clientX, y: e.clientY },
    });
  };

  handleDragEnd = (e) => {
    const index = parseInt(e.target.getAttribute("data-index"));
    const productImageRect = this.imageRef.current.getBoundingClientRect();
    const imageRect = e.target.getBoundingClientRect();
    const positionX = (imageRect.left - productImageRect.left) / productImageRect.width;
    const positionY = (imageRect.top - productImageRect.top) / productImageRect.height;
    this.props.onImagePosition(index, positionX, positionY);
    this.setState({ selectedImage: null });
  };

  handleDragOver = (e) => {
    e.preventDefault();
  };

  handleDrop = (e) => {
    e.preventDefault();
    const index = parseInt(e.dataTransfer.getData("index"));
    const positionX = (e.clientX - e.target.offsetLeft) / e.target.offsetWidth;
    const positionY = (e.clientY - e.target.offsetTop) / e.target.offsetHeight;
    this.props.onImagePosition(index, positionX, positionY);
  };

  render() {
    const { selectedImages, imagePositions } = this.props;
    return (
      <div
        className="product-image"
        onDragOver={this.handleDragOver}
        onDrop={this.handleDrop}
        ref={this.imageRef}
      >
        {selectedImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`product-image__selected-image ${this.state.selectedImage === index ? "product-image__selected-image--active" : ""}`}
            style={{ left: `${imagePositions[index]?.positionX * 100}%`, top: `${imagePositions[index]?.positionY * 100}%` }}
            data-index={index}
            draggable
            onDragStart={this.handleDragStart}
            onDragEnd={this.handleDragEnd}
          />
        ))}
      </div>
    );
  }
}

export default ProductImage;
