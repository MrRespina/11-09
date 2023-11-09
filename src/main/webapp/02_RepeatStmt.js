/**
 * 
 */

// 반복문(Repeat Statement)
//	동일한 작업을 여러번 반복할 때 사용함!
//	for / while / do-while

// 1부터 10까지 출력!
for(let i=1; i<=10; i++){
	console.log(i);	
}

let i1 = 1;
while(i1<11){
	console.log(i1++);
}

let i2 = 1;
do{
	console.log(i2++);	
}while(i2<10){
	console.log(i2++);
}

// 반복문 종료
//	break : 멈추고 해당 반복문 빠져나옴
//	continue : 해당 반복문 멈추고 다음 반복문 넘어가서 실행!
//	return : 비공식적 break;