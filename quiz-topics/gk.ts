import inquirer from "inquirer";
import ora from "ora";
import answers, { Question, userAnswers } from "./func.js"

let score: number = 0;

export async function generalKnowledge(player: string) {

    const questions: Question[] = [
        {
            question: "Who is known as the 'Father of Computers'?",
            choices: ["Charles Babbage", "Alan Turing", "Ada Lovelace", "Bill Gates"],
            correct_answer: "Charles Babbage"
        },
        {
            question: "Which planet is known as the 'Red Planet'?",
            choices: ["Venus", "Mercury", "Mars", "Saturn"],
            correct_answer: "Mars"
        },
        {
            question: "What is the chemical symbol for oxygen?",
            choices: ["Ox", "Oy", "Om", "O"],
            correct_answer: "O"
        },
        {
            question: "What is the largest mammal in the world?",
            choices: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
            correct_answer: "Blue Whale"
        },
        {
            question: "Which bird is known for its ability to mimic human speech?",
            choices: ["Eagle", "Parrot", "Crow", "Pigeon"],
            correct_answer: "Parrot"
        },
        {
            question: "Who painted the Mona Lisa?",
            choices: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
            correct_answer: "Leonardo da Vinci"
        },
        {
            question: "What is the chemical symbol for water?",
            choices: ["CO2", "H2O", "NaCl", "O2"],
            correct_answer: "H2O"
        },
        {
            question: "What is the largest organ in the human body?",
            choices: ["Brain", "Skin", "Liver", "Heart"],
            correct_answer: "Skin"
        },
        {
            question: "Which animal is known as the 'King of the Jungle'?",
            choices: ["Tiger", "Lion", "Elephant", "Giraffe"],
            correct_answer: "Lion"
        },
        {
            question: "Who is known as the 'Father of Modern Physics'?",
            choices: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"],
            correct_answer: "Albert Einstein"
        },
        {
            question: "Which gas do plants absorb during photosynthesis?",
            choices: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
            correct_answer: "Carbon Dioxide"
        },
        {
            question: "What is the largest internal organ in the human body?",
            choices: ["Heart", "Liver", "Lungs", "Brain"],
            correct_answer: "Liver"
        },
        {
            question: "Who was the first person to step on the Moon?",
            choices: ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "Alan Shepard"],
            correct_answer: "Neil Armstrong"
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            choices: ["Jane Austen", "Emily Brontë", "Charles Dickens", "William Shakespeare"],
            correct_answer: "William Shakespeare"
        },
        {
            question: "Who discovered gravity?",
            choices: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
            correct_answer: "Isaac Newton"
        },
        {
            question: "What is the largest bird in the world?",
            choices: ["Emu", "Cassowary", "Ostrich", "Albatross"],
            correct_answer: "Ostrich"
        },
        {
            question: "Which planet is closest to the Sun?",
            choices: ["Venus", "Mercury", "Earth", "Mars"],
            correct_answer: "Mercury"
        },
        {
            question: "What is the smallest bone in the human body?",
            choices: ["Stapes", "Femur", "Spine", "Fibula"],
            correct_answer: "Stapes"
        },
        {
            question: "What is the chemical symbol for sodium?",
            choices: ["Na", "Ni", "Ne", "Nb"],
            correct_answer: "Na"
        },
        {
            question: "What is the term for a word or phrase that has the same meaning as another word or phrase?",
            choices: ["Antonym", "Synonym", "Homonym", "Palindrome", "Acronym"],
            correct_answer: "Synonym"
        }
    ];

    async function askQuestions() {

        const userAnswers: userAnswers[] = []

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

        answers(questions, userAnswers, score, player)
    }
    await askQuestions()
}