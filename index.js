const GameViewport = {
    WIDTH: 384,
    HEIGHT: 220,
    SCALE: 4,
}

window.onload = function () {
    const canvasEL = document.querySelector('canvas');
    const context = canvasEL.getContext('2d');

    canvasEL.width = GameViewport.WIDTH;
    canvasEL.height = GameViewport.HEIGHT;

    const bob = document.querySelector('img');

    const position = {
        x: 0,
        y: 0,

    };

    let velocity = 1;



    function frame() {
        position.x += velocity;

        if (position.x > GameViewport.WIDTH || position.x < 0) {
            velocity = -velocity;
        }

        context.clearRect(0, 0, GameViewport.WIDTH, GameViewport.HEIGHT);

        context.strokeStyle = 'yellow';
        context.moveTo(0, 0);
        context.lineTo(GameViewport.WIDTH, GameViewport.HEIGHT);
        context.moveTo(GameViewport.WIDTH, 0);
        context.lineTo(0, GameViewport.HEIGHT);
        context.stroke();
    
        context.drawImage(bob, position.x, position.y);

        window.requestAnimationFrame(frame);
    }

    window.requestAnimationFrame(frame);


    console.log(context);
}