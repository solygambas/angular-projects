import axios from "axios";

import * as mapboxgl from "mapbox-gl";
import "./app.css";

import { MAPBOX_API_TOKEN } from "./config";

const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

type MapboxGeocodingResponse = {
  features: { geometry: { coordinates: number[] } }[];
};

async function searchAddressHandler(e: Event) {
  e.preventDefault();
  const enteredAddress = addressInput.value;
  const response = await axios.get<MapboxGeocodingResponse>(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(
      enteredAddress
    )}.json?access_token=${MAPBOX_API_TOKEN}`
  );
  if ((response.statusText = "OK")) {
    const coordinates = response.data.features[0].geometry.coordinates;
    const map = new mapboxgl.Map({
      accessToken: MAPBOX_API_TOKEN,
      container: "map", // container ID
      // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
      style: "mapbox://styles/mapbox/streets-v11", // style URL
      center: new mapboxgl.LngLat(coordinates[0], coordinates[1]), // starting position [lng, lat]
      zoom: 11, // starting zoom
      projection: { name: "globe" }, // display the map as a 3D globe
    });

    map.on("style.load", () => {
      map.setFog({}); // Set the default atmosphere style
    });
  }
}

form.addEventListener("submit", searchAddressHandler);
