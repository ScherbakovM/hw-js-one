//Первое задание

const arr = [1, 5, 7, 9];
document.querySelector('.min__arr').innerText = `{${arr}}`;
document.querySelector('.min__digit').innerText = `${Math.min(...arr)}`;

//Второе задание

function createCounter() {
  let counter = 0;

  return {
    increment: function () {
      counter++;
      return counter;
    },
    decrement: function () {
      counter--;
      return counter;
    }
  };
}

let counter1 = createCounter();

function innerCounter() {
  document.querySelector('.counter__current').innerText = counter1.increment();
}

innerCounter();

document.querySelector('.counter__minus').addEventListener('click', () => {
  document.querySelector('.counter__current').innerText = counter1.decrement();
});

document.querySelector('.counter__plus').addEventListener('click', () => {
  document.querySelector('.counter__current').innerText = counter1.increment();
});

//Третье задание

function factorial() {
  let n = document.getElementById("number").value;
  if (n < 0 || n % 1 != 0) {
    document.getElementById("result").innerHTML = "Ошибка! Введите положительное целое число.";
  }
  else if (n == 0) {
    document.getElementById("result").innerHTML = "Факториал " + n + " равен 1.";
  }
  else {
    let fact = 1;
    const MAX_VALUE = Number.MAX_VALUE;
    for (let i = 1; i <= n; i++) {
      fact *= i;
    }
    if (!isFinite(fact)) {
      document.querySelector(".factorial__result").innerHTML = "Ошибка!  (⁄ ⁄•⁄ω⁄•⁄ ⁄) Число слишком большое для вычисления факториала.";
    }
    else {
      document.querySelector(".factorial__result").innerHTML = "Факториал " + n + " равен " + fact + ".";
    }
  }
}

//Четвертое задание

let root = document.documentElement;
let element = findElementByClass(root, "factorial");
console.log(element);

function findElementByClass(root, className) {
  if (!root) {
    return null;
  }
  if (root.classList.contains(className)) {
    return root;
  }
  let children = root.children;
  for (let i = 0; i < children.length; i++) {
    let result = findElementByClass(children[i], className);
    if (result) {
      return result;
    }
  }
  return null;
}

