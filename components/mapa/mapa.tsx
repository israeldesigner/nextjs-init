import React from 'react';
import { Map as MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { LatLngTuple } from 'leaflet';
import "leaflet/dist/leaflet.css";
import ReactLeafletKml from "react-leaflet-kml";


const Map = () => {

  const position: LatLngTuple = [-22.91, -43.20];
  const [kml, setKml] = React.useState(null);

  React.useEffect(()=>{

    const L = require("leaflet");
    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png")
    });

    fetch(
      "https://raw.githubusercontent.com/aviklai/react-leaflet-kml/master/src/assets/example1.kml"
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
        style={{ height: "500px", width: "100%" }}
        zoom={17}
        center={[37.422, -122.084]}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {kml && <ReactLeafletKml kml={kml} />}
      </MapContainer>     
    </>
  );
};

export default Map;

      // <MapContainer
      //   center={position}
      //   zoom={13}
      //   scrollWheelZoom={false}
      //   style={{ height: "100%", width: "100%" }}
      // >
      //   <TileLayer
      //     url={`http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
      //     attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, 
      //     <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
      //   />
      //   {kml && <ReactLeafletKml kml={kml} />}
      //   <Marker position={position} draggable={true} animate={true}>
      //     <Popup>Hey ! I live here</Popup>
      //   </Marker>
      // </MapContainer>

// const Map = () => {
  
//   const position: LatLngTuple = [-22.91, -43.20];
//   // React.useEffect(() => {
//   //   const L = require("leaflet");

//   //   delete L.Icon.Default.prototype._getIconUrl;

//   //   L.Icon.Default.mergeOptions({
//   //     iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
//   //     iconUrl: require("leaflet/dist/images/marker-icon.png"),
//   //     shadowUrl: require("leaflet/dist/images/marker-shadow.png")
//   //   });
//   // }, []);
//   return (
//   //   <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
//   //   <TileLayer
//   //     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//   //     url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//   //   />
//   //   <Marker position={position}>
//   //     <Popup>
//   //       A pretty CSS3 popup. <br /> Easily customizable.
//   //     </Popup>
//   //   </Marker>
//   // </MapContainer>
//   );
// };

// export default Map;