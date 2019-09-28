class Drawing{
    cursorLocation: number[]
    cursorPreviousLocation: number[]
    heightRatio: number
    widthRatio: number
    upIncrement: number
    downIncrement: number
    leftIncrement: number
    rightIncrement: number

    constructor(widthRatio: number, heightRatio: number){
        this.cursorLocation = [50,50]
        this.cursorPreviousLocation = [50,50]
        this.heightRatio = heightRatio / 100
        this.widthRatio = widthRatio / 100
        this.upIncrement = 0.5
        this.downIncrement = 0.5
        this.leftIncrement = 0.7
        this.rightIncrement = 0.7

    }

    iterate(directions: boolean[]){
        this.cursorPreviousLocation[0] = this.cursorLocation[0]
        this.cursorPreviousLocation[1] = this.cursorLocation[1]
        if(directions[0] && this.cursorLocation[1] >= 0){
            this.cursorLocation[1] -= this.upIncrement
        }
        if(directions[1] && this.cursorLocation[1] <= 100){
            this.cursorLocation[1] += this.downIncrement
        }
        if(directions[2] && this.cursorLocation[0] >= 0){
            this.cursorLocation[0] -= this.leftIncrement
        }
        if(directions[3] && this.cursorLocation[0] <= 100){
            this.cursorLocation[0] += this.rightIncrement
        }
    }

    draw(context){
        context.beginPath()
        context.moveTo(this.cursorPreviousLocation[0] * this.widthRatio, this.cursorPreviousLocation[1] * this.heightRatio)
        context.lineTo(this.cursorLocation[0] * this.widthRatio, this.cursorLocation[1] * this.heightRatio)
        context.stroke()
    }

    clear(context){
        context.clearRect(0,0, this.heightRatio * 100, this.widthRatio * 100)
    }
}

export default Drawing