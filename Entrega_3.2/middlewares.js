class Middleware {
  constructor(calculator) {
    this.calculator = calculator;
    this.middlewares = [];
    this.req = {};

    const prototype = Object.getPrototypeOf(this.calculator);
    
    Object.getOwnPropertyNames(prototype).forEach((fn) => {
      if (fn !== "constructor") return this.createFn(fn);
    });
  }
  use(middleware) {
    this.middlewares.push(middleware);
  }
  executeMiddleware(i = 0) {
    if (i < this.middlewares.length) {
      this.middlewares[i].call(this, this.req, () =>
        this.executeMiddleware(i + 1)
      );
    }
  }
  createFn(fn) {
    this[fn] = (args) => {
      this.req = args;
      this.executeMiddleware();
      return this.calculator[fn].call(this, this.req);
    };
  }
}

module.exports = Middleware;
