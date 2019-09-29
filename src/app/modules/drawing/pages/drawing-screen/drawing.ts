class Drawing{
    cursorLocation: number[]
    cursorPreviousLocation: number[]
    heightRatio: number
    widthRatio: number
    udIncrement: number
    lrIncrement: number

    constructor(width: number, height: number){
        this.cursorLocation = [50,50]
        this.cursorPreviousLocation = [50,50]
        this.heightRatio = height / 100
        this.widthRatio = width / 100
        this.udIncrement = 0.5
        this.lrIncrement = 0.7
    }

    orientationChange(width: number, height: number, portrait: boolean){
        this.heightRatio = height / 100
        this.widthRatio = width / 100
        if(portrait){
            this.reorientCursorToPortrait()
        }else{
            this.reorientCursorToLandscape()
        }
        let temp = this.udIncrement
        this.udIncrement = this.lrIncrement
        this.lrIncrement = temp
    }

    reorientCursorToPortrait(){
        let temp = this.cursorLocation[1]
        this.cursorLocation[1] = this.cursorLocation[0]
        this.cursorLocation[0] = 100 - temp
        temp = this.cursorPreviousLocation[1]
        this.cursorPreviousLocation[1] = this.cursorPreviousLocation[0]
        this.cursorPreviousLocation[0] = 100 - temp
    }

    reorientCursorToLandscape(){
        let temp = this.cursorLocation[0]
        this.cursorLocation[0] = this.cursorLocation[1]
        this.cursorLocation[1] = 100 - temp
        temp = this.cursorPreviousLocation[0]
        this.cursorPreviousLocation[0] = this.cursorPreviousLocation[1]
        this.cursorPreviousLocation[1] = 100 - temp
    }

    iterate(directions: boolean[]){
        this.cursorPreviousLocation[0] = this.cursorLocation[0]
        this.cursorPreviousLocation[1] = this.cursorLocation[1]
        if(directions[0] && this.cursorLocation[1] >= 0){
            this.cursorLocation[1] -= this.udIncrement
        }
        if(directions[1] && this.cursorLocation[1] <= 100){
            this.cursorLocation[1] += this.udIncrement
        }
        if(directions[2] && this.cursorLocation[0] >= 0){
            this.cursorLocation[0] -= this.lrIncrement
        }
        if(directions[3] && this.cursorLocation[0] <= 100){
            this.cursorLocation[0] += this.lrIncrement
        }
    }

    draw(context: CanvasRenderingContext2D){
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