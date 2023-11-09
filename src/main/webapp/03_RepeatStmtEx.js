/**
 * 
 */
 
// document.write();
//	웹 페이지가 로딩될 때 실행되면 웹페이지에 가장 먼저 출력!
//	보통 테스트용 or 디버깅용
//	중간에 document.write() 가 실행될 시
//	웹 페이지 안에 먼저 로딩된 모든 데이터를 지우고 본인의 데이터 출력.

function test(){
	document.write("<table border='1'>");
	document.write("<tr><td>테이블 생성</td></tr>");
	document.write("<tr><td>document.write() 는</td></tr>");
	document.write("<tr><td>test 용도</td></tr>");
	document.write("</table>");
}

function createTable(){
	let low = prompt("만들 행의 갯수 ?");
	let column = prompt("만들 열의 갯수 ? ");
	document.write("<table border='1' align='center' style='margin-top:200px'>");
	for(let i=0;i<low;i++){
		document.write("<tr>");
		for(let j=0;j<column;j++){
			document.write("<td>");
			document.write(String((i+1)+"행") + " " +String((j+1)+"열"));
			document.write("</td>");
		}
		
		document.write("</tr>");		
	}
	document.write("</table>");
}