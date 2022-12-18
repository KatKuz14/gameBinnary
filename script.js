let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = 0;
    maxValue = 100;
    orderNumber = 0;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const answerRandom = Math.round( Math.random() * 3);
            switch (answerRandom) {
                case 0:
                    answerPhrase = `Вы загадали неправильное число!\n\u{2639}`
                    break;

                case 1:
                    answerPhrase = `Попробуйте начать сначала!\n\u{1F6AB}`
                    break;

                case 2:
                    answerPhrase = `Подумай еще!`
                    break;

                case 3:
                    answerPhrase = `Не сдавайся!\n\u{1F680}`
                    break;
            }
            
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Я думаю, это число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue || minValue == answerNumber) {
            const answerRandom = Math.round( Math.random() * 3);
            switch (answerRandom) {
                case 0:
                    answerPhrase = `Вы загадали неправильное число!\n\u{1F630}`
                    break;

                case 1:
                    answerPhrase = `Попробуйте начать сначала!\n\u{1F6AB}`
                    break;

                case 2:
                    answerPhrase = `Подумай еще!`
                    break;

                case 3:
                    answerPhrase = `Не сдавайся!\n\u{1F680}`
                    break;
            }
            
            answerField.innerText = answerPhrase;
            gameRun = false;
            
        } else {
            maxValue = answerNumber -1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Наверное, это число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const answerRandom = Math.round(Math.random() * 3);
        switch (answerRandom) {
            case 0:
                answerPhrase = `Ты супер!\n\u{1F44D}`
                break;

            case 1:
                answerPhrase = `Я всегда угадываю\n\u{1F60E}`
                break;

            case 2:
                answerPhrase = `Победа!\n\u{1F60D}`
                break;

            case 3:
                answerPhrase = `Умница!\n\u{1F64C}`
                break;
        }
        answerField.innerText = answerPhrase;
        gameRun = false;
    }
})

document.getElementById('btnRetry').addEventListener('click', function () {
    location.reload();
})
