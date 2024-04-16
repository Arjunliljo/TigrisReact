//import "./App.css";
import Header from "./header";
import Article from "./article";
import "./index.css";

function App() {
  return (
    <>
      <Header />

      <main>
        <section>
          <div className="container">
            <h1>Welcome to tigris tiger reserve</h1>
            <p>
              In the heart of tapestry lies the Tiger Reserve, a sanctuary for
              these majestic creatures. Amongst the lush foliage and babbling
              streams, the reserve stands as a testament to conservation
              efforts. Roaring through the silence, tigers roam freely,
              embodying the harmonious coexistence of wildlife and preservation
              in this pristine haven.
            </p>
            <a href="#" className="button button-primery">
              <span>Book now →</span>
            </a>
            <a href="#" className="button button-secondary">
              <span>Contact us</span>
            </a>
          </div>
        </section>
        <section id="section-about">
          <div className="container">
            <h2>Our commitment to convertion</h2>
            <p>
              Tiger reservation NGOs (Non-Governmental Organizations) play a
              crucial role in the conservation and protection of tigers and
              their habitats. These organizations focus on promoting awareness,
              conducting research, and implementing conservation initiatives to
              safeguard the endangered tiger species. Their activities often
              involve habitat preservation, anti-poaching efforts, community
              engagement, and advocacy for policies supporting tiger
              conservation.
            </p>
          </div>
        </section>
        <section id="section-grid">
          <div className="container">
            <h2>Roars and Insights</h2>
            <div className="blogList">
              <Article />
              <Article />
              <Article />
              <Article />
              <Article />
              <Article />
              <Article />
              <Article />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
