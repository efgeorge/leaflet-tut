const SearchLocation = ({ search, setSearch, home, locations}) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search</label>
      <input 
        type="text"
        placeholder="Search Location"
        value={search}
        onChange={(e) => setSearch(e.target.value)} 
      />
    </form>
  )
}

export default SearchLocation