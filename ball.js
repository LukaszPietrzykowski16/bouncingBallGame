export default class Ball{
    // basic setup of ball 
    constructor (ballEllem){
        this.ballEllem = ballEllem
    }

    // so here we are getting x values of the ball
    get x() {
        return parseFloat(getComputedStyle(this.ballEllem).getPropertyValue("--x"))
    }

    set x (value){
        this.ballEllem
    }
}