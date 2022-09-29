function stopAll() {
return false;
}

function farmWheat() {
//Made by Zace#0142, edited by PoolPartyColin
//Starts in NW corner
startingX = Player.getPlayer().getX();
startingZ = Player.getPlayer().getZ();
currentX = Player.getPlayer().getX();
currentZ = Player.getPlayer().getZ();

//Set farm length and width here
farmLength = 124;
farmWidth = 20;

//while (int != 'key.keyboard.p') {
//    var int = event.key
//    if (int.toString() == 'key.keyboard.p') {
//    break
//    }
while(currentZ < startingZ + farmWidth){    
//  DROP SUPPLIES
    KeyBind.keyBind('key.forward', false);
    KeyBind.keyBind('key.use', false);
    Player.getPlayer().lookAt(-100000,73,0); // look West
    Client.waitTick(1);
    Chat.log("Dropping supplies");
    var iter = 2;
    for (let j = 2; j <= 9; j++) {
        var slotIt = 'key.hotbar.';
        var tmp = iter.toString();
        slotIt += tmp;
        KeyBind.keyBind(slotIt,true);
        Client.waitTick(1);
        KeyBind.keyBind(slotIt,false);  
        for (let i = 0; i <= 63; i++) {
            KeyBind.key('key.keyboard.q',true);
            Client.waitTick(1);
            KeyBind.key('key.keyboard.q',false);
        }
        iter++;
    }
    Chat.log("Supplies dropped");
// END DROP

    KeyBind.keyBind('key.forward', true);
    KeyBind.keyBind('key.use', true);
    Player.getPlayer().lookAt(270,90) //Walk east, look at ground
        while(currentX < startingX + farmLength){
            currentX = Player.getPlayer().getX();
            Client.waitTick(1);
        }
        Chat.log("While Loop 1")
    Player.getPlayer().lookAt(0,90)
        currentZ = Player.getPlayer().getZ();
        anchorZ = currentZ
        while(currentZ < anchorZ + 0.5){
            currentZ = Player.getPlayer().getZ();
            Client.waitTick(1);
        }
        Chat.log("While Loop 2")
    Player.getPlayer().lookAt(90,90)
        while(currentX > startingX){
                currentX = Player.getPlayer().getX();
                Client.waitTick(1);
        }
        Chat.log("While Loop 3")
     Player.getPlayer().lookAt(0,90)
        currentZ = Player.getPlayer().getZ();
        anchorZ = currentZ
        while(currentZ < anchorZ + 0.5){
            currentZ = Player.getPlayer().getZ();
            Client.waitTick(1);
        }
       Chat.log("While Loop 4")
       KeyBind.keyBind('key.forward', false);
       KeyBind.keyBind('key.use', false); 
}
//}
//var vnt = event.key
//Chat.log(vnt.toString());
//if ('key.keyboard.p' == toString(vnt)) {
//stopAll();
//}
}
let bot = farmWheat();
KeyBind.keyBind('key.forward', false);
KeyBind.keyBind('key.use', false);
Chat.log("Bot completed");


