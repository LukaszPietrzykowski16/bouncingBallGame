import Ball from './ball.js'
import Block from './block.js'
import utils from './utils.js'
import change from './change.js'
const ball = new Ball(document.querySelector('.ball'))
const platform = document.querySelector('.platform')
const blocks1 = new Block(document.querySelector('.block1'))



let lastTime

blocks1.createBlock()
window.addEventListener('DOMContentLoaded', () => {
    // pushing to the 
    const newArr = utils()
    function update(time){
        if (lastTime != null) {
          
            
            const delta = time - lastTime
        
            ball.update(delta, newArr)
    
            /*
            blocks1.changeColor(newArr)
            */
        }
        lastTime = time
        // calling our requasted animation frame
        window.requestAnimationFrame(update)
    
    }
    window.requestAnimationFrame(update)
})



// update our animation frame to lanuch a game


/*
const platformStyle = getComputedStyle(platform).getPropertyValue("--platfposit")
console.log(platformStyle)
*/
document.addEventListener('mousemove', e => {
    // this needs to be updated based on the css values but for this time we can don't touch it 
    platform.style.left = e.x + 'px'
})

