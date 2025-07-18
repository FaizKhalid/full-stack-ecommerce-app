import React from "react";
import heroImg from "../../assets/rabbit-hero.webp";

function Hero() {
  return (
    <section className="flex items-center justify-center">
      <img
        src={heroImg}
        alt="Rabbit mascot standing confidently at the center of the hero banner, surrounded by colorful shopping bags and product boxes. The background features soft pastel tones and subtle store branding elements, creating a cheerful and inviting ecommerce atmosphere. Promotional text reads Welcome to Rabbit Store in bold, friendly lettering. The overall mood is playful and welcoming."
        className="w-full h-[500px] md:h-[500px] lg:h-[600px] object-cover"
      />
      <div className="absolute text-center mb-40">
        <h1 className="text-5xl md:text-7xl  font-extrabold text-white uppercase">
          vecation <br /> ready
        </h1>
        <h4 className="text-sm text-white ">
          Explore are vecation-ready outfit with shopping
        </h4>
        <button className="bg-white text-black font-semibold text-sm capitalize px-3 py-1 mt-3 rounded-lg hover:bg-black hover:text-white">
          shop now
        </button>
      </div>
    </section>
  );
}

export default Hero;
