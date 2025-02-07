#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import { generalKnowledge } from "./quiz-topics/gk.js";
import { pakistan } from "./quiz-topics/pak.js";
import { geography } from "./quiz-topics/geo.js";
import { sports } from "./quiz-topics/sports.js";
import { food } from "./quiz-topics/food.js";
import chalkAnimation from "chalk-animation";

async function welcome() {
    let title = chalkAnimation.neon(`\n\t---------------------------------\n\t       Welcome To The Quiz\n\t---------------------------------\n`, 1);
    await new Promise((resolve) => {
        setTimeout(resolve, 3000);

    });
    title.stop()

}

await welcome()

async function main() {
    
    let player = await inquirer.prompt([
        {
            name: "name",
            message: "Enter your name: ",
            type: "input"
        }
    ]);

    player = player.name
    
    let topics = await inquirer.prompt([
        {
            name: "option",
            message: "Select a topic: ",
            type: "list",
            choices: [
                { name: chalk.hex('#87CEEB')("General Knowledge"), value: "General Knowledge" },
                { name: chalk.hex('#87CEEB')("Pakistan"), value: "Pakistan" },
                { name: chalk.hex('#87CEEB')("Geography"), value: "Geography" },
                { name: chalk.hex('#87CEEB')("Sports"), value: "Sports" },
                { name: chalk.hex('#87CEEB')("Food & Drink"), value: "Food & Drink" },
                { name: chalk.hex('#87CEEB')("Random"), value: "Random" }
            ]
        }
    ]);

    switch (topics.option) {
        case "General Knowledge":
            await generalKnowledge(player);

            break;

        case "Pakistan":
            await pakistan(player);

            break;

        case "Geography":
            await geography(player);
            
            break;

        case "Sports":
            await sports(player);
            
            break;

        case "Food & Drink":
            await food(player)
            
            break;

        case "Random":
            const randomNum = Math.floor(Math.random() * 5);

            switch (randomNum) {
                case 0:
                    console.log("Randomly selected topic: 'General Knowledge'\n");
                    await generalKnowledge(player);
                    break;
                case 1:
                    console.log("Randomly selected topic: 'Pakistan'\n");
                    await pakistan(player);
                    break;
                case 2:
                    console.log("Randomly selected topic: 'Geography'\n");
                    await geography(player);
                    break;
                case 3:
                    console.log("Randomly selected topic: 'Sports'\n");
                    await sports(player);
                    break;
                case 4:
                    console.log("Randomly selected topic: 'Food & Drink'\n");
                    await food(player);
                    break;
                default:
                    console.log("Invalid option selected.");
                    break;
            }
            break;

        default:
            console.log("Invalid option selected.");
            break;
    }
}

main()