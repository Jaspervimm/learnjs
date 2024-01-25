//var test2
console.log('Hello JS'); //semi koolon ei pea olema, kui ei taha ühe rea peale kirjutada
let num = 1;
const pi = 3.141595;
var num2 = 2; //hoisting
num = 2
console.log(typeof num);
console.log(typeof pi);
let text = "hello world";
text = 'hello world';
text = `hello world!
 and pi is ${pi}`; //töötab reavahetusel
 console.log (text);
 let bool = true;
 bool = false;
 console.log(bool);
 let undef;
 console.log(undef);
 let nil = null;
 console.log(nil);
 nil = undefined;
 console.log(nil);
 num = -1/0; // infinity and -infinity
 num = Math.sqrt(-1); // NaN
 console.log(num);
 num = 0 * -1;
 console.log(num);
num = 0.1 + 0.2;
console.log(num);

let array = [1, 2, 3, 'heasd', true];
array.push('asdasd');
console.log(array);
console.log(array[0]);
let obj = {
    name: 'Jasper',
    age: 25,
    cats: ['Nuustik', 'Kratt', 'Klutt'],
    address: {
        city: 'Jüri',
        street: 'Ehituse'
    },
    'to-do': 'stuff',
    'anything goes': true,
    hello(){
        console.log('hello')
    }
}
console.log(obj);
console.log(obj.name);
console.log(obj['to-do']);
let func = function (){
    console.log('hello world');
}
console.log(func);
function func2(){
    console.log('hello world');
}
let func3 = () => console.log('hello world');
let func4 = () => {
    console.log('hello world');
}

//console.log(test); ei näe seda
//console.log(test2); see on undefined
//log test = 'test';
//var test2 = 'test2';