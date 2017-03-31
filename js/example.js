//Create the renderer
// var renderer = PIXI.autoDetectRenderer(256, 256);
//
//
// //Add the canvas to the HTML document
// document.body.appendChild(renderer.view);
//
// // renderer.backgroundColor = 0x061639;
//
// //Create a container object called the `stage`
// var stage = new PIXI.Container();
//
// //Tell the `renderer` to `render` the `stage`
// renderer.render(stage);
//
// renderer.autoResize = true;
// renderer.resize(512, 512);
//
// renderer.view.style.border = "1px dashed red";





// Adding an image to the stage
//
// var stage = new PIXI.Container(),
//     renderer = PIXI.autoDetectRenderer(256, 256);
// document.body.appendChild(renderer.view);
//
// //Use Pixi's built-in `loader` object to load an image
// PIXI.loader
//   .add("images/cat.png")
//   .load(setup);
//
// //This `setup` function will run when the image has loaded
// function setup() {
//
//   //Create the `cat` sprite from the texture
//   var cat = new PIXI.Sprite(
//     PIXI.loader.resources["images/cat.png"].texture
//   );
//
//   //Add the cat to the stage
//   stage.addChild(cat);
//
//   //Render the stage
//   renderer.render(stage);
// }




// Better way to write code above for adding images to the canvas

// // Aliases
// var Container = PIXI.Container,
//     autoDetectRenderer = PIXI.autoDetectRenderer,
//     loader = PIXI.loader,
//     resources = PIXI.loader.resources,
//     Sprite = PIXI.Sprite;
//
// //Create a Pixi stage and renderer and add the
// //renderer.view to the DOM
// var stage = new Container(),
//     renderer = autoDetectRenderer(256, 256);
// document.body.appendChild(renderer.view);
//
// //load an image and run the `setup` function when it's done
// loader
//   .add("images/cat.png")
//   .load(setup);
//
// function setup() {
//
//   //Create the `cat` sprite, add it to the stage, and render it
//   var cat = new Sprite(resources["images/cat.png"].texture);
//
//   cat.anchor.set(0.5, 0.5)
//   cat.pivot.set(32, 32) //anchor and pivot are very similar, you can use either of your choosing, but test each one.
//   cat.position.set(128, 128) //Half of the canvas size if you want the image to be in the center
//   cat.scale.set(1, 1);
//   cat.rotation = 0.5; //anchor point is at the ear of the cat image.
//
//   stage.addChild(cat);
//   renderer.render(stage);
// }
//
//
//
//
//
//
// Adding the treasure hunter stage
//
// var Container = PIXI.Container,
//     autoDetectRenderer = PIXI.autoDetectRenderer,
//     loader = PIXI.loader,
//     resources = PIXI.loader.resources,
//     TextureCache = PIXI.utils.TextureCache,
//     Texture = PIXI.Texture,
//     Sprite = PIXI.Sprite,
//     Text = PIXI.Text,
//     Graphics = PIXI.Graphics;
//
//
// //Create a Pixi stage and renderer and add the
// //renderer.view to the DOM
// var stage = new Container(),
//     renderer = autoDetectRenderer(512, 512);
// document.body.appendChild(renderer.view);
//
// //load an image and run the `setup` function when it's done
//
// loader
//   .add("images/treasureHunter.json")
//   .load(setup);
//
// var dungeon, explorer, treasure, door, id;
//
// function setup() {
//
//   //There are 3 ways to make sprites from textures atlas frames
//
//   //1. Access the `TextureCache` directly
//   var dungeonTexture = TextureCache["dungeon.png"];
//   dungeon = new Sprite(dungeonTexture);
//   stage.addChild(dungeon);
//
//   //2. Access the texture using the loader's `resources`:
//   explorer = new Sprite(
//     resources["images/treasureHunter.json"].textures["explorer.png"]
//   );
//   explorer.x = 68;
//
//   //Center the explorer vertically
//   explorer.y = stage.height / 2 - explorer.height / 2;
//   stage.addChild(explorer);
//
//   // 3. Create an optional alias called `id` for all the texture atlas
//   // frame id textures.
//   id = PIXI.loader.resources["images/treasureHunter.json"].textures;
//
//   //Make the treasure box using the alias
//   treasure = new Sprite(id["treasure.png"]);
//   stage.addChild(treasure);
//
//   //Position the treasure next to the right edge of the canvas
//   treasure.x = stage.width - treasure.width - 48;
//   treasure.y = stage.height / 2 - treasure.height / 2;
//   stage.addChild(treasure);
//
//
//   //Make the exit door
//   door = new Sprite(id["door.png"]);
//   door.position.set(32, 0);
//   stage.addChild(door);
//
//   //Make the blobs
//   var numberOfBlobs = 6,
//       spacing = 48,
//       xOffset = 150;
//
//   //Make as many blobs as there are `numberOfBlobs`
//   for (var i = 0; i < numberOfBlobs; i++) {
//
//     //Make a blob
//     var blob = new Sprite(id["blob.png"]);
//
//     //Space each blob horizontally according to the `spacing` value.
//     //`xOffset` determines the point from the left of the screen
//     //at which the first blob should be added.
//     var x = spacing * i + xOffset;
//
//     //Give the blob a random y position
//     //(`randomInt` is a custom function - see below)
//     var y = randomInt(0, stage.height - blob.height);
//
//     //Set the blob's position
//     blob.x = x;
//     blob.y = y;
//
//     //Add the blob sprite to the stage
//     stage.addChild(blob);
//   }
//
//   //Render the stage
//   renderer.render(stage);
// }
//
// //The `randomInt` helper function
// function randomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }





