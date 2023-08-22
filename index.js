import { Ken } from './entities/fighters/Ken.js';
import { Ryu } from './entities/fighters/Ryu.js';
import { Stage } from './entities/Stage.js';
import { FpsCounter } from './entities/FpsCounter.js';
import { STAGE_FLOOR } from './constants/stage.js';
import { FighterDirection } from './constants/fighter.js';


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
    new Ryu(104, STAGE_FLOOR, FighterDirection.RIGHT),
    new Ken(280, STAGE_FLOOR, FighterDirection.LEFT),
    new FpsCounter(),
    ];

    let frameTime = {
        previous: 0,
        secondsPassed: 0,
    }


    function frame(time) {
        window.requestAnimationFrame(frame);

        frameTime = {
        secondsPassed: (time - frameTime.previous) / 1000,
        previous: time,
        }
        for(const entity of entities) {
            entity.update(frameTime, context);
        }

        for(const entity of entities) {
            entity.draw(context);
        }
    }

    window.requestAnimationFrame(frame);
});