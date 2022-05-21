import { useMap } from "react-leaflet"

const List = ({ search, locations, markers }) => {
    const map = useMap();
    const focusLocation = (location) => {
        map.flyTo(location.latlng, 17);
        map.openPopup(markers[location.id]);
        console.log(markers);
    }
  return (
    <div className="list">
        <ul>
            {locations.filter((location) => location.name.toLowerCase().includes(search.toLowerCase())).map((filteredLocation) => (
                <li key={filteredLocation.id} onClick={() => focusLocation(filteredLocation)}>{filteredLocation.name}</li>
            ))}
        </ul>
    </div>
  )


  // locations.filter((location) =>
//   location.name.toLowerCase().includes(search.toLowerCase()))
}

export default List