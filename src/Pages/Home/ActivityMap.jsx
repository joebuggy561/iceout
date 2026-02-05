import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { supabase } from '../../lib/supabase';

// Fix default Leaflet marker icons
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Helper: check for usable numeric coordinates (handles strings and nulls)
const hasCoords = (e) =>
  e && e.lat != null && e.lng != null && !Number.isNaN(Number(e.lat)) && !Number.isNaN(Number(e.lng));

// Component to fit map bounds to all markers
const FitBounds = ({ markers }) => {
  const map = useMap();

  useEffect(() => {
    if (!markers || markers.filter(hasCoords).length === 0) return;
    const bounds = L.latLngBounds(
      markers
        .filter(hasCoords)
        .map(m => [Number(m.lat), Number(m.lng)])
    );
    if (bounds.isValid()) map.fitBounds(bounds, { padding: [50, 50] });
  }, [map, markers]);

  return null;
};

const ActivityMap = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      const { data, error } = await supabase
        .from("ice_events")
        .select('id,type,description,location,lat,lng,source_url,verified,created_at');

      if (error) {
        console.error("Supabase fetch error:", error);
      } else {
        setEvents(data);
      }
    }

    fetchEvents();
  }, []);

  const markers = events.filter(hasCoords);

  return (
    <div className="w-full h-96 md:h-[80vh] shadow-lg border border-border/20 rounded-lg overflow-hidden">
      {events.length > 0 && markers.length === 0 && (
        <div className="p-3 bg-yellow-50 text-yellow-800 text-sm border border-yellow-200">
          No geocoded events found. Database rows lack valid lat/lng or they are stored as non-numeric values.
        </div>
      )}

      <MapContainer
        center={[39.5, -98.35]}
        zoom={4}
        className="w-full h-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <FitBounds markers={markers} />

        {markers.map(event => (
          <Marker
            key={event.id}
            position={[Number(event.lat), Number(event.lng)]}
          >
              <Popup>
                <div className="p-2 max-w-xs">
                  <h3 className="font-semibold text-lg mb-1">{event.location || event.type || 'Event'}</h3>
                  <p className="text-sm mb-1">{event.description}</p>
                  <p className="text-xs text-muted-foreground">{Number(event.lat).toFixed(5)}, {Number(event.lng).toFixed(5)}</p>
                  {event.source_url && (
                    <a
                      href={event.source_url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                    >
                      View Source
                    </a>
                  )}
                </div>
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
};

export default ActivityMap;

