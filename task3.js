let checkbox1 = document.getElementById('checkbox1');
let checkbox2 = document.getElementById('checkbox2');
let checkbox3 = document.getElementById('checkbox3');

let result = document.getElementById('result');
let button = document.getElementById('button');
let container = document.getElementById('container');
let strForResult = '';
container.addEventListener('click', function (event){
    switch(event.target.getAttribute('id')){
        case 'checkbox1' : strForResult+= ' ua '; break;
        case 'checkbox2' : strForResult+= ' en '; break;
        case 'checkbox3' : strForResult+= ' sp '; break;
    }
});
let countButton=0;
button.addEventListener('click', function (event){
    countButton++;
    if(countButton===1){
    event.preventDefault();
    let arr = strForResult.split(' ');
    for(let i=0; i<arr.length; i++){
        if(arr[i]===''){
            arr.splice(i, 1);
            i--;
        }
    }
    strForResult = arr.join(', ');
    result.value = strForResult;
}
});