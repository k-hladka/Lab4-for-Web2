let child = document.getElementById('child');
let parent = document.getElementById('parent');

child.addEventListener('mousedown', function (event){

    let posX= event.clientX - child.getBoundingClientRect().left;
    let posY = event.clientY - child.getBoundingClientRect().top;

    child.style.zIndex = 1000;
    document.body.append(child);

    position(event.pageX, event.pageY);

    function position(pageX, pageY) {
        if(
            (pageX - posX + child.offsetWidth < parent.offsetWidth) &&
            (pageX - posX > 0) &&
            (pageY - posY + child.offsetHeight < parent.offsetHeight &&
            (pageY - posY > 0))
        ){
            child.style.left = pageX - posX + 'px';
            child.style.top = pageY - posY + 'px';
        }
    }

    function mouseMove(event) {
        position(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', mouseMove);

    child.onmouseup = function() {
        document.removeEventListener('mousemove', mouseMove);
        child.onmouseup = null;
    };

});

child.ondragstart = function() {
    return false;
};

