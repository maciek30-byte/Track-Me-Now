// import mapboxgl from "mapbox-gl";
// type Coords = { lon: number; lan: number };
//
// class MapHandler {
//   configuration: any;
//   startingPosition: [number, number];
//
//   constructor(startingPosition?: [number, number]) {
//     mapboxgl.accessToken =
//       "pk.eyJ1IjoibWFjaWVrMzAtYnl0ZSIsImEiOiJja3N1MmI3MzAwNHlqMndxYzVnM29manI4In0.7SlqbceGVBl8Vm29i7hcJA";
//     this.configuration = new mapboxgl.Map({
//       container: "map", // container ID
//       style: "mapbox://styles/mapbox/streets-v11", // style URL
//       center: [-74.5, 40], // starting position [lng, lat]
//       zoom: 9, // starting zoom
//     });
//     this.configuration.addControl(new mapboxgl.NavigationControl());
//     this.configuration.addControl(
//       new mapboxgl.GeolocateControl({
//         positionOptions: {
//           enableHighAccuracy: true,
//         },
//
//         trackUserLocation: true,
//
//         showUserHeading: true,
//       })
//     );
//   }
//
//   gpsTrace(coordinates: []) {
//     this.configuration.on("load", () => {
//       this.configuration.addSource("route", {
//         type: "geojson",
//         data: {
//           type: "Feature",
//           properties: {},
//           geometry: {
//             type: "LineString",
//             coordinates: coordinates,
//           },
//         },
//       });
//     });
//   }
//
//   addLayer() {
//     this.configuration.addLayer({
//       id: "route",
//       type: "line",
//       source: "route",
//       layout: {
//         "line-join": "round",
//         "line-cap": "round",
//         paint: {
//           "line-color": "#888",
//           "line-width": 8,
//         },
//       },
//     });
//   }
//
//   addDefaultMarker(markerPosition: [number, number]) {
//     const marker1 = new mapboxgl.Marker()
//       .setLngLat([12.554729, 55.70651])
//       .addTo(this.configuration);
//   }
//   static mapObj(startingPosition: Coords) {
//     mapboxgl.accessToken =
//       "pk.eyJ1IjoibWFjaWVrMzAtYnl0ZSIsImEiOiJja3N1MmI3MzAwNHlqMndxYzVnM29manI4In0.7SlqbceGVBl8Vm29i7hcJA";
//      const map = new mapboxgl.Map({
//       container: "map", // container ID
//       style: "mapbox://styles/mapbox/streets-v11", // style URL
//       center: [-74.5, 40], // starting position [lng, lat]
//       zoom: 9, // starting zoom
//     });
//     map.addControl(new mapboxgl.NavigationControl());
//     map.addControl(
//         new mapboxgl.GeolocateControl({
//           positionOptions: {
//             enableHighAccuracy: true,
//           },
//
//           trackUserLocation: true,
//
//           showUserHeading: true,
//         })
//     );
//   }
//
//   }
// }
//
// export default MapHandler;

class MapHandler {
  static configuration(startPosition: [lon: number, lan: number]) {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibWFjaWVrMzAtYnl0ZSIsImEiOiJja3N1MmI3MzAwNHlqMndxYzVnM29manI4In0.7SlqbceGVBl8Vm29i7hcJA";
    const map = new mapboxgl.Map({
      container: "map", // container ID
      style: "mapbox://styles/mapbox/streets-v11", // style URL
      center: startPosition, // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }

  init(mapObj, trackingCoordinates) {
    // type that function
    mapObj.addSource("route", {
      type: "geojson",
      data: {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: trackingCoordinates, //  when  user clicked on stop btn cordinates is saved to local storage
        },
      },
    });
  }

  createLayer(mapObj) {
    mapObj.addLayer({
      id: "route",
      type: "line",
      source: "route",
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "#888",
        "line-width": 8,
      },
    });
  }
}
