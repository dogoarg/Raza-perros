


import "../styles/BreedLists.css";

const BreedsList = ({ breeds, onBreedClick }) => {
  return (
    <div className="card">
      {breeds.map((breed) => (
        <div
          className="lista2"
          key={breed.id}
          onClick={() => onBreedClick(breed)}
        >
          <h4>{breed.name}</h4>
          <img className="imagenes" src={breed.image.url} alt={breed.name} />
          <p className="descripcion">{breed.bred_for}</p>
          <p className="descripcion"> {breed.life_span}</p>
        </div>
      ))}
    </div>
  );
};

export default BreedsList;
