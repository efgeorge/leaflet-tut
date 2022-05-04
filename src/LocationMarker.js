import {
  MapContainer,
  TileLayer,
  Popup,
  Marker,
  useMapEvents,
} from "react-leaflet";

import { useState } from 'react'

const LocationMarker = () => {
  const [position, setPosition] = useState(null)
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    }
  })

  // return position === null ? null : (
  //   <Marker position={position}>
  //     <Popup>You are here</Popup>
  //   </Marker>
  // )
  return (
    <div>
      {position === null ? null : (
        <Marker position={position}>
          <Popup>You are here</Popup>
        </Marker>
      )}
    </div>
  );
}

export default LocationMarker