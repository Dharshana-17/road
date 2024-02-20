import React from "react";
import { Carousel } from "react-bootstrap";

function Gallery() {
  return (
    <div className="gallery mt-5 mb-5" id="gallery">
      <div className="card  container mt-2">
        <Carousel className="container-dark">
          <Carousel.Item className=" carousel slide  carousel-dark mt-5">
           
              
          </Carousel.Item>
          <Carousel.Item className="text-center carousel slide text-center carousel-dark mt-5">
            <div class="carosel-item">
              <img
                width="500"
                height="500"
                class="img-fluid p-2"
                src="https://img.freepik.com/free-vector/road-surface-background_1284-72692.jpg"
                alt="avatar"
              />
              <img
                width="500"
                height="500"
                class="img-fluid"
                src="https://c1.wallpaperflare.com/preview/734/797/226/construction-site-building-concrete.jpg"
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
                src="https://media.istockphoto.com/id/528964544/photo/road-rollers-working-on-the-construction-site-aerial-view.jpg?s=612x612&w=0&k=20&c=EMoIkiZ8Itc1rAnZEl3jK2YhRb9SKZ48RbEZO7swSvs="
                alt="avatar"
              />
              <img
                width="500"
                height="500"
                class="img-fluid"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv9bt5CRq72KybYe5In7gqcHP6Y39iyH6POA&usqp=CAU"
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
