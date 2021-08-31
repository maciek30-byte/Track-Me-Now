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
    this.screen.innerHTML=` click start to get Data`
    console.log("screeen  in constructor  ", this.screen);
  }

  init() {
    const startBtn: HTMLButtonElement = document.querySelector(".start-button");
    const stopBtn: HTMLButtonElement = document.querySelector(".stop-button");

    startBtn.addEventListener("click", () => this.startTracking());
    stopBtn.addEventListener("click", () => this.stopTracking());
    console.log("screen in init", this.screen);

  }

  startTracking() {
    this.watcherId = navigator.geolocation.watchPosition(
      this.onSuccess,
      this.onErr
    );

  }
  stopTracking() {
    navigator.geolocation.clearWatch(this.watcherId);
    this.screen.innerHTML = `Click the start button to get Data`
  }

  // this binding
  private onSuccess = (data: GeolocationPosition) => {
    //think about this destruct//
    const { timestamp, coords } = data;
    const { latitude, longitude } = coords;
    console.log("timestamp", this);
    MapHandler.initMap([longitude, latitude]);
    this.screen.innerHTML= `
    Your Position is longitude ${longitude} latitude ${latitude};
    time of measurment ${this.convertTimeStamp(timestamp)}
    `

  }

  onErr(e: GeolocationPositionError) {
    this.screen.innerHTML = JSON.stringify(e.message);
  }

  private convertTimeStamp(timestamp:number){
    return new Date(timestamp).toLocaleDateString('pl-PL')

  }
}

export default TrackHandler;
