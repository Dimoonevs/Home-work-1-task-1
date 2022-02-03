const inputNumber = document.querySelector('.number');
const formSubmit = document.querySelector('.form');
const htmlArray = document.querySelector('.output p');
const button = document.querySelector('.but');
const arr = [];

htmlArray.innerText = ''

formSubmit.addEventListener('submit', numberSize);


function numberSize(event) {
    event.preventDefault();

    let number = parseInt(inputNumber.value);

    if(!Number.isInteger(number)) {
        htmlArray.innerText = 'Обновите и введите число!'
    }else if(number < 1) {
        for (let i = 1; i >= number; i--) {
            arr.push(i);
            htmlArray.innerText = `Вывод чисел: ${arr}`
        }
    }else {
        for (let i = 1; i <= number; i++) {
            arr.push(i);
            htmlArray.innerText = `Вывод чисел: ${arr}`
        }
    }

    inputNumber.value = '';

    button.innerText = 'Обновить';
    button.onclick = () => history.go()
};

