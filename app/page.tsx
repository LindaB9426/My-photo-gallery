
import Gallery from "./components/Gallery";
import { galleries } from "./galleries";
import Footer from "./components/Footer";






const Home = () => {
  return (
  <>
      <header 
        className="header 
        d-flex 
        flex-column 
        align-items-center
        py-5"
         
      >
      <div className="text-center" >
        <h1 className="display-3 fw-bold m-0 text-white mb-3">
          Trip to Croatia
        </h1>
        <nav className="px-4 mt-3">
          <a href="#plitvice" className="me-3 text-white fw-bold">
            Plitvice
          </a>
          <a href="#split" className="me-3 text-white fw-bold">
            Split
          </a>
          <a href="#trogir" className="text-white fw-bold">
            Trogir
          </a>
        </nav>
        </div>  
      </header>
      <section id="plitvice">
          <div className="d-flex align-items-center p-3 py-5">
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
          <Gallery photos={galleries.plitvice} />
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
          <Gallery photos={galleries.split} />
        </div>
        <section id="trogir" >
        <div className="d-flex align-items-center p-3 " >
            <div className="container px-4">
              <h2 className="display-5 fw-bold text-white">
                Trogir
              </h2>
              <p className="lead text-white">
                Despite the fact that Trogir is thought to be much older, 
                the findings show us that the city was founded at the end of 3rd century BC or at the beginning of 2nd century BC. 
                We have discovered far older remnants of stone tools used by Neanderthal people 45,000 years ago in the immediate area of Trogir.
                The old city centre itself was formerly a part of the mainland, which people's labours helped to split into a small island.
              </p>
            </div>
          </div>
        </section>
        <div className="gallery" >
          <Gallery photos={galleries.trogir} />
        </div>
      <Footer />
    </>
  );
};

export default Home;