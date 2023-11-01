const Informant = require("../Informant");
const ks = require('keysender');
const config = require("../config");

const win = ks.getAllWindows().find(({title}) => title == "Spelunky 2")

if(config.game === "spelunky_2"){
    if(win !== undefined){
        
    const { keyboard, workwindow } = new ks.Hardware(win.handle)

workwindow.setForeground();

// workwindow.addEventListener("keydown", (e) => {
//   Informant.info(`${e.key}`)
// })


function spelunky_2(channel, tags, message, self){

    if(message.startsWith("up")){
        Informant.info("Spelunky 2 up")
        keyboard.sendKey('up', 100)
    }
    else if(message.startsWith("down")){
        Informant.info("Spelunky 2 down")
        keyboard.sendKey('down', 100)
    }
    else if(message.startsWith("look up") || message.startsWith("climb up")){
        Informant.info("Spelunky 2 look up")
        keyboard.sendKey('up', 2000)
    }
    else if(message.startsWith("look down") || message.startsWith("climb down")){
        Informant.info("Spelunky 2 look down")
        keyboard.sendKey('down', 2000)
    }
    else if(message.startsWith("run right")){
        Informant.info("Spelunky 2 run right")
        keyboard.sendKey('right', 1500)
    }
    else if(message.startsWith("right")){
        Informant.info("Spelunky 2 right")
        keyboard.sendKey('right', 700)
    }
    else if(message.startsWith("left")){
        Informant.info("Spelunky 2 left")
        keyboard.sendKey('left', 700)
    }
    else if(message.startsWith("slight")){
        Informant.info("Spelunky 2 slight")
        keyboard.sendKey('right', 100)
    }
    else if(message.startsWith("run left")){
        Informant.info("Spelunky 2 run left")
        keyboard.sendKey('left', 1000)
    }
    else if(message.startsWith("sleft")){
        Informant.info("Spelunky 2 sleft")
        keyboard.sendKey('left', 100)
    }
    else if(message.startsWith("high jump")){
        Informant.info("Spelunky 2 high jump")
        keyboard.sendKey('z', 200)
    }
    else if(message.startsWith("jump")){
        Informant.info("Spelunky 2 jump")
        keyboard.sendKey('z', 250)
    }
    else if(message.startsWith("low jump") || message.startsWith("short hop")){
        Informant.info("Spelunky 2 low jump")
        keyboard.sendKey('z', 100)
    }
    else if(message.startsWith("high jump")){
        Informant.info("Spelunky 2 high jump")
        keyboard.sendKey('z', 400)
    }
    else if(message.startsWith("rump")){
        Informant.info("Spelunky 2 jump right")
        keyboard.sendKey('right', 600, 50)
        keyboard.sendKey('z', 400)        
    }
    else if(message.startsWith("srump")){
        Informant.info("Spelunky 2 small jump right")
        keyboard.sendKey('right', 500)
        keyboard.sendKey('z', 600)        
    }
    else if(message.startsWith("lump")){
        Informant.info("Spelunky 2 jump left")
        keyboard.sendKey('left', 500)
        keyboard.sendKey('z', 600)        
    }
    else if(message.startsWith("slump")){
        Informant.info("Spelunky 2 small jump left")
        keyboard.sendKey('left', 500)
        keyboard.sendKey('z', 300)        
    }
    else if(message.startsWith("attack") || message.startsWith("att") || message.startsWith("atk") || message.startsWith('whip')){
        Informant.info("Spelunky 2 attack")
        keyboard.sendKey('x')
    }
    else if(message.startsWith("aright") || message.startsWith('attack right') || message.startsWith('atk right')|| message.startsWith('whip right')|| message.startsWith('wright')){
        Informant.info("Spelunky 2 Aright")
        keyboard.sendKeys(['right','x'])
    }
    else if(message.startsWith("aleft")|| message.startsWith('attack left')|| message.startsWith('atk left')|| message.startsWith('whip left')|| message.startsWith('wleft')){
        Informant.info("Spelunky 2 aleft")
        keyboard.sendKeys(['left','x'])
    }
    else if(message.startsWith("jattack") || message.startsWith("jatt") || message.startsWith("jatk") || message.startsWith('jwhip')){
        Informant.info("Spelunky 2 attack")
        keyboard.sendKeys(['z','x'],[200,35],[100,0])
    }
    else if(message.startsWith("pickup") || message.startsWith("grab") || message.startsWith("lift") || message.startsWith('hold')){
        Informant.info("Spelunky 2 lift")
        keyboard.sendKey('down',100,50)
        keyboard.sendKey('x')
    }
    else if(message.startsWith("throw") || message.startsWith("toss") || message.startsWith("drop")){
        Informant.info("Spelunky 2 throw")
        keyboard.sendKey('up',100,50)
        keyboard.sendKey('x')
    }
    else if(message.startsWith("bomb")){
        Informant.info("Spelunky 2 bomb")
        keyboard.sendKey('c')
    }
    else if(message.startsWith("rope")){
        Informant.info("Spelunky 2 rope")
        keyboard.sendKey('d')
    }
    else if(message.startsWith("door") || message.startsWith("buy")){
        Informant.info("Spelunky 2 door/buy")
        keyboard.sendKey('a')
    }
    }
}

}
module.exports = spelunky_2;