class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
       
        gameEngine.addEntity(new sonic(this.game));
        gameEngine.addEntity(new Background(this.game, 0, 0));

        // this.game.background = new Background(this, 0, 0);


    }
    update() { 
        this.x += this.speed * this.game.clockTick;

    };
    loadScene(){
      
    }
}