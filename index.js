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

    const [bob, background] = document.querySelectorAll('img');

    const position = {
        x: GameViewport.WIDTH / 2 - bob.width / 2,
        y: 110,
    };

    let velocity = 1;



    function frame() {
        position.x += velocity;

        if (position.x > GameViewport.WIDTH - bob.width || position.x < 0) {
            velocity = -velocity;
        }

        context.drawImage(background, 0, 0);

        // context.strokeStyle = 'yellow';
        // context.moveTo(0, 0);
        // context.lineTo(GameViewport.WIDTH, GameViewport.HEIGHT);
        // context.moveTo(GameViewport.WIDTH, 0);
        // context.lineTo(0, GameViewport.HEIGHT);
        // context.stroke();
    
        context.drawImage(bob, position.x, position.y);

        window.requestAnimationFrame(frame);
    }

    window.requestAnimationFrame(frame);


}