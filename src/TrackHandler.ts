import { Coordinates } from "./Types";
import MapHandler from "./MapHandler";
import mapboxgl from "mapbox-gl";

class TrackHandler {
  watcherId: number;
  actualCoordinates: Coordinates[] | null;
  timestamp: number;
  mapLib: any;
  screen: HTMLElement;

  constructor() {
    this.screen = document.querySelector(".position-container");
  }

  init() {
    const startBtn: HTMLButtonElement = document.querySelector(".start-button");
    const stopBtn: HTMLButtonElement = document.querySelector(".stop-button");

    startBtn.addEventListener("click", () => this.startTracking());
    stopBtn.addEventListener("click", () => this.stopTracking());
  }

  startTracking() {
    this.watcherId = navigator.geolocation.watchPosition(
      this.onSucces,
      this.onErr
    );
  }
  stopTracking() {}

  private convertToDate(timestamp: number): Date {
    return new Date(timestamp * 1000);
  }
  private onSucces(data) {
    //think about this destruct//
    const { timestamp, coords } = data;
    const { latitude, longitude } = coords;
    MapHandler.initMap([longitude, latitude]);
  }

  onErr() {}
}

export default TrackHandler;
