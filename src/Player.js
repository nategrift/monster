/**
 * Our Generic Player class
 */
class Player {
  /**
   * Constructor
   * @param {string} name      player name
   * @param {int} character    character id from data.js
   * @param {int} health       player starting health
   */
  constructor(name, character, health){
    this.name = name;
    this.health = health;
    this.img = CHARACTERS[character].img;
  }

  /**
   * Attack a monster
   * @param {Monster} monster  monster object to attack
   * @param {Attack} attack    attack object
   */
  attack(monster, attack){
    monster.health -= attack.getDamage();
  }

  /**
   * Did the player die?
   * @return {boolean}
   */
  isDead(){
    return this.health <= 0;
  }

  /**
   * Render the object
   */
  render(){
    document.getElementById('characterRender').src = "assets/img/" + this.img;
  }
}
