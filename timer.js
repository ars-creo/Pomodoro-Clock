const MINIMUM_CLOCK_VALUE = 0;
const MAXIMUM_CLOCK_VALUE = 60;
const ONE_MINUTE_IN_MILISECONDS = 60000;

class Timer {
    decreaseElementNumber($element) {
        let number = Number($element.textContent);
        if (Number.isNaN(number)) {
            throw new TypeError(('element is not a number'));
        }
        if (number <= MINIMUM_CLOCK_VALUE) {
            number = MINIMUM_CLOCK_VALUE;
        } else {
            number--;
        }
        $element.textContent = String(number);
    }

    increaseElementNumber($element) {
        let number = Number($element.textContent);
        if (number < MAXIMUM_CLOCK_VALUE) {
            number++;
        } else {
            number = MAXIMUM_CLOCK_VALUE;
        }
        $element.textContent = String(number);
    }

    timeCounter(timeToCount, timeToCountNextRound) {
        let sessionTime = timeToCount;

        this.interval = setInterval( () => {
            sessionTime -= 1000;

            const date = new Date(sessionTime);
            this.updateTimerControl(date);

            if (sessionTime === MINIMUM_CLOCK_VALUE) {
                const snd = new Audio('FreesoundOrgSynthesizedHornByDarkadders.mp3');
                snd.play();
                this.toggleCountLabel();
                clearInterval(this.interval);
                this.startTimer(timeToCountNextRound, timeToCount);
            }
        }, 1000);

        this.setupResetButton();
    }


    updateTimerControl(date) {
        const $timer = document.getElementById('timer');
        $timer.textContent = this.formatTime(date);
    }

    toggleCountLabel() {
        const $item = document.getElementById('ele');
        $item.textContent = ($item.textContent === 'session')
            ? 'break'
            : 'session';
    }

    formatTime(date) {
        const minutes = String(date.getMinutes());
        const seconds = String(date.getSeconds());
        const TWO_DIGITS = 2;
        const PREFIX = 2;
        const minutesWithZero = minutes.padStart(TWO_DIGITS, PREFIX);
        const secondsWithZero = seconds.padStart(TWO_DIGITS, PREFIX);
        return `${minutesWithZero}:${secondsWithZero}`;
    }

    setupResetButton() {
        const $resetButton = document.getElementById('resetBttn');
        $resetButton.addEventListener('click', () => {
            this.resetTimer();
        });
    }

    resetTimer() {
        window.clearInterval(this.interval);
        document.getElementById('ele').textContent = 'click';
        document.getElementById('timer').textContent = 'to start';
    }

    startTimer($breakTime, $sessionTime) {
        const breakTime = Number($breakTime.textContent);
        const sessionTime = Number($sessionTime.textContent);

        const userBreakTime = breakTime * ONE_MINUTE_IN_MILISECONDS;
        const userSessionTime = sessionTime * ONE_MINUTE_IN_MILISECONDS;

        this.timeCounter(userSessionTime, userBreakTime);
    }
}

if (typeof module === 'object' && module.exports){
    module.exports = Timer;
}
