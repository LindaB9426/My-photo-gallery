import PhotoGallery from "./components/PhotoGallery";
import Split from "./components/Split";

const Home = () => {
  return (
  <>
      <header
        className="header"
      >
        <div className="d-flex justify-content-between align-items-center w-100 px-4">
          <h1 className="display-3 fw-bold m-0 text-black">
            My Photo Gallery
          </h1>
          <nav className="px-4">
            <a href="#plitvice" className="me-3 text-black fw-bold">
              Plitvice
            </a>

            <a href="#split" className="text-black fw-bold">
              Split
            </a>
          </nav>
        </div>  
      </header>
      <section id="plitvice">
          <div className="d-flex align-items-center p-3 ">
            <div className="container px-4" >
              <h2  className="display-5 fw-bold ">
                Plitvice Lakes National Park
              </h2>
              <p className="lead text-white">
                The Plitvice Lakes is the oldest and the largest national park in the Republic of Croatia. 
                The exceptional natural beauty of this area has always attracted nature lovers. As a result of that, 
                it was declared the first national park of the Republic of Croatia as early as 8 April 1949. 
                The process of tufa formation, through which tufa barriers and subsequently lakes are formed, 
                is the outstanding universal value for which Plitvice Lakes received international recognition on 26 October 1979, 
                when it was inscribed on the UNESCO World Heritage List. 
              </p>
            </div>
          </div>
        </section>

      <div className="gallery" >
          <PhotoGallery />
      </div>
      <section id="split" >
        <div className="d-flex align-items-center p-3 " >
            <div className="container px-4">
              <h2 className="display-5 fw-bold text-white">
                Split
              </h2>
              <p className="lead text-white">
                The city was founded as the Greek colony of Aspálathos (Ancient Greek: Ἀσπάλαθος)
                 in the 3rd or 2nd century BCE on the coast of the Illyrian Dalmatae, and in 305 CE, 
                 it became the site of the Palace of the Roman emperor Diocletian. It became a prominent 
                 settlement around 650 when it succeeded the ancient capital of the Roman province of Dalmatia, Salona. 
              </p>
            </div>
          </div>
        </section>
        <div className="gallery" >
          <Split/>
        </div>
    </>
  );
};

export default Home;