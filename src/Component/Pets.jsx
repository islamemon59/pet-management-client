import React, { use } from 'react';
import Pet from './Pet';

const Pets = ({fetchPets}) => {
    const pets = use(fetchPets)
    console.log(pets);
    return (
        <div>
            <h1 className='text-center text-4xl my-6 font-semibold'>Choose Your Favorite Pets</h1>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                {
                    pets.map(pet => <Pet key={pet._id} pet={pet}></Pet>)
                }
            </div>
        </div>
    );
};

export default Pets;