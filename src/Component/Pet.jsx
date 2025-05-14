import React from "react";

const Pet = ({ pet }) => {
    const {name, photo, price} = pet
  return (
    <div className="card card-side bg-base-100 shadow-sm">
      <figure>
        <img
        className="w-72 object-cover "
          src={photo}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {name}</h2>
        <p>Price: {price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Pet;
