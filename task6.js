let inputTag = document.querySelector('input');
let button = document.querySelector('button');
let count = 0;
button.addEventListener('click',function (event){
    event.preventDefault();
    if(count === 0) {
        let arr = inputTag.value.split(' ');
        if (arr.length === 2) {
            let table = createTable(+arr[0], +arr[1]);
            document.body.append(table);
            table.addEventListener('click', function (event){
                let target = event.target;
                if(target.closest('td')){
                    target.classList.toggle('forRedColor');
                }
            });
        }
        count++;
    }
});
function createTable(rowsCount, colsCount){
    let table = document.createElement('table');
    for(let i=0; i<rowsCount; i++){
        let tr = document.createElement('tr');
        for(let j=0; j<colsCount; j++){
            let td = document.createElement('td');
            tr.append(td);
        }
        table.append(tr);
    }
    return table;
}