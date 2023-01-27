import React from "react";

function ContactUs() {
  return (
    <section class="bg-light py-5" id="contact-us" style={{textDecoration: "none" }}>
      <div class="container py-5">
        <header class="mb-5 pb-4">
          <p class="fw-bold text-primary text-uppercase letter-spacing-3">
            Call me, maybe.
          </p>
          <h2 class="text lined pt-5">Get in touch with us today</h2>
        </header>
        <div class="row gy-4">
          <div class="col-lg-3 col-md-6">
            <a
              class="px-4 py-5 text-center contact-item shadow-sm reset-anchor d-block"
              href="#!"
            >
              <i class="fas fa-map-marker-alt fa-2x mb-4"></i>
              <h4 class="contact-item-title h5 text-uppercase">Location</h4>
              <p class="text-sm mb-0">Nairobi, Kenya</p>
            </a>
          </div>
          <div class="col-lg-3 col-md-6">
            <a
              class="px-4 py-5 text-center contact-item shadow-sm reset-anchor d-block"
              href="tel:534456886"
            >
             <i class="fa fa-phone fa-2x mb-4" aria-hidden="true"></i>
              <h4 class="contact-item-title h5 text-uppercase">Phone</h4>
              <p class="text-sm mb-0">0712345678</p>
            </a>
          </div>
          <div class="col-lg-3 col-md-6">
            <a
              class="px-4 py-5 text-center contact-item shadow-sm reset-anchor d-block"
              href="www.example.com"
            >
              <i class="fa fa-globe fa-2x mb-4"></i>
              <h4 class="contact-item-title h5 text-uppercase">Website</h4>
              <p class="text-sm mb-0">www.siran.co.ke</p>
            </a>
          </div>
          <div class="col-lg-3 col-md-6">
            <a
              class="px-4 py-5 text-center contact-item shadow-sm reset-anchor d-block"
              href="mailto:info@example.com"
            >
             <i class="fa fa-envelope fa-2x mb-4" aria-hidden="true"></i>
              <h4 class="contact-item-title h5 text-uppercase">Email</h4>
              <p class="text-sm mb-0">info@siran.com</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
