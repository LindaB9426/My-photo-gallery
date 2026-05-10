"use client";

import { useState } from "react";
import Image from "next/image";

const photos = [
  { src: "/images/1.jpg"},
  { src: "/images/2.jpg"},
  { src: "/images/3.jpg"},
  { src: "/images/4.jpg"},
  { src: "/images/5.jpg"},
  { src: "/images/6.jpg"},
  { src: "/images/7.jpg"},
  { src: "/images/8.jpg"},
];

const PhotoGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <div className="container mt-4">
      <div className="row">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
          >
            <div className="card h-100 shadow-sm bg-dark text-white border-1">
              <Image
                src={photo.src}
                alt={`image-${index}`}
                width={800}
                height={600}
                className="card-img-top"
                style={{
                  objectFit: "cover",
                  height: "250px",
                  cursor: "pointer",
                }}
                onClick={() => setSelectedIndex(index)}
              />


            </div>
          </div>
        ))}
      </div>

    {/* MODAL */}
    {selectedIndex !== null && (
        <div
          className="modal d-block"
          tabIndex={-1}
          onClick={() => setSelectedIndex(null)}
          style={{
            backgroundColor: "rgba(0,0,0,0.9)",
          }}
        >
        <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content bg-transparent border-0"
                onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-body text-center">
                <Image
                  src={photos[selectedIndex].src}
                  alt="Selected"
                  width={1200}
                  height={800}
                  style={{
                    width: "auto",
                    maxWidth: "100%",
                    maxHeight: "90vh",
                    objectFit: "contain",
                    borderRadius: "10px",
                    }}
                />
                <button
                    className="btn btn-light position-absolute top-50 start-0 translate-middle-y ms-3"
                    onClick={(e) => {
                        e.stopPropagation();

                        setSelectedIndex(
                        selectedIndex === 0
                            ? photos.length - 1
                            : selectedIndex - 1
                        );
                    }}
                    >
                    ←
                </button>

                <button
                    className="btn btn-light position-absolute top-50 end-0 translate-middle-y me-3"
                    onClick={(e) => {
                        e.stopPropagation();

                        setSelectedIndex(
                        selectedIndex === photos.length - 1
                            ? 0
                            : selectedIndex + 1
                        );
                    }}
                    >
                    →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;