

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
