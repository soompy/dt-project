import { Map, MapMarker } from "react-kakao-maps-sdk";

const Location = () => {
  return (
    <Map
      center={{ lat: 37.365264512305174, lng: 127.10676860117488 }}
      style={{ width: "100%", height: "536px" }}
      level={3}
    >
      <MapMarker position={{ lat: 37.365264512305174, lng: 127.10676860117488 }} />
    </Map>
  );
};

export default Location;
