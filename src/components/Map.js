import GoogleMapReact from 'google-map-react';
import { LocationMarker } from './LocationMarker'

export default function SimpleMap({eventData}){
  const defaultProps = {
    center: {
      lat: 53.3331,
      lng: -6.2489
    },
    zoom: 8
  };

  const markers = eventData.map(ev => {
    if(ev.categories[0].id === 10) {
        return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} />
    }

    return null
  })

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "YOUR_GOOGLE_MAPS_API_KEY_GOES_HERE" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {markers}
      </GoogleMapReact>
    </div>
  );
}

