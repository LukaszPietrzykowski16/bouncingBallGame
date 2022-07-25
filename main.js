import Ball from './ball.js'
import Block from './block.js'
import utils from './utils.js'
import {rem, va} from './rem.js'

import change from './change.js'
const ball = new Ball(document.querySelector('.ball'))
const platform = document.querySelector('.platform')
const blocks1 = new Block(document.querySelector('.block1'))
const blocks2 = new Block(document.querySelector('.block2'))
const blocks3 = new Block(document.querySelector('.block3'))
const blocks4 = new Block(document.querySelector('.block4'))

let aaa

let lastTime

blocks1.createBlock()
window.addEventListener('DOMContentLoaded', () => {
    // pushing to the 
    const newArr = utils()
    const newChange = change()
    
    newArr.splice(1, 1)
    
  
    function update(time){
        if (lastTime != null) {
         
            const delta = time - lastTime
            rem(newChange, ball.rect())
            ball.update(delta, newArr)
            
            
        }
        lastTime = time
        // calling our requasted animation frame
        window.requestAnimationFrame(update)
    
    }
    window.requestAnimationFrame(update)

})

console.log(va())

// update our animation frame to lanuch a game


/*
const platformStyle = getComputedStyle(platform).getPropertyValue("--platfposit")
console.log(platformStyle)
*/
document.addEventListener('mousemove', e => {
    // this needs to be updated based on the css values but for this time we can don't touch it 
    platform.style.left = e.x + 'px'
})

