class Virus extends Food {
    constructor(x, y, color) {
        super(x, y, 8, "#44576f");
    }
}

Object.assign(Virus, Food);
