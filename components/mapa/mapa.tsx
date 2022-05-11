import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { LatLngTuple } from 'leaflet';
import "leaflet/dist/leaflet.css";
import ReactLeafletKml from "react-leaflet-kml";


const Map = () => {

  const position: LatLngTuple = [-3.77, -38.57];
  const [kml, setKml] = React.useState(null);

  React.useEffect(()=>{

    // const L = require("leaflet");
    // delete L.Icon.Default.prototype._getIconUrl;

    // L.Icon.Default.mergeOptions({
    //   iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    //   iconUrl: require("leaflet/dist/images/marker-icon.png"),
    //   shadowUrl: require("leaflet/dist/images/marker-shadow.png")
    // });

    const kmlText='../../public/img/wifor-map.kml';
    const baseUrl = `https://app-wifor.herokuapp.com/img/wifor-map.kml`;

    fetch(
      `${baseUrl}`
    )
      .then((res) => res.text())
      .then((kmlText) => {
        const parser = new DOMParser();
        const kml:any = parser.parseFromString(kmlText, "text/xml");
        setKml(kml);
    });    

  },[])

  return (
    <>   
        <MapContainer 
          center={position} 
          zoom={11} 
          scrollWheelZoom={true}  
          style={{ height: "500px", width: "100%" }}>
          <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {kml && <ReactLeafletKml kml={kml} />}

      </MapContainer>
    </>
  );
};

export default Map;
