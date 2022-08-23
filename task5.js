let sum = document.getElementById('sum');
let svg = document.getElementById('svg');
let min = document.getElementById('min');
let max = document.getElementById('max');

let inputsTags = document.querySelectorAll('[type=text]');

let sumVariable = 0;
let minVariable = 9999;
let maxVariable = -9999;

let count = 0;
let button = document.getElementById('button');
button.addEventListener('click',function (event){
    event.preventDefault();
    if(count>=1){
        sumVariable = 0;
        minVariable = 9999;
        maxVariable = -9999;
    }
    for(let i=0; i<12; i++){
        sumVariable+= +inputsTags[i].value;

        if(minVariable > +inputsTags[i].value)
            minVariable = +inputsTags[i].value;

        if(maxVariable < +inputsTags[i].value)
            maxVariable = +inputsTags[i].value;
    }

    sum.value = sumVariable;
    svg.value = sumVariable/12;
    min.value = minVariable;
    max.value = maxVariable;

    count++;
});
