class Virus extends Food {
    constructor(x, y, color) {
        super(x, y, 100, color);
    }
}

Object.assign(Virus, Food);
