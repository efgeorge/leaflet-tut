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

const Map = ({ locations }) => {

  const position = [44.4841215, 26.0210139];
  const lidl = [44.4912308, 26.032544];

  
  return (
    <div className="leaflet-container">
      <MapContainer center={position} zoom={17} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
       <Marker position={position}>
          <Popup>
            Km 0 al smecheriei
          </Popup>
       </Marker>
       {Object.keys(locations).map((location) => (
         <Marker position={(location.latlng)}>
           <Popup>La {(latLng(position).distanceTo(latLng(location.latlng)))} km fata de km 0</Popup>
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