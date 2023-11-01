const config = require("../../config")

async function items(){

    let items;


        let response = await fetch(`${config.apiScheme}${config.apiHost}:${config.apiPort}/items`)
        if(response.ok){
            items = await response.json()
        }

}






// [
//     {
//         name: "Acorn Helmet",
//         type: "Physical",
//         set: "Acorn",
//         slot: "Headgear",
//         description: "A helmet fashioned out of acorns gathered from nearby lands.",
//         cp: 3,
//         cpSet: 4,
//         cost: 30
//     },
//     {
//         name: "Acorn Cuirass",
//         type: "Physical",
//         set: "Acorn",
//         slot: "Torso",
//         description: "A piece of armor somehow thrown together from acorn shells leftover from the area's squirrel population",
//         cp: 4,
//         cpSet: 6,
//         cost: 100
//     },
//     {
//         name: "Acorn Gauntlets",
//         type: "Physical",
//         set: "Acorn",
//         slot: "Handgear",
//         description: "Gauntlets crafted from acorns strewn about the ground. They have little acorn tops on each of the knuckles.",
//         cp: 4,
//         cpSet: 6,
//         cost: 45
//     },
//     {
//         name: "Acorn Sabatons",
//         type: "Physical",
//         set: "Acorn",
//         slot: "Footwear",
//         description: "Very uncomfortable boots made out of acorns. They scratch your feet as you walk, but they do protect you a fair amount. ",
//         cp: 2,
//         cpSet: 3,
//         cost: 40
//     },
//     {
//         name: "Scrap Metal Shield",
//         type: "Physical",
//         set: "Weapon",
//         slot: "Off Hand",
//         description: "You found this metal on the streets and decided to use it to protect yourself. It doesn't do much, but it's better than nothing!",
//         cp: 2,
//         cost: 50
//     },
//     {
//         name: "Very Sharp Stick",
//         type: "Physical",
//         set: "Weapon",
//         slot: "Main Hand",
//         description: "Like a child with a knife, you found a stick and sharpened it to a fine point. It'll work as a weapon, but not very well. You probably should have kept the knife instead. (Knife not included)",
//         cp: 4,
//         cost: 100
//     },
//     {
//         name: "Novice Hood",
//         type: "Magic",
//         set: "Novice",
//         slot: "headgear",
//         description: "",
//         cp: 4,
//         cpSet: 6,
//         cost: 65
//     },
//     {
//         name: "Student Robes",
//         type: "Magic",
//         set: "Novice",
//         slot: "torso",
//         description: "",
//         cp: 5,
//         cpSet: 7,
//         cost: 100
//     },
//     {
//         name: "Novice Gloves",
//         type: "Magic",
//         set: "Novice",
//         slot: "handgear",
//         description: "",
//         cp: 2,
//         cpSet: 3,
//         cost: 30
//     },
//     {
//         name: "Novice Boots",
//         type: "Magic",
//         set: "Novice",
//         slot: "footwear",
//         description: "",
//         cp: 2,
//         cpSet: 3,
//         cost: 45
//     },
//     {
//         name: "Beginner's Spellbook",
//         type: "Magic",
//         set: "Weapon",
//         slot: "both",
//         description: "",
//         cp: 6,
//         cost: 125
//     },
//     {
//         name: "Leather Cloak",
//         type: "Ranged",
//         set: "Leather",
//         slot: "headgear",
//         description: "",
//         cp: 4,
//         cpSet: 6,
//         cost: 40
//     },
//     {
//         name: "Leather Armor",
//         type: "Ranged",
//         set: "Leather",
//         slot: "torso",
//         description: "",
//         cp: 4,
//         cpSet: 6,
//         cost: 120
//     },
//     {
//         name: "Leather Gloves",
//         type: "Ranged",
//         set: "Leather",
//         slot: "handgear",
//         description: "",
//         cp: 2,
//         cpSet: 3,
//         cost: 45
//     },
//     {
//         name: "Leather Boots",
//         type: "Ranged",
//         set: "Leather",
//         slot: "footwear",
//         description: "",
//         cp: 2,
//         cpSet: 3,
//         cost: 35
//     },
//     {
//         name: "Wooden Short Bow",
//         type: "Ranged",
//         set: "Weapon",
//         slot: "both",
//         description: "",
//         cp: 7,
//         cost: 125
//     },
//     {
//         name: "Stone Helm",
//         type: "Physical",
//         set: "Stone",
//         slot: "headgear",
//         description: "",
//         cp: 6,
//         cpSet: 9,
//         cost: 125
//     },
//     {
//         name: "Chiseled Chestplate",
//         type: "Physical",
//         set: "Stone",
//         slot: "torso",
//         description: "",
//         cp: 10,
//         cpSet: 15,
//         cost: 225
//     },
//     {
//         name: "Granite Gauntlets",
//         type: "Physical",
//         set: "Stone",
//         slot: "handgear",
//         description: "",
//         cp: 6,
//         cpSet: 9,
//         cost: 175
//     },
//     {
//         name: "Basalt Boots",
//         type: "Physical",
//         set: "Stone",
//         slot: "footwear",
//         description: "",
//         cp: 8,
//         cpSet: 12,
//         cost: 150
//     },
//     {
//         name: "Clay Claymore",
//         type: "Physical",
//         set: "Weapon",
//         slot: "both",
//         description: "",
//         cp: 12,
//         cost: 300
//     },
//     {
//         name: "Summoner's Hood",
//         type: "Magic",
//         set: "Apprentice",
//         slot: "headgear",
//         description: "",
//         cp: 8,
//         cpSet: 12,
//         cost: 170
//     },
//     {
//         name: "Apprentice Robes",
//         type: "Magic",
//         set: "Apprentice",
//         slot: "torso",
//         description: "",
//         cp: 12,
//         cpSet: 18,
//         cost: 290
//     },
//     {
//         name: "Summoner's Handwraps",
//         type: "Magic",
//         set: "Apprentice",
//         slot: "handgear",
//         description: "",
//         cp: 4,
//         cpSet: 6,
//         cost: 95
//     },
//     {
//         name: "Apprentice Footwraps",
//         type: "Magic",
//         set: "Apprentice",
//         slot: "footwear",
//         description: "",
//         cp: 6,
//         cpSet: 9,
//         cost: 90
//     },
//     {
//         name: "Staff of the Forest",
//         type: "Magic",
//         set: "Weapon",
//         slot: "both",
//         description: "",
//         cp: 12,
//         cost: 330
//     },
//     {
//         name: "Hunter's Cowl",
//         type: "Ranged",
//         set: "Hunter",
//         slot: "headgear",
//         description: "",
//         cp: 8,
//         cpSet: 12,
//         cost: 150
//     },
//     {
//         name: "Tracker's Jacket",
//         type: "Ranged",
//         set: "Hunter",
//         slot: "torso",
//         description: "",
//         cp: 8,
//         cpSet: 12,
//         cost: 200
//     },
//     {
//         name: "Hunter's Handwraps",
//         type: "Ranged",
//         set: "Hunter",
//         slot: "handgear",
//         description: "",
//         cp: 8,
//         cpSet: 12,
//         cost: 200
//     },
//     {
//         name: "Tracker's Shoes",
//         type: "Ranged",
//         set: "Hunter",
//         slot: "footwear",
//         description: "",
//         cp: 6,
//         cpSet: 9,
//         cost: 150
//     },
//     {
//         name: "Heartwood Longbow",
//         type: "Ranged",
//         set: "Weapon",
//         slot: "both",
//         description: "",
//         cp: 12,
//         cost: 275
//     },

// ]

let dualShell = {
        name: "DualShell",
        type: "Shell",
        set: "Shell",
        slot: "offHand",
        description: "",
        cp: 0,
}
module.exports = {items, dualShell}