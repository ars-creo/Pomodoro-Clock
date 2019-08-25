function main() {
    // ----------------- decrease timer by 1 minute
    const minusBttns = document.getElementsByClassName('minus');
    for (let i = 0; i < minusBttns.length; i++) {
        minusBttns[i].addEventListener('click', minusFunc);
    }

    // ----------------- increase timer by 1 minute
    const plusBttns = document.getElementsByClassName('plus');
    for (let i = 0; i < plusBttns.length; i++) {
        plusBttns[i].addEventListener('click', plusFunc);
    }

    // -------------- timer countdown
    // 1 minuta = 60 000 milisekund
    // 1 sekunda = 1000 milisekund
    // const intervalID = window.setInterval(function, 1000)
    document.getElementById('wholeClock').addEventListener('click', timerOn);
}
main();
