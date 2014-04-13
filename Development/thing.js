function testCSS(str){
var headTag = document.getElementsByTagName("head")[0];
var cssNode = document.createElement('link');
cssNode.type = 'text/css';
cssNode.rel = 'stylesheet';
cssNode.href = 'side.css';
headTag.appendChild(cssNode);
}


function testInject(){
var bodyTag = document.getElementsByTagName("body")[0];
var sidebar = document.createElement('div');
sidebar.id = 'sidebarX';
var htmlContent = 'Sidebar Injection Completed';
sidebar.innerHTML = htmlContent;
bodyTag.appendChild(sidebar);
}

function pageAlert(str){
var bodyTag = document.getElementsByTagName("body")[0];
var pageAlert = document.createElement('div');
pageAlert.class = 'WorkingAlert';
var htmlContent = str;
pageAlert.innerHTML = htmlContent;
bodyTag.appendChild(pageAlert);
}


function setSize(){
	var h = window.innerHeight;
	
	sidebarDims(h);
	sidebarAligns(h, 0);
}

function setOffset(offset){
	var h = window.innerHeight;
	var newheight = h + offset;
	
	sidebarDims(newheight);
	sideBodyDims(offset);
	sidebarAligns(h, offset);
}

function sideBodyDims(h){
	
	var items = ["sb1", "sb2", "sb3", "sb4", "sb5"];
	for (var i = 0; i < 5; i++){
		document.getElementById(items[i]).style.position="absolute";
		document.getElementById(items[i]).style.top=h+"px";
	}
	
}

function sidebarDims(h){
	var items = ["sidebar", "majorContainer", "sbContainer"];
	for (var i = 0; i < 3; i++){
		document.getElementById(items[i]).style.height=(""+h+"px");
		
		document.getElementById(items[i]).style.position="absolute";
		document.getElementById(items[i]).style.right="0px";
		document.getElementById(items[i]).style.top="0px";
	}
}


function sidebarAligns(h, o){
	document.getElementById('linkContainer').style.position="relative";
	
	var containerHeight = document.getElementById('linkContainer').clientHeight;
	if (containerHeight === 0){
		containerHeight = 403;
	}
	
	var loc = ((h/2)-containerHeight/2)+o;
	document.getElementById('linkContainer').style.top=(""+loc+"px");
	
}


function showSideBody(i){
	var toggle = document.getElementById('sb'+i).toggle;

	for(var j = 1; j < 6; j++){
		moveElementIn(j);
	}

	if (toggle===0){
		moveElementOut(i);
	} else {
		moveElementIn(i);
	}
}


function moveElementIn(i){
	document.getElementById('sb'+i).className =
		document.getElementById('sb'+i).className.replace
			( /(?:^|\s)out(?!\S)/g , '' );
	document.getElementById('sb'+i).toggle = 0;
}


function moveElementOut(i){
	document.getElementById('sb'+i).toggle = 1;
	document.getElementById('sb'+i).className += " out";
}


function doSearch(event){
	var keyCode =  ('which' in event) ? event.which : event.keyCode;
	if (keyCode===13){
		window.location="http://duckduckgo.com/?q="+document.getElementById('searchbox').value;
	}
}


window.onload=function() {
	testInject();
	setSize(); 
	testCSS("");
	window.addEventListener("resize", function(){setSize();}, true);
	window.addEventListener("scroll", function(){setOffset(window.pageYOffset);}, true);
	setSize(); 
	showSideBody(3);
	testCSS("");
};