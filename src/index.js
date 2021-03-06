import React from 'react';
import ReactDom from 'react-dom';
import Home from '@pages/Home/index';
import '@style/reset.scss';

async function f() {
	return 'hello world';
}
function* helloWorldGenerator() {
	yield 'hello';
	yield 'world';
	return 'ending';
}
const hw = helloWorldGenerator();
console.log('Generator>>>>>>', hw.next());
const arr = [1, 2, 3, 4, 5, 1, 2, 3, 5];
const setArr = new Set(arr);
console.log('setArr?>>>>>>', setArr);
const m = new Map();
console.log('Map>>>>>>>>', m);
f().then(v => console.log('async>>>>', v));
const helloSymbol = Symbol('www');
console.log('Symbol>>>>>>', helloSymbol);
console.log('flat>>>>>>', [1, [2, [3]]].flat(Infinity));

console.log('---------------');
console.log('Promise');
new Promise(resolve => {
	setTimeout(() => {
		resolve('hello');
	}, 2000);
}).then(value => {
	console.log(value);
	return new Promise(resolve => {
		setTimeout(() => {
			resolve('world');
		}, 2000);
	});
}).then(value => {
	console.log(`${value} world`);
});
console.log('---------------');
// Proxy 不支持
// const target = {};
// const handler = {};
// const proxy = new Proxy(target, handler);
// proxy.a = 'b';
// console.log('proxy>>>>>', target.a);
// 不支持
// class A {
// 	static name = 'name';
// }
// console.log('static class>>>>>', new A());

ReactDom.render(
	<div>
		<div>{setArr}</div>
		<Home />
	</div>,
	document.getElementById('app'),
);
