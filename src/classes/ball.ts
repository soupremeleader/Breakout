/**
 * Paddle class
 * automatically added to the game tag in index.html
 */
export class Ball extends HTMLElement {
    // Fields
    private x           : number    = 0
    private y           : number    = 0

    private moving      : boolean   = false;
    private moveUp      : boolean   = false;
    private moveLeft    : boolean   = false
    private moveRight   : boolean   = false
    
    private xSpeed       : number    = -7
    private ySpeed       : number    = -7

    constructor() {
        super()
        console.log("Paddle created!")

        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this)

        // center of the screen
        this.x      = window.innerWidth / 2 - this.clientWidth / 2
        // 5% from bottom of the screen
        this.y      = window.innerHeight * 0.915
        
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
    }

    private onKeyDown(e: KeyboardEvent): void {
        // if (e.key == "ArrowUp" && !this.moving) {
        //     this.moveUp = true;
        // }
        if(e.key == "ArrowLeft")        this.moveLeft   = true
        else if (e.key == "ArrowRight") this.moveRight  = true
    }

    private onKeyUp(e: KeyboardEvent): void {
        if(e.key == "ArrowLeft")        this.moveLeft   = false
        else if (e.key == "ArrowRight") this.moveRight  = false
    }

    public update() {
        // calculate new x position
        let newX : number = 0
        // let newY: number = 0;
        // if (this.moveUp) newY = this.y + this.ySpeed;
        if(this.moveLeft)   newX = this.x - this.xSpeed
        if(this.moveRight)  newX = this.x + this.xSpeed 
        // // check if new x position is within the screen and move it
        // if (newY > window.innerHeight * 0.92 && newY + this.clientHeight < window.innerHeight) this.x = newY
        if (newX > 0 && newX + this.clientWidth < window.innerWidth) this.x = newX

        this.draw()
    }

    private draw() : void {
        this.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}

// This object is style in style.css under the paddle-component tag
window.customElements.define("ball-component", Ball as any)