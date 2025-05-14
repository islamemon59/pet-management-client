import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const Pet = ({ pet, pets, setPets }) => {
  const { _id, name, photo, price } = pet;

  const handlePetDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:2000/pets/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              console.log("data deleted", data);
              const remainingPets = pets.filter(kitty => kitty._id != _id)
              setPets(remainingPets)
              Swal.fire({
                title: "Deleted!",
                text: "Deleted Successfully.",
                icon: "success",
              });
            }
          });
      }
    });
  };

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
            <Link to={`/petDetails/${_id}`}>
              <button className="btn join-item">Details</button>
            </Link>
            <button className="btn join-item">Update</button>
            <button onClick={handlePetDelete} className="btn join-item">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pet;
