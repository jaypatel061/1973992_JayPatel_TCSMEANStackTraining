var o=[];
//sessionStorage.setItem("item1",JSON.stringify(o));

function onFormSubmit(){
	var obj={}
	obj.fruit=document.getElementById("fruit").value;
    obj.price=document.getElementById("p1").value;
    //console.log(obj);
	o.push(obj);
	console.log(o);
	sessionStorage.setItem("item1",JSON.stringify(o));

}
function onFormSubmit1(){
	var obj={}
	obj.fruit=document.getElementById("fruit1").value;
    obj.price=document.getElementById("p2").value;
    //console.log(obj);
	//console.log(obj);
	o.push(obj);
	console.log(o);
	sessionStorage.setItem("item1",JSON.stringify(o));

}
function onFormSubmit2(){
	var obj={}
	obj.fruit=document.getElementById("fruit2").value;
    obj.price=document.getElementById("p3").value;
    //console.log(obj);
	//console.log(obj);
	o.push(obj);
	console.log(o);
	sessionStorage.setItem("item1",JSON.stringify(o));

}
function onFormSubmit3(){
	var obj={}
	obj.fruit=document.getElementById("fruit3").value;
    obj.price=document.getElementById("p4").value;
    //console.log(obj);
	//console.log(obj);
	o.push(obj);
	console.log(o);
	sessionStorage.setItem("item1",JSON.stringify(o));

}
function onFormSubmit4(){
	var obj={}
	obj.fruit=document.getElementById("fruit4").value;
    obj.price=document.getElementById("p5").value;
    //console.log(obj);
	//console.log(obj);
	o.push(obj);
	console.log(o);
	sessionStorage.setItem("item1",JSON.stringify(o));

}
function onFormSubmit5(){
	var obj={}
	obj.fruit=document.getElementById("fruit5").value;
    obj.price=document.getElementById("p6").value;
    //console.log(obj);
	//console.log(obj);
	o.push(obj);
	console.log(o);
	sessionStorage.setItem("item1",JSON.stringify(o));

}
/*
function addToMain(){
	var x=JSON.parse(sessionStorage.getItem("item1"));
	console.log(x);
	//console.log(x.data.fruit[0]);
	
	let count=0;
	let totalPrice=0;
	for(let i=0; i<x.length; i++){	
			console.log(x[i].fruit);
		    console.log(x[i].price);
			document.getElementById("printInfo").appendChild(document.createElement("div")).innerHTML="Fruit   "+x[i].fruit+"           price:          $"+x[i].price+"<br/>";
			//document.getElementById("printInfo").appendChild(document.createElement("div")).innerHTML="Fruit   "+x[i].fruit+"</br>";
			totalPrice=totalPrice+parseFloat(x[i].price);
			//console.log(priceTotal);
			//x.pop(data);
	//console.log(x[0].fruit);
	//console.log(x[0].price);
	//console.log(x.fruit)
	//console.log(x);
	}
	
	//console.log(totalPrice);
	document.getElementById("printInfo").appendChild(document.createElement("div")).innerHTML="Total Price: $"+totalPrice+"<br/>";
	document.getElementById("printInfo").appendChild(document.createElement("div")).innerHTML="Values: "+x.length+"<br/>";
	console.log("Values: "+x.length);	
}
*/
function add(){
	var x=JSON.parse(sessionStorage.getItem("item1"));
	console.log(x);
	var total=0;
	document.getElementById("printInfo").appendChild(document.createElement("div")).innerHTML="Items in the Cart: "+x.length+"<br/>";
	var table=document.getElementById("itemList") 
	for (var i=0; i<x.length; i++){
		var row=table.insertRow();
		var cell1=row.insertCell(0);
		var cell2=row.insertCell(1);
		cell1.innerHTML=x[i].fruit;
		cell2.innerHTML='$ '+x[i].price;
		total=total+parseFloat(x[i].price);
	}
		
		var row=table.insertRow();
		var cellName=row.insertCell(0);
		var celltotalPrice=row.insertCell(1);
		cellName.innerHtml='TOTAL PRICE ';
		celltotalPrice.innerHTML='$'+total;
	
}

	
