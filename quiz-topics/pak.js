import inquirer from "inquirer";
import ora from "ora";
import answers from "./func.js";
let score = 0;
export async function pakistan(player) {
    const questions = [
        {
            question: "Which river flows along the eastern border of Pakistan?",
            choices: ["Indus", "Jhelum", "Ravi", "Chenab"],
            correct_answer: "Ravi"
        },
        {
            question: "What is the national bird of Pakistan?",
            choices: ["Peacock", "Chukar Partridge", "Markhor", "Hoopoe"],
            correct_answer: "Chukar Partridge"
        },
        {
            question: "Which mountain range is located in the northern part of Pakistan?",
            choices: ["Karakoram", "Himalayas", "Hindu Kush", "Sulaiman"],
            correct_answer: "Hindu Kush"
        },
        {
            question: "What is the highest peak in Pakistan?",
            choices: ["Nanga Parbat", "K2", "Broad Peak", "Gasherbrum I"],
            correct_answer: "K2"
        },
        {
            question: "Which province of Pakistan is known as the 'Land of the Pure'?",
            choices: ["Punjab", "Sindh", "Balochistan", "Khyber Pakhtunkhwa"],
            correct_answer: "Punjab"
        },
        {
            question: "Which of the following is the largest city in Pakistan by population?",
            choices: ["Karachi", "Lahore", "Islamabad", "Faisalabad"],
            correct_answer: "Karachi"
        },
        {
            question: "What is the national flower of Pakistan?",
            choices: ["Jasmine", "Rose", "Lily", "Sunflower"],
            correct_answer: "Jasmine"
        },
        {
            question: "Which year did Pakistan gain independence from British rule?",
            choices: ["1956", "1947", "1971", "1980"],
            correct_answer: "1947"
        },
        {
            question: "What is the capital city of Punjab province in Pakistan?",
            choices: ["Quetta", "Lahore", "Islamabad", "Karachi"],
            correct_answer: "Lahore"
        },
        {
            question: "What is the official language of Pakistan?",
            choices: ["English", "Punjabi", "Urdu", "Sindhi"],
            correct_answer: "Urdu"
        },
        {
            question: "Which city is known as the cultural capital of Pakistan?",
            choices: ["Peshawar", "Lahore", "Islamabad", "Karachi"],
            correct_answer: "Lahore"
        },
        {
            question: "What is the currency of Pakistan?",
            choices: ["Dollar", "Rupee", "Taka", "Rial"],
            correct_answer: "Rupee"
        },
        {
            question: "Which sea is located to the south of Pakistan?",
            choices: ["Caspian Sea", "Black Sea", "Red Sea", "Arabian Sea"],
            correct_answer: "Arabian Sea"
        },
        {
            question: "What is the nickname of Pakistan's national cricket team?",
            choices: ["Lions", "Men in Green", "Tigers", "Eagles"],
            correct_answer: "Men in Green"
        },
        {
            question: "Who is the founder of Pakistan?",
            choices: ["Allama Iqbal", "Liaquat Ali Khan", "Muhammad Ali Jinnah", "Zulfikar Ali Bhutto"],
            correct_answer: "Muhammad Ali Jinnah"
        },
        {
            question: "Which ancient civilization existed in the area that is now Pakistan?",
            choices: ["Mesopotamian Civilization", "Indus Valley Civilization", "Greek Civilization", "Roman Civilization"],
            correct_answer: "Indus Valley Civilization"
        },
        {
            question: "What is the national animal of Pakistan?",
            choices: ["Chukar Partridge", "Markhor", "Snow Leopard", "Himalayan Brown Bear"],
            correct_answer: "Markhor"
        },
        {
            question: "Which of the following is the largest province by area in Pakistan?",
            choices: ["Balochistan", "Punjab", "Sindh", "Khyber Pakhtunkhwa"],
            correct_answer: "Balochistan"
        },
        {
            question: "Who wrote the National Anthem of Pakistan?",
            choices: ["Faiz Ahmed Faiz", "Hafeez Jullundhri", "Allama Iqbal", "Josh Malihabadi"],
            correct_answer: "Hafeez Jullundhri"
        },
        {
            question: "What is the name of the highest civilian award in Pakistan?",
            choices: ["Hilal-e-Pakistan", "Tamgha-e-Pakistan", "Tamgha-e-Imtiaz", "Nishan-e-Pakistan", "Sitara-e-Pakistan"],
            correct_answer: "Nishan-e-Pakistan"
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
