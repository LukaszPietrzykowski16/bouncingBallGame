const ball = document.querySelector('.ball')
const main = document.querySelector('main')

export default class Block {
    constructor (blockElem) {
        this.blockElem = blockElem
    }

    rectBlocks() {
        return this.blockElem.getBoundingClientRect()
    }


    rectBall() {
        return ball.getBoundingClientRect()
    }

    // creating blocks
    createBlock() {
        for(let i=1; i<78; i++) {
            const blockDiv = document.createElement("div");
            blockDiv.classList.add(`block${i}`)
            // i can change style later
            blockDiv.style.left = `${i * 7.5}vw`
            if (i > 11) {
                blockDiv.style.top = `6vh`
                blockDiv.style.left = `${(i - 11) * 7.5}vw`
             
            }
            if (i > 22) {
                blockDiv.style.top = `12vh`
                blockDiv.style.left = `${(i - 22) * 7.5}vw`
             
            }
            if (i > 33) {
                blockDiv.style.top = `18vh`
                blockDiv.style.left = `${(i - 33) * 7.5}vw`
             
            }
            if (i > 44) {
                blockDiv.style.top = `24vh`
                blockDiv.style.left = `${(i - 44) * 7.5}vw`
            }
            if (i > 55) {
                blockDiv.style.top = `30vh`
                blockDiv.style.left = `${(i - 55) * 7.5}vw`
             
            }
            if (i > 66) {
                blockDiv.style.top = `36vh`
                blockDiv.style.left = `${(i - 66) * 7.5}vw`
             
            }
            if (i > 77) {
                blockDiv.style.top = `42vh`
                blockDiv.style.left = `${(i - 77) * 7.5}vw`
             
            }
   
            document.body.append(blockDiv)
        }
        
    }

    // removing 
    changeColor(blocks) {
        const rect = this.rectBall()
        if (blocks.some(r => isColision(r, rect))) {
            console.log(this.blockElem)
            this.blockElem.remove()
        }
    }
}


function isColision(rect1, rect2){
    return (
        rect1.left < rect2.left + rect2.width &&
        rect1.left + rect1.width > rect2.left &&
        rect1.top < rect2.top + rect2.height &&
        rect1.height + rect1.top > rect2.top
      
     )
}
