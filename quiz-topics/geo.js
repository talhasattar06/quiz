import inquirer from "inquirer";
import ora from "ora";
import answers from "./func.js";
let score = 0;
export async function geography(player) {
    const questions = [
        {
            question: "What is the largest ocean on Earth?",
            choices: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
            correct_answer: "Pacific Ocean"
        },
        {
            question: "Which city is known as the 'City of Love'?",
            choices: ["Paris", "Rome", "Venice", "Florence"],
            correct_answer: "Paris"
        },
        {
            question: "Which country is known as the 'Land of the Rising Sun'?",
            choices: ["Japan", "China", "Korea", "Vietnam"],
            correct_answer: "Japan"
        },
        {
            question: "What is the largest continent by land area?",
            choices: ["Asia", "Africa", "North America", "South America"],
            correct_answer: "Asia"
        },
        {
            question: "What is the largest desert in the world?",
            choices: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Kalahari Desert"],
            correct_answer: "Sahara Desert"
        },
        {
            question: "Which city is known for the Taj Mahal?",
            choices: ["New Delhi", "Mumbai", "Kolkata", "Agra"],
            correct_answer: "Agra"
        },
        {
            question: "What is the tallest mountain in the world?",
            choices: ["Mount Kilimanjaro", "Mount Everest", "Mount Fuji", "Mount McKinley"],
            correct_answer: "Mount Everest"
        },
        {
            question: "Where is the Eiffel Tower located?",
            choices: ["Italy", "Paris", "Berlin", "New York City"],
            correct_answer: "Paris"
        },
        {
            question: "What is the capital of Italy?",
            choices: ["Madrid", "Rome", "Paris", "Athens"],
            correct_answer: "Rome"
        },
        {
            question: "What is the official language of Brazil?",
            choices: ["Spanish", "Portuguese", "English", "Brazilian"],
            correct_answer: "Portuguese"
        },
        {
            question: "What is the highest waterfall in the world?",
            choices: ["Niagara Falls", "Victoria Falls", "Angel Falls", "Iguazu Falls"],
            correct_answer: "Angel Falls"
        },
        {
            question: "What is the capital of Australia?",
            choices: ["Canberra", "Sydney", "Melbourne", "Brisbane"],
            correct_answer: "Canberra"
        },
        {
            question: "Which river is the longest in the world?",
            choices: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
            correct_answer: "Nile River"
        },
        {
            question: "What is the capital of Russia?",
            choices: ["Moscow", "St. Petersburg", "Kiev", "Berlin"],
            correct_answer: "Moscow"
        },
        {
            question: "What is the largest island in the world?",
            choices: ["Greenland", "Madagascar", "Borneo", "Java"],
            correct_answer: "Greenland"
        },
        {
            question: "What is the capital of China?",
            choices: ["Shanghai", "Beijing", "Guangzhou", "Shenzhen"],
            correct_answer: "Beijing"
        },
        {
            question: "Where is the Machu Picchu located?",
            choices: ["Peru", "Bolivia", "Ecuador", "Colombia"],
            correct_answer: "Peru"
        },
        {
            question: "What is the capital of Spain?",
            choices: ["Barcelona", "Madrid", "Valencia", "Seville"],
            correct_answer: "Madrid"
        },
        {
            question: "What is the capital of Egypt?",
            choices: ["Cairo", "Alexandria", "Giza", "Luxor"],
            correct_answer: "Cairo"
        },
        {
            question: "Which mountain range is the longest in the world?",
            choices: ["Rocky Mountains", "Andes Mountains", "Himalayas", "Karakoram", "Appalachian Mountains"],
            correct_answer: "Andes Mountains"
        }
    ];
    async function askQuestions() {
        const userAnswers = [];
        for (const q of questions) {
            let answers = await inquirer.prompt([
                {
                    name: "quiz",
                    type: "list",
                    message: q.question,
                    choices: q.choices
                }
            ]);
            userAnswers.push({
                question: q.question,
                answer: answers.quiz,
                correct: answers.quiz === q.correct_answer,
                correct_answer: q.correct_answer
            });
        }
        console.log();
        const spinner = ora({
            text: 'Loading...',
            spinner: 'dots',
            color: 'cyan',
        }).start();
        await new Promise(resolve => setTimeout(resolve, 1000));
        spinner.stop();
        console.log("\nAnswers: ");
        answers(questions, userAnswers, score, player);
    }
    await askQuestions();
}
