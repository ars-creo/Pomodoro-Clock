class Clock {

    constructor(){
        // @ts-ignore
        this.timer = new Timer();

        this.setupSessionButtons();
        this.setupBreakButtons();
        this.setupClockButtons();
    }

    setupSessionButtons() {
        const $sessionMinus = document.querySelector('#sessionMinus');
        $sessionMinus.addEventListener('click', () => {
            const $item = document.querySelector('#sessionTime');
            this.timer.decreaseElementNumber($item);
        });
        const $sessionPlus = document.querySelector('#sessionPlus');
        $sessionPlus.addEventListener('click', () => {
            const $item = document.querySelector('#sessionTime');
            this.timer.increaseElementNumber($item);
        });
    }

    setupBreakButtons() {
        const $breakPlus = document.querySelector('#breakPlus');
        $breakPlus.addEventListener('click', () => {
            const $item = document.querySelector('#breakTime');
            this.timer.increaseElementNumber($item);
        });
        const $breakMinus = document.querySelector('#breakMinus');
        $breakMinus.addEventListener('click', () => {
            const $item = document.querySelector('#breakTime');
            this.timer.decreaseElementNumber($item);
        });
    }

    setupClockButtons() {
        document.getElementById('wholeClock').addEventListener('click', () => {
            let $breakTime = document.getElementById('breakTime');
            let $sessionTime = document.getElementById('sessionTime');
            this.timer.startTimer($breakTime, $sessionTime);
            const $ele = document.getElementById('ele');
            $ele.textContent = 'session';
        });
    }

    static create() {
        return new Clock();
    }
}
