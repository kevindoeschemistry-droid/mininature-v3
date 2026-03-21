"use client";

import { useEffect, useRef } from "react";
import type { Reserve } from "@/types";

interface Props {
  reserves: Reserve[];
  selectedId?: string;
  onSelectReserve?: (id: string) => void;
  height?: string;
}

export default function MiniMapEmbed({ reserves, selectedId, onSelectReserve, height = "100%" }: Props) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<unknown>(null);
  const markersRef = useRef<unknown[]>([]);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    let L: typeof import("leaflet");
    let map: import("leaflet").Map;

    const init = async () => {
      L = (await import("leaflet")).default;

      // Fix default icon paths
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
      });

      // Create custom branded pin
      const createPin = (isSelected: boolean, adoptionStatus: string) => {
        const color = isSelected ? "#E8A838" : adoptionStatus === "available" ? "#52B788" : "#1B4332";
        return L.divIcon({
          className: "",
          html: `
            <div style="
              width: 32px; height: 32px;
              background: ${color};
              border: 3px solid white;
              border-radius: 50% 50% 50% 0;
              transform: rotate(-45deg);
              box-shadow: 0 2px 8px rgba(0,0,0,0.3);
              cursor: pointer;
            "></div>
          `,
          iconSize: [32, 32],
          iconAnchor: [16, 32],
          popupAnchor: [0, -36],
        });
      };

      const center = reserves.reduce(
        (acc, r) => [acc[0] + r.lat / reserves.length, acc[1] + r.lng / reserves.length],
        [0, 0]
      ) as [number, number];

      if (!mapRef.current) return;
      map = L.map(mapRef.current, {
        center,
        zoom: 13,
        zoomControl: true,
        scrollWheelZoom: false,
      });

      mapInstanceRef.current = map;

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        {
          attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions">CARTO</a>',
          maxZoom: 20,
        }
      ).addTo(map);

      reserves.forEach((reserve) => {
        const isSelected = reserve.id === selectedId;
        const marker = L.marker([reserve.lat, reserve.lng], {
          icon: createPin(isSelected, reserve.adoptionStatus),
        });

        marker.bindPopup(`
          <div style="font-family: Inter, sans-serif; min-width: 220px; padding: 4px;">
            <div style="
              height: 100px;
              background-image: url(${reserve.heroPhoto});
              background-size: cover;
              background-position: center;
              border-radius: 12px;
              margin-bottom: 10px;
            "></div>
            <div style="font-weight: 600; color: #0D2B1F; margin-bottom: 4px; font-size: 14px;">
              ${reserve.name}
            </div>
            <div style="color: #2D6A4F; font-size: 12px; margin-bottom: 8px;">
              📍 ${reserve.locationName}, ${reserve.city}
            </div>
            <div style="font-size: 11px; color: #2D6A4F; margin-bottom: 10px;">
              🌿 ${reserve.nativePlantCount} species · ${reserve.sizeSqft} sq ft
              ${reserve.adoptionStatus === "available" ? ' · <span style="color:#52B788; font-weight:600">Available for Adoption</span>' : ""}
            </div>
            <div style="display: flex; gap: 8px;">
              <a href="/explore/reserves/${reserve.slug}" style="
                background: #1B4332; color: white; padding: 6px 14px;
                border-radius: 999px; text-decoration: none; font-size: 12px;
                font-weight: 500;
              ">Learn More</a>
              <a href="https://www.google.com/maps/dir/?api=1&destination=${reserve.lat},${reserve.lng}"
                target="_blank" style="
                border: 1.5px solid #1B4332; color: #1B4332; padding: 6px 14px;
                border-radius: 999px; text-decoration: none; font-size: 12px;
                font-weight: 500;
              ">Directions</a>
            </div>
          </div>
        `, {
          maxWidth: 260,
          className: "mnr-popup",
        });

        if (onSelectReserve) {
          marker.on("click", () => onSelectReserve(reserve.id));
        }

        marker.addTo(map);
        (markersRef.current as unknown[]).push(marker);
      });
    };

    init();

    return () => {
      if (mapInstanceRef.current) {
        (mapInstanceRef.current as import("leaflet").Map).remove();
        mapInstanceRef.current = null;
      }
    };
  }, []); // eslint-disable-line

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css"
      />
      <style>{`
        .mnr-popup .leaflet-popup-content-wrapper {
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(27,67,50,0.18);
          padding: 0;
        }
        .mnr-popup .leaflet-popup-content {
          margin: 12px;
        }
        .mnr-popup .leaflet-popup-tip-container {
          display: none;
        }
      `}</style>
      <div ref={mapRef} style={{ height, width: "100%" }} />
    </>
  );
}
