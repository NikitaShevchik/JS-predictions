"use strict"

const predictionNumber = document.querySelector('.predictions__number');
const predictionButtonStart = document.querySelector('.predictions__button_start');
const predictionButtonStop = document.querySelector('.predictions__button_stop');
const predictionResult = document.querySelector('.predictions__result');

const predictions = {
    1: 'Любой успех дела определяется его целью.',
    2: 'Секрет успешной дороги лежит в ее начале.',
    3: 'Чтобы не перенапрягать душевные силы, реально оценивайте их.',
    4: 'Когда одна вершина покорена, самое время покорять вторую.',
    5: 'Внимательно прислушивайтесь к подсказкам судьбы.',
    6: 'Перемены уже на пороге!',
    7: 'Не теряйте бдительности.',
    8: 'Ваше жилище настоятельно требует вашего внимания.',
    9: 'Будьте внимательны и осторожны в дороге.',
    10: 'Влюбленность – вот что ожидает вас на этой неделе.',
    11: 'Будьте инициативнее – и удача совсем скоро станет вашей спутницей.',
    12: 'Ситуация вышла из-под вашего контроля – положитесь на провидение.',
    13: 'Изменения, вошедшие в вашу жизнь, изменят и многое в вас лично.',
    14: 'Ваши ожидания не напрасны.',
    15: 'Все ваши проблемы кроются в вас самих.',
    16: 'Каким бы ржавым ни был замок, вы справитесь с ним.',
    17: 'То, что выйдет в результате, принесет вам разочарование.',
    18: 'Проблема кроется совсем не в том, что вы думаете.',
    19: 'Цель, к которой вы стремитесь, вполне реальна.',
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