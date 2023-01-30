import React from "react";

function AboutUs() {
  return (
    <div id="about">
      <div class="bg-light">
        <div class="container py-5">
          <div class="row h-100 align-items-center py-5">
            <div class=" card text-center col-lg-6">
              <h1 class="display-4">About us</h1>
              <p class="lead text-muted mb-0">
                Siran Construction Limited. is an ambitious construction company
                that specializes in residential and commercial building
                projects. With a team of highly skilled and experienced
                professionals, they are committed to delivering high-quality
                workmanship and exceptional customer service. They have
                extensive experience in all aspects of construction, including
                project management, site preparation, and finish work. They are
                known for their attention to detail and ability to work closely
                with clients to ensure that their vision is brought to life.
                They are dedicated to building sustainable and energy-efficient
                structures, and use the latest technologies and building
                materials to ensure that their projects are built to last. With
                a strong commitment to safety and a passion for excellence,
                Siran is poised to become a leader in the industry.
              </p>
              <p class="lead text-muted">
                Snippet by{" "}
                <a href="https://siranlimited.web.app/" class="text-muted">
                  <u>Siran Construction Limited</u>
                </a>
              </p>

              <blockquote class="blockquote text-center">
                <p class="mb-0">"Building your dreams, brick by brick"</p>
              </blockquote>
            </div>
            <div class="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bHV4dXJ5JTIwaG91c2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                class="img-fluid"
                style={{ border: "none" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white py-5">
        <div class="container py-5">
          <div class="row align-items-center mb-5">
            <div class="col-lg-6 order-2 order-lg-1">
              <i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
              <div className="card text-center"style={{borderRadius: "100px" }} >
                <h2 class="font-weight-dark">Our Vision</h2>
                <p class="font-monospace ">
                  ``To enhance management and building a strong team to strive
                  towards a sustainable environment for engineering design and
                  improvement of housing standards``{" "}
                </p>

              </div>
            </div>
            <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2">
              <img
                src="https://images.unsplash.com/photo-1579847188804-ecba0e2ea330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbnN0cnVjdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                class="img-fluid rounded-circle mb-lg-3"
              />
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-lg-5 px-5 mx-auto">
              <img
                src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGx1eHVyeSUyMGhvdXNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                class="img-fluid rounded-circle mb-4 mb-lg-0"
              />
            </div>
            <div class="col-lg-6">
              <div className="card text-center"style={{borderRadius: "300px" }} >
              <i class="fa fa-leaf fa-2x mb-3 text-primary"></i>

              <h2 class="font-weight-light">Our Mission</h2>
              <p class="font-monospace mb-5">
                Aiming to change the phase of Africa by providing quality
                design, efficient, affordable, sustainable, cost effective
                services
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
