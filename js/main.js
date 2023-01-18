let div = document.querySelector('.class_1');

function textChange_1() {
    div.innerHTML = 'Hello';
    div.style.backgroundColor = "blue";
}

div.addEventListener('mouseover', textChange_1);

function textChange_2() {
    div.innerHTML = 'Bye!';
    div.style.backgroundColor = "orange";
}

div.addEventListener('mouseout', textChange_2);