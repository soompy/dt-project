import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

const KakaoMap = ({ latitude = 37.5665, longitude = 126.978, level = 3 }) => {
    const mapContainer = useRef(null);

    useEffect(() => {
        const initMap = () => {
            if (window.kakao && window.kakao.maps) {
                const kakao = window.kakao;

                const map = new kakao.maps.Map(mapContainer.current, {
                    center: new kakao.maps.LatLng(latitude, longitude),
                    level: level,
                });

                new kakao.maps.Marker({
                    position: new kakao.maps.LatLng(latitude, longitude),
                    map: map,
                });
            }
        };

        if (!window.kakao) {
            const script = document.createElement("script");
            script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=a2f96ed7000fd406a5669d909855c6ed";
            script.async = true;
            script.onload = initMap;
            document.head.appendChild(script);
        } else {
            initMap();
        }
    }, [latitude, longitude, level]);

    return (
        <div id="map" ref={mapContainer} style={{ width: "100%", height: "400px" }}></div>
    );
};

KakaoMap.propTypes = {
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    level: PropTypes.number,
};

export default KakaoMap;
