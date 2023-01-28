import React from "react";

function AboutUs() {
  return (
    <div id="about">
      <div class="bg-light">
        <div class="container py-5">
          <div class="row h-100 align-items-center py-5">
            <div class="col-lg-6">
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
                a strong commitment to safety and a passion for excellence, Siran
                is poised to become a leader in the industry.
              </p>
              <p class="lead text-muted">
                Snippet by{" "}
                <a href="https://bootstrapious.com/snipp" class="text-muted">
                  <u>Siran Construction Limited</u>
                </a>
              </p>
            </div>
            <div class="col-lg-6 d-none d-lg-block">
              <img
                src="https://images.unsplash.com/photo-1579847188804-ecba0e2ea330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbnN0cnVjdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
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
              <h2 class="font-weight-light">Lorem ipsum dolor sit amet</h2>
              <p class="font-italic text-muted mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">
                Learn More
              </a>
            </div>
            <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2">
              <img
                src="https://images.unsplash.com/photo-1579847188804-ecba0e2ea330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbnN0cnVjdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                class="img-fluid mb-4 mb-lg-0"
              />
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-lg-5 px-5 mx-auto">
              <img
                src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg"
                alt=""
                class="img-fluid mb-4 mb-lg-0"
              />
            </div>
            <div class="col-lg-6">
              <i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
              <h2 class="font-weight-light">Lorem ipsum dolor sit amet</h2>
              <p class="font-italic text-muted mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
