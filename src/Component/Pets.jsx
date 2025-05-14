import React, { use } from 'react';
import Pet from './Pet';

const Pets = ({fetchPets}) => {
    const pets = use(fetchPets)
    console.log(pets);
    return (
        <div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                {
                    pets.map(pet => <Pet key={pet._id} pet={pet}></Pet>)
                }
            </div>
        </div>
    );
};

export default Pets;