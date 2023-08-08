import '../styles/SearchBar.css'

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className='search'>

    <input
    className='input'
      type="text"
      placeholder="Buscar Raza..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    </div>
  );
};

export default SearchBar;