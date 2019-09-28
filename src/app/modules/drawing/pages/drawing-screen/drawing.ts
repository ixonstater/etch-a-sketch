class Drawing{
    cursorLocation: number[]
    heightRatio: number
    widthRatio: number
    upIncrement: number
    downIncrement: number
    leftIncrement: number
    rightIncrement: number

    constructor(widthRatio: number, heightRatio: number){
        this.cursorLocation = [50,50]
        this.heightRatio = heightRatio / 100
        this.widthRatio = widthRatio / 100
        this.upIncrement = 0.7
        this.downIncrement = 0.7
        this.leftIncrement = 0.7
        this.rightIncrement = 0.7

    }

    iterate(directions: boolean[]){
        if(directions[0]){
            this.cursorLocation[1] -= this.upIncrement
        }
        if(directions[1]){
            this.cursorLocation[1] += this.downIncrement
        }
        if(directions[2]){
            this.cursorLocation[0] -= this.leftIncrement
        }
        if(directions[3]){
            this.cursorLocation[0] += this.rightIncrement
        }
    }

    draw(context){
        context.lineTo(this.cursorLocation[0] * this.widthRatio, this.cursorLocation[1] * this.heightRatio)
        context.stroke()
    }

    clear(context){
        context.clearRect(0,0, this.heightRatio * 100, this.widthRatio * 100)
    }
}

export default Drawing