"use client";
import React from "react";
import Navbar from "../componente/navbar/Navbar";
import ImageGallery from "react-image-gallery";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa Bootstrap CSS

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

const page = () => {
  return (
    <>
      <Navbar />
      <ImageGallery items={images} />
      <div className="text-center my-5">
        <h2 className="display-4 fw-bold">Un gran poder</h2>
        <p className="lead">conlleva una gran responsabilidad</p>
      </div>
      <div>contacto</div>
    </>
  );
};

export default page;
