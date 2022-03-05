$(function(){//jqueryの約束消さないで！

console.log("外部ファイルからハロワ");
//tweet用linkの作り方
function twitText() {
	var s, url;
	s = "Javascriptからtweet!このtweetシェアしてね";
	url = document.location.href;
	
	if (s != "") {
		if (s.length > 140) {
			//文字数制限
			alert("テキストが140字を超えています");
		} else {
			//投稿画面を開く
			url = "http://twitter.com/share?url=" + escape(url) + "&text=" + s;
			window.open(url,"_blank","width=600,height=300");
		}
	}
}
//tweet用linkの作り方

console.log("こんにちは,"+"忍者わんこさん");
console.log("1991-1-1");

console.log("SUNABACOKOZA".split("A"));

console.log();

var user_name="rie"
console.log(user_name);

var fruit="orange"
console.log(fruit+"を用意します");
console.log(fruit+"の皮をむきます");
console.log(fruit+"をミキサーに入れます");
console.log(fruit+"ジュースの出来上がり");

fruit="mango";
console.log(fruit+"を用意します");
console.log(fruit+"の皮をむきます");
console.log(fruit+"をミキサーに入れます");
console.log(fruit+"ジュースの出来上がり");

// regionという変数を作りましょう
var region=["KOZA","TAKAMATSU","EBETSU"]
console.log(region);
console.log(region[0]);

region={"okinawa":"koza","hokkaido":"ebetsu"}
console.log(region["hokkaido"]);

var count=0;

count +=1; 
//count =count+1
//count+=count+1;再代入している
console.log(count);//出力結果を確認
count +=1;
console.log(count);//出力結果を確認

count++;
//1ずつ増えていく
count--;
//1ずつ減っっていく

//count++; 後置
//++count; 前置

console.log(1<2);
//真偽値
console.log(1<0);
console.log(1==1);//等しいかどうか
console.log(1===1);//等しいかどうか
console.log(1!=1);

//みかんの数
var count =0;
//ぶどうの数
var grapes=1;
if(count>0){
	console.log("みかんジュースを作る");
}else if(grapes>0){
	console.log("ぶどうジュースを作る");
}else{ 
	console.log("みかんを買いに行く");
}


var limit=10;
var getup=12;

if(limit<getup){
	console.log("遅刻です");
}else if(limit==getup){
	console.log("ギリギリセーフ");
}else
console.log("よく頑張りました");



//for (var i=1;i<=100; i++){
//console.log();
//}


var fruits=["apple","banana","mango","orange"];

console.log(fruits[0]+"ジュースを作る");

for(var i=0; i<=3; i++){
	console.log(fruits[i]+"ジュースを作る");}

function greet(user){
	console.log(user+"こんにちは");
}
greet("riesan");

var h1_node=document.getElementById("h1_node");
console.log(h1_node);
console.log(h1_node.textContent);

//var btn_node=document.getElementById("btn");
//btn_node.addEventListener("mouseup",changeText);
//function changeText(){
	 //var h1_node=document.getElementById("h1_node");
	 //h1_node.textContent="難しかったですー"
//}

//ここからjqueryの講義です

$("h1").text("hello,world!");
//$("どこの").何を("どうする")；

$("#btn").on("click",function(){
	$("#h1_node").text("jQueryで文字変!");
	$("body").css("color","red");
	$("img").attr("src","./img/画像.jpg");
	$("a").attr("href","https//sunabaco.com");
	$("header").toggle();
	//$("body").addClass("red");
	//$("body").removeClass("blue");
	$("body").toggleClass("blue");

});

//toggle表示非表示切り替え
//attr属性を指定

//$("どこを").on("clickした時",波括弧内の関数を実行(){
//	$("どこの").何を("どうする");
//});















});//jqueryの約束消さないで！

