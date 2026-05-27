
import Gallery from "./components/Gallery";
import { galleries } from "./galleries";
import Footer from "./components/Footer";
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
})



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
        <a href="/" className="text-decoration-none">
          <h1 className={`${playfair.className}  hero-title display-1 fw-bold m-0 text-white mb-3`}>
            Trip to Croatia
          </h1>
        </a>
        <nav className="px-4 mt-3 ">
          <a href="#plitvice" className="me-3 text-white fw-bold">
            Plitvice
          </a>
          <a href="#split" className="me-3 text-white fw-bold">
            Split
          </a>
          <a href="#trogir" className="me-3 text-white fw-bold">
            Trogir
          </a>
          <a href="#bibinje" className="text-white fw-bold">
            Bibinje
          </a>
        </nav>
        </div>  
      </header>
      <section id="plitvice">
          <div className="d-flex align-items-center p-3 py-5">
            <div className="container px-4" >
              <h2  className={`${playfair.className} section-title display-5 fw-bold text-white`}>
                Plitvice Lakes National Park
              </h2>
              <p className="lead text-white">
                Plitvice Lakes National Park is one of Croatia's most breathtaking natural landmarks. 
                Known for its cascading turquoise lakes and waterfalls, the park feels almost unreal in its beauty. 
                Wooden pathways guide visitors through forests, across crystal-clear water, and past countless waterfalls formed by natural limestone deposits.
                Protected since 1949, Plitvice is also recognized as a UNESCO World Heritage Site, preserving its unique landscape for future generations.
              </p>
            </div>
          </div>
        </section>

      <div className="gallery" >
          <Gallery photos={galleries.plitvice} />
      </div>
      <section id="split" >
        <div className="d-flex align-items-center p-3 py-5 " >
            <div className="container px-4">
              <h2 className={`${playfair.className} section-title display-5 fw-bold text-white`}>
                Split
              </h2>
              <p className="lead text-white">
                Split is a vibrant coastal city where ancient history blends seamlessly with modern life. 
                At its heart lies the impressive Diocletian's Palace, a Roman structure that still forms 
                part of the city today, filled with cafés, shops, and narrow stone streets.
                What once was an imperial residence has grown into a lively Mediterranean city, full of energy, seaside promenades, 
                and sunlit squares. Split is not just a historical site — it's a living, breathing experience.
              </p>
            </div>
          </div>
        </section>
        <div className="gallery" >
          <Gallery photos={galleries.split} />
        </div>
        <section id="trogir">
        <div className="d-flex align-items-center p-3 py-5" >
            <div className="container px-4">
              <h2 className={`${playfair.className} section-title display-5 fw-bold text-white`}>
                Trogir
              </h2>
              <p className="lead text-white">
                Trogir is a charming small town that feels like stepping into a different time. 
                Surrounded by stone walls and connected by bridges, its old town sits on a tiny island 
                filled with medieval architecture and narrow marble streets.
                Every corner tells a story — from Romanesque churches to Venetian-era buildings. Despite its small size, 
                Trogir is rich in history and atmosphere, making it one of the Adriatic coast's hidden gems.
              </p>
            </div>
          </div>
        </section>
        <div className="gallery" >
          <Gallery photos={galleries.trogir} />
        </div>
        <section id="bibinje">
        <div className="d-flex align-items-center p-3 py-5" >
            <div className="container px-4">
              <h2 className={`${playfair.className} section-title display-5 fw-bold text-white`}>
                Bibinje
              </h2>
              <p className="lead text-white">
                Bibinje is a small town in southern Croatia near Zadar. 
                It is next to the Adriatic Sea and has beautiful beaches and walking paths along the coast. 
                About 4,000 people live there.
                Bibinje has a long history and has been inhabited since Roman times. The town was named after Vibius, a Roman man who owned land there. 
                In the past, people mostly worked in farming, fishing, and raising animals.
                Today, Bibinje is a quiet and popular place for tourists because of its sea, nature, and relaxing atmosphere.
              </p>
            </div>
          </div>
        </section>
        <div className="gallery" >
          <Gallery photos={galleries.bibinje} />
        </div>
      <Footer />
    </>
  );
};

export default Home;