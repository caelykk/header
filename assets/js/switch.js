// TODO: Конструкция "switch"
/**
 *? switch заменяет собой сразу несколько if.
 * имеет один или более блок case
 * необязательный блок default
 * Любое выражение может быть аргументом
 * проверка на равенство всегда строгая. Значения должны быть одного типа
 */
switch(x) {
  case 'value1':  // if (x === 'value1')
    pass
    break
  case 'value2':  // if (x === 'value2')
    pass
    break
  default:
    pass
    break
}


// Пример без break:
let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Маловато' );
    break;
  case 4: // выполнится этот блок кода
    alert( 'В точку!' );
    break;
  case 5:
    alert( 'Перебор' );
    break;
  default:
    alert( "Нет таких значений" );
}

a = 2 + 2;
switch (a) {
  case 3:
    alert( 'Маловато' );
  case 4:
    alert( 'В точку!' );
  case 5:
    alert( 'Перебор' );
  default:
    alert( "Нет таких значений" );
}
// В примере выше последовательно выполнятся три alert:
alert( 'В точку!' );
alert( 'Перебор' );
alert( "Нет таких значений" );

// Любое выражение может быть аргументом для switch/case
    a = "1";
let b = 0;

switch (+a) {
  case b + 1: // выполнится
    alert("Выполнится, т.к. значением +a будет 1, что в точности равно b+1");
    break;

  default:
    alert("Это не выполнится");
}

// Группировка «case»
a = 3;

switch (a) {
  case 4:
    alert('Правильно!');
    break;

  case 3: // (*) группируем оба case
  case 5:
    alert('Неправильно!');
    alert("Может вам посетить урок математики?");
    break;

  default:
    alert('Результат выглядит странновато. Честно.');
}

// проверка на равенство всегда строгая. Значения должны быть одного типа
let arg = prompt("Введите число?");
switch (arg) {
  case '0':
  case '1':
    alert( 'Один или ноль' );
    break;

  case '2':
    alert( 'Два' );
    break;

  case 3:
    alert( 'Никогда не выполнится!' );
    break;
  default: // выполнится
    alert( 'Неизвестное значение' );
}