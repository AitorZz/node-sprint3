class Calculadora {
  constuctor() {
    this.a = "";
    this.b = "";
  }

  sum({ a, b }) {
    this.a = a;
    this.b = b;
    return this.a + this.b;
  }

  rest({ a, b }) {
    this.a = a;
    this.b = b;
    return this.a - this.b;
  }

  mult({ a, b }) {
    this.a = a;
    this.b = b;
    return this.a * this.b;
  }
}

module.exports = Calculadora;
