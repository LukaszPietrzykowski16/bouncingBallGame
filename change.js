import Block from './block.js'
const arr = []


// 
function change() {
    // getting all divs
    const div_list = document.querySelectorAll('div'); 
    // loop for all divs that are created in blocks.js
    for (let i=0; i<div_list.length; i++){
        const nameOfClass = div_list[i].className
        // getting all classes
        const test = document.querySelector(`.${nameOfClass}`)
        
        
        const block = new Block(test)
        // pushing array with rect metod to the arr array
        arr.push(block.rectBlocks())
    }
    return arr
    
}



export default change