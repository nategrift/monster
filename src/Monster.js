/**
 * Generic Monster Class
 */
class Monster {
  /**
   * Constructor
   * @param {int} monster      id of monster from data.js
   */
  constructor(monster){
    this.name = MONSTERS[monster].name;
    this.health = MONSTERS[monster].health;
    this.maxDamage = MONSTERS[monster].maxDamage;
    this.minDamage = MONSTERS[monster].minDamage;
    this.img = MONSTERS[monster].img;
    this.id = MONSTERS[monster].id;
  }

  /**
   * Random damage and remove from player
   * @param {Player} player  player object to attack
   */
  attack(player){
    let damage = Math.floor((Math.random() * this.maxDamage) + this.minDamage);
    player.health -= damage;
  }

  /**
   * Did the Monster die?
   * @return {boolean}
   */
  isDead(){
    return this.health <= 0;
  }

  /**
   * Render the object (NOT IMPLEMENTED)
   * @param  {string} id id of the parent to render the object in
   */
  render(){
     document.getElementById('monsterRender').src = "assets/img/" + this.img;
  }
}
