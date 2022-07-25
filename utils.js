import Ball from './ball.js'
const arr = []


// 
function gettingArray() {
    // getting all divs
    const div_list = document.querySelectorAll('div'); 
    // loop for all divs that are created in blocks.js
    for (let i=0; i<div_list.length; i++){
        const nameOfClass = div_list[i].className
        // getting all classes
        const test = document.querySelector(`.${nameOfClass}`)
        
        
        const block = new Ball(test)
        // pushing array with rect metod to the arr array
        arr.push(block.rect())
    }
    return arr
    
}


function utils() {
    return gettingArray()
}


export default utils