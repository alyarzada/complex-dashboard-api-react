import { Box } from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const LeafletMap = () => {
  return (
    <Box className="drop-shadow-lg rounded-xl mb-6 bg-white dark:bg-bgMain ">
      <MapContainer
        center={[40.37665543757066, 49.85999537195368]}
        zoom={13}
        scrollWheelZoom={false}
        className="h-[500px] rounded-xl"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[40.37665543757066, 49.85999537195368]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
};

export default LeafletMap;
