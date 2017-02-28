/* eslint no-unused-vars: "off", no-undef: "off", no-console: "off" */
/* eslint no-redeclare: "off" */

'use strict';

var compositeThing = new CompositeThing();
var params = { thisIsPreferred: true };
var params = { this_is_okay: true };

if (cond) {
  stuff();
} else {
  otherStuff();
}
for (var i = 0; i < target; ++i) {
  stuff();
}
var foo = function (arg1, arg2) {
  stuff(arg1);
};

var factorial = function (value) {
  return value === 0 ? 1 : value * factorial(value - 1);
};
console.log(factorial(5));

var foo = [
  'one',
  'two',
  'three',
];
var foo = ['one', 'two', 'three'];
var bar = {
  one: 1,
  two: 2,
  three: 3,
};
var bar = { one: 1, two: 2, three: 3 };
var baz = { bazinga: {
  one: 1,
  two: 2,
} };
foo.bar = 123;

var filter = function (item) { return item.count > 1; };
if (foo) {
  something();
} else {
  somethingElse();
}

var result;
result = 5 * (1 + 2);
result = ! obj.isValid();
result = ++count;
result = count++;
result = offset(-width, -height);
result = +bar;
result = cond ? first : second;

var x = 'this is a' +
  'multi-line string';


const o = a => a;
const y = () => {};
const z = (a, b, c) => a;
const w = i => ({ foo: i });
