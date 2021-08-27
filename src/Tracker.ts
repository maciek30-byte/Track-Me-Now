

class Tracker {
  watcherId: number = 1;
  screen: HTMLElement;
  startCoordinates: unknown | null;
  actualCoordinates: unknown | null;

  constructor(screen: HTMLElement) {
    this.screen = screen;
  }

  init(startBtn: HTMLButtonElement, stopBtn: HTMLButtonElement) {
    startBtn.addEventListener("click", () => this.startTracking());
    stopBtn.addEventListener("click", () => this.stopTracking());
  }

  startTracking() {
    this.watcherId = navigator.geolocation.watchPosition(
      this.onSuccess,
      this.onError,
      {
        enableHighAccuracy: true,
      }
    );
    // saved to  position array, and position array save to local storage

  }

  stopTracking() {
    this.startCoordinates = null;
    this.actualCoordinates = null;
    navigator.geolocation.clearWatch(this.watcherId);
    this.screen.innerHTML = "Tracking is stopped, and data is Cleared";
    // read from local storage and pass data to tracking fucntion//
  }

  private onSuccess(data: GeolocationPosition) {
    const { latitude, longitude } = data.coords;

    // if start cordinates are not exist,  the firs coordinates are start coordinates

    if (this.startCoordinates === null) {
      this.startCoordinates = { lat: latitude, long: longitude };
    } else {
      this.actualCoordinates = { lat: latitude, long: longitude };
    }
  }

  private onError(e: GeolocationPositionError) {
    this.screen.innerHTML = `${e.message}`
  }
}
