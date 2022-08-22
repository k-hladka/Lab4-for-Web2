function generateNumber(max){
    return Math.floor(Math.random()*max+1);
}
function checkSameAnswers(radio1 = multiplyQuestions, radio2=-2, radio3=-3){
    let rand = generateNumber(100);
    if(rand === radio1 || rand === radio2 || rand === radio3)
        return rand += generateNumber();
    return rand;
}

let testQuestion1 = document.getElementById('testQuestion1');
let testQuestion2 = document.getElementById('testQuestion2');
let multiplyQuestions;

let radio1 = document.getElementById('radio1');
let radio2 = document.getElementById('radio2');
let radio3 = document.getElementById('radio3');
let radio4 = document.getElementById('radio4');

function fillingRadio(radio1, radio2, radio3, radio4){
    testQuestion1.value = generateNumber(10);
    testQuestion2.value = generateNumber(10);
    multiplyQuestions = testQuestion1.value * testQuestion2.value;

    while(radio1.value === ' -1' || radio2.value === ' -1' || radio3.value === ' -1' || radio4.value === ' -1'){
        switch (generateNumber(4)){
            case 1 : radio1.value = checkSameAnswers(radio2.value, radio3.value, radio4.value); break;
            case 2 : radio2.value = checkSameAnswers(radio1.value, radio3.value, radio4.value); break;
            case 3 : radio3.value = checkSameAnswers(radio1.value, radio2.value, radio4.value); break;
            case 4 : radio4.value = checkSameAnswers(radio1.value, radio2.value, radio3.value); break;
        }
    }
    switch (generateNumber(4)){
        case 1 : radio1.value = multiplyQuestions; break;
        case 2 : radio2.value = multiplyQuestions; break;
        case 3 : radio3.value = multiplyQuestions; break;
        case 4 : radio4.value = multiplyQuestions; break;
    }
}

setTimeout(fillingRadio(radio1, radio2, radio3, radio4, multiplyQuestions),4);

let z;
let checkedIndex;
let countEventRadio = 0;
let containerForRadio = document.getElementById('container');

containerForRadio.addEventListener('click', function (event){
    let inputId = event.target.getAttribute('id');
    checkedIndex = +inputId;
    if(checkedIndex>=1 && checkedIndex<=4) {
        countEventRadio++;
        if (countEventRadio >= 1) {
            document.getElementById('1').setAttribute('disabled', '');
            document.getElementById('2').setAttribute('disabled', '');
            document.getElementById('3').setAttribute('disabled', '');
            document.getElementById('4').setAttribute('disabled', '');
        }


        if (inputId === '1' && +radio1.value === multiplyQuestions)
            z = 'y';
        else if (inputId === '2' && +radio2.value === multiplyQuestions)
            z = 'y';
        else if (inputId === '3' && +radio3.value === multiplyQuestions)
            z = 'y';
        else if (inputId === '4' && +radio4.value === multiplyQuestions)
            z = 'y';
        else
            z = 'n';

        if (z === 'y') {
            result.value = 'Відповідь вірна';
            percent.value = +percent.value + 10;
            countAnswer.value = +countAnswer.value + 1;
        } else
            result.value = `Помилка, правильна відповідь "${multiplyQuestions}"`;
    }
});
let button = document.getElementById('button');
let result = document.getElementById('result');
let percent = document.getElementById('percent');
let countAnswer = document.getElementById('countAnswer');
let countEventButton = 0;

button.addEventListener('click',function (event){
    if(countEventRadio >=1) {
        event.preventDefault();
        {
            countEventRadio = 0;
            document.getElementById('1').removeAttribute('disabled');
            document.getElementById('2').removeAttribute('disabled');
            document.getElementById('3').removeAttribute('disabled');
            document.getElementById('4').removeAttribute('disabled');
            document.getElementById(`${checkedIndex}`).checked = false;
        }
        radio4.value = radio3.value = radio2.value = radio1.value = ' -1';

        countEventButton++;
        if (countEventButton >= 10)
            button.setAttribute('disabled', '');

        fillingRadio(radio1, radio2, radio3, radio4, multiplyQuestions);
    }
});