"use strict"

const predictionNumber = document.querySelector('.predictions__number');
const predictionButtonStart = document.querySelector('.predictions__button_start');
const predictionButtonStop = document.querySelector('.predictions__button_stop');
const predictionResult = document.querySelector('.predictions__result');

const predictions = {
    1: '<p class = "bad">Не ждать вам успеха в вашем деле</p>',
    2: 'Секрет успешной дороги лежит в ее начале.',
    3: 'Чтобы не перенапрягать душевные силы, реально оценивайте их.',
    4: '<p class = "bad">Вы не покорите вершину.</p>',
    5: '<p class = "good">Внимательно прислушивайтесь к подсказкам судьбы.</p>',
    6: '<p class = "good">Перемены уже на пороге!</p>',
    7: '<p class = "good">Не теряйте бдительности.</p>',
    8: '<p class = "bad">Плохое произойдет с вашим жилищем.</p>',
    9: 'Будьте внимательны и осторожны в дороге.',
    10: 'Влюбленность – вот что ожидает вас на этой неделе.',
    11: 'Будьте инициативнее – и удача совсем скоро станет вашей спутницей.',
    12: '<p class="bad">Ситуация вышла из-под вашего контроля.</p>',
    13: 'Изменения, вошедшие в вашу жизнь, изменят и многое в вас лично.',
    14: '<p class = "good">Ваши ожидания не напрасны.</p>',
    15: '<p class = "bad">Ожидайте крупных проблем.</p>',
    16: 'Каким бы ржавым ни был замок, вы справитесь с ним.',
    17: '<p class = "bad">То, что выйдет в результате, принесет вам разочарование.</p>',
    18: '<p class = "good">Проблема кроется совсем не в том, что вы думаете.</p>',
    19: '<p class = "bad">Цель, к которой вы стремитесь, неосуществима.</p>',
    20: 'Каждое дело требует завершения.',
}


function randomNumber() {
    var random = (Math.random() * 20).toFixed(0)
    predictionNumber.innerHTML = random;
}

var int;

// const inter = setInterval(randomNumber, 200)
// clearInterval(inter)

predictionButtonStart.addEventListener('click', () => {
    int = setInterval(randomNumber, 50);
    predictionButtonStart.classList.add('_hide');
    predictionButtonStop.classList.remove('_hide');
})

predictionButtonStop.addEventListener('click', function () {
    clearInterval(int);
    predictionButtonStop.classList.add('_hide');
    predictionResult.innerHTML = predictions[Number(predictionNumber.innerHTML)]
})