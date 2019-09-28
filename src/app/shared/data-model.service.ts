import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})
class DataModel{
    message: string
    constructor(){
        this.message = 'hello world'
    }

    setMessage(message: string){
        this.message = message
    }

    getMessage(){
        return this.message
    }
}

export default DataModel