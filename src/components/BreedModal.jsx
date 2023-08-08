import Modal from 'react-modal';

const BreedModal = ({ isOpen, onRequestClose, breed }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Breed Modal"
    >
      <h2>{breed.name}</h2>
      <p>Temperament: {breed.temperament}</p>
      <p>Origin: {breed.origin}</p>
      <p>Life Span: {breed.life_span}</p>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default BreedModal;