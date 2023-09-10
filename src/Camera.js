import { SCROLL_BOUNDARY } from "./constants/stage";

export class Camera {
    constructor(x, y, fighters) {
        this.position = { x, y };
        this.fighters = fighters;
    }

    update(time, context) {
        this.position.y = -6 + Math.floor(Math.min(this.fighters[1].position.y, this.fighters[0].position.y) / 10);

        const lowX = Math.min(this.fighters[1].position.x, this.fighters[0].position.x);
        const highX = Math.max(this.fighters[1].position.x, this.fighters[0].position.x);

        if (highX - lowX > context.canvas.width - SCROLL_BOUNDARY * 2) {
            const midPoint = (highX - lowX) / 2;
        }
    }
}