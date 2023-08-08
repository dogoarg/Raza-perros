import '../styles/Pagination.css'




const Pagination = ({ currentPage, setCurrentPage, breedsPerPage, totalBreeds }) => {
  const totalPages = Math.ceil(totalBreeds / breedsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className='paginacion'>
      <button className='boton' onClick={prevPage} disabled={currentPage === 1}>
        Previous Page
      </button>
      <span>{currentPage}</span> / <span>{totalPages}</span>
      <button className='boton' onClick={nextPage} disabled={currentPage === totalPages}>
        Next Page
      </button>
    </div>
  );
};

export default Pagination;


