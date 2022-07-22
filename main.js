import Ball from './ball.js'
import Block from './block.js'
import utils from './utils.js'
const ball = new Ball(document.querySelector('.ball'))

/*
// i wanted to do something like this but i it wasn't working
const blocks = document.querySelectorAll('.block')
const eachBlock = blocks.forEach(el => el = new Ball(document.querySelector('.block')));
*/

const blocks1 = new Block(document.querySelector('.block1'))
const blocks2 = new Block(document.querySelector('.block2'))

// array of our blocks
const arrayOfBlocks = []



let lastTime
const platform = document.querySelector('.platform')

window.addEventListener('DOMContentLoaded', () => {
    blocks1.createBlock()
    // pushing to the 
    arrayOfBlocks.push(utils())
    function update(time){
        if (lastTime != null) {
          
            
            const delta = time - lastTime
        
            ball.update(delta, arrayOfBlocks)
    
            /*
            blocks2.changeColor(blockArray)
            blocks1.changeColor(blockArray)
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

