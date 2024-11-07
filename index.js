// ДЗ 8.1. Сходи
let ladder = {
    step: 0,
    up: function () { // підніматиме вас на одну сходинку
        this.step++;
        return this;
    },
    down: function () { // опускатиме вас на одну сходинку
        this.step--;
        return this;
    },
    showStep: function () { // показує поточну сходинку
        console.log('Поточна сходинка:', this.step);
        return this;
    }
};

ladder.up().up().down().showStep();