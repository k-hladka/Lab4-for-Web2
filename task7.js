let container = document.getElementById('container');
let button = document.getElementById('button');

container.addEventListener('mousemove',function(event){
    if(event.target.getAttribute('id') === 'button'){
        if(event.clientX + button.offsetWidth < 250)
            button.style.left = event.clientX +'px';
        else
            button.style.left = 0;
        if(event.clientY + button.offsetHeight < 250)
            button.style.top = event.clientY + 'px';
        else
            button.style.top = 0;
    }
});
button.addEventListener('click',function (event){
    event.preventDefault();
    alert('Вдалося');
});