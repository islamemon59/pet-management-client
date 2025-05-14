import React, { useState } from 'react';
import PostPets from './PostPets';
import Pets from './Pets';

const fetchPets = fetch("http://localhost:2000/pets").then(res => res.json())

const Home = () => {
    const [pets, setPets] = useState([])
    return (
        <div>
            Home
            <PostPets pets={pets} setPets={setPets}></PostPets>
            <div className='my-10'>
                <Pets fetchPets={fetchPets} pets={pets} setPets={setPets}></Pets>
            </div>
        </div>
    );
};

export default Home;