import React from "react";
import {
  Link
} from "react-router-dom";
export default function Carosol() {
  return (
    <div id="carouselExampleCaptions" class="carousel slide pb-5" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src=" ../assets/images/demos/demo-4/slider/slide-2.png" class="d-block w-100" alt="..." />
          <div class="carousel-caption text-right text-dark d-none d-md-block py-4">
            <h2>Explore New HeadSet</h2>
            <p>Sony wireless head set that provide best sound quality.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src=" ../assets/images/demos/demo-4/slider/slide-1.png" class="d-block w-100" alt="..." />
          <div class="carousel-caption text-right text-dark d-none d-md-block py-4">
            <h2>Launch New mobile</h2>
            <p>iphone 15 is launch now you can buy from our store.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
