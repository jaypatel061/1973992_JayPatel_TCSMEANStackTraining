var budgetObj=[];
var budgetString;

function storeInSession(){
	sessionStorage.setItem("clientInfo",budgetString)
	//onFormSubmit()
}
function retrieveFromSession(){
	var budgetArray=[];
    var obj=sessionStorage.getItem("clientInfo")
    console.log(obj)
	var stringified = JSON.stringify(obj);
	
	budgetArray=JSON.parse(stringified)
	for(var i=0;i<budgetArray.length; i++){
		insertNewRecord(budgetArray[i]) 
	}
}

function onFormSubmit(){
    var data= readFormData();
	
	//document.write(data);
    //insertNewRecord(data)
	budgetString=JSON.stringify(budgetObj.push(data))
	storeInSession()
	resetData()
     
}

function readFormData(){
    var obj={} //empty obj
    obj.client=document.getElementById("client").value;
    obj.project=document.getElementById("project").value;
	obj.budget=document.getElementById("budget").value;
	
    console.log(obj);
	//document.write(obj)
    return obj;
}

function insertNewRecord(data){
    var table=document.getElementById("financeTeam")
    var body=table.getElementsByTagName("tbody")[0];  //[0] means multiple tags are there
    var newRow=body.insertRow(body.length) //insertRow is predefined function  //row created
    var cell1=newRow.insertCell(0);  //cell created
    cell1.innerHTML=data.client;  //value placed
    var cell2=newRow.insertCell(1);
    cell2.innerHTML=" "+data.project;
	var cell3=newRow.insertCell(2);
	cell3.innerHTML="$"+data.budget;
}

function resetData(){
    document.getElementById("client").value="";
    document.getElementById("project").value="";
	document.getElementById("budget").value="";
}