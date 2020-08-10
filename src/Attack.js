/**
 * Our Generic Attack class
 */
class Attack {
  /**
   * Constructor
   * @param {int} attack       attack id from data.js
   */
  constructor(id){
    this.minDamage = ATTACKS[id].minDamage;
    this.maxDamage = ATTACKS[id].maxDamage;
  }

  /**
   * Return's the random attack damage to be done
   * @return {int}
   */
  getDamage(){
    return Math.floor((Math.random() * this.maxDamage) + this.minDamage);
  }

  /**
   * Render the object (NOT IMPLEMENTED)
   * @param  {string} id id of the parent to render the object in
   */
  render(id){
    return null;
  }
}
