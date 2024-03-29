import React from "react";

function ContactUs() {
  return (
    <section class="bg-light py-5" id="contact-us" style={{textDecoration: "none" }}>
      <div class="container py-5">
        <header class="mb-5 pb-4">
                   <h2 class="text lined pt-5">Get in touch with us today</h2>
        </header>
        <div class="row gy-4">
          <div class="card col-lg-3 col-md-6">
            <a
              class="px-4 py-5 text-center contact-item shadow-sm reset-anchor d-block"
              href="#!"
            >
              <i class="fas fa-map-marker-alt fa-2x mb-4"></i>
              <h4 class="contact-item-title h5 text-uppercase">Location</h4>
              <p class="text-sm mb-0">Avalpoondurai, Erode</p>
            </a>
          </div>
          <div class="card col-lg-3 col-md-6">
            <a
              class="px-4 py-5 text-center contact-item shadow-sm reset-anchor d-block"
              href="tel:534456886"
            >
             <i class="fa fa-phone fa-2x mb-4" aria-hidden="true"></i>
              <h4 class="contact-item-title h5 text-uppercase">Phone</h4>
              <p class="text-sm mb-0">+91-9842936368</p>
            </a>
          </div>
         
          <div class="card col-lg-3 col-md-6">
            <a
              class="px-4 py-5 text-center contact-item shadow-sm reset-anchor d-block"
              href="mailto:info@example.com"
            >
             <i class="fa fa-envelope fa-2x mb-4" aria-hidden="true"></i>
              <h4 class="contact-item-title h5 text-uppercase">Email</h4>
              <p class="text-sm mb-0">mahasakthi23370@gmail.com</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
