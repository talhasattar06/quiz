import chalk from 'chalk';

export interface Question {
    question: string
    choices: string[]
    correct_answer: string
}

export interface userAnswers{ 
    question: string, 
    answer: string, 
    correct: boolean, 
    correct_answer: string 
}


export default function answers(questions: Question[], answer: userAnswers[], score: number, player: string){
    for (const ans of answer) {
        if (ans.correct) {
            score += 1;
            console.log(`\n✔  ${chalk.greenBright(`${ans.question}: ${chalk.hex('#D5FFB3')(`${ans.answer}`)}`)}`);

        } else {
            console.log(`\n❌ ${chalk.redBright(`${ans.question}: ${chalk.hex('#FA5F55')(`${ans.answer}`)}`)} \n${chalk.hex('#FFEE4A')(`[Correct Answer: ${ans.correct_answer}]`)}`);

        }
    }
    if (score === 20) {
        console.log(chalk.hex('#D70040')(`\nWOW! ${chalk.hex('#F88379')(`${player},`)} You aced it! 🎉\nYour score is: ${chalk.hex('#F88379')(`${score}/${questions.length}`)}`));

    } else if (score >= 15 && score < 20) {
        console.log(chalk.hex('#D70040')(`\nFantastic performance ${chalk.hex('#F88379')(`${player}!`)} You're almost at the top.\nYour score is: ${chalk.hex('#F88379')(`${score}/${questions.length}`)}`));

    } else if (score >= 10 && score < 15) {
        console.log(chalk.hex('#D70040')(`\nGreat job ${chalk.hex('#F88379')(`${player}!`)} You have a solid grasp of the quiz topic.\nYour score is: ${chalk.hex('#F88379')(`${score}/${questions.length}`)}`));

    } else if (score >= 5 && score < 10) {
        console.log(chalk.hex('#D70040')(`\nNice effort ${chalk.hex('#F88379')(`${player}!`)} Keep challenging yourself.\nYour score is: ${chalk.hex('#F88379')(`${score}/${questions.length}`)}`));

    } else if (score > 0 && score < 5) {
        console.log(chalk.hex('#D70040')(`\nEvery question is an opportunity to improve yourself ${chalk.hex('#F88379')(`${player}!`)} Keep going.\nYour score is: ${chalk.hex('#F88379')(`${score}/${questions.length}`)}`));

    } else {
        console.log(chalk.hex('#D70040')(`\nYour score is: ${chalk.hex('#F88379')(`${score}/${questions.length}`)}\nWho needs points anyway? You're just keeping it interesting.`));

    }
}