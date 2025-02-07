import inquirer from "inquirer";
import ora from "ora";
import answers from "./func.js";
let score = 0;
export async function sports(player) {
    const questions = [
        {
            question: "Which athlete is known as 'The Greatest of All Time' in boxing?",
            choices: ["Muhammad Ali", "Mike Tyson", "Floyd Mayweather", "Manny Pacquiao"],
            correct_answer: "Muhammad Ali"
        },
        {
            question: "Which country won the FIFA World Cup in 2022?",
            choices: ["France", "Brazil", "Argentina", "Spain"],
            correct_answer: "Argentina"
        },
        {
            question: "Which city hosted the 2024 Summer Olympics?",
            choices: ["Paris", "London", "Tokyo", "Beijing"],
            correct_answer: "Paris"
        },
        {
            question: "Which country has won the most Olympic gold medals in total?",
            choices: ["United States", "China", "Russia", "Germany"],
            correct_answer: "United States"
        },
        {
            question: "Who holds the record for the highest individual score in Test cricket?",
            choices: ["Brian Lara", "Sachin Tendulkar", "Virat Kohli", "Babar Azam"],
            correct_answer: "Brian Lara"
        },
        {
            question: "Who has the highest individual score in One Day Internationals (ODIs)?",
            choices: ["Rohit Sharma", "Sachin Tendulkar", "David Warner", "Martin Guptill"],
            correct_answer: "Rohit Sharma"
        },
        {
            question: "Who won the ICC Men's T20 World Cup in 2022?",
            choices: ["Australia", "England", "India", "Pakistan"],
            correct_answer: "England"
        },
        {
            question: "Who was named ICC Men's Cricketer of the Year in 2023?",
            choices: ["Virat Kohli", "Babar Azam", "Joe Root", "Kane Williamson"],
            correct_answer: "Babar Azam"
        },
        {
            question: "In which city did Pakistan win their first ICC Cricket World Cup title?",
            choices: ["Melbourne", "Lahore", "Karachi", "Lord's"],
            correct_answer: "Lord's"
        },
        {
            question: "Which player won the Ballon d'Or in 2024?",
            choices: ["Kylian Mbappe", "Erling Haaland", "Lionel Messi", "Cristiano Ronaldo"],
            correct_answer: "Lionel Messi"
        },
        {
            question: "Which club won the FIFA Club World Cup in 2023?",
            choices: ["Real Madrid", "Bayern Munich", "Chelsea", "Manchester City"],
            correct_answer: "Manchester City"
        },
        {
            question: "Who won the Pakistan Super League (PSL) in 2024?",
            choices: ["Multan Sultans", "Karachi Kings", "Lahore Qalandars", "Islamabad United"],
            correct_answer: "Islamabad United"
        },
        {
            question: "Which bowler holds the record for the most wickets in Test cricket?",
            choices: ["Shane Warne", "Muttiah Muralitharan", "James Anderson", "Anil Kumble"],
            correct_answer: "Muttiah Muralitharan"
        },
        {
            question: "Which country won the first-ever Cricket World Cup in 1975?",
            choices: ["Australia", "West Indies", "England", "India"],
            correct_answer: "West Indies"
        },
        {
            question: "Who hit six sixes in an over in a T20 International match?",
            choices: ["Yuvraj Singh", "Chris Gayle", "AB de Villiers", "Jos Buttler"],
            correct_answer: "Yuvraj Singh"
        },
        {
            question: "Which team holds the record for the highest team total in Test cricket?",
            choices: ["West Indies", "Australia", "India", "England"],
            correct_answer: "West Indies"
        },
        {
            question: "Which bowler has taken the most five-wicket hauls in ODIs?",
            choices: ["Wasim Akram", "Glenn McGrath", "Waqar Younis", "Muttiah Muralitharan"],
            correct_answer: "Wasim Akram"
        },
        {
            question: "Who was the first cricketer to score a double century in ODIs?",
            choices: ["Sachin Tendulkar", "Virender Sehwag", "Rohit Sharma", "Martin Guptill"],
            correct_answer: "Sachin Tendulkar"
        },
        {
            question: "Who scored the 'Hand of God' goal in the 1986 FIFA World Cup?",
            choices: ["Diego Maradona", "Pele", "Lionel Messi", "Cristiano Ronaldo"],
            correct_answer: "Diego Maradona"
        },
        {
            question: 'Who is the all-time top scorer in the history of the UEFA Champions League?',
            choices: ['Lionel Messi', 'Cristiano Ronaldo', 'Raul Gonzalez', 'Robert Lewandowski', "Kylian Mbappe"],
            correct_answer: 'Cristiano Ronaldo'
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
