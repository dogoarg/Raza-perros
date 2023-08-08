import React, { useState, useEffect } from "react";
import BreedsList from "./components/BreedsList";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";
import BreedDetails from "./components/BreedDetails";
import "./App.css";

const App = () => {
  const [breeds, setBreeds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBreed, setSelectedBreed] = useState(null);
  const breedsPerPage = 10; // Número de razas por página

  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/breeds")
      .then((response) => response.json())
      .then((data) => setBreeds(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleBreedClick = (breed) => {
    setSelectedBreed(breed);
  };


  const filteredBreeds = breeds.filter((breed) =>
    breed.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const totalBreeds = filteredBreeds.length; // Usamos la longitud de los resultados filtrados para la paginación


  const indexOfLastBreed = currentPage * breedsPerPage;
  const indexOfFirstBreed = indexOfLastBreed - breedsPerPage;
  const currentBreeds = filteredBreeds.slice(indexOfFirstBreed, indexOfLastBreed );

  return (
    <div className="container mt-5">
      <h1>Razas de Perros</h1>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        breedsPerPage={breedsPerPage}
        totalBreeds={filteredBreeds.length}
      />

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <BreedsList breeds={currentBreeds} onBreedClick={handleBreedClick} />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        breedsPerPage={breedsPerPage}
        totalBreeds={totalBreeds}
      />
      <BreedDetails breed={selectedBreed} />
      {/* {selectedBreed && <BreedDetails breed={selectedBreed} />} */}
    </div>
  );
};

export default App;
