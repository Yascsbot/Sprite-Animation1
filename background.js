class Background {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });

        this.farmSprite = ASSET_MANAGER.getAsset("./Forest_2D.png");
        this.dx = x;    //position on the 'canvas' where we want to draw the image
        this.dy = y;
        this.dw = 40;
        this.dh = 40;
        this.sx=253;    // top left position of the 'image' we want to draw
        this.sy=105;
        this.sw = 48;
        this.sh=48;

          // Define the number of tiles to cover the canvas
          this.numTilesX = Math.ceil(1024 / this.sw);
          this.numTilesY = Math.ceil(768 / this.sh);

           // Define sand patch positions (you can define this based on your requirement)
        this.sandPatches = [
            { x: 100, y: 100, width: 3, height: 2 }, // Example sand patch 1
            { x: 300, y: 400, width: 2, height: 2 }, // Example sand patch 2
            // Add more sand patches as needed
        ];

    }
    updateTileGrid() {
        // this.tileGrid = tileGrid;
        // this.tileSize = tileSize;
        // this.scale = scale;
        // this.show = show;
    };
    update() { 
        // this.x += this.speed * this.game.clockTick;
    };

    draw(ctx) {
        // ctx.drawImage(this.farmSprite, this.sx, this.sy, this.sw, this.sh, this.dx+50, this.dy+50, this.dw, this.dh);
        
        for (let y = 0; y < this.numTilesY; y++) {
            for (let x = 0; x < this.numTilesX; x++) {
                // Assuming grass occupies the first part of the sprite sheet
                ctx.drawImage(this.farmSprite, this.sx, this.sy, this.sw, this.sh, 
                              x * this.sw, y * this.sh, this.sw, this.sh);
            }
        }

        // Draw sand patches
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)"; // Use a semi-transparent color for sand patches
        this.sandPatches.forEach(patch => {
            ctx.fillRect(patch.x * this.tileWidth, patch.y * this.tileHeight,
                         patch.width * this.tileWidth, patch.height * this.tileHeight);
        });
    };
}