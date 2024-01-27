const arr = [1, 5, 7, 9];
document.querySelector('.min__arr').innerText = `{${arr}}`;
document.querySelector('.min__digit').innerText = `${Math.min(...arr)}`;

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
    for (let i = 1; i <= n; i++) {
      fact *= i;
    }
    document.querySelector(".factorial__result").innerHTML = "Факториал " + n + " равен " + fact + ".";
  }
}


