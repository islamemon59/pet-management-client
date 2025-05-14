import React from "react";

const PostPets = () => {
  const handlePetOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newPet = Object.fromEntries(formData.entries());
    console.log(newPet);
    fetch("http://localhost:2000/pets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPet),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("response from update data", data);
        form.reset();
      });
  };

  return (
    <div>
      <div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
          <div className="card-body">
            <form onSubmit={handlePetOrder} className="fieldset">
              <h1 className="text-2xl font-semibold text-center">
                Order Your Pet
              </h1>
              <label className="label">Name</label>
              <input
                type="text"
                className="input"
                name="name"
                placeholder="Pet Name"
              />
              <label className="label">Price</label>
              <input
                type="text"
                className="input"
                name="price"
                placeholder="Price"
              />
              <label className="label">Photo URL</label>
              <input
                type="text"
                className="input"
                name="photo"
                placeholder="Photo URL"
              />
              <button type="submit" className="btn btn-neutral mt-4">
                Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPets;
