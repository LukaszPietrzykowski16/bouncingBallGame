const INIITAL_VELOCITY = .009
const VELOCITY_INCREASE = 0.00001

export default class Ball {
    constructor (ballElem){
        this.ballElem = ballElem
        this.default()
    }

    get x(){
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--x"))
    }

    set x(value) {
        this.ballElem.style.setProperty('--x', value)
    }

    get y(){
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--y"))
    }

    set y(value) {
        this.ballElem.style.setProperty('--y', value)
    }

    default(){
        this.x = 50
        this.y = 50

       
    }

    update(delta) {
        this.x += this.direction.x * this.velocity * delta
        this.y += this.direction.y * this.velocity * delta
        this.velocity += VELOCITY_INCREASE * delta
    }
   
}

