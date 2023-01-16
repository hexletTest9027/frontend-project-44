import readlineSync from 'readline-sync';

export const cli = () => {
    console.log("hi im cli");
    const name = readlineSync.question('как тебя зовут: ')
    console.log(`очень рад знакомству, ${name}`);
}