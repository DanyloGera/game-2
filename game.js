// define variables
var game;
var player;
var platforms;
var badges;
var items;
var cursors;
var jumpButton;
var text;
var winningMessage;
var won = false;
var currentScore = 50;
var winningScore = 230;

// add collectable items to the game
function addItems() {
  items = game.add.physicsGroup();
  createItem(575, 400, 'fish');
  createItem(365, 400, 'fruits');
  createItem(225, 500, 'milk');
  createItem(295, 500, 'water');
  createItem(365, 500, 'nofastfood');
  createItem(435, 500, 'meat');
  createItem(505, 500, 'vagetables');
  createItem(575, 500, 'nodrinking');

  createItem(200, 132, 'nosmoke');

  createItem(200, 310, 'nocovid');

  createItem(200, 240, 'cards');
  createItem(270, 310, 'clothes');
  createItem(340, 310, 'dryer');
  createItem(410, 310, 'gadget');
  createItem(480, 310, 'money');
  createItem(550, 310, 'new');

  createItem(400, 120, 'new');
  createItem(470, 120, 'dryer');
  createItem(540, 120, 'clothes');
  createItem(610, 120, 'nocovid');
  createItem(610, 70, 'gadget');
  createItem(680, 120, 'money');
  createItem(750, 120, 'cards');

}

// add platforms to the game
function addPlatforms() {
  platforms = game.add.physicsGroup();
  platforms.create(0, 541, 'platform');
  platforms.create(0, 354, 'platform2');
  platforms.create(182, 174, 'platform3');
//stairs_1
  platforms.create(679, 509, 'stairs');
  platforms.create(714, 477, 'stairs1');
  platforms.create(749, 447, 'stairs2');
//stairs_2
  platforms.create(0, 322, 'stairs');
  platforms.create(0, 292, 'stairs1');
  platforms.create(0, 264, 'stairs2');

  platforms.setAll('body.immovable', true);
}

// create a single animated item and add to screen
function createItem(left, top, image) {
  var item = items.create(left, top, image);
  item.animations.add('spin');
  item.animations.play('spin', 10, true);
}

// create the winning badge and add to screen
function createBadge() {
  badges = game.add.physicsGroup();
  var badge = badges.create(145, 490, 'star');
  badge.animations.add('spin');
  badge.animations.play('spin', 10, true);
}


// when the player collects an item on the screen
function itemHandler(player, item) {
  item.kill();
  if (item.key === 'coin') {
     currentScore = currentScore + 10;
  }else if (item.key === 'vagetables') {
     currentScore = currentScore + 10;
  }else if (item.key === 'fruits') {
     currentScore = currentScore + 10;
  } else if (item.key === 'fish') {
     currentScore = currentScore + 10;
  }else if (item.key === 'meat') {
     currentScore = currentScore + 10;
  }else if (item.key === 'water') {
     currentScore = currentScore + 10;
  }else if (item.key === 'milk') {
     currentScore = currentScore + 10;
  }else if (item.key === 'cards') {
     currentScore = currentScore + 10;
  }else if (item.key === 'clothes') {
     currentScore = currentScore + 10;
  }else if (item.key === 'dryer') {
     currentScore = currentScore + 10;
  }else if (item.key === 'gadget') {
     currentScore = currentScore + 10;
  }else if (item.key === 'money') {
     currentScore = currentScore + 10;
  }else if (item.key === 'new') {
     currentScore = currentScore + 10;
  }else if (item.key === 'nosmoke') {
    alert("Ви придбали шкідливий товар!");
    window.location.reload(true);
  }else if (item.key === 'nofastfood') {
    alert("Ви придбали шкідливий товар!");
    window.location.reload(true);
  }else if (item.key === 'nodrinking') {
     // currentScore = currentScore - 25;
     alert("Ви придбали шкідливий товар!");
     window.location.reload(true);
  }else if (item.key === 'nocovid') {
    alert("Ви не дотримались норм санітарії!");
    window.location.reload(true);
  }
  if (currentScore >= winningScore) {
    game.add.sprite(137, 456, 'gamemachine');
createBadge();

  }
}

// when the player collects the badge at the end of the game
function badgeHandler(player, badge) {
  badge.kill();

  var btn = document.getElementById('btn-next');
  btn.removeAttribute("disabled");
  btn.style.border = "2px solid #000";
  won = true;

}

