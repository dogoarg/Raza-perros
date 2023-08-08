import React, { useState, useEffect } from 'react';
import BreedsList from './BreedsList';
import SearchBar from './SearchBar';
import Pagination from './Pagination';

const DogBreeds = () => {
  const [breeds, setBreeds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const breedsPerPage = 10; // Número de razas por página

  useEffect(() => {
    fetch('https://api.thedogapi.com/v1/breeds')
      .then((response) => response.json())
      .then((data) => setBreeds(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const indexOfLastBreed = currentPage * breedsPerPage;
  const indexOfFirstBreed = indexOfLastBreed - breedsPerPage;
  const currentBreeds = breeds.slice(indexOfFirstBreed, indexOfLastBreed);

  const filteredBreeds = currentBreeds.filter((breed) =>
    breed.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Dog Breeds</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <BreedsList breeds={filteredBreeds} />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        breedsPerPage={breedsPerPage}
        totalBreeds={breeds.length}
      />
    </div>
  );
};

export default DogBreeds;