//Adding movement

//Aliases
// var Container = PIXI.Container,
//     autoDetectRenderer = PIXI.autoDetectRenderer,
//     loader = PIXI.loader,
//     resources = PIXI.loader.resources,
//     Sprite = PIXI.Sprite;

//Create a Pixi stage and renderer and add the
//renderer.view to the DOM
// var stage = new Container(),
//     renderer = autoDetectRenderer(256, 256);
// document.body.appendChild(renderer.view);

//load an image and run the `setup` function when it's done
// loader
//   .add("images/cat.png")
//   .load(setup);
//
// function setup() {
//
//   //Create the `cat` sprite
//   cat = new Sprite("images/cat.png");
//   cat.y = 96;
//   cat.vx = 0;
//   cat.vy = 0;
  // stage.addChild(cat);
// }
//
//   //Capture the keyboard arrow keys
//   var left = keyboard(37),
//       up = keyboard(38),
//       right = keyboard(39),
//       down = keyboard(40);
//
//   //Left arrow key `press` method
//   left.press = function() {
//
//     //Change the cat's velocity when the key is pressed
//     cat.vx = -5;
//     cat.vy = 0;
//   };
//
//   //Left arrow key `release` method
//   left.release = function() {
//
//     //If the left arrow has been released, and the right arrow isn't down,
//     //and the cat isn't moving vertically:
//     //Stop the cat
//     if (!right.isDown && cat.vy === 0) {
//       cat.vx = 0;
//     }
//   };
//
//   //Up
//   up.press = function() {
//     cat.vy = -5;
//     cat.vx = 0;
//   };
//   up.release = function() {
//     if (!down.isDown && cat.vx === 0) {
//       cat.vy = 0;
//     }
//   };
//
//   //Right
//   right.press = function() {
//     cat.vx = 5;
//     cat.vy = 0;
//   };
//   right.release = function() {
//     if (!left.isDown && cat.vy === 0) {
//       cat.vx = 0;
//     }
//   };
//
//   //Down
//   down.press = function() {
//     cat.vy = 5;
//     cat.vx = 0;
//   };
//   down.release = function() {
//     if (!up.isDown && cat.vx === 0) {
//       cat.vy = 0;
//     }
//   };
//
  //Set the game state
  // state = play;
//
//   //Start the game loop
//   gameLoop();
// }
//
// function gameLoop() {
//   requestAnimationFrame(gameLoop);
  // state();
  // renderer.render(stage);
// }
//
// function play() {

  //Use the cat's velocity to make it move
//   cat.x += cat.vx;
//   cat.y += cat.vy
// }









// Working example of treasure hunter

var Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    TextureCache = PIXI.utils.TextureCache,
    Texture = PIXI.Texture,
    Sprite = PIXI.Sprite,
    Text = PIXI.Text,
    Graphics = PIXI.Graphics;

//Create a Pixi stage and renderer and add the
//renderer.view to the DOM
var stage = new Container(),
    renderer = autoDetectRenderer(512, 512);
document.body.appendChild(renderer.view);

loader
  .add("images/treasureHunter.json")
  .load(setup);

//Define variables that might be used in more
//than one function
var state, explorer, treasure, blobs, chimes, exit, player, dungeon,
    door, healthBar, message, gameScene, gameOverScene, enemies, id;

