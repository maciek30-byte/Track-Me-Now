import '/sass/styles.scss'
import {makeLogger} from 'ts-loader/dist/logger';
const startTrackingButton:HTMLButtonElement = document.querySelector('.start-button')
const map:HTMLElement = document.querySelector('.map-container');
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


