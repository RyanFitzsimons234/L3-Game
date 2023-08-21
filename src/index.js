import { Bob } from './entities/fighters/Bob.js';
import { Ninja } from './entities/fighters/Ninja.js';
import { Stage } from './entities/Stage.js';
import { FpsCounter } from './entities/FpsCounter.js';


const GameViewport = {
    WIDTH: 384,
    HEIGHT: 220,
}

window.addEventListener  ('load', function() {
    const canvasEL = document.querySelector('canvas');
    const context = canvasEL.getContext('2d');

    canvasEL.width = GameViewport.WIDTH;
    canvasEL.height = GameViewport.HEIGHT;

    const entities = [
    new Stage(),
    new Bob(80, 110, 150),
    new Ninja(80, 110, -150),
    new FpsCounter(),
    ];

    let previousTime = 0;
    let secondsPassed = 0;

    function frame(time) {
        window.requestAnimationFrame(frame);

        secondsPassed = (time - previousTime) / 1000;
        previousTime = time;

        for(const entity of entities) {
            entity.update(secondsPassed, context);
        }

        for(const entity of entities) {
            entity.draw(context);
        }
    }

    window.requestAnimationFrame(frame);
});