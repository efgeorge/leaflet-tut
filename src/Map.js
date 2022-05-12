import {
  MapContainer,
  TileLayer,
  Circle,
  CircleMarker,
  Polyline,
  Polygon,
  Rectangle,
  Popup,
  Marker,
  useMapEvents,
  SVGOverlay,
  LayerGroup,
  FeatureGroup
} from "react-leaflet";
import leaflet, { latLng, point } from 'leaflet';
// import LocationMarker from "./LocationMarker"

const Map = ({ home, locations }) => {

  const position = home?.latlng;

  return (
    <div className="leaflet-container">
      <MapContainer center={position} zoom={14} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
       <Marker position={position}>
          <Popup>
            Km 0 al smecheriei
          </Popup>
       </Marker>
       {locations.map((location) => (
         <Marker position={(location.latlng)} key={location.id}>
           <Popup>La {(latLng(position).distanceTo(latLng(location.latlng)).toFixed(0)/1000)} km fata de km 0</Popup>
         </Marker>
       ))}
       {/* <Marker position={lidl}>
         <Popup>La {(latLng(position).distanceTo(latLng(lidl))).toFixed(0)/1000} km fata de km 0</Popup>
       </Marker> */}
      </MapContainer>
    </div>
  );
}

export default Map