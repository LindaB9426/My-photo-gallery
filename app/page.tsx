import PhotoGallery from "./components/PhotoGallery";

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl font-bold text-center mt-6">
        My Photo Gallery
      </h1>

      <PhotoGallery />
    </main>
  );
}