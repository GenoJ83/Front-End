//Print numbers from 1-10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Print multiplication table
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

//Sum of numbers
let sum = 0;
let i = 1;

while (i <= 100) {
    sum += i;
    i++;
}

console.log(`The sum is ${sum}`);

//User input validation
let number;

do {
    number = parseInt(prompt("Enter a number between 1 and 10:"));
} while (isNaN(number) || number < 1 || number > 10);

console.log(`You entered: ${number}`);

//Breaking out of a loop
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}
