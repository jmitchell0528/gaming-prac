angular.module('gamingPrac').service('levelOne', function($http, $stateParams, $state) {
    var self = this
    // var returning = false;
    function reset() {
      self.character = 'Kat Alley'
      self.paused = false
      self.level = 1
      self.score = 0
      self.timer = 0
    }

    reset()

    self.postGamelog = function(username) {
        console.log("Score: ", self.score)
        console.log(self.timer)
        var data = {
          character: self.character,
          username: username,
          points: self.score,
          time: self.timer,
          level: self.level
        }
        return $http.post("/api/gamelogs", data)
        .then(reset)
    }

    this.load = function() {
        reset()
        var Container = PIXI.Container
        var autoDetectRenderer = PIXI.autoDetectRenderer
        var loader = PIXI.loader.reset()
        var resources = PIXI.loader.resources
        var TextureCache = PIXI.utils.TextureCache
        var Texture = PIXI.Texture
        var Sprite = PIXI.Sprite
        var Text = PIXI.Text
        var Graphics = PIXI.Graphics
        var ticker = PIXI.ticker.Ticker

        // var stage = new Container(),
        // renderer = autoDetectRenderer(window.innerWidth, window.innerHeight, {transparent: true});
        // document.getElementById("game_body_wrapper")
        // .appendChild(renderer.view);


        // Code for resizing
        var size = [1250, 800];
        var ratio = size[0] / size[1];
        var stage = new PIXI.Stage(0x333333, true);
        var renderer = autoDetectRenderer(size[0], size[1] /*, {transparent: true}*/ );
        document.getElementById("game_body_wrapper").appendChild(renderer.view);

        function resize() {
            if (window.innerWidth / window.innerHeight >= ratio) {
                var w = window.innerHeight * ratio;
                var h = window.innerHeight;
            } else {
                var w = window.innerWidth;
                var h = window.innerWidth / ratio;
            }
            renderer.view.style.width = w + 'px';
            renderer.view.style.height = h + 'px';
        }

        window.onresize = function(event) {
            resize();
        };

        // Scale mode for all textures, will retain pixelation
        PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
        //
        // if (!returning){

          loader
              .add("game_assets/gameSprites/dashLayout.json")
              .load(setup);
              // returning = true;




        var state, blaze, cash, gold, stageStreet, gameScene, bank, id, healthBar, message, scoreObj, gameWinScene, blazeAnimation, introScreen, timerObj, stageLevel, bag, atm, card;


        ////// SETUP START //////

        function setup() {

            gameScene = new Container();
            stage.addChild(gameScene);


            id = resources["game_assets/gameSprites/dashLayout.json"].textures;

            // stage
            stageStreet = new Sprite(id["dashStageStreet.png"]);
            stageStreet.scale.x = 3;
            stageStreet.scale.y = 3;
            // stageStreet.x = (stage.width - stageStreet.width) / 2;
            // stageStreet.y = gameScene.height / 256 -
            // stageStreet.height / 256;
            gameScene.addChild(stageStreet);

            // bank
            bank = new Sprite(id["atm.png"])
            bank.position.set(225, 250);
            bank.scale.set(2.5, 2.5);
            // bank.anchor.set(0.5, 0.5);
            gameScene.addChild(bank);

            // cash
            cash = new Sprite(id["bag.png"])
            cash.position.set(350, 500);
            cash.scale.set(2.5, 2.5);
            // cash.anchor.set(0.5, 0.5);
            gameScene.addChild(cash);

            // gold
            gold = new Sprite(id["cash.png"])
            gold.position.set(600, 450);
            gold.scale.set(2.5, 2.5);
            // cash.anchor.set(0.5, 0.5);
            gameScene.addChild(gold);

            //credit card
            card = new Sprite(id["card.png"])
            card.position.set(1000, 550);
            card.scale.set(1.25, 1.25);
            // cash.anchor.set(0.5, 0.5);
            gameScene.addChild(card);

            // blaze
            blaze = new Sprite(id["alley.png"]);
            // blaze.position.set(280, 116);
            blaze.scale.set(2.5, 2.5);
            // blaze.anchor.set(0.5, 0.5);
            // Blaze's movement
            blaze.vx = 0;
            blaze.vy = 0;
            blaze.x = 600;
            blaze.y = 400;
            blaze.z = 10
            // blaze.y = gameScene.height / 300 - blaze.height / 300;
            gameScene.addChild(blaze);

            // Score counter
            var counter = 0;

            scoreObj = new Text(
                "SCORE: " + counter, {
                    font: "36px Futura",
                    fill: "White"
                }
            );
            scoreObj.position.set(30, 10);
            scoreObj.scale.set(1, 1);
            // scoreObj.anchor.set(0.5, 0.5);
            gameScene.addChild(scoreObj);

            // Time counter

            var timerObj = new Text('TIME: 0', {
                font: "36px futura",
                fill: "White"
            });

            timerObj.position.set(600, 10);
            timerObj.scale.set(1, 1);
            gameScene.addChild(timerObj);

            var timeCounter = 0;

            animator(animate);
            function animate() {
                timeCounter += 0.025;
                // update text with new starting
                timerObj.text = 'TIME: ' + Math.floor(timeCounter);

                animator(animate);

                if (timeCounter >= 30) {
                  reset()
                  pause.press()
                  // Check to see if high score is high score
                  // if counter hits 30, check to see if there is a high score, if so, go to nameEntry screen, else go to gameover
                  $state.go('gameOver')

                }
            }

            //level number
            stageLevel = new Text(
                "Level: 1", // + counter,
                {
                    font: "36px Futura",
                    fill: "White"
                }
            );
            stageLevel.position.set(600, 600);
            stageLevel.scale.set(1, 1);
            gameScene.addChild(stageLevel);

            // Create the healthbar
            healthBar = new Container();
            healthBar.position.set(850, 15);
            healthBar.scale.set(3, 3);
            gameScene.addChild(healthBar);


            // Create the black background rectangle
            var innerBar = new Graphics();
            innerBar.beginFill(0x000000);
            innerBar.drawRect(0, 0, 128, 8);
            innerBar.endFill();
            healthBar.addChild(innerBar);

            // Create the front red rectangle
            var outerBar = new Graphics();
            outerBar.beginFill(0xFF3300);
            outerBar.drawRect(0, 0, 128, 8);
            outerBar.endFill();
            healthBar.addChild(outerBar);

            healthBar.outer = outerBar;


            // You win! screen
            gameWinScene = new Container();
            stage.addChild(gameWinScene);

            gameWinScene.visible = false;

            message = new Text(
                "You Win!", {
                    font: "64px Futura",
                    fill: "White"
                }
            );
            message.position.set(700, 300);
            // message.scale.set(1, 1);
            // message.anchor.set(0.5, 0.5);
            gameWinScene.addChild(message);


            // Welcome screen
            introScreen = new Container();
            stage.addChild(introScreen);

            introScreen.visible = false;

            message = new Text(
                "START!", {
                    font: "64px Futura",
                    fill: "White"
                }
            );
            message.position.set(700, 300);
            // message.scale.set(1, 1);
            // message.anchor.set(0.5, 0.5);
            introScreen.addChild(message);


            // keyboard arrow set keys

            var left = keyboard(37),
                up = keyboard(38),
                right = keyboard(39),
                down = keyboard(40),
                pause = keyboard(80), // P
                attack = keyboard(32), // Spacebar
                crouch = keyboard(67); // C


            // Walking animation

            var isWalking = false
            var isAttacking = false
            var isCrouching = false
            var walkingDirection = "Left";
            var walkingCounter = 1;
            var idleCounter = 1;
            var attackCounter = 1;
            var crouchCounter = 1;
            setInterval(function() {
                if (!isWalking) {
                    if (idleCounter > 3) {
                        idleCounter = 1
                    }


                    blaze.texture = PIXI.Texture.fromImage(`game_assets/gameSprites/alleyIdle${walkingDirection}${idleCounter}.png`)
                    idleCounter++
                }
                if (isWalking) {
                    if (walkingCounter > 6) {
                        walkingCounter = 1
                    }
                    blaze.texture = PIXI.Texture.fromImage(`game_assets/gameSprites/alleyWalk${walkingDirection}${walkingCounter}.png`)
                    walkingCounter++
                }
                if (isAttacking) {
                    if (attackCounter > 3) {
                        attackCounter = 1
                    }
                    blaze.texture = PIXI.Texture.fromImage(`game_assets/gameSprites/alleyPunch${walkingDirection}${attackCounter}.png`)
                    attackCounter++
                  }

                if (isCrouching) {
                    if (crouchCounter > 1) {
                        crouchCounter = 1
                    }
                    blaze.texture = PIXI.Texture.fromImage(`game_assets/gameSprites/alleyCrouch${walkingDirection}${crouchCounter}.png`)
                    crouchCounter++
                    }
            }, 125)

            // Pressing the left arrow key
            left.press = function() {
                isWalking = true
                walkingDirection = "Left"
                // changes Blaze's velocity when left key is pressed
                blaze.vx = -3;
                blaze.vy = 0;
            };
            left.release = function() {
                isWalking = false
                // Stopping Blaze when nothing is being pressed
                if (!right.isDown && blaze.vy === 0) {
                    blaze.vx = 0;
                }
            };

            // Pressing the up arrow key
            up.press = function() {
                isWalking = true;
                blaze.vy = -3;
                blaze.vx = 0;
            };
            up.release = function() {
                isWalking = false;
                if (!down.isDown && blaze.vx === 0) {
                    blaze.vy = 0;
                }
            };

            //Pressing the right arrow key
            right.press = function() {
                isWalking = true;
                walkingDirection = 'Right'
                blaze.vx = 3;
                blaze.vy = 0;
            };
            right.release = function() {
                isWalking = false;
                if (!left.isDown && blaze.vy === 0) {
                    blaze.vx = 0;
                }
            };

            // Pressing the down arrow key
            down.press = function() {
                isWalking = true;
                blaze.vy = 3;
                blaze.vx = 0;
            };
            down.release = function() {
                isWalking = false;
                if (!up.isDown && blaze.vx === 0) {
                    blaze.vy = 0;
                }
            };

            // pause.press()
            pause.press = function() {
                if (self.paused) {
                    requestAnimationFrame(gameLoop)
                    requestAnimationFrame(animate)
                }
                self.paused = !self.paused
            }


            // Pressing the spacebar to attack
            attack.press = function() {
                isAttacking = true
                var blazeHit = false;

                // Check for a collision between Blaze and the bank
                    if (hitTestRectangle(blaze, bank)) {
                    blazeHit = true;
                    console.log("You hit the ATM!")
                    bank.alpha = 0.5;
                    //Reduce the width of the health bar's inner rect by 10px
                    healthBar.outer.width -= 10;
                    counter += 5;
                    scoreObj.text = "SCORE: " + counter
                    //Does the bank have enough health? If the width of the `innerBar` is less than zero, end the game with "You Win!"
                    if (healthBar.outer.width < 0) {
                      // state = nameEntry;
                      self.timer = numberParser(timerObj.text)
                      self.level = numberParser(stageLevel.text)
                      self.score = numberParser(scoreObj.text)


                      pause.press()
                      $state.go('nameEntry')
                    }
                }
                    else {
                    //Make the gold fully opaque (non-transparent) if it hasn't been hit
                    bank.alpha = 1;
                }
            };
            // Releasing the spacebar
            attack.release = function() {
                isAttacking = false;
            }

            // Pressing C to crouch
            crouch.press = function() {
                isCrouching = true
                var blazeHit = false;

                // Check for a collision between Blaze and the cash
                if (hitTestRectangle(blaze, cash)) {
                    blazeHit = true;
                    console.log("You got the cash!")
                    // state = nameEntry;
                    self.timer = numberParser(timerObj.text)
                    self.level = numberParser(stageLevel.text)
                    self.score = numberParser(scoreObj.text)
                    self.paused = true
                    // pause.press()
                    $state.go('nameEntry')
                }

                // Check for a collision between Blaze and the gold
                else if (hitTestRectangle(blaze, gold)) {
                    // if blazeHit is true when she is touching the gold...
                    blazeHit = true;
                    console.log("You got the gold!")
                    //Make the gold semi-transparent
                    gold.alpha = 0.5;
                    //add 10 to your score
                    counter += 10;
                    scoreObj.text = "SCORE: " + counter
                    // If counter goes over 100, the player wins
                    if (counter > 500) {
                        // state = end;
                        self.timer = numberParser(timerObj.text)
                        self.level = numberParser(stageLevel.text)
                        self.score = numberParser(scoreObj.text)

                        pause.press()
                        $state.go('nameEntry')
                    }
                }

                else if (hitTestRectangle(blaze, card)) {
                    // if blazeHit is true when she is touching the gold...
                    blazeHit = true;
                    console.log("You got the card!")
                    //Make the gold semi-transparent
                    card.alpha = 0.5;
                    //add 10 to your score
                    counter += 20;
                    scoreObj.text = "SCORE: " + counter
                    // If counter goes over 100, the player wins
                    if (counter > 500) {
                        // state = end;
                        self.timer = numberParser(timerObj.text)
                        self.level = numberParser(stageLevel.text)
                        self.score = numberParser(scoreObj.text)

                        pause.press()
                        $state.go('nameEntry')
                    }
                }
                  else {
                    //Make the gold fully opaque (non-transparent) if it hasn't been hit
                    gold.alpha = 1;
                    card.alpha = 1;
                }
            };
            // Releasing the spacebar
            crouch.release = function() {
                isCrouching = false;
            }
        };




        ////// SETUP END //////



        // Ends the game once you get the cash
        function end() {
            gameScene.visible = false;
            gameWinScene.visible = true;

        }

        // returns you to welcome screen once you get the cash
        function splashScreen() {
            gameScene.visible = false;
            introScreen.visible = true;
        }


        // Set the game state
        state = play;

        // start the game loop
        gameLoop();


        function gameLoop() {
            // Loop this function 60 times per second
            animator(gameLoop);
            // Update the current game state
            state();

            // render the stage
            renderer.render(stage);
        }

        function play() {
            if (blaze) {
                // Use Blaze's velocity to make her move
                blaze.x += blaze.vx;
                blaze.y += blaze.vy;

                // Contain Blaze inside the stage
                contain(blaze, {
                  x: 1,
                  y: 250,
                  width: 1300,
                  height: 675
                });
            }
        }



        // Helper functions

        function contain(sprite, container) {
            var collision = undefined;

            // left
            if (sprite.x < container.x) {
                sprite.x = container.x;
                collision = "left";
            }

            // Top
            if (sprite.y < container.y) {
                sprite.y = container.y;
                collision = "top";
            }

            // Right
            if (sprite.x + sprite.width > container.width) {
                sprite.x = container.width - sprite.width;
                collision = "right";
            }

            // Bottom
            if (sprite.y + sprite.height > container.height) {
                sprite.y = container.height - sprite.height;
                collision = "bottom";
            }
            // Return the collision value
            return collision;
        }

        // the "hitTestRectangle" function
        function hitTestRectangle(r1, r2) {
            // Define the variables we'll need to calculate
            var hit, combinedHalfWidths, combinedHalfHeights, vx, vy;
            // hit determines if there is a collision
            hit = false;

            // find the center of each sprite
            r1.centerX = r1.x + r1.width / 2;
            r1.centerY = r1.y + r1.height / 2;
            r2.centerX = r2.x + r2.width / 2;
            r2.centerY = r2.y + r2.height / 2;

            // find the halfWidth and halfHeight of each sprite
            r1.halfWidth = r1.width / 2;
            r1.halfHeight = r1.height / 2;
            r2.halfWidth = r2.width / 2;
            r2.halfHeight = r2.height / 2;

            // Calculate the distance vector between sprites
            vx = r1.centerX - r2.centerX;
            vy = r1.centerY - r2.centerY;

            // Figure out the combined half-widths and half-heights
            combinedHalfWidths = r1.halfWidth + r2.halfWidth;
            combinedHalfHeights = r1.halfHeight + r2.halfHeight;

            // check for a collision on the x axis
            if (Math.abs(vx) < combinedHalfWidths) {
                // if a collision is occuring. Check for a collision on the y axis
                if (Math.abs(vy) < combinedHalfHeights) {
                    // if a collision is happening
                    hit = true;
                } else {
                    // no collision on the y axis
                    hit = false;
                }
            } else {
                // no collision on the x axis
                hit = false;
            }

            // Hit will either be true or false
            return hit;
        };


        // the keyboard helper function
        function keyboard(keyCode) {
            var key = {};
            key.code = keyCode;
            key.isDown = false;
            key.isUp = true;
            key.press = undefined;
            key.release = undefined;
            // the 'downHandler'
            key.downHandler = function(event) {
                if (event.keyCode === key.code) {
                    if (key.isUp && key.press) key.press();
                    key.isDown = true;
                    key.isUp = false;
                }
                // event.preventDefault();
            };

            // the upHandler
            key.upHandler = function(event) {
                if (event.keyCode === key.code) {
                    if (key.isDown && key.release) key.release();
                    key.isDown = false;
                    key.isUp = true;
                }
                // event.preventDefault();
            };

            // attach event listeners
            window.addEventListener("keydown", key.downHandler.bind(key), false);
            window.addEventListener("keyup", key.upHandler.bind(key), false);
            return key;
        }
    }

    function numberParser(txt) {
        return txt.split(" ").filter(function(c) {
            return Number(c) !== NaN
        }).pop();
    }

    function animator(animate) {
      console.log(self.paused)
        if (!self.paused) {
            requestAnimationFrame(animate)
        }
    }
})
