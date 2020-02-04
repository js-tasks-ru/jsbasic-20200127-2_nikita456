let calculator = {
  atr1: '',
  atr2: '',
  read: function(a, b) {
    this.atr1 = a;
    this.atr2 = b;
  },
  sum() {
    return this.atr1 + this.atr2;
  },
  mul() {
    return this.atr1 * this.atr2;
  },
};

calculator.read(3, 5);
alert(calculator.sum()); // 8
alert(calculator.mul()); // 15

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
