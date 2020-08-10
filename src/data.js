/**
 * Our Monsters
 */
const MONSTERS = [
  {
    name: "Tuff Puff",
    health: 100,
    minDamage: 1,
    maxDamage: 10,
    img: "monster/monster_1.svg",
    id: "monster-0-select"
  }, {
    name: "Scary Pinch",
    health: 125,
    minDamage: 1,
    maxDamage: 10,
    img: "monster/monster_2.svg",
    id: "monster-1-select"
  }, {
    name: "Fierce Fluff",
    health: 150,
    minDamage: 3,
    maxDamage: 8,
    img: "monster/monster_3.svg",
    id: "monster-2-select"
  }, {
    name: "Pink Stink",
    health: 200,
    minDamage: 1,
    maxDamage: 9,
    img: "monster/monster_4.svg",
    id: "monster-3-select"
  },
]

/**
 * Our Attacks
 */
const ATTACKS = [
  {
    name: "attack",
    minDamage: 1,
    maxDamage: 10,
    img: "attack/sword.svg" //not used yet
  },   {
      name: "attack-strong",
      minDamage: 3,
      maxDamage: 15,
      img: "attack/sword.svg" //not used yet
   }, {
      name: "heal",
      minDamage: 5,
      maxDamage: 10,
      img: "attack/sword.svg" //not used yet
 },
]

/**
 * Our characters
 */
const CHARACTERS = [
  {
    img: "character/character_1.svg"
  }, {
    img: "character/character_2.svg"
  },
]

/**
 * Our Views
 */
const VIEW = {
  PRELOAD: 'preload',
  START: 'start',
  GAME: 'game',
  WIN: 'win'
}

/**
 * Health Options
 */

 const HEALTHS = [
    {
   ID: "difficultyOpt-0",
   VALUE: 100,
   }, {
   ID: "difficultyOpt-1",
   VALUE: 150,
   }, {
   ID: "difficultyOpt-2",
   VALUE: 200,
   }
]
