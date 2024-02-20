import React from "react";

function AboutUs() {
  return (
    <div id="about">
      <div className="bg-light">
        <div className="container py-5">
          <div className="row h-100 align-items-center py-5">
            <div className="card text-center col-lg-6">
              <h1 className="display-4">About us</h1>
              <p className="lead text-muted mb-0">
                S.D Constructions is a premier road construction firm focused
                on reshaping infrastructure through innovation and commitment.
                With our establishment in 2017, we've led the industry in
                delivering top-tier road construction solutions. Our dedication
                to quality has strengthened community bonds, boosted commerce,
                and improved mobility. Specializing in a range of services,
                from road design to asphalt paving and bridge construction, we
                ensure excellence in every project. Client satisfaction is
                paramount, driving our collaborative approach and tailored
                solutions. Safety is ingrained in our culture, prioritizing
                the well-being of our team and stakeholders. Sustainability is
                a core value, guiding our eco-friendly practices and resource
                conservation efforts. Our portfolio showcases diverse and
                successful projects across sectors, showcasing our expertise
                and reliability for your next project and experience
                unparalleled professionalism and results. Contact us today to
                explore our services and begin a journey of progress and
                innovation.
              </p>

              <blockquote className="blockquote text-center">
                <p className="mb-0">"Building your dreams, brick by brick"</p>
              </blockquote>
            </div>
            <div className="col-lg-6">
              <img
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.researchgate.net%2Ffigure%2FLaser-based-system-used-for-road-construction-in-Asphalt-paver-machine-used-in-developed_fig5_329526416&psig=AOvVaw35AAiKuR3y6uY6LcXSvxeh&ust=1708263688906000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNCQgc-_soQDFQAAAAAdAAAAABAY"
                alt=""
                className="img-fluid"
                style={{ border: "none" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-5">
        <div className="container py-5">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="card text-center" style={{ borderRadius: "100px", backgroundColor: "#B0E0E6", padding: "30px" }}>
                <h2 className="font-weight-dark">Our Vision</h2>
                <p className="font-monospace">
                  At S.D Constructions, our vision is to be the premier choice
                  for comprehensive road construction services, driven by
                  innovation, integrity, and sustainability. We aim to forge
                  enduring partnerships, champion safety and environmental
                  stewardship, and leave an indelible mark of progress in
                  every community we touch.
                </p>
              </div>
            </div>
            <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
              <img
                src="https://images.unsplash.com/photo-1579847188804-ecba0e2ea330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbnN0cnVjdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="img-fluid rounded-circle mb-lg-3"
              />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 px-5 mx-auto">
              <img
                src="https://d3lzcn6mbbadaf.cloudfront.net/media/details/roadconstuction-may7.jpg"
                alt=""
                className="img-fluid elapsedcircle mb-4 mb-lg-0"
                style={{ borderRadius: "50%", width: "300px", height: "300px", objectFit: "cover" }}
              />
            </div>
            <div className="col-lg-6">
              <div className="card text-center" style={{ borderRadius: "300px", backgroundColor: "#B0E0E6", padding: "30px" }}>
                <i className="fa fa-leaf fa-2x mb-3 text-primary"></i>

                <h2 className="font-weight-light">Our Mission</h2>
                <p className="font-monospace mb-5">
                Our mission is to deliver top-tier construction services that revolutionize infrastructure. We strive to provide exceptional quality, efficiency, and affordability in our projects while prioritizing sustainability and environmental responsibility. Through innovative solutions and a commitment to excellence, we aim to exceed client expectations, foster economic growth, and leave a lasting positive impact on communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
