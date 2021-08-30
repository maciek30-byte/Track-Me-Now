import mapboxgl from "mapbox-gl";

class MapHandler {
  static initMap(startPosition: [number, number]) {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibWFjaWVrMzAtYnl0ZSIsImEiOiJja3N1MmI3MzAwNHlqMndxYzVnM29manI4In0.7SlqbceGVBl8Vm29i7hcJA";
    const map = new mapboxgl.Map({
      container: "map", // container ID
      style: "mapbox://styles/mapbox/streets-v11", // style URL
      center: startPosition, // starting position [lng, lat]
      zoom: 8, // starting zoom
    });

    // find my position
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
        showUserHeading: true,
      })
    );

    // default marker

    const marker1 = new mapboxgl.Marker().setLngLat(startPosition).addTo(map);
    // zoom control to the map
    map.addControl(new mapboxgl.NavigationControl());
  }
}
export default MapHandler;
