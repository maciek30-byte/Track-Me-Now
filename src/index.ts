import '/sass/styles.scss'
import TrackHandler from './TrackHandler';
const bodyelement = document.querySelector('body')
const test = new TrackHandler()
test.init()

if(window.matchMedia('(min-width:1024px)').matches){
    const message = document.createElement('div');
    message.classList.add('not-supported')
    bodyelement.appendChild(message)
    console.log(' screen is to big')
}