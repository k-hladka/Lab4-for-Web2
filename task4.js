let container = document.getElementById('container');
let result = document.getElementById('result');

container.addEventListener('click', function(event){
    let target = event.target;
    if(target.closest('[type=checkbox]')){
        fillingResult(target);
    }
});

function fillingResult(target){
    if(target.classList.contains('checked') === false){
        target.classList.add('checked');
        if(result.value!== '' && result.value[result.value.length-1]!==';')
            result.value+=';';
        if(result.value!=='')
            result.value+=' ';
        result.value += target.value;
    }
    else{
        console.log(target);
        target.classList.remove('checked');
        let arr = result.value.split(' ');
        for(let i=0; i<arr.length; i++){
            if(arr[i] === target.value || arr[i]===target.value+';'){
                arr.splice(i,1);
            }
        }
        result.value = arr.join(' ');
    }
}