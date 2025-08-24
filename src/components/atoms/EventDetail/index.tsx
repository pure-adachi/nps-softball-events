import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { events } from "../../../data";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

interface IProps {
  event: (typeof events)[0];
}

const EventDetail = ({
  event: {
    year,
    month,
    day,
    dayOfWeek,
    range,
    status,
    description,
    location: { name: locationName, lat, lng }
  }
}: IProps) => {
  if (status === "計画中") {
    return <p className="text-gray-700">{description}</p>;
  }

  if (!locationName || !lat || !lng) {
    return <></>;
  }

  const position = { lat, lng };

  return (
    <div className="max-w-3xl mx-auto">
      {/* イベント情報カード */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">イベント詳細</h2>
        <p className="text-gray-700 mb-2">
          <strong>開催日:</strong>{" "}
          {`${year}年${month}月${day}日 (${dayOfWeek})`}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>開催時間:</strong> {range}
        </p>
        <p className="text-gray-700 mb-4">
          <strong>場所:</strong> {locationName}
        </p>

        {/* マップコンテナ */}
        <div className="w-full h-[30vh]">
          <MapContainer center={position} zoom={17} className="w-full h-full">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>{locationName}</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
