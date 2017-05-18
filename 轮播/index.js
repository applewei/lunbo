var view=document.querySelector('.view-list');
var index=0;
//function left(){
//	index++;
//	if(index ==4){
//		index=0;
//	}
//	var dis=index * 800;
//	view.style.transform='translate(-'+dis+'px,0)';
//}
//function right(){
//	index--;
//	if(index ==-1){
//		index=3;
//	}
//	var dis=index * 800;
//	view.style.transform='translate(-'+dis+'px,0)';
//}
var i=0;
setInterval(function(){
	
	if(i == 4){
		i=0;
	}
	var s=i * 800;
	view.style.transform='translate(-'+s+'px,0)';
	i++;
},3000);
//简化  上下移动
function move(num){
	
	index+=num;
	if(index ==-1){
		index=3;
	}
	if(index ==4){
		index=0;
	}
	
	run();
}
//
function run(){
	var dis=index * 800;
	view.style.transform='translate(-'+dis+'px,0)';
}

//自动
function goto(num){
	index=num;
	run();
}

