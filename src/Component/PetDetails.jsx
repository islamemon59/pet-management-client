import React from "react";
import { useLoaderData } from "react-router";

const PetDetails = () => {
  const pet = useLoaderData();
  console.log(pet);
  const { price, name, photo } = pet;
  return (
    <div className="card bg-base-100 w-96 shadow-sm mx-auto">
      <figure>
        <img src={photo} alt="Shoes" />
      </figure>
      <div className="flex flex-col justify-center items-center gap-6 p-6">
        <div>
          <h2 className="card-title">Name: {name}</h2>
          <p>Price: {price}</p>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;
