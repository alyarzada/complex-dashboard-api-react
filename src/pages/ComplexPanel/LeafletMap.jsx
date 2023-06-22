import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Box } from "@mui/material";

const LeafletMap = () => {
  return (
    <Box className="bg-white drop-shadow-lg rounded-xl">
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
