/*function addBlog(){
    var title=document.getElementById("title").value;
    var desc=document.getElementById("desc").value;
    var imageInfo=document.getElementById("imageId").files[0].name;
    console.log(title)
    console.log(desc)
    console.log(imageInfo)
    document.getElementById("titleInfo").innerHTML=title;
    document.getElementById("descInfo").innerHTML=desc;
    document.getElementById("imageInfo").src=imageInfo;

}*/
var blogObj=[];
function storeInSession(){
    sessionStorage.setItem("blog",JSON.stringify(blogObj))
	//var obj=JSON.parse(sessionStorage.getItem("blog"))
}
function retrieveFromSession(){
    var obj=JSON.parse(sessionStorage.getItem("blog"))
    console.log(obj)
}

function onFormSubmit(){
    var data= readFormData();
	storeInSession();	
    //print(JSON.parse(sessionStorage.getItem("blog")))
	print(data)
    blogObj.push(data); 
	//print(blogObj)	
	//console.log(blogObj)
    resetData();
	//console.log(blogObj)  
}
function readFormData(){
    var obj={} //empty obj
    obj.title=document.getElementById("title").value;
    obj.desc=document.getElementById("desc").value;
	obj.imageInfo=document.getElementById("imageId").files[0].name;
    //console.log(obj);	
    return obj;
}

function print(data){
		//var d=JSON.stringify(data)
		console.log(data);
		var printInfo=document.getElementById("printInfo")[0];		
		document.getElementById("printInfo").appendChild(document.createElement("titleInfo")).innerHTML="Title:  "+data.title+"<br/>";
		document.getElementById("printInfo").appendChild(document.createElement("descInfo")).innerHTML="Description:  " +data.desc+"<br/>Image:";
		document.getElementById("printInfo").appendChild(document.createElement("img")).src=data.imageInfo;
		document.getElementById("printInfo").appendChild(document.createElement("div")).innerHTML="<br/><br/>";
		//document.getElementById("printInfo").innerHTML=data.desc;
		//document.getElementById("printInfo").innerHTML=data[1].desc;
		   	
		
		/*for (var i=0; i<data.length; i++){	
		console.log(data[i])
		//document.getElementById("printInfo").innerHTML=data[i].desc;
		//document.getElementById("printInfo").appendChild(document.createElement("div")).innerHTML="Title:  "+data[i].title;
		//document.getElementById("printInfo").appendChild(document.createElement("div")).innerHTML="Description:  " +data[i].desc;
		//document.getElementById("printInfo").appendChild(document.createElement("div")).innerHTML="Image:   "+data[i].value;
		
		//document.getElementById("printInfo").appendChild(document.createElement("div")).innerHTML=data[i].imageInfo;
        //document.getElementById("printInfo").innerHTML=data[i].desc;
		//document.getElementById("printInfo").src=data[i].imageInfo; 
		} */
	
	 
}
function resetData(){
    document.getElementById("title").value="";
    document.getElementById("desc").value=""; 
	document.getElementById("imageId").value=""
	}
