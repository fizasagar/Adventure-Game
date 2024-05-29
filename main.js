import inquirer from "inquirer";
//For HeroPlayer
class Player {
    name;
    health = 100;
    constructor(name) {
        this.name = name;
    }
    decreaseHealth() {
        this.health -= 20;
    }
    increaseHealth() {
        this.health = 100;
    }
}
//For Enemy
class Enemy {
    name;
    health = 100;
    constructor(name) {
        this.name = name;
    }
    decreaseHealth() {
        this.health -= 20;
    }
    increaseHealth() {
        this.health = 100;
    }
}
// (Step 01) Player Object
async function main() {
    const { playerName } = await inquirer.prompt([
        {
            type: "input",
            name: "playerName",
            message: "Enter Your Player Name:"
        }
    ]);
    // (Step 02) Enemy Object
    const { enemyType } = await inquirer.prompt([
        {
            type: "list",
            name: "enemyType",
            choices: ["Alien", "Zombie", "Witch"],
            message: "Select the enemy you fight with:"
        }
    ]);
    // (Step 03) Battle Field
    const player = new Player(playerName);
    const enemy = new Enemy(enemyType);
    console.log(`${player.name} v/s ${enemy.name}`);
    //(Step 04) Action
    do {
        const { action } = await inquirer.prompt([
            //action object
            {
                type: "list",
                name: "action",
                choices: ["attack", "defend", "range target", "run"],
                message: "Choose the attack type to perfom action:"
            }
        ]);
        //(Step 05 Switch case)
        switch (action) {
            case "attack":
                const randomNum = Math.random();
                //player health
                if (randomNum > 0.5) {
                    player.decreaseHealth();
                    console.log(`${player.name} health: ${player.health}`);
                    console.log(`${enemy.name} health: ${enemy.health}`);
                    if (player.health <= 0) {
                        console.log(`You Loss ${player.name}, Try Again`);
                        return;
                    }
                }
                else {
                    //enemy health 
                    enemy.decreaseHealth();
                    enemy.decreaseHealth();
                    console.log(`${player.name} health: ${player.health}`);
                    console.log(`${enemy.name} health: ${enemy.health}`);
                    if (enemy.health <= 0) {
                        console.log(`Congratulations ${player.name}, You Won`);
                        return;
                    }
                }
                break;
        }
    } while (true);
}
main();
