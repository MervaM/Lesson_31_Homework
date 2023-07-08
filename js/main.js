'use strict';

// Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
let enterYourAge = +prompt('Enter your age!');
if (enterYourAge >= 0 && enterYourAge <= 11) {
    console.log(alert('Please, call your parents=)'));
} else if (enterYourAge >= 12 && enterYourAge <= 17) {
    console.log(alert('Yo! Wat`\s up?'));
} else if (enterYourAge >= 18 && enterYourAge <= 59) {
    console.log(alert('Good afternoon Mr/Mrs! How are you today?'));
} else {
    console.log(alert('Is that your sand?'));
}

// Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
let userNumb = prompt('I have some focus for you! Please, enter any one number')

switch(userNumb) {
    case '1': alert('Your special symbol is - !');
    break
    case '2': alert('Your special symbol is - @');
    break
    case '3': alert('Your special symbol is - #');
    break
    case '4': alert('Your special symbol is - $');
    break
    case '5': alert('Your special symbol is - %');
    break
    case '6': alert('Your special symbol is - ^');
    break
    case '7': alert('Your special symbol is - &');
    break
    case '8': alert('Your special symbol is - *');
    break
    case '9': alert('Your special symbol is - (');
    break
    case '0': alert('Your special symbol is - )');
    break
}

// // Підрахуй суму всіх чисел в заданому користувачем діапазоні. 
let userFirstNumb = +prompt('Enter your first number');
let userSecondNumb = +prompt('Enter your second number')

let userNumbSum = 0;
for(let i = userFirstNumb; i <= userSecondNumb; i++) {
    userNumbSum += i;
}
console.log(alert(`Total sum from ${userFirstNumb} to ${userSecondNumb} is ${userNumbSum}`));

// ===============================================
// // Запитай у користувача 2 числа і знайди найбільший спільний дільник.
let firstNumb = +prompt('Enter your first number');
let secondNumb = +prompt('Enter your second number');

while(firstNumb != secondNumb) {
    if(firstNumb > secondNumb) {
        firstNumb -= secondNumb;
    } else {
        secondNumb -= firstNumb;
    }
}
console.log(alert(firstNumb));
console.log(firstNumb);

// Запитай у користувача число і виведи всі дільники цього числа.
let userNumber = +prompt('Enter your number.')

let a = 0;
while (a <= userNumber) {
    a++;
    if(userNumber % a !== 0) {
        continue
    }    
    console.log(a);
}

// ==================
// Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%; 
// від 300 до 500 - 5%;
// від 500 і вище - 7%.

let userSum = +prompt('Enter your sum');
let userDiscount = (userSum >= 200) ? `Your sum with discount ${userSum - (userSum * 0.03)}` : 
    (userSum >= 500) ? `Your sum with discount ${userSum - (userSum * 0.05)}` : 
    (userSum >= 700) ? `Your sum with discount ${userSum - (userSum * 0.07)}` :
    `You don't have a discount. I'm sorry =(`;
console.log(alert(userDiscount));
