// components/PhotoGallery.js

import Image from "next/image";

const photos = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpg",
  "/images/8.jpg",
];

const PhotoGallery = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {photos.map((src, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
          >
            <div className="card h-100 shadow-sm">
              <Image
                src={src}
                alt={`Photo ${index + 1}`}
                width={800}
                height={600}
                className="card-img-top"
                style={{
                  objectFit: "cover",
                  height: "250px",
                }}
              />

              <div className="card-body">
                <p className="card-text">
                  Plitvicas parks {index + 1}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;