const Middleware = require("./middlewares.js");
const Calculadora = require("./calculadora.js");
const Parametres = require("./parametres.json");

const calculator = new Calculadora();
const app = new Middleware(calculator);

app.use((req, next) => {
  req.a = req.a * req.a;
  req.b = req.b * req.b;
  console.log("El quadrat de a és : " + req.a);
  console.log("El quadrat de b és: " + req.b);
  next();
});

app.use((req, next) => {
  req.a = req.a * req.a * req.a;
  req.b = req.b * req.b * req.b;
  console.log("El cub de a és: " + req.a);
  console.log("El cub de b és: " + req.b);
  next();
});

app.use((req, next) => {
  req.a = req.a / 2;
  req.b = req.b / 2;
  console.log("La divisió de a és: " + req.a);
  console.log("La divisió de b és: " + req.b);
  next();
});

console.log("El resultat de la suma és: " + app.sum({ a: 1, b: 2 }));
console.log("el resultat de la resta és: " + app.rest({ a: 2, b: 1 }));
console.log("El resultat  de la multiplicació és: " + app.mult({ a: 5, b: 2 }));
