import inquirer from "inquirer";
import ora from "ora";
import answers from "./func.js";
let score = 0;
export async function food(player) {
    const questions = [
        {
            question: "Which fruit is known for being a rich source of vitamin C?",
            choices: ["Banana", "Orange", "Watermelon", "Pineapple"],
            correct_answer: "Orange"
        },
        {
            question: "Which Italian dish consists of thin, flat pasta strips often served with tomato sauce and Parmesan cheese?",
            choices: ["Pizza", "Lasagna", "Spaghetti", "Risotto"],
            correct_answer: "Spaghetti"
        },
        {
            question: "What type of alcoholic beverage is made from fermented grapes?",
            choices: ["Vodka", "Whiskey", "Rum", "Wine"],
            correct_answer: "Wine"
        },
        {
            question: "Which spice is derived from the Crocus Sativus Flower and is one of the most expensive spices by weight?",
            choices: ["Cinnamon", "Saffron", "Paprika", "Turmeric"],
            correct_answer: "Saffron"
        },
        {
            question: "Which spice is known as 'Black Gold'?",
            choices: ["Pepper", "Saffron", "Vanilla", "Cinnamon"],
            correct_answer: "Pepper"
        },
        {
            question: "Which fruit is small, round, and often found in red, green, or black varieties?",
            choices: ["Apple", "Grape", "Orange", "Mango"],
            correct_answer: "Grape"
        },
        {
            question: "Which vegetable is known for its bright green color and is commonly used in salads?",
            choices: ["Lettuce", "Cabbage", "Spinach", "Kale"],
            correct_answer: "Lettuce"
        },
        {
            question: "Which fruit is known for its fuzzy skin and bright orange flesh?",
            choices: ["Peach", "Apricot", "Papaya", "Persimmon"],
            correct_answer: "Peach"
        },
        {
            question: "Which vegetable is known for its high vitamin A content and orange color?",
            choices: ["Carrot", "Sweet Potato", "Orange", "Peach"],
            correct_answer: "Carrot"
        },
        {
            question: "Which fruit is known as the 'King of Fruits' in Southeast Asia?",
            choices: ["Mango", "Apple", "Banana", "Pineapple"],
            correct_answer: "Mango"
        },
        {
            question: "Which sweet treat is made from whipped egg whites and sugar?",
            choices: ["Chocolate Cake", "Brownie", "Macaron", "Cupcake"],
            correct_answer: "Macaron"
        },
        {
            question: "Which beverage is traditionally made from fermented apples?",
            choices: ["Beer", "Wine", "Cider", "Sake"],
            correct_answer: "Cider"
        },
        {
            question: "What is the main ingredient in the Indian dish 'samosa'?",
            choices: ["Potato", "Lentils", "Spinach", "Paneer"],
            correct_answer: "Potato"
        },
        {
            question: "Which country is famous for its maple syrup?",
            choices: ["United States", "Canada", "France", "Australia"],
            correct_answer: "Canada"
        },
        {
            question: "What type of food is paneer?",
            choices: ["Bread", "Cheese", "Meat", "Vegetable"],
            correct_answer: "Cheese"
        },
        {
            question: "What type of dessert is made from layers of sponge cake, custard, and chocolate?",
            choices: ["Tiramisu", "Pavlova", "Trifle", "Baklava"],
            correct_answer: "Trifle"
        },
        {
            question: "Which fruit is known for its yellow flesh, creamy texture and distinct flavor, often used in desserts and milkshakes?",
            choices: ["Peach", "Mango", "Banana", "Papaya"],
            correct_answer: "Mango"
        },
        {
            question: "Which type of cuisine does the dish 'sushi' belong to?",
            choices: ["Thai", "Japanese", "Indian", "Chinese"],
            correct_answer: "Japanese"
        },
        {
            question: "Which fruit is known for its sour taste and is often used to make a refreshing summer drink?",
            choices: ["Lemon", "Orange", "Grapefruit", "Lime"],
            correct_answer: "Lemon"
        },
        {
            question: "Which of these is a type of tea?",
            choices: ["Chamomile", "Espresso", "Latte", "Cappuccino", "Hot Chocolate"],
            correct_answer: "Chamomile"
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
