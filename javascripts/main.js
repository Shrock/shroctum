
function Weapon(name, damage, durability) {
                this.name = name;
                this.damage = damage;
                this.durability = durability;
};

function Character(name, health, armour, baseDmg, specAtt, weapon) {
        this.type = "human";
        this.name = name;
        this.health = health;
        this.armour = armour;
        this.ability = specAtt;
        this.baseDamage = baseDmg;
        this.weapon = weapon;
}

function createWeapons() {
        ibm = new Weapon("IBM Mechanical Keyboard", 11, 10);
        bong = new Weapon("Giant Bong", 1000, 1);
}

function createCharacters() {
        joblessJosh = new Character("Jobless Josh", 120, 5, 7, "Superior Intellect", ibm);
        ballsDeepBilly = new Character("Balls-deep Billy", 150, 7, 5, " ", ibm);
        scumbagSam = new Character("Scumbag Sam", 150, 7, 5, " ", ibm);
        mastMat = new Character("Master-baiter Mat", 100, 4, 9, "", ibm);
        dickheadDave = new Character("Dickhead Dave", 130, 6, 7, "", ibm);
        dbagDean = new Character("Dbag Dean", 140, 6, 6, " ", ibm);
        borinellJon = new Character("Borin' 'ell Jon", 70, 3, 4, "Hits from the bong", bong);
}

createWeapons();
createCharacters();
var characters = [];
characters.push(scumbagSam, ballsDeepBilly, joblessJosh, mastMat, dickheadDave, dbagDean, borinellJon);

for (var i=0; i < characters.length; i++) {
        createButton(characters[i]);
        //console.log(characters[i]);
}

function remAttr(parent, child) {
        var d = document.getElementById(parent);
        var element = d.getElementsByTagName(child);
        for (i = element.length - 1; i >= 0; i--) {
                element[i].parentNode.removeChild(element[i]);
        }
}

function createElement(parent, child, label, eleText) {
        var d = document.getElementById(parent);
        var para = document.createElement(child);
        //para.setAttribute('class','thechosenone');
        var text = document.createTextNode(label + " " + eleText);
        para.appendChild(text);
        d.appendChild(para);
}

function createButton(msg) {
        charName = msg.name;
        var buttonnode= document.createElement('input');
        buttonnode.setAttribute('type','button');
        buttonnode.setAttribute('name',charName);
        buttonnode.setAttribute('value',charName);
        buttonnode.setAttribute('id',msg.name);
        buttonnode.setAttribute('class', 'charSelect');
        buttonnode.setAttribute('onclick', "chosen(this.id)");
        var element=document.getElementById("div1");
        element.appendChild(buttonnode);
        
};
function chosen(choice) {
        //document.getElementsByTagName('input').setAttribute('class', 'charSelect');
        var unselected = document.getElementsByTagName('input');

        for(var i = 0; i < unselected.length; i++) {
                unselected[i].setAttribute('class', 'charSelect');
        }
        document.getElementById(choice).setAttribute('class', 'chosen');
        
        switch (choice) {
                case 'jobless josh':
                        chosenChar = joblessJosh;
                        break;
                case 'Master-baiter Mat':
                        chosenChar = mastMat;
                        break;
                case 'Dickhead Dave':
                        chosenChar = dickheadDave;
                        break;
                case 'Dbag Dean':
                        chosenChar = dbagDean;
                        break;
                case "Borin' 'ell Jon":
                        chosenChar = borinellJon;
                        break;
                case 'Scumbag Sam':
                        chosenChar = scumbagSam;
                        break;
                case 'Balls-deep Billy':
                        chosenChar = ballsDeepBilly;
                        break;
                default:
                        chosenChar = joblessJosh;
        }
        
        var d = document.getElementById('div1');
        var para = document.createElement('div');
        para.setAttribute('id', 'div2');
        d.appendChild(para);
        
        totalDamage = chosenChar.baseDamage + chosenChar.weapon.damage;
        remAttr('div2', 'p');
        createElement('div2', 'p', "Name: ", chosenChar.name);
        createElement('div2', 'p', "HP: ", chosenChar.health);
        createElement('div2', 'p', "Weapon of choice: ", chosenChar.weapon.name);
        createElement('div2', 'p', "Base Damage: ", chosenChar.baseDamage);
        createElement('div2', 'p', "Armour: ", chosenChar.armour);
        createElement('div2', 'p', "Total Damage: ", totalDamage);

        
        
};