function setup() {

  //Make the game scene and add it to the stage
  gameScene = new Container();
  stage.addChild(gameScene);

  //Make the sprites and add them to the `gameScene`
  //Create an alias for the texture atlas frame ids
  id = resources["images/treasureHunter.json"].textures;

  //Dungeon
  dungeon = new Sprite(id["dungeon.png"]);
  gameScene.addChild(dungeon);

  //Door
  door = new Sprite(id["door.png"]);
  door.position.set(32, 0);
  gameScene.addChild(door);

  //Explorer
  explorer = new Sprite(id["explorer.png"]);
  explorer.x = 68;
  explorer.y = gameScene.height / 2 - explorer.height / 2;
  explorer.vx = 0;
  explorer.vy = 0;
  gameScene.addChild(explorer);

  //Treasure
  treasure = new Sprite(id["treasure.png"]);
  treasure.x = gameScene.width - treasure.width - 48;
  treasure.y = gameScene.height / 2 - treasure.height / 2;
  gameScene.addChild(treasure);

  //Make the blobs
  var numberOfBlobs = 6,
      spacing = 48,
      xOffset = 150,
      speed = 2,
      direction = 1;

  //An array to store all the blob monsters
  blobs = [];

  //Make as many blobs as there are `numberOfBlobs`
  for (var i = 0; i < numberOfBlobs; i++) {

    //Make a blob
    var blob = new Sprite(id["blob.png"]);

    //Space each blob horizontally according to the `spacing` value.
    //`xOffset` determines the point from the left of the screen
    //at which the first blob should be added
    var x = spacing * i + xOffset;

    //Give the blob a random y position
    var y = randomInt(0, stage.height - blob.height);

    //Set the blob's position
    blob.x = x;
    blob.y = y;

    //Set the blob's vertical velocity. `direction` will be either `1` or
    //`-1`. `1` means the enemy will move down and `-1` means the blob will
    //move up. Multiplying `direction` by `speed` determines the blob's
    //vertical direction
    blob.vy = speed * direction;

    //Reverse the direction for the next blob
    direction *= -1;

    //Push the blob into the `blobs` array
    blobs.push(blob);

    //Add the blob to the `gameScene`
    gameScene.addChild(blob);
  }

  //Create the health bar
  healthBar = new Container();
  healthBar.position.set(stage.width - 170, 6)
  gameScene.addChild(healthBar);

  //Create the black background rectangle
  var innerBar = new Graphics();
  innerBar.beginFill(0x000000);
  innerBar.drawRect(0, 0, 128, 8);
  innerBar.endFill();
  healthBar.addChild(innerBar);

  //Create the front red rectangle
  var outerBar = new Graphics();
  outerBar.beginFill(0xFF3300);
  outerBar.drawRect(0, 0, 128, 8);
  outerBar.endFill();
  healthBar.addChild(outerBar);

  healthBar.outer = outerBar;

  //Create the `gameOver` scene
  gameOverScene = new Container();
  stage.addChild(gameOverScene);

  //Make the `gameOver` scene invisible when the game first starts
  gameOverScene.visible = false;

  //Create the text sprite and add it to the `gameOver` scene
  message = new Text(
    "The End!",
    {font: "64px Futura", fill: "white"}
  );
  message.x = 120;
  message.y = stage.height / 2 - 32;
  gameOverScene.addChild(message);

  //Capture the keyboard arrow keys
  var left = keyboard(37),
      up = keyboard(38),
      right = keyboard(39),
      down = keyboard(40);

  //Left arrow key `press` method
  left.press = function() {

    //Change the explorer's velocity when the key is pressed
    explorer.vx = -5;
    explorer.vy = 0;
  };

  //Left arrow key `release` method
  left.release = function() {

    //If the left arrow has been released, and the right arrow isn't down,
    //and the explorer isn't moving vertically:
    //Stop the explorer
    if (!right.isDown && explorer.vy === 0) {
      explorer.vx = 0;
    }
  };

  //Up
  up.press = function() {
    explorer.vy = -5;
    explorer.vx = 0;
  };
  up.release = function() {
    if (!down.isDown && explorer.vx === 0) {
      explorer.vy = 0;
    }
  };

  //Right
  right.press = function() {
    explorer.vx = 5;
    explorer.vy = 0;
  };
  right.release = function() {
    if (!left.isDown && explorer.vy === 0) {
      explorer.vx = 0;
    }
  };

  //Down
  down.press = function() {
    explorer.vy = 5;
    explorer.vx = 0;
  };
  down.release = function() {
    if (!up.isDown && explorer.vx === 0) {
      explorer.vy = 0;
    }
  };

  //Set the game state
  state = play;

  //Start the game loop
  gameLoop();
}

function gameLoop(){

  //Loop this function 60 times per second
  requestAnimationFrame(gameLoop);

  //Update the current game state
  state();

  //Render the stage
  renderer.render(stage);
}

function play() {

  //use the explorer's velocity to make it move
  explorer.x += explorer.vx;
  explorer.y += explorer.vy;

  //Contain the explorer inside the area of the dungeon
  contain(explorer, {x: 28, y: 10, width: 488, height: 480});
  //contain(explorer, stage);

  //Set `explorerHit` to `false` before checking for a collision
  var explorerHit = false;

  //Loop through all the sprites in the `enemies` array
  blobs.forEach(function(blob) {

    //Move the blob
    blob.y += blob.vy;

    //Check the blob's screen boundaries
    var blobHitsWall = contain(blob, {x: 28, y: 10, width: 488, height: 480});

    //If the blob hits the top or bottom of the stage, reverse
    //its direction
    if (blobHitsWall === "top" || blobHitsWall === "bottom") {
      blob.vy *= -1;
    }

    //Test for a collision. If any of the enemies are touching
    //the explorer, set `explorerHit` to `true`
    if(hitTestRectangle(explorer, blob)) {
      explorerHit = true;
    }
  });

  //If the explorer is hit...
  if(explorerHit) {

    //Make the explorer semi-transparent
    explorer.alpha = 0.5;

    //Reduce the width of the health bar's inner rectangle by 1 pixel
    healthBar.outer.width -= 1;

  } else {

    //Make the explorer fully opaque (non-transparent) if it hasn't been hit
    explorer.alpha = 1;
  }

  //Check for a collision between the explorer and the treasure
  if (hitTestRectangle(explorer, treasure)) {

    //If the treasure is touching the explorer, center it over the explorer
    treasure.x = explorer.x + 8;
    treasure.y = explorer.y + 8;
  }

  //Does the explorer have enough health? If the width of the `innerBar`
  //is less than zero, end the game and display "You lost!"
  if (healthBar.outer.width < 0) {
    state = end;
    message.text = "You lost!";
  }

  //If the explorer has brought the treasure to the exit,
  //end the game and display "You won!"
  if (hitTestRectangle(treasure, door)) {
    state = end;
    message.text = "You won!";
  }
}

function end() {
  gameScene.visible = false;
  gameOverScene.visible = true;
}

/* Helper functions */

function contain(sprite, container) {

  var collision = undefined;

  //Left
  if (sprite.x < container.x) {
    sprite.x = container.x;
    collision = "left";
  }

  //Top
  if (sprite.y < container.y) {
    sprite.y = container.y;
    collision = "top";
  }

  //Right
  if (sprite.x + sprite.width > container.width) {
    sprite.x = container.width - sprite.width;
    collision = "right";
  }

  //Bottom
  if (sprite.y + sprite.height > container.height) {
    sprite.y = container.height - sprite.height;
    collision = "bottom";
  }

  //Return the `collision` value
  return collision;
}

//The `hitTestRectangle` function
function hitTestRectangle(r1, r2) {

  //Define the variables we'll need to calculate
  var hit, combinedHalfWidths, combinedHalfHeights, vx, vy;

  //hit will determine whether there's a collision
  hit = false;

  //Find the center points of each sprite
  r1.centerX = r1.x + r1.width / 2;
  r1.centerY = r1.y + r1.height / 2;
  r2.centerX = r2.x + r2.width / 2;
  r2.centerY = r2.y + r2.height / 2;

  //Find the half-widths and half-heights of each sprite
  r1.halfWidth = r1.width / 2;
  r1.halfHeight = r1.height / 2;
  r2.halfWidth = r2.width / 2;
  r2.halfHeight = r2.height / 2;

  //Calculate the distance vector between the sprites
  vx = r1.centerX - r2.centerX;
  vy = r1.centerY - r2.centerY;

  //Figure out the combined half-widths and half-heights
  combinedHalfWidths = r1.halfWidth + r2.halfWidth;
  combinedHalfHeights = r1.halfHeight + r2.halfHeight;

  //Check for a collision on the x axis
  if (Math.abs(vx) < combinedHalfWidths) {

    //A collision might be occuring. Check for a collision on the y axis
    if (Math.abs(vy) < combinedHalfHeights) {

      //There's definitely a collision happening
      hit = true;
    } else {

      //There's no collision on the y axis
      hit = false;
    }
  } else {

    //There's no collision on the x axis
    hit = false;
  }

  //`hit` will be either `true` or `false`
  return hit;
};


//The `randomInt` helper function
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//The `keyboard` helper function
function keyboard(keyCode) {
  var key = {};
  key.code = keyCode;
  key.isDown = false;
  key.isUp = true;
  key.press = undefined;
  key.release = undefined;
  //The `downHandler`
  key.downHandler = function(event) {
    if (event.keyCode === key.code) {
      if (key.isUp && key.press) key.press();
      key.isDown = true;
      key.isUp = false;
    }
    event.preventDefault();
  };

  //The `upHandler`
  key.upHandler = function(event) {
    if (event.keyCode === key.code) {
      if (key.isDown && key.release) key.release();
      key.isDown = false;
      key.isUp = true;
    }
    event.preventDefault();
  };

  //Attach event listeners
  window.addEventListener(
    "keydown", key.downHandler.bind(key), false
  );
  window.addEventListener(
    "keyup", key.upHandler.bind(key), false
  );
  return key;
}
