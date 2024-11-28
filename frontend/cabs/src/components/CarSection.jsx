import React from "react";

import Mini from "../images/mini.png";
import Sedan from "../images/sedan.png";
import Suv from "../images/suv.png";
import Luxury from "../images/luxury.png";
import CarCard from "./CarCard";

const CarSection = () => {
  const cars = [
    {
      title: "Mini",
      image: Mini,
      description: "Compact and budget-friendly rides, perfect for short distances.",
      price: "₹12",
    },
    {
      title: "Sedan",
      image: Sedan,
      description: "Comfortable rides for small groups or families.",
      price: "₹14",
    },
    {
      title: "SUV",
      image: Suv,
      description: "Spacious and powerful rides, ideal for long journeys.",
      price: "₹20",
    },
    {
      title: "Luxury",
      image: Luxury,
      description: "Premium rides for a luxurious experience.",
      price: "₹30",
    },
  ];

  return (
    <section id="services" className="py-10 px-8">
      <h2 className="text-center text-3xl font-bold mb-8">Choose Your Car</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cars.map((car, index) => (
          <CarCard
            key={index}
            title={car.title}
            image={car.image}
            description={car.description}
            price={car.price}
          />
        ))}
      </div>
    </section>
  );
};

export default CarSection;