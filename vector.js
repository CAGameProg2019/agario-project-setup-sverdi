class Vector {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    addVector(vec) {
        this.x+=vec.x;
        this.y+=vec.y;
        return this;
    }

    subVector(vec) {

    }

    scale(s) {
        
    }

    toString(){
        return '<' + this.x+','+this.y+'>'
    }
    print() {
        console.log(this.toString());
    }

}
