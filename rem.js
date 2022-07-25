
function rem(blocksRect, ballRect) {
    const allBlocks = document.querySelectorAll('div')

    if (blocksRect.some(r => isColision(r, ballRect))) {
    
    }

    function isColision(rect1, rect2){
   
        if (
             rect1.left < rect2.left + rect2.width &&
             rect1.left + rect1.width > rect2.left &&
             rect1.top < rect2.top + rect2.height &&
             rect1.height + rect1.top > rect2.top  ) {
                 removeBlocks(rect1.left, rect1.right, rect1.top, rect1.bottom)
             }
            
          
     }
     
     
     function removeBlocks(leftValue, rightValue, topValue, bottomValue){
         for (let i=0; i<blocksRect.length; i++) {
            
            if (blocksRect[i].left === leftValue && blocksRect[i].right === rightValue && blocksRect[i].top === topValue && blocksRect[i].bottom === bottomValue) {
                //blocksRect.splice(i, 1)
                allBlocks[i].remove()
                va(i)
                return i
            }
         }
         
     }
    
}



function va(i){
    console.log(typeof(i))
    return i
}


export {rem, va}
