import React from "react";
import { Carousel } from "react-bootstrap";

function Gallery() {
  return (
    <div className="gallery mt-5 mb-5" id="gallery">
      <div className="card  container mt-2">
        <Carousel className="container-dark">
          <Carousel.Item className=" carousel slide  carousel-dark mt-5">
            <div class="carosel-item active">
              <img
                width="500"
                class="img-fluid p-2"
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="image 1"
              />{" "}
              <img
                width="500"
                class="img-fluid"
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="avatar"
              />
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
          </Carousel.Item>
          <Carousel.Item className="text-center carousel slide text-center carousel-dark mt-5">
            <div class="carosel-item">
              <img
                width="500"
                height="500"
                class="img-fluid p-2"
                src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="avatar"
              />
              <img
                width="500"
                height="500"
                class="img-fluid"
                src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="avatar"
              />

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
          </Carousel.Item>
          <Carousel.Item className="text-center carousel slide text-center carousel-dark mt-5">
            <div class="carosel-item">
              <img
                width="500"
                height="500"
                class="img-fluid p-2"
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdXNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="avatar"
              />
              <img
                width="500"
                height="500"
                class="img-fluid"
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdXNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="avatar"
              />

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
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Gallery;
