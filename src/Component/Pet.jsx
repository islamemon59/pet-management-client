import React from "react";
import { Link } from "react-router";

const Pet = ({ pet }) => {
  const {_id, name, photo, price } = pet;
  return (
    <div className="card card-side bg-base-100 shadow-sm">
      <figure>
        <img className="w-80 object-cover " src={photo} alt="pet" />
      </figure>
      <div className="w-full flex justify-around items-center">
        <div>
          <h2 className="card-title">Name: {name}</h2>
          <p>Price: {price}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-3">
            <Link to={`/petDetails/${_id}`}><button className="btn join-item">Details</button></Link>
            <button className="btn join-item">Update</button>
            <button className="btn join-item">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pet;
