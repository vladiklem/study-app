function getStr() {
  return "str";
}

function* gener() {
    const a = 1;
  yield getStr();
  console.log(1);
  yield "str2";
  console.log(2);
  yield 3;
}

const generator = gener();
console.log(generator.next());

for (let i = 0; i < 7; i++) {
    console.log(i);
}

// -----------

function* foo() {
  yield "a";
  yield "b";
  yield "c";
}

let str = "";
for (const val of foo()) {
  str = str + val;
}

// -------
function* generate1() {
  yield 1;
  yield* generate2();
}

function* generate2() {
  yield 2;
  yield 3;
  yield 4;
}

const gen = generate1();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: 4, done: false }
console.log(gen.next()); // { value: undefined, done: true }
