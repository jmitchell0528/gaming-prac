Container = PIXI.Container,
autoDetectRenderer = PIXI.autoDetectRenderer,
loader = PIXI.loader,
resources = PIXI.loader.resources,
TextureCache = PIXI.utils.TextureCache,
Texture = PIXI.Texture,
Sprite = PIXI.Sprite,
Text = PIXI.Text,
Graphics = PIXI.Graphics;

var stage = new Container(),
      renderer = autoDetectRenderer(512, 256);
      document.body.appendChild(renderer.view);

loader
  .add("blazeAnimation", "imageset/blazeAnimation.png")
  .load(setup);

  var sprite;

  function setup() {
    stage.interactive = true;

    var rect = new PIXI.Rectangle(0, 0, 80, 80)
    var texture = PIXI.loader.resources["blazeAnimation"].texture;
    texture.frame = rect;

    sprite = new PIXI.Sprite(texture);

    var walk = setInterval(function() {
      if (rect.x >= 80 * 6) rect.x = 0;
      sprite.texture.frame = rect;
      rect.x += 80;
    }, 200);

    sprite.scale.set(1, 1);
    stage.addChild(sprite);

    animationLoop();
  }

  function animationLoop() {
    requestAnimationFrame(animationLoop);

    renderer.render(stage);
  }
