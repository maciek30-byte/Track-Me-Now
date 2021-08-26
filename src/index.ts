import '/sass/styles.scss'
import {makeLogger} from 'ts-loader/dist/logger';
const startTrackingButton:HTMLButtonElement = document.querySelector('.start-button')


const cordinates:unknown[] = []

startTrackingButton.addEventListener('click',()=>{
    navigator.geolocation.watchPosition((data:GeolocationPosition)=>{
        console.log(data)
        cordinates.push([data.coords.latitude , data.coords.longitude])
        // set local storage //
        window.localStorage.setItem('coordinates',JSON.stringify(cordinates))
    }, e=> console.log(e.message),
        {
            enableHighAccuracy:true
        })
})


