import { FighterState } from "../../constants/fighter.js";

export class Fighter {
    constructor(name, x, y, direction) {
        this.name = name;
        this.position = { x, y };
        this.velocity = {x: 0, y: 0};
        this.initialVelocity = {};
        this.direction = direction;
        this.gravity = 0;

        this.frames = new Map();
        this.animationFrame = 0;
        this.animationTimer = 0;
        this.animations = {};

        this.image = new Image();

        this.states = {
            [FighterState.IDLE]:{
                init: this.handleWalkIdleInit.bind(this),
                update: this.handleWalkIdleState.bind(this),
            },
            [FighterState.WALK_FORWARD]:{
                init: this.handleWalkForwardInit.bind(this),
                update: this.handleWalkForwardState.bind(this),
            },
            [FighterState.WALK_BACKWARD]:{
                init: this.handleWalkBackwardsInit.bind(this),
                update: this.handleWalkBackwardsState.bind(this),
            },
            [FighterState.JUMP_UP]:{
                init: this.handleJumpUpInit.bind(this),
                update: this.handleJumpUpState.bind(this),
            },
        }

        this.changeState(FighterState.IDLE);
    }

    changeState = (newState) => {
        this.currentState = newState;
        this.animationFrame = 0;

        this.states[this.currentState].init(); 
}

    handleWalkIdleInit () {
        this.velocity.x = 0;
    }

    handleWalkIdleState () {

    }

    handleWalkForwardInit () {
        this.velocity.x = 150 * this.direction;
    }

    handleWalkForwardState () {

    }

    handleWalkBackwardsInit () {
        this.velocity.x = -150 * this.direction;
    }

    handleWalkBackwardsState () {

    }

    handleJumpUpInit () {
        this.velocity.y = this.initialVelocity.jump;
    }

    handleJumpUpState (time) {
        this.velocity.y += this.gravity *time.secondsPassed;
    }

    updateStageConstraints(context){
        const WIDTH = 32;

        if (this.position.x > context.canvas.width - WIDTH) {
            this.position.x = context.canvas.width - WIDTH;
        }

        if (this.position.x < WIDTH){
            this.position.x = WIDTH;
        }
    }

    updateAnimation(time) {
        if (time.previous > this.animationTimer + 60) {
            this.animationTimer = time.previous;

        this.animationFrame ++;
        if (this.animationFrame >= this.animations[this.currentState].length) this.animationFrame = 0;
        }
    }

    update(time, context) {
        this.position.x += this.velocity.x * time.secondsPassed;
        this.position.y += this.velocity.y * time.secondsPassed;

        this.states[this.currentState].update(time, context);
        this.updateAnimation(time);
        this.updateStageConstraints(context);
    }

    drawDebug(context){
        context.lineWidth = 1;

        context.beginPath();
        context.strokeStyle = 'white';
        context.moveTo(Math.floor(this.position.x) - 4.5, Math.floor(this.position.y));
        context.lineTo(Math.floor(this.position.x) + 4.5, Math.floor(this.position.y));
        context.moveTo(Math.floor(this.position.x), Math.floor(this.position.y) - 5);
        context.lineTo(Math.floor(this.position.x), Math.floor(this.position.y) + 4);
        context.stroke();
    }

    draw(context) {
        const [
        [x, y, width, height],
        [originX, originY],
        ] = this.frames.get(this.animations[this.currentState][this.animationFrame]);

        context.scale(this.direction, 1);
        context.drawImage(
            this.image,
             x, y, 
             width, height, 
             Math.floor(this.position.x * this.direction) - originX, Math.floor(this.position.y) - originY, 
             width, height);
        context.setTransform( 1, 0, 0, 1, 0, 0);

        this.drawDebug(context);
    }
};