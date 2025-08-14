import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

type Street = { id: number; street: string };
type Location = { id: number; street: string; lat: number; lon: number };

const streets: Street[] = [
  { id: 0, street: "18 Rotherhithe Street, London, SE16 5HW, UK" },
  { id: 1, street: "217 Green Lanes, London, N4 1AF, UK" },
];

// Fix Leaflet's default icon paths for Webpack environments
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Component to fit map bounds to show all markers
function FitBounds({ locations }: { locations: Location[] }) {
  const map = useMap();

  useEffect(() => {
    if (locations.length === 0) return;
    const bounds = locations.map(({ lat, lon }) => [lat, lon]) as [
      number,
      number
    ][];
    map.fitBounds(bounds, { padding: [50, 50] });
  }, [locations, map]);

  return null;
}

export default function OpenStreetMap() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function geocode() {
      const results: Location[] = [];

      for (const { id, street } of streets) {
        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          street
        )}`;

        try {
          const res = await fetch(url);
          const data = await res.json();

          if (data.length > 0) {
            results.push({
              id,
              street,
              lat: parseFloat(data[0].lat),
              lon: parseFloat(data[0].lon),
            });
          } else {
            console.warn("No results found for", street);
          }
        } catch (e) {
          console.error("Geocoding error for", street, e);
        }
      }

      setLocations(results);
      setLoading(false);
    }
    geocode();
  }, []);

  return (
    <section className="w-full h-96 rounded-md overflow-hidden shadow-lg">
      {loading ? (
        <div className="flex items-center justify-center h-full">
          Loading map...
        </div>
      ) : (
        <MapContainer
          center={[51.505, -0.09]} // temporary center before bounds fit
          zoom={12}
          scrollWheelZoom={false}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {locations.map(({ id, lat, lon, street }) => (
            <Marker key={id} position={[lat, lon]}>
              <Popup>{street}</Popup>
            </Marker>
          ))}
          <FitBounds locations={locations} />
        </MapContainer>
      )}
    </section>
  );
}
