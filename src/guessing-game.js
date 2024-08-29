class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return Math.round((this.min + this.max) / 2)
    }

    lower() {
        if (this.min < this.max) {
            this.max = Math.round((this.min + this.max) / 2)
        }
    }

    greater() {
        if (this.min < this.max) {
            this.min = Math.round((this.min + this.max) / 2)
        }
    }
}

module.exports = GuessingGame;
