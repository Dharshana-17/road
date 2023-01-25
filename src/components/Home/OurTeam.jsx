import React from "react";

function OurTeam() {
  return (
    <div>

    <div class="bg-light py-5" id="our-team">
        <div class="container py-5">
          <div class="row mb-4">
            <div class="col-lg-5">
              <h2 class="display-4 font-weight-light">Our team</h2>
              <p class="font-italic text-muted">
                Siran prides itself in having a team of highly qualified and well experienced professionals.
              </p>
            </div>
          </div>

          <div class="row text-center">
            {/* <!-- Team item--> */}
            <div class="col-xl-3 col-sm-6 mb-5">
              <div class="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
                  alt=""
                  width="100"
                  class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 class="mb-0">Victor </h5>
                <span class="small text-uppercase text-muted">
                  CEO - Founder
                </span>
                <ul class="social mb-0 list-inline mt-3">
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <i class="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-xl-3 col-sm-6 mb-5">
              <div class="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png"
                  alt=""
                  width="100"
                  class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 class="mb-0">Alfred </h5>
                <span class="small text-uppercase text-muted">
                  QS - Quantity Surveyor
                </span>
                <ul class="social mb-0 list-inline mt-3">
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <i class="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-xl-3 col-sm-6 mb-5">
              <div class="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png"
                  alt=""
                  width="100"
                  class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 class="mb-0">Francis</h5>
                <span class="small text-uppercase text-muted">
                  ENG - Civil Engineer
                </span>
                <ul class="social mb-0 list-inline mt-3">
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <i class="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-xl-3 col-sm-6 mb-5">
              <div class="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png"
                  alt=""
                  width="100"
                  class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 class="mb-0">Jason</h5>
                <span class="small text-uppercase text-muted">
                  IT - Information Technology
                </span>
                <ul class="social mb-0 list-inline mt-3">
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <i class="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    {/* //   start carousell */}
    <div
      id="carouselExampleControls"
      class="carousel slide text-center carousel-dark"
      data-mdb-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="rounded-circle shadow-1-strong mb-4"
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
            alt="avatar"
            style={{width: "150px"}}
          />
          <div class="row d-flex justify-content-center">
            <div class="col-lg-8">
              <h5 class="mb-3">Maria Kate</h5>
              <p>Photographer</p>
              <p class="text-muted">
                <i class="fas fa-quote-left pe-2"></i>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                et deleniti nesciunt sint eligendi reprehenderit reiciendis,
                quibusdam illo, beatae quia fugit consequatur laudantium velit
                magnam error. Consectetur distinctio fugit doloremque.
              </p>
            </div>
          </div>
          <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
            <li>
              <i class="fas fa-star fa-sm"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm"></i>
            </li>
            <li>
              <i class="far fa-star fa-sm"></i>
            </li>
          </ul>
        </div>
        <div class="carousel-item">
          <img
            class="rounded-circle shadow-1-strong mb-4"
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
            alt="avatar"
            style={{width: "150"}}
          />
          <div class="row d-flex justify-content-center">
            <div class="col-lg-8">
              <h5 class="mb-3">John Doe</h5>
              <p>Web Developer</p>
              <p class="text-muted">
                <i class="fas fa-quote-left pe-2"></i>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                et deleniti nesciunt sint eligendi reprehenderit reiciendis.
              </p>
            </div>
          </div>
          <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
            <li>
              <i class="fas fa-star fa-sm"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm"></i>
            </li>
            <li>
              <i class="far fa-star fa-sm"></i>
            </li>
          </ul>
        </div>
        <div class="carousel-item">
          <img
            class="rounded-circle shadow-1-strong mb-4"
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
            alt="avatar"
            style={{width: "150"}}
          />
          <div class="row d-flex justify-content-center">
            <div class="col-lg-8">
              <h5 class="mb-3">Anna Deynah</h5>
              <p>UX Designer</p>
              <p class="text-muted">
                <i class="fas fa-quote-left pe-2"></i>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                et deleniti nesciunt sint eligendi reprehenderit reiciendis,
                quibusdam illo, beatae quia fugit consequatur laudantium velit
                magnam error. Consectetur distinctio fugit doloremque.
              </p>
            </div>
          </div>
          <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
            <li>
              <i class="fas fa-star fa-sm"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm"></i>
            </li>
            <li>
              <i class="far fa-star fa-sm"></i>
            </li>
          </ul>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-mdb-target="#carouselExampleControls"
        data-mdb-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-mdb-target="#carouselExampleControls"
        data-mdb-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    </div>
  );
}

export default OurTeam;
