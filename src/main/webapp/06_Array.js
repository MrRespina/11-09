/**
 * 
 */
 
// alert('Array 연결 ?')
//	배열(Array) : 순서가 있는 list
let student = ['김씨','이씨','정씨']
console.log(student[1]);	// 인덱스는 항상 0부터 시작함.

// 문자 뿐만 아니라 숫자, 객체, 함수, ... 포함해서 제작 가능하다.
let person = [
	'ji',100,true,{name:'June',age:100},function(){
		console.log('array!')
	}
]

console.log(person)
console.log(person.length)

let days = ['월','화','수']
// push() : 배열 끝에 추가
days.push('목')
console.log(days);

// pop() : 배열 끝 요소를 제거
days.pop()
console.log(days);

// unshift() : 배열 맨 앞에 요소 추가
days.unshift('일')
console.log(days);

// shift() : 제일 앞의 요소 제거
days.shift()
console.log(days);

// unshift() : 여러개 추가 가능
days.unshift('목','금','토','일')
console.log(days);

// 배열을 사용하는 이유 중 하나 : 반복문을 원활하게 사용하기 위해!
for(let i = 0 ; i < days.length ; i++){
	console.log(days[i]);
}

// in은 배열의 인덱스 알려줌.
for(let day in days){
	console.log(day);
}

// of를 사용하면 배열 내에 있는 값을 줌.
for(let day of days){
	console.log(day);
}