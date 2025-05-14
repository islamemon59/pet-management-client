import React from 'react';
import PostPets from './PostPets';
import Pets from './Pets';

const fetchPets = fetch("http://localhost:2000/pets").then(res => res.json())

const Home = () => {
    return (
        <div>
            Home
            <PostPets></PostPets>
            <Pets fetchPets={fetchPets}></Pets>
        </div>
    );
};

export default Home;