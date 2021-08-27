import '/sass/styles.scss'

import mapboxgl from 'mapbox-gl';

console.log('this is map library', mapboxgl)


import {makeLogger} from 'ts-loader/dist/logger';
const startTrackingButton:HTMLButtonElement = document.querySelector('.start-button')
const mapContainer:HTMLElement = document.querySelector('.map-container');
const stopTrackingButton:HTMLButtonElement = document.querySelector('.stop-button')


const savedCordinates = JSON.parse(window.localStorage.getItem('coordinates'))

console.log('saved coordinates',savedCordinates)

const cordinates:unknown[] = [];
let watchId;

startTrackingButton.addEventListener('click',()=>{
   watchId =  navigator.geolocation.watchPosition((data:GeolocationPosition)=>{
        console.log(data)
        cordinates.push([data.coords.latitude , data.coords.longitude])
        // set local storage //
        window.localStorage.setItem('coordinates',JSON.stringify(cordinates))
    }, e=> console.log(e.message),
        {
            enableHighAccuracy:true
        })
    return watchId
})

// stop tracking
stopTrackingButton.addEventListener('click', ()=>{
    navigator.geolocation.clearWatch(watchId)
    console.log('watch stopped')
    window.localStorage.clear()
})

// map object//


mapboxgl.accessToken = 'pk.eyJ1IjoibWFjaWVrMzAtYnl0ZSIsImEiOiJja3N1MmI3MzAwNHlqMndxYzVnM29manI4In0.7SlqbceGVBl8Vm29i7hcJA';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

