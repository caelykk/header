document.addEventListener('DOMContentLoaded', pageLoader);

function pageLoader() {
    let btnsCol = document.querySelectorAll(".g-button--red");
    let changeColBtn = document.createElement("button");
    let addColorBtn = document.createElement("button");
    let div = document.createElement('div');

    changeColBtn.innerHTML = "Изменить цвет";
    addColorBtn.innerHTML = "Добавить цвет";

    document.body.append(changeColBtn);
    document.body.append(addColorBtn);

    btnsCol.forEach(function(btnCol) {
        console.log(btnCol);
        btnCol.addEventListener('click', setRandomColor);
    });

    document.body.append(div);

    // addColorBtn.addEventListener('click', () => {
    //     colors.push(`rgb(${rand(256)}, ${rand(256)}, ${rand(256)})`);
    // });

};

function setRandomColor() {
    console.log(this);

    let colors = ['green'];
    let colorInd = rand(colors.length);
    let randColor = colors[colorInd];
    this.style.backgroundColor =  randColor;
}


function rand(max) {
    return Math.floor(Math.random() * max);
}