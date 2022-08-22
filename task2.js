function generateNumber(max){
    return Math.floor(Math.random()*max+1);
}
function generateMultiplyQuestions(testQuestion1, testQuestion2){
    testQuestion1.value = generateNumber(10);
    testQuestion2.value = generateNumber(10);
    multiplyQuestions = testQuestion1.value * testQuestion2.value;
}
let testQuestion1 = document.getElementById('testQuestion1');
let testQuestion2 = document.getElementById('testQuestion2');
let multiplyQuestions;

let enterData = document.getElementById('enterData');
let checkOutButton = document.getElementById('checkOut');
let result = document.getElementById('result');
let percent = document.getElementById('percent');
let countAnswer = document.getElementById('countAnswer');

setTimeout(generateMultiplyQuestions(testQuestion1, testQuestion2));

let countCheckOutButton = 0;
checkOutButton.addEventListener('click', function (event){
    event.preventDefault();
    countCheckOutButton++;
    if(countCheckOutButton>=1)
        checkOutButton.setAttribute('disabled','');
    if(multiplyQuestions === +(enterData.value)) {
        result.value = 'Відповідь вірна';
        percent.value = +percent.value + 10;
        countAnswer.value = +countAnswer.value + 1;
    }
    else
        result.value = `Помилка, правильна відповідь "${multiplyQuestions}"`;
});

let buttonNext = document.getElementById('buttonNext');
let countButtonNext = 0;
buttonNext.addEventListener('click', function (event){
    event.preventDefault();
    {
        countCheckOutButton=0;
        checkOutButton.removeAttribute('disabled');
    }
    countButtonNext++;
    if(countButtonNext>=10)
        buttonNext.setAttribute('disabled','');

    generateMultiplyQuestions(testQuestion1, testQuestion2);
});
