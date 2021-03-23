/* eslint-disable linebreak-style */
/* eslint-disable prefer-template */
/* eslint-disable radix */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-const */
/* eslint-disable no-var */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
/* eslint-disable vars-on-top */
/* eslint-disable func-names */
/* eslint-disable semi */
/* eslint-disable no-unused-expressions */
/* eslint-disable space-before-blocks */
/* eslint-disable quotes */
/* eslint-disable eqeqeq */
/* eslint-disable no-continue */
/* eslint-disable comma-dangle */
/* eslint-disable no-constant-condition */
/* eslint-disable no-alert */
/* eslint-disable for-direction */
/* eslint-disable no-plusplus */

// console.log('%c hello world!', 'background-color: blue; color: yellow;');
// document.write('hello world<br><br>');
// alert('hi everyone')
// confirm('are you ready!!!');
// console.table('hello', 'we are good');
// console.warn('hi man');
// console.info('good morning');
// console.debug('debugging');
// console.error('this is error');

// var let const

// !!!IMPORTANT!!!
// let a = null; // type of object çıkıyor.
// console.log(typeof a); // person?.name yazarsan undefined dönüyor.

// let number = parseInt(prompt('type a number: ')); // typeof string
// fibo = [];
// fibo[0] = 1;
// fibo[1] = 1;
// for (let i = 2; i < 1000; i++) {
//   fibo[i] = fibo[i - 1] + fibo[i - 2]
// }
// document.write('<h2>' + fibo[number] + '</h2>');

// function fibonacci(num) {
//   let arr = [0, 1];
//   for (let i = 2; i <= num + 1; i++){
//     arr.push(arr[i - 1] + arr[i - 2])
//   }
//   return arr[arr.length - 1]
// }
// let myNumber = parseInt(prompt('type a number: '));
// let fibonacciNum = fibonacci(myNumber);
// document.write(fibonacciNum);

function reverse(text) {
  let reversed = '';
  let lastIndex = text.length - 1;
  while (lastIndex >= 0) {
    reversed += text[lastIndex];
    lastIndex--;
  }
  return reversed
}
let texter = prompt('type a word: ');
const reverseText = reverse(texter)
document.write(reverseText);
