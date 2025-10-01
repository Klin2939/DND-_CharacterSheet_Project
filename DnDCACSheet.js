class Character {
    constructor(CACName = " ", Class = " ", Level = 0, Str = 0, Dex = 0, Con = 0, Int = 0, Wis = 0, Char = 0){
        this.CACName = CACName;
        this.Class = Class;
        this.Level = Level;
        this.Str = Str;
        this.Dex = Dex;
        this.Con = Con;
        this.Int = Int;
        this.Wis = Wis;
        this.Char = Char;
    }

}



document.getElementById("CAC Name").addEventListener('onchange', function(){
    let cacName = document.getElementById('CAC Name').value
})
document.getElementById("CAC Name").addEventListener('onchange', function(){
    let cacLevel = document.getElementById('level').value
})
document.getElementById("submit").addEventListener('click', function(){
    let strScore = document.getElementById('strength').value;
    console.log(strScore)
    let dexScore = document.getElementById('dexterity').value;
    console.log(dexScore)
    let conScore = document.getElementById('consitusion').value;
    console.log(conScore)
    let intScore = document.getElementById('intelegence').value;
    console.log(intScore)
    let wisScore = document.getElementById('wisdom').value;
    console.log(wisScore)
    let charScore = document.getElementById('charisma').value;
    console.log(charScore)

    //newCac = Character(cacName, cacLevel, strScore, dexScore, conScore, intScore, wisScore, charScore)

    //console.log(JSON.stringify(newCac));

    sMod = modCalc(strScore)
    console.log(sMod)
    document.getElementById("str").innerHTML = sMod;
    dMod = modCalc(dexScore)
    console.log(dMod)
    document.getElementById("dex").innerHTML = dMod;
    cMod = modCalc(conScore)
    console.log(cMod)
    document.getElementById("con").innerHTML = cMod;
    iMod = modCalc(intScore)
    console.log(iMod)
    document.getElementById("int").innerHTML = iMod;
    wMod = modCalc(wisScore)
    console.log(wMod)
    document.getElementById("wis").innerHTML = wMod;
    chMod = modCalc(charScore)
    console.log(chMod)
    document.getElementById("char").innerHTML = chMod;

})

function modCalc(score) {
    mod = (score - 10) / 2
    if (isInt(mod) == true){
        return `+${mod}`
    } else {
        return `+${mod - .5}`
    }
    
}
function isInt(n) {
    return n % 1 === 0;
 }