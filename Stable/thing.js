function addStyleString(str) {
	var node = document.createElement('style');
	node.innerHTML = str;
	document.body.appendChild(node);
}

addStyleString("\
.clearfix{\
	display: block;\
	width: 100%;\
	height: 100%;\
}.clearfix:after{\
	content: '.';\
	display: block;\
	clear: both;\
	visibility: hidden;\
	line-height: 0;\
	height: 0;\
}\
#sidebar {\
	z-index: 100;\
	float: right;\
	background: black;\
}\
#majorContainer{\
	width: 60px;\
	float: right;\
	background-color: black;\
	z-index: 110;\
}\
#linkContainer{\
	padding: 0 5px;\
}\
.sLink {\
width: 50px;\
height: 65px;\
display:-ms-flexbox;\
-ms-flex-pack:center;\
-ms-flex-align:center;\
display:-moz-box;\
-moz-box-pack:center;\
-moz-box-align:center;\
display:-webkit-box;\
-webkit-box-pack:center;\
-webkit-box-align:center;\
display:box;\
box-pack:center;\
box-align:center;\
}\
.sLink a, .sLink a:hover, .sLink a:visited{\
	color: white;\
	text-decoration: none;\
	background-size: 100% 100%;\
	background-repeat: norepeat;\
}\
#l1{\
	background-image:url('https://raw.githubusercontent.com/LonMcGregor/Win8Sidebar/master/Stable\/search.png');\
}\
#l2{\
	background-image:url('https\://raw.githubusercontent.com/LonMcGregor/Win8Sidebar/master/Stable/share.png');\
}\
#l3{\
	background-image:url('https://raw.githubusercontent.com/LonMcGregor/Win8Sidebar/master/Stable\/start.png');\
}\
#l4{\
	background-image:url('https://raw.githubusercontent.com/LonMcGregor/Win8Sidebar/master/Stable\/devices.png');\
}\
#l5{\
	background-image:url('https://raw.githubusercontent.com/LonMcGregor/Win8Sidebar/master/Stable\/settings.png');\
}\
#sbContainer{\
	display: none;\
	z-index: 85;\
	float: left;\
	height: 100%;\
	width: 300px;\
	background-color: rgba(0,0,0,0);\
	overflow: hidden;\
}\
.sideBody {\
	float: left;\
	height: 100%;\
	width: 240px;\
	background-color: blue;\
	color: white;\
	padding-left: 20px;\
}\
#sb1, #sb2, #sb3, #sb4, #sb5 {\
	position: absolute;\
	right: -240px;\
}\
.sideBody h1 {\
	font-family: Segoe UI;\
	font-weight: normal;\
}\
#sb1{z-index:75;}\
#sb2{z-index:76;}\
#sb3{z-index:77;}\
#sb4{z-index:78;}\
#sb5{z-index:79;}\
#sb1 input {\
	border: none;\
	width: 80%;\
	padding: 5px;\
	font-size: 16px;\
}\
.shareItem{\
	margin-top: 9px;\
	width: 80%;\
}\
#sb2 a .shareItem {\
	font-family: Segoe UI;\
	font-weight: normal;\
	width: 80%;\
	height: 25px;\
	padding: 5px;\
	font-size: 16px;\
}\
#sb2 a, #sb2 a:hover, #sb2 a:visited {\
	text-decoration: none;\
}\
#sb2 a .shareItem:hover {\
	background-color: #f33;\
}\
a .shareItem, a .shareItem:hover, a .shareItem:visited {\
	color: white;\
	text-decoration: none;\
}\
.shareText { \
	text-decoration: none;\
}");

document.write('<div id="sidebar">\
	<div id="majorContainer">\
		<div id="linkContainer">\
			<a href="#search"onclick="showSideBody(1)"><div id="l1" class="sLink clearfix">\
			</div></a>\
			<a href="#share"onclick="showSideBody(2)"><div id="l2" class="sLink clearfix">\
			</div></a>\
			<a href="#start" onclick="showSideBody(3)"><div id="l3" class="sLink clearfix">\
			</div></a>\
			<a href="#devices"onclick="showSideBody(4)"><div id="l4" class="sLink clearfix">\
			</div></a>\
			<a href="#settings"onclick="showSideBody(5)"><div id="l5" class="sLink clearfix">\
			</div></a>\
		</div>\
	</div>\
	<div id="sbContainer">\
		<div id="sb1" class="sideBody" toggle="0">\
			<h1>Search</h1>\
			<div id="searching">\
				<input id="searchbox" placeholder="Search..." onkeydown="doSearch(event)"></input>\
			</div>\
		</div>\
		<div id="sb2" class="sideBody" toggle="0">\
			<h1>Share</h1>\
			<div id="shareList">\
				<a href="#" onclick="window.location=');
				document.write("'https://twitter.com/intent/tweet?text\='");
				document.write('+window.location" class="shareItem"><div id="shareTwitter" class="shareItem shareText">Share on Twitter</div></a>\
				<a href="#" onclick="window.location=');
				document.write("'http://www.reddit.com/submit?title\='+window.title+'&url='+window.location");
				document.write('" class="twitter-share-button"><div id="shareReddit" class="shareItem shareText">Share on Reddit</div></a>\
			</div>\
		</div>\
		<div id="sb3" class="sideBody" toggle="0">\
			<h1>Site</h1>\
		</div>\
		<div id="sb4" class="sideBody" toggle="0">\
			<h1>Devices(?)</h1>\
		</div>\
		<div id="sb5" class="sideBody" toggle="0">\
			<h1>Settings</h1>\
		</div>\
	</div>\
</div>');

function setSize(){
	var h = window.innerHeight;
	sidebarDims(h);
	sidebarAligns(h);
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


