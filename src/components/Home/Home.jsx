import React from "react";
import Gallery from "../Gallery/Gallery";
import Services from "../Services/Services";
import "./Home.css";

function Home() {
  return (
    <div>
      <section className="hero bg-cover bg-center py-5" id="bg">
        <div className="container py-5 my-5 z-index-20 position-relative">
          <div className="row py-lg-5 mt-5">
          <div className="col-md-8" style={{ color: "white" }}> {/* Change text color to dark */}
              <h2 className="text-xl fw-bold">
                {/* Content */}
              </h2>

              <h2 className="h4 fw-normal mb-5">S.D Construction Limited</h2>
              <p className="text-shadow">
                S.D construction limited is a road construction company formed on
                July 2017.The Company is operating and located in Erode. The
                company offers engineering construction and construction project
                management. S.D construction limited is dedicated to
                organizations seeking construction services.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Gallery />
      <Services />
      
    </div>
  );
}

export default Home;
