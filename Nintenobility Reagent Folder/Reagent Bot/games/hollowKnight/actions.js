const Informant = require("../../Informant")
const ks = require('keysender');
const win = ks.getAllWindows().find(({title}) => title == "Hollow Knight")

if(win!== undefined){
const { keyboard, workwindow } = new ks.Hardware(win.handle)


workwindow.setForeground();
function up(){
    Informant.info("Hollow Knight up")
    keyboard.sendKey('up', 100)
}

function down(){
    Informant.info("Hollow Knight down")
        keyboard.sendKey('down', 100)
}

function lookUp(){
    Informant.info("Hollow Knight look up")
    keyboard.sendKey('up', 4000)
}

function lookDown(){
    Informant.info("Hollow Knight look down")
    keyboard.sendKey('down', 4000)
}

function right(){
    Informant.info("Hollow Knight right")
    keyboard.sendKey('right', 700)
}

function smallRight(){
    Informant.info("Hollow Knight slight")
    keyboard.sendKey('right', 100)
}

function runRight(){
    Informant.info("Hollow Knight run right")
    keyboard.sendKey('right', 1500)
}

function left(){
    Informant.info("Hollow Knight left")
    keyboard.sendKey('left', 700)
}

function smallLeft(){
    Informant.info("Hollow Knight sleft")
    keyboard.sendKey('left', 100)
}

function runLeft(){
    Informant.info("Hollow Knight run left")
    keyboard.sendKey('left', 1000)
}

function jump(){
    Informant.info("Hollow Knight jump")
    keyboard.sendKey('z', 250)
}

function lowJump(){
    Informant.info("Hollow Knight low jump")
    keyboard.sendKey('z', 100)
}

function highJump(){
    Informant.info("Hollow Knight high jump")
    keyboard.sendKey('z', 400)
}

function rightJump(){
    Informant.info("Hollow Knight jump right")
    keyboard.sendKey('right', 800, 200)
    keyboard.sendKey('z', 600) 
}

function smallJumpRight(){
    Informant.info("Hollow Knight small jump right")
    keyboard.sendKey('right', 500, 200)
    keyboard.sendKey('z', 600)
}

function leftJump(){
    Informant.info("Hollow Knight jump left")
    keyboard.sendKey('left', 800, 200)
    keyboard.sendKey('z', 600) 
}

function smallLeftJump(){
    Informant.info("Hollow Knight small jump left")
    keyboard.sendKey('left', 500, 200)
    keyboard.sendKey('z', 600) 
}

function attack(){
    Informant.info("Hollow Knight attack")
    keyboard.sendKey('x')
}

function rightAttack(){
    Informant.info("Hollow Knight Aright")
    keyboard.sendKeys(['right','x'])
}

function leftAttack(){
    Informant.info("Hollow Knight aleft")
    keyboard.sendKeys(['left','x'])
}

function upAttack(){
    Informant.info("Hollow Knight aup")
    keyboard.sendKey('up', 100)
    keyboard.sendKey('x', 35)
}

function downAttack(){
    Informant.info("Hollow Knight adown")
    keyboard.sendKey('down', 100)
    keyboard.sendKey('x', 35)
}

function pogoRight(){
    Informant.info("Hollow Knight pogo right")
    keyboard.sendKey('right', 1500, 200)
    keyboard.sendKeys(['z', ['down', 'x']], 450, 100)
}

function pogoLeft(){
    Informant.info("Hollow Knight pogo left")
    keyboard.sendKey('left', 1500, 200)
    keyboard.sendKeys(['z', ['down', 'x']], 450, 100)
}

function heal(){
    Informant.info("Hollow Knight heal")
    keyboard.sendKey('a', 3000)
}
}

module.exports = {up, down, lookDown, lookUp, right, smallRight, runRight, left, smallLeft, runLeft, jump, lowJump, highJump, rightJump, smallJumpRight, leftJump, smallLeftJump, attack, upAttack, downAttack, rightAttack, leftAttack, pogoRight, pogoLeft, heal }