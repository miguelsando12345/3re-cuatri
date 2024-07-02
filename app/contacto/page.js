"use client";
import React, { useState, useRef } from "react";
import Navbar from "../componente/navbar/Navbar";
import ImageGallery from "react-image-gallery";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";

// Image data for the gallery
const images = [
  {
    original:
      "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    thumbnail:
      "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    original:
      "https://images.unsplash.com/photo-1534375971785-5c1826f739d8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    thumbnail:
      "https://images.unsplash.com/photo-1534375971785-5c1826f739d8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    original:
      "https://images.unsplash.com/photo-1584994696678-3d739b5ac1bf?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    thumbnail:
      "https://images.unsplash.com/photo-1584994696678-3d739b5ac1bf?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// Define the Example component separately
function Example() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      <Button variant="danger" ref={target} onClick={() => setShow(!show)}>
        Un gran poder conlleva, una gran responsabilidad
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {({
          placement: _placement,
          arrowProps: _arrowProps,
          show: _show,
          popper: _popper,
          hasDoneInitialMeasure: _hasDoneInitialMeasure,
          ...props
        }) => (
          <div
            {...props}
            style={{
              position: "absolute",
              backgroundColor: "rgba(255, 100, 100, 0.85)",
              padding: "2px 10px",
              color: "white",
              borderRadius: 3,
              ...props.style,
            }}
          >
            Simple tooltip
          </div>
        )}
      </Overlay>
    </>
  );
}

// Define the main page component
const Page = () => {
  return (
    <>
      <Navbar />
      <ImageGallery items={images} />
      <div></div>
      {/* Render the Example component */}
      <Example />
    </>
  );
};

export default Page;
