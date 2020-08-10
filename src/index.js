let playerName = 'Player';
let selectedPlayer = 0;
let healthPlayer = 100;
let healthPlayerID = null;
let monsterId = null;
let strongAttackTries = 3;
let healthTries = 5;

/**
 * Our state variable to hold data per turn
 * @type {Object}
 */
let STATE = {
  view: VIEW.PRELOAD,
  player: null,
  monster: null,
}

/**
 * Select character and start
 *
 * @param character id of the character selected
 * @param name name of the player
 * @param health health of the player selected
 */
function selectCharacter(character, name, health){

}

/* Turn Function */
function turn() {
   updateBars();
   updateTries();
   if (STATE.monster.isDead() && STATE.player.isDead()) {
      end('DRAW')
   } else if (STATE.monster.isDead()) {
      end('You Win')
   } else if (STATE.player.isDead()) {
      end('You Lose')
   }
}

function updateTries() {
   if (strongAttackTries <= 0) {
      document.getElementById('tries-remaining-1').innerHTML = strongAttackTries + ' &#9734;';
   } else {
      document.getElementById('tries-remaining-1').innerHTML = strongAttackTries + '&#9733';
   }
   if (healthTries <= 0) {
         document.getElementById('tries-remaining-2').innerHTML = healthTries + '  &#9734;';
   } else {
         document.getElementById('tries-remaining-2').innerHTML = healthTries + '&#9733';
   }
}

function end(msg) {
   document.getElementById('results').innerHTML = msg;
   document.getElementById('popup').style.opacity = 1;
   document.getElementById('popup').style.visibility = 'visible';
   document.getElementById('popup__content').style.opacity = 1;
   document.getElementById('popup__content').style.transform = 'translate(-50%, -50%)scale(1)';
}

function updateBars() {
   document.getElementById('monster-health').value = STATE.monster.health;
   document.getElementById('healthDisplayMonster').innerHTML = STATE.monster.health;
   document.getElementById('player-health').value = STATE.player.health;
   document.getElementById('healthDisplayPlayer').innerHTML = STATE.player.health;
}

document.getElementById('gameView').addEventListener('click', function(){
   changeView(VIEW.GAME)
   STATE.player = new Player(playerName, selectedPlayer, healthPlayer);
   if (monsterId == null) {
      monsterId = 0;
   }
   STATE.monster = new Monster(monsterId);
   document.getElementById('nameDisplay').innerHTML = playerName;
   STATE.player.render();
   STATE.monster.render();
   document.getElementById('monster-health').max = STATE.monster.health;
   document.getElementById('player-health').max = STATE.player.health;
   updateBars();
   updateTries()

});

/* Button Modes */
document.getElementById('attack').addEventListener('click', function(){
   attack(0)
});

document.getElementById('attack-strong').addEventListener('click', function(){
   attack(1)
});

document.getElementById('heal').addEventListener('click', function(){
   heal(2)
});

function attack(id) {
   let attack = new Attack(id);
   if (id == 1 && strongAttackTries > 0) {
      strongAttackTries -= 1;
      STATE.player.attack(STATE.monster, attack);
      STATE.monster.attack(STATE.player);
      turn();
   } else if (id == 0) {
      STATE.player.attack(STATE.monster, attack);
      STATE.monster.attack(STATE.player);
      turn();
   }

}

function heal(id) {
   if (healthTries > 0 && STATE.monster && healthPlayer != 100) {
      healthTries -= 1;
      if (STATE.player.health <= 50 && (Math.random() <= .5 && healthTries > 0)) {
         STATE.player.health += Math.floor((Math.random() * ATTACKS[id].maxDamage) + ATTACKS[id].minDamage);
      }
   }
   turn();
}


/* Monster Select*/
document.getElementById('monster-0-select').addEventListener('click', function(){
   selectMonster(0);
});

document.getElementById('monster-1-select').addEventListener('click', function(){
   selectMonster(1);
});

document.getElementById('monster-2-select').addEventListener('click', function(){
   selectMonster(2);
});

document.getElementById('monster-3-select').addEventListener('click', function(){
   selectMonster(3);
});

function selectMonster(id) {
   if (monsterId !== null ) {
      document.getElementById(MONSTERS[monsterId].id).classList.remove("selected");
   }
   monsterId = id;
   document.getElementById(MONSTERS[id].id).classList.add('selected');
}

/* Health Option */
document.getElementById('difficultyOpt-0').addEventListener('click', function(){
   healthSelected(0);
});
document.getElementById('difficultyOpt-1').addEventListener('click', function(){
   healthSelected(1);
});
document.getElementById('difficultyOpt-2').addEventListener('click', function(){
   healthSelected(2);
});

function healthSelected(id) {
   if (healthPlayerID != HEALTHS[id].ID && healthPlayerID != null) {
      document.getElementById(healthPlayerID).classList.remove("selected");
   }
   healthPlayer = HEALTHS[id].VALUE;
   healthPlayerID = HEALTHS[id].ID;
   document.getElementById(HEALTHS[id].ID).classList.add('selected');
}


/* Character Select*/
let characterOne = document.getElementById('character-1-select')
let characterTwo = document.getElementById('character-2-select')
characterOne.addEventListener('click', function(){
   selectedPlayer = 0;
   characterOne.classList.add('selected');
   characterTwo.classList.remove('selected');
});

characterTwo.addEventListener('click', function(){
   selectedPlayer = 1;
   characterTwo.classList.add("selected");
   characterOne.classList.remove("selected");
});

document.getElementById('continue-start').addEventListener('click', function(){
   playerName = checkName(document.getElementById('name').value);
   changeView(VIEW.START);
});

function checkName(name) {
   if (name == "") {
      return "Player";
   } else {
      return name;
   }
}



/*View Change */
function changeView(view){
   document.getElementById(STATE.view).style.opacity = 0;
   setTimeout(function(){ document.getElementById(STATE.view).style.display = "none"; }, 1000);
   setTimeout(function(){
      STATE.view = view;
       document.getElementById(STATE.view).style.display = "block";
      document.getElementById(STATE.view).style.opacity = 1;
   }, 1500);
}

/* RESET VIEW*/
document.getElementById('retryBtn').addEventListener('click', function(){
   STATE.player = new Player(playerName, selectedPlayer, healthPlayer);
   STATE.monster = new Monster(monsterId);
   popup__close()
   updateBars()

});

function popup__close() {
   document.getElementById('popup').style.opacity = 0;
   document.getElementById('popup').style.visibility = 'hidden';
   document.getElementById('popup__content').style.opacity = 0;
   document.getElementById('popup__content').style.transform = 'translate(-50%, -50%)scale(.5)';
}
