function testCSS(){
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


function setSize(){
	var h = window.innerHeight;
	sidebarDims(h);
	sidebarAligns(h);
}

function onload(){
	window.addEventListener("resize", function(){setSize();}, true);
	setSize(); 
	showSideBody(3);
	testCSS();
	testInject();
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


function sidebarAligns(h){
	document.getElementById('linkContainer').style.position="relative";
	
	var containerHeight = document.getElementById('linkContainer').clientHeight;
	
	var loc = ((h/2)-containerHeight/2);
	document.getElementById('linkContainer').style.top=(""+loc+"px");
}


function showSideBody(i){
	var toggle = document.getElementById('sb'+i).toggle;

	for(var j = 1; j < 6; j++){
		moveElementIn(j);
	}

	if (toggle===0){
		document.getElementById('sbContainer').style.display="block";
		moveElementOut(i);
	} else {
		moveElementIn(i);
		document.getElementById('sbContainer').style.display="none";
	}
}


function moveElementIn(i){
	setTimeout(function() {
		document.getElementById('sb'+i).style.right='40px';
	}, 400);
	setTimeout(function() {
		document.getElementById('sb'+i).style.right='0px';
	}, 400);
	setTimeout(function() {
		document.getElementById('sb'+i).style.right='-40px';
	}, 400);
	setTimeout(function() {
		document.getElementById('sb'+i).style.right='-80px';
	}, 400);
	setTimeout(function() {
		document.getElementById('sb'+i).style.right='-120px';
	}, 400);
	setTimeout(function() {
		document.getElementById('sb'+i).style.right='-160px';
	}, 400);
	setTimeout(function() {
		document.getElementById('sb'+i).style.right='-200px';
	}, 400);
	setTimeout(function() {
		document.getElementById('sb'+i).style.right='-240px';
	}, 400);

	document.getElementById('sb'+i).toggle = 0;
}


function moveElementOut(i){
	document.getElementById('sb'+i).toggle = 1;
	
	setTimeout(function() {
		document.getElementById('sb'+i).style.right='-240px';
	}, 400);
	setTimeout(function() {
		document.getElementById('sb'+i).style.right='-200px';
	}, 400);
	setTimeout(function() {
		document.getElementById('sb'+i).style.right='-160px';
	}, 400);
	setTimeout(function() {
		document.getElementById('sb'+i).style.right='-120px';
	}, 400);
	setTimeout(function() {
		document.getElementById('sb'+i).style.right='-80px';
	}, 400);
	setTimeout(function() {
		document.getElementById('sb'+i).style.right='-40px';
	}, 400);
	setTimeout(function() {
		document.getElementById('sb'+i).style.right='0px';
	}, 400);
	setTimeout(function() {
		document.getElementById('sb'+i).style.right='40px';
	}, 400);
}


function doSearch(event){
	var keyCode =  ('which' in event) ? event.which : event.keyCode;
	if (keyCode===13){
		window.location="http://duckduckgo.com/?q="+document.getElementById('searchbox').value;
	}
}


window.onload=onload();