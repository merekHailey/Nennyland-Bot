const ks = require('keysender');
const config = require("../../config");
const {up, down, lookDown, lookUp, right, smallRight, runRight, left, smallLeft, runLeft, jump, lowJump, highJump, rightJump, smallJumpRight, leftJump, smallLeftJump, attack, upAttack, downAttack, rightAttack, leftAttack, pogoRight, pogoLeft, heal } = require('./actions')


function hollowKnightChat(channel, tags, message, self){

    if(message.startsWith("up")){
        up();
    }
    else if(message.startsWith("down")){
        down();
    }
    else if(message.startsWith("look up")){
        lookUp();
    }
    else if(message.startsWith("look down")){
        lookDown();
    }
    else if(message.startsWith("run right")){
        runRight();
    }
    else if(message.startsWith("right")){
        right();
    }
    else if(message.startsWith("left")){
        left();
    }
    else if(message.startsWith("slight")){
        smallRight();
    }
    else if(message.startsWith("run left")){
        runLeft();
    }
    else if(message.startsWith("sleft")){
        smallLeft();
    }
    else if(message.startsWith("high jump")){
        highJump();
    }
    else if(message.startsWith("jump") || message.startsWith('select')){
        jump();
    }
    else if(message.startsWith("low jump") || message.startsWith("short hop")){
        lowJump();
    }
    else if(message.startsWith("rump")){
        rightJump();       
    }
    else if(message.startsWith("srump")){
        smallJumpRight();        
    }
    else if(message.startsWith("lump")){
        leftJump();       
    }
    else if(message.startsWith("slump")){
        smallLeftJump();       
    }
    else if(message.startsWith("attack") || message.startsWith("att") || message.startsWith("atk")){
        attack();
    }
    else if(message.startsWith("aright")){
        rightAttack();
    }
    else if(message.startsWith("aleft")){
        leftAttack();
    }
    else if(message.startsWith("aup")){
        upAttack();
    }
    else if(message.startsWith("adown")){
        downAttack();
    }
    else if(message.startsWith("pogo right")){
        pogoRight();        
    }
    else if(message.startsWith("pogo left")){
        pogoLeft();
    } 
    else if(message.startsWith("heal")){
        heal();
    }
}


module.exports = hollowKnightChat;