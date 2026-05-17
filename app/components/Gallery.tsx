"use client";

import { useState } from "react";
import Image from "next/image";

type Photo = {
  src: string;
};

type GalleryProps = {
  photos: Photo[];
};

const Gallery = ({ photos }: GalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <div className="container mt-4">
      <div className="row">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
          >
            <div className="card h-100 shadow-sm bg-dark border-0 overflow-hidden">
              <Image
                src={photo.src}
                alt={`image-${index}`}
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, 25vw"
                style={{
                  objectFit: "cover",
                  height: "250px",
                  width: "100%",
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
            style={{
                backgroundColor: "rgba(0,0,0,0.9)",
            }}
        >
            <div
                className="position-fixed top-0 start-0 w-100 h-100"
                style={{ zIndex: 1 }}
                onClick={() => setSelectedIndex(null)}
            />
     
          <button
            className="close-btn"
            onClick={() => setSelectedIndex(null)}
            >
            ✕
          </button>
          <div className="modal-dialog modal-dialog-centered modal-xl position-relative">
            <div
              className="modal-content bg-transparent border-0"
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
                    className="nav-btn left"
                    onClick={(e) => {
                        e.stopPropagation();
                        setSelectedIndex(
                        selectedIndex === 0 ? photos.length - 1 : selectedIndex - 1
                        );
                    }}
                    >
                    ‹
                    </button>
                    <button
                    className="nav-btn right"
                    onClick={(e) => {
                        e.stopPropagation();
                        setSelectedIndex(
                        selectedIndex === photos.length - 1 ? 0 : selectedIndex + 1
                        );
                    }}
                    >
                    ›
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;