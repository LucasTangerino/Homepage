// script.js
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(startTime, 500);
}


function checkTime(time) {
    if (time < 10) {
        time = "0" + time;
    }
    return time;
}


function atualizaData() {
    const dataAtual = new Date();
    const dia = dataAtual.getDate();
    const mes = ("0" + (dataAtual.getMonth() + 1)).slice(-2);
    const ano = dataAtual.getFullYear();

    document.getElementById("data").innerHTML = `${dia}/${mes}/${ano}`;
}

setInterval(atualizaData, 1000);

function playWhatsAppSound() {
    var audio = document.getElementById('whatsAppClickSound');
    audio.play();
}

function playDiscordSound() {
    var audio = document.getElementById('discordClickSound');
    audio.play();
}




