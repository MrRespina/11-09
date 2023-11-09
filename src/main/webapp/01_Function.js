/**
 * 
 */
// alert("개졸류");

// 함수(Function)
//	서비스를 만들다 보면 같거나 비슷한 기능을 또 사용하는 경우가 발생
//	매번 새롭게 만들지 않고 > 자주 사용하는 기능을 하나로 묶어서 불러다가 쓰자.

//	function vs method
//		function : 하나의 기능을 구현하도록 구성한 것 - 독립적 존재
//		method : class 내부에 정의한 함수(function) - 종속적 존재

/*
function 함수명(파라미터){
	내용
}
// 함수명(파라미터); 로 호출한다.
 */
 
 // 파라미터 없는 함수
 function showError(){
	alert('에러났소!');
}

showError();	// html 실행과 동시에 발생
//	원하는 타이밍에 함수를 부르고 싶다면, 다양한 이벤트를 통해 불러라!

// 파라미터 있는 함수
function sayMyName(name){
	let msg = `Hello, ${name}`;
	alert(msg);
}

sayMyName('NEO');

// 파라미터가 필요한 함수에서 파라미터를 안쓰면?
sayMyName();	// undefined(정의되지 않음)

// undefined 방지법?
function sayMyName2(name){
	let msg = "hello";
	if(name){	// 함수 호출시 파라미터가 있다면(name = true 일 때) if문 동작해서 추가해주도록.
		msg += `, ${name}`;
	}
	alert(msg);
}

sayMyName2('NEO');
sayMyName2();

let msg = 'Hello?';	// 현재 .js 파일 어디에서나 접근이 가능한 변수 : 전역변수
console.log(`함수 호출 전`);
console.log(msg);

function sayMyName3(name){
	let msg = "hello 2트";	// 해당 함수 내에서만 접근 가능한 변수 : 지역변수
	if(name){
		msg += `, ${name}`;
	}
	console.log(`함수 내부`);
	console.log(msg);
}

sayMyName3('J');
console.log(`함수 호출 후`);
console.log(msg);

// 지역변수는 함수 안에서 전역변수와 같은 이름으로 지을 수 있음. 서로 간섭받지 않는다.(독립적임)
// 전역변수가 많아지면 관리하기 복잡해짐.
// 	> 함수에서 필요한 변수는 가능하면 함수 안에서 만들 것.

// OR을 사용해서 기본 값 넣기
function sayHello(name){
	let newName = name || 'Friend';
	let msg = `hello, ${newName}`;
	console.log(msg);
}
sayHello();
sayHello(`Yun`);

// 파라미터에 default 값을 정하기
function sayHello2(name = 'Friends'){
	let msg = `Hello, ${name}`;
	console.log(msg);
}

sayHello2();
sayHello2('Jun');

// 정리 :
//		함수는 한번에 하나의 작업만 하는게 좋음.
//		여러작업이 진행되야 한다면 함수를 나눠서 구분하라. 1함수 = 1기능
//		함수명은 읽기 쉽고 어떤 기능이 들어있는지 알 수 있게 네이밍할 것.
//		함수명은 중복 불가