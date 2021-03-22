var o:any[]=[];
//sessionStorage.setItem("item1",JSON.stringify(o));

function onFormSubmit():void{
	var obj:{}={};
    type obj = { fruit: string, price: number }; 
	this.obj.fruit=(<HTMLInputElement>document.getElementById("fruit")).value;
	this.obj.price=(<HTMLInputElement>document.getElementById("p1")).value;
    //console.log(obj);
	o.push(obj);
	console.log(o);
	sessionStorage.setItem("item1",JSON.stringify(o));

}
function onFormSubmit1():void{
	var obj:{}={};
    type obj = { fruit: string, price: number }; 
	this.obj.fruit=(<HTMLInputElement>document.getElementById("fruit1")).value;
	this.obj.price=(<HTMLInputElement>document.getElementById("p2")).value;
    //console.log(obj);
	o.push(obj);
	console.log(o);
	sessionStorage.setItem("item1",JSON.stringify(o));

}
function onFormSubmit2():void{
	var obj:{}={};
    type obj = { fruit: string, price: number }; 
	this.obj.fruit=(<HTMLInputElement>document.getElementById("fruit2")).value;
	this.obj.price=(<HTMLInputElement>document.getElementById("p3")).value;
    //console.log(obj);
	o.push(obj);
	console.log(o);
	sessionStorage.setItem("item1",JSON.stringify(o));

}
function onFormSubmit3():void{
	var obj:{}={};
    type obj = { fruit: string, price: number }; 
	this.obj.fruit=(<HTMLInputElement>document.getElementById("fruit3")).value;
	this.obj.price=(<HTMLInputElement>document.getElementById("p4")).value;
    //console.log(obj);
	o.push(obj);
	console.log(o);
	sessionStorage.setItem("item1",JSON.stringify(o));

}
function onFormSubmit4():void{
	var obj:{}={};
    type obj = { fruit: string, price: number }; 
	this.obj.fruit=(<HTMLInputElement>document.getElementById("fruit4")).value;
	this.obj.price=(<HTMLInputElement>document.getElementById("p5")).value;
    //console.log(obj);
	o.push(obj);
	console.log(o);
	sessionStorage.setItem("item1",JSON.stringify(o));

}
function onFormSubmit4():void{
	var obj:{}={};
    type obj = { fruit: string, price: number }; 
	this.obj.fruit=(<HTMLInputElement>document.getElementById("fruit5")).value;
	this.obj.price=(<HTMLInputElement>document.getElementById("p6")).value;
    //console.log(obj);
	o.push(obj);
	console.log(o);
	sessionStorage.setItem("item1",JSON.stringify(o));

}

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

	