// setup game when the web page loads
window.onload = function () {
  game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

  // before the game begins
  function preload() {
    // game.stage.backgroundColor = '#5db1ad';
    game.load.image('background', 'background.png');

    //Load images
    game.load.image('platform', 'platform_1.png');
    game.load.image('platform2', 'platform_2.png');
    game.load.image('platform3', 'platform_3.png');
    //stairs
    game.load.image('stairs', 'stairs/stairs1.1.png');
    game.load.image('stairs1', 'stairs/stairs1.2.png');
    game.load.image('stairs2', 'stairs/stairs1.3.png');

    //Load spritesheets
    game.load.spritesheet('player', 'chalkers.png', 48, 62);

    game.load.spritesheet('nofastfood', 'food/nofastfood.png', 36, 44);
    game.load.spritesheet('nosmoke', 'food/nosmoke.png', 36, 44);
    game.load.spritesheet('nodrinking', 'food/nodrinking.png', 36, 44);
    game.load.spritesheet('vagetables', 'food/vagetables.png', 36, 44);
    game.load.spritesheet('fruits', 'food/fruits.png', 36, 44);
    game.load.spritesheet('fish', 'food/fish.png', 36, 44);
    game.load.spritesheet('meat', 'food/meat.png', 36, 44);
    game.load.spritesheet('water', 'food/water.png', 36, 44);
    game.load.spritesheet('milk', 'food/milk.png', 36, 44);

    game.load.spritesheet('cards', 'gadgets/cards.png', 36, 44);
    game.load.spritesheet('clothes', 'gadgets/clothes.png', 36, 44);
    game.load.spritesheet('dryer', 'gadgets/dryer.png', 36, 44);
    game.load.spritesheet('gadget', 'gadgets/gadget.png', 36, 44);
    game.load.spritesheet('money', 'gadgets/money.png', 36, 44);
    game.load.spritesheet('new', 'gadgets/new.png', 36, 44);
    game.load.spritesheet('nocovid', 'gadgets/nocovid.png', 36, 44);


    game.load.spritesheet('badge', 'badge.png', 42, 54);
    game.load.spritesheet('star', 'star.png', 32, 32);
    game.load.spritesheet('gamemachine', 'gamemachine.png', { frameWidth: 49, frameHeight: 85 });
  }

  //timer
    var sec1 = 0;
    function timer1() {
       sec1++;
       var timer = document.querySelector(".timer");
       var m = (Math.trunc(sec1/60)<10? "0":"") + Math.trunc(sec1/60);
       var s = (sec1%60<10? "0":"") + sec1%60;
       timer.value = m + " : " + s;
  }
  setInterval(timer1, 1000);

  // initial game set up
  function create() {
    function remove(player, badge) {
      this.items.clear(true,true);
    }
    // alert("Прочитайте завдання, закрийте його на хрестик і грайте!");
    timer1()
    this.add.image(0, 0, 'background');
    player = game.add.sprite(77, 480, 'player');
    player.animations.add('walk');
    player.anchor.setTo(0.5, 1);
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
    player.body.gravity.y = 500;

    addItems();
    addPlatforms();

    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    text = game.add.text(16, 16, "SCORE: " + currentScore, { font: "bold 22px Arial", fill: "white" });
    winningMessage = game.add.text(game.world.centerX, 225, "", { font: "bold 48px Arial", fill: "white" });
    winningMessage.anchor.setTo(0.5, 1);
  }

  // while the game is running
  function update() {
    text.text = "SCORE: " + currentScore;
    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.overlap(player, items, itemHandler);
    game.physics.arcade.overlap(player, badges, badgeHandler);
    player.body.velocity.x = 0;

    // is the left cursor key presssed?
    if (cursors.left.isDown) {
      player.animations.play('walk', 10, true);
      player.body.velocity.x = -300;
      player.scale.x = - 1;
    }
    // is the right cursor key pressed?
    else if (cursors.right.isDown) {
      player.animations.play('walk', 10, true);
      player.body.velocity.x = 300;
      player.scale.x = 1;
    }
    // player doesn't move
    else {
      player.animations.stop();
    }

    if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down)) {
      player.body.velocity.y = -400;
    }
    // when the player winw the game
    if (won) {
      winningMessage.text = "TO THE NEXT LEVEL!";

    }

  }

  function render() {

  }

};
