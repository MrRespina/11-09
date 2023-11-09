/**
 * 
 */
 
 // 객체(Object) - JSON Parsing
 let dog = {name : 'Joon',age:3,};
 
 // 객체는 중괄호 안에서 구성
 //		Key : value로 구성된 프로퍼티(속성)이 중괄호 안에 포함.
 //		각각 쉼표로 구분, 마지막에는 쉼표가 없어도 되고 있어도 됨.
 
 // 접근
 console.log(dog.name);	// 변수명.key > value 값 리턴
 console.log(dog['age']); // 변수명['key'] > value 값 리턴
 
 // 속성 추가
 dog.gender = 'Male';
 dog['furColor'] = 'black';
 console.log(dog);
 
 let name = 'Ji'
 let age = 100
 
 let person = {
	name : name,
	age : age,
	gender: 'male',
	
}

console.log(person)
let person2 = {
	name,
	age,
	gender : 'male'
}	// 조건 : key 이름과 value에서 받아올 변수명이 같아야 함.
console.log(person2)
console.log(person2.name);
// 존재하지 않는 속성에 접근하려면 에러가 아닌 undefined가 나옴.
console.log(person2.hairColor);

// in 연산자 이용 : 어떤 속성이 있는지 확인 가능
console.log('phone' in person2) //false;
console.log('age' in person2) //true;

// java : foreach 문과 비슷
for(let k in person2){
	console.log(k);	// key 값이 전부 나옴
	console.log(person2[k]);
}

// 함수로 객체 만들기
function makeObject(name,price){
	return { name,age,shop : 'myCafe',price }
}

let coffee = makeObject('아메리카노',3500);
console.log(coffee);