import Map from "./Map";
import apiRequest from "./apiRequest";
import { useState, useEffect } from 'react';

function App() {
  const API_URL = "http://localhost:3500"

  const [locations, setLocations] = useState([])
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch(`${API_URL}/locations`);
        if (!response.ok) throw Error('Did not receive expected data');
        const listLocations = await response.json();
        setLocations(listLocations);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }

    }
  }, [])

  return (
    <div className="App">
      <Map 
        locations={locations}
      />
    </div>
  );
}

export default App;
