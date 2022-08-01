import Map from "./Map";
import apiRequest from "./apiRequest";
import { useState, useEffect } from 'react';
import SearchLocation from "./SearchLocation";
import List from "./List";

function App() {
  const API_URL = "http://localhost:3500/db"

  const [locations, setLocations] = useState([])
  const [home, setHome] = useState();
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not receive expected data');
        const parsedResponse = await response.json();
        setHome(parsedResponse.home);
        setLocations(parsedResponse.locations);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchLocations();
  }, [])


  return (
    <div className="App">
      <main>
        <SearchLocation home={home} locations={locations} search={search} setSearch={setSearch} />
        <div className="map-container">
          {isLoading && <p>Loading map...</p>}
          {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
          {!fetchError && !isLoading && <Map search={search} home={home} locations={locations} />}
        </div>
      </main>
    </div>
  );
}

export default App;
