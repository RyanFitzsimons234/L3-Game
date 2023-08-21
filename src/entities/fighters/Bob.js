import {
    Fighter
} from "./Fighter.js";

export class Bob extends Fighter {
    constructor(x, y, velocity) {
        super('Bob', x, y, velocity);

        this.image = document.querySelector('img[alt="bob"]');
    }
}