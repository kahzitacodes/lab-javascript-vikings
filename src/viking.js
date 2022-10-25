// Soldier
class Soldier {

    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health = this.health - damage;
    } 
}

// Viking
class Viking extends Soldier{
    
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health = this.health - damage;

        if (this.health <= 0) {
            return `${this.name} has died in act of combat`;
        } 

        return `${this.name} has received ${damage} points of damage`;
    }

    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage){
        this.health = this.health - damage;
        
        if (this.health <= 0) {
            return "A Saxon has died in combat";
        }

        return `A Saxon has received ${damage} points of damage`;
    }
}

// War
class War {

    vikingArmy = [];
    saxonArmy = [];

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    

    vikingAttack() {

        let vikingPos = Math.floor(Math.random() * this.vikingArmy.length);
        let saxonPos = Math.floor(Math.random() * this.saxonArmy.length);

        let attackResult = this.saxonArmy[saxonPos].receiveDamage(this.vikingArmy[vikingPos].strength);

        if(this.saxonArmy[saxonPos].health <= 0){
            this.saxonArmy.splice(saxonPos, 1);
        }

        return attackResult;
    }

    saxonAttack(){
        let vikingPos = Math.floor(Math.random() * this.vikingArmy.length);
        let saxonPos = Math.floor(Math.random() * this.saxonArmy.length);

        let attackResult = this.vikingArmy[vikingPos].receiveDamage(this.saxonArmy[saxonPos].strength);

        if(this.vikingArmy[vikingPos].health <= 0){
            this.vikingArmy.splice(vikingPos, 1);
        }

        return attackResult;
    }

    showStatus(){
        if(this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!";
        }
        else if(this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
