let n = Math.floor(Math.random() * 1000);
console.log(n);

while(true) {
    const userGuess = prompt('Я загадал число в диапазоне от 0 до 999, попробуйте угадать:');

    if (userGuess == 'q') {
        break;
    }
    else if (isNaN(userGuess)) {
        alert('Вы ввели некорректное значение');
    }
    else if (+userGuess === n) {
        alert('Вы угадали!');
        break;
    } 
    else if (+userGuess < n) {
        alert('Больше');
    } 
    else if (+userGuess > n) {
        alert('Меньше');
    }
}