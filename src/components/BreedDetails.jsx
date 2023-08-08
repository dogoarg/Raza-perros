
import '../styles/Details.css'


const BreedDetails = ({ breed }) => {
    return breed ? (
      <div className="detail">
        <div className='caracteristicas1'>
        <h2 className='nombre'>{breed.name}</h2>
        <p className='caracteristica'>Temperament: {breed.temperament}</p>
        <p className='caracteristica'>Origin: {breed.origin}</p>
        <p className='caracteristica'>Life Span: {breed.life_span}</p>
        </div>
      </div>
    ) : null;
  };
  
  export default BreedDetails;