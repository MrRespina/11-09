/**
 * 
 */

// 화살표함수(Arrow Function)
//		01_function.js 파일에서 다뤘던 함수 : [함수 선언문]
//		화살표 함수 : [함수 표현식]

// 함수 선언문
function sayHi() {
	console.log('ji');
}
sayHi();

// 함수 표현식
let say = function sayHi() {
	console.log('Hi!');
}

say();

// 함수 선언문과 함수 표현식의 문법적인 차이?
//		- 호출하는 타이밍 -

test();	// 함수 선언문은 어디서든지 호출해서 사용 가능 + 함수 만들기 전 단계에서 먼저 부를 수 있음 !
function test() {
	console.log('Test입니다.');
}

// JavaScript는 프로그램이 실행되기 전에 모든 [함수 선언문] 을 찾아 모아서
// 메모리에 저장하고 있다가 필요할 때 내부적으로 끌어올려서 사용한다.
// 	이미 저장이 되어있기 때문에 > 함수가 선언보다 먼저 호출이 되어도 오류없이 잘 동작함!
//						> 실제 코드가 끌어올려지는것은 아니다. 호이스팅(Hoisting) 이라고 한다.

// [함수 표현식]은 코드에 도달하면 생성

// 그래서 둘중에 뭘 쓰면 되냐? > 편한 것
//	난 조금 더 자유롭길 원한다? > 함수 선언문

// 화살표 함수(함수표현식)은 node.js에서 사용될거라 지금은 알아두기만 하고 넘어가기.
// 1. 함수명 없어도 된다.
let add = function(num1, num2) {
	return num1 + num2;
}
console.log(add(1, 2));

// 2. function 생략, 대신 => 사용!
let add2 = (num1, num2) => {
	return num1 + num2;
}
console.log(add2(10, 11));

// 3. return 생략 가능 + 대신 블록은 중괄호{} 대신 소괄호() 로 !
let add3 = (num1, num2) => (num1 + num2);
console.log(add3(3, 5));

// 4. return 시킬 코드가 한 줄이라면 블록도 생략 가능!
let add4 = (num1, num2) => num1 + num2;
console.log(add4(4, 5));

// 5. 파라미터가 하나만 필요하다면 -> 파라미터의 소괄호도 생략이 가능.
let sayHi2 = name => `hello, ${name}`;
console.log(sayHi2('NEO'));

// 6. 파라미터가 없는 함수는 소괄호 생략이 불가하다.
let what = () => { console.log('하하'); };
what();

// Function(독립적) vs Method(종속적)

let person = { 
	name: 'ji', 
	walk: function() { 
		console.log('속보') 
	} 
} // Method : 객체(Object)의 속성(Property)로 할당된 function을 메소드라고 한다.
console.log(person);