
function sidebarInnerData(){
var sb1d = '<div id="searching">\
				<input id="searchbox" placeholder="Search..." onkeydown="doSearch(event)"></input>\
			</div>\
			<ul>\
				<p></p>\
				<p>Common searches / tags:</p>\
				<a href="/tagged/photography">\
					<li id="sb1Link1" class="shareItem shareText">Photography</li>\
				</a>\
			</ul>';
var sb2d = '<ul id="shareList">\
                <a href="#" onclick="window.location=`https://twitter.com/intent/tweet?text=`+window.location" class="shareItem">\
                    <li id="shareTwitter" class="shareItem shareText">Share on Twitter</li>\
                </a>\
                <a href="#" onclick="window.location=`http://www.reddit.com/submit?title=`+window.title+`&amp;url=`+window.location" class="twitter-share-button">\
                    <li id="shareReddit" class="shareItem shareText">Share on Reddit</li>\
                </a>\
            </ul>';
var sb3d = '<div>site description</div>\
            <ul>\
                <a href="http://github.com/LonMcgregor/Win8Sidebar">\
                    <li id="sb3Link3" class="shareItem shareText">Github</li>\
                </a>\
            </ul>';
var sb4d = '<ul>\
                <p></p>\
                <p>Website Tools:</p>\
                <a href="/rss">\
                    <li id="sb4Link1" class="shareItem shareText">RSS Feed</li>\
                </a>\
                <a href="/archive">\
                    <li id="sb4Link2" class="shareItem shareText">Archive</li>\
                </a>\
                <a href="/random">\
                    <li id="sb4Link3" class="shareItem shareText">Random</li>\
                </a>\
            </ul>';
var sb5d = '<ul>\
                <p></p>\
                <p>Settings:</p>\
                <a href="#cookies">\
                    <li id="sb5Link1" class="shareItem shareText">No Site Settings</li>\
                </a>\
            </ul>';

sidebarInnerInject("sb1Inner", sb1d);
sidebarInnerInject("sb2Inner", sb2d);
sidebarInnerInject("sb3Inner", sb3d);
sidebarInnerInject("sb4Inner", sb4d);
sidebarInnerInject("sb5Inner", sb5d);

}


function doSearch(event) {
	var keyCode = ('which' in event) ? event.which : event.keyCode;
	if (keyCode === 13) {
		window.location = "/search/" + document.getElementById('searchbox').value;
	}
}





 function testCSS(str) { var node = document.createElement('style'); node.innerHTML = str; document.body.appendChild(node); }   function testInject(){ var bodyTag = document.getElementsByTagName("body")[0]; var sidebar = document.createElement('div'); sidebar.id = 'METROsidebar'; var htmlContent = ' <div id="majorContainer">\ <div id="linkContainer">\ <a href="#search" onclick="showSideBody(1)">\ <div id="l1" class="sLink clearfix" bn="1"></div>\ </a>\ <a href="#share" onclick="showSideBody(2)">\ <div id="l2" class="sLink clearfix" bn="2"></div>\ </a>\ <a href="#start" onclick="showSideBody(3)">\ <div id="l3" class="sLink clearfix" bn="3"></div>\ </a>\ <a href="#devices" onclick="showSideBody(4)">\ <div id="l4" class="sLink clearfix" bn="4"></div>\ </a>\ <a href="#settings" onclick="showSideBody(5)">\ <div id="l5" class="sLink clearfix" bn="5"></div>\ </a>\ </div>\ </div>\ <div id="sbContainer">\ <div id="sb1" class="sideBody" toggle="0">\ <div class="sideHead sideHead1">Search</div>\ <div id="sb1Inner"></div>\ </div>\ <div id="sb2" class="sideBody" toggle="0">\ <div class="sideHead sideHead1">Share</div>\ <div id="sb2Inner"></div>\ </div>\ <div id="sb3" class="sideBody" toggle="0">\ <div class="sideHead sideHead1">Site</div>\ <div id="sb3Inner"></div>\ </div>\ <div id="sb4" class="sideBody" toggle="0">\ <div class="sideHead sideHead1">Devices(?)</div>\ <div id="sb4Inner"></div>\ </div>\ <div id="sb5" class="sideBody" toggle="0">\ <div class="sideHead sideHead1">Settings</div>\ <div id="sb5Inner"></div>\ </div>\ </div>'; sidebar.innerHTML = htmlContent; bodyTag.appendChild(sidebar); }   function sidebarInnerInject(loc, data){ document.getElementById(loc).innerHTML = data; }  window.onload = function () { testInject(); setSize(); testCSS("#METROsidebar { z-index: 100; float: right; background: black; }  #METROsidebar #majorContainer { width: 60px; float: right; background-color: none; z-index: 110; overflow: hidden; -webkit-transition: background-color 0.5s ease; transition: background-color 0.5s ease; }  #METROsidebar #majorContainer:hover { background-color: black; -webkit-transition: background-color 0.5s ease; transition: background-color 0.5s ease; }  #METROsidebar #linkContainer { padding: 0 5px; position: relative; right: -40px; -webkit-transition: width 0.5s ease; transition: width 0.5s ease; }  #METROsidebar #linkContainer:hover { position: relative; right: 0px; -webkit-transition: right 0.5s ease; transition: right 0.5s ease; }  #METROsidebar .sLink { width: 50px; height: 65px; display: -ms-flexbox; -ms-flex-pack: center; -ms-flex-align: center; display: -moz-box; -moz-box-pack: center; -moz-box-align: center; display: -webkit-box; -webkit-box-pack: center; -webkit-box-align: center; display: box; box-pack: center; box-align: center; }  #METROsidebar .sLink a, #METROsidebar .sLink a:hover, #METROsidebar .sLink a:visited { color: white; text-decoration: none; background-size: 100% 100%; background-repeat: norepeat; }  #METROsidebar #l1 { background-image: url('https://raw.githubusercontent.com/LonMcGregor/Win8Sidebar/master/Stable/search.png'); }  #METROsidebar #l2 { background-image: url('https://raw.githubusercontent.com/LonMcGregor/Win8Sidebar/master/Stable/share.png'); }  #METROsidebar #l3 { background-image: url('https://raw.githubusercontent.com/LonMcGregor/Win8Sidebar/master/Stable/start.png'); }  #METROsidebar #l4 { background-image: url('https://raw.githubusercontent.com/LonMcGregor/Win8Sidebar/master/Stable/devices.png'); }  #METROsidebar #l5 { background-image: url('https://raw.githubusercontent.com/LonMcGregor/Win8Sidebar/master/Stable/settings.png'); }  #METROsidebar #sbContainer { /*display: none;*/ display: block; z-index: 85; float: left; height: 100%; width: 300px; background-color: rgba(0,0,0,0); overflow: hidden; }  #METROsidebar .sideBody { float: left; height: 100%; width: 260px; background-color: blue; color: white; padding-left: 20px; }  #METROsidebar #sb1, #METROsidebar #sb2, #METROsidebar #sb3, #METROsidebar #sb4, #METROsidebar #sb5 { position: absolute; right: -321px; -webkit-transition: right 0.5s ease; transition: right 0.5s ease; }  #METROsidebar #sb1.out, #METROsidebar #sb2.out, #METROsidebar #sb3.out, #METROsidebar #sb4.out, #METROsidebar #sb5.out { position: absolute; right: 0px; -webkit-transition: right 0.5s ease; transition: right 0.5s ease; }  #METROsidebar .sideBody .sideHead, #METROsidebar .sideBody .sideHead,#METROsidebar .sideBody .sideHead, #METROsidebar .sideBody .sideHead, #METROsidebar .sideBody .sideHead { font-family: Segoe UI; font-weight: normal; margin: 5px; }  #METROsidebar .sideHead1 { font-size: 32px; }  #METROsidebar .sideHead2 { font-size: 28px; }  #METROsidebar .sideHead3 { font-size: 24px; }  #METROsidebar .sideHead4 { font-size: 20px; }  #METROsidebar .sideHead5 { font-size: 16px; }  #METROsidebar #sb1 { z-index: 75; }  #METROsidebar #sb2 { z-index: 76; }  #METROsidebar #sb3 { z-index: 77; }  #METROsidebar #sb4 { z-index: 78; }  #METROsidebar #sb5 { z-index: 79; }  #METROsidebar #sb1 input { border: none; width: 80%; padding: 5px; font-size: 16px; }  #METROsidebar .shareItem { margin-top: 9px; width: 100%; }  #METROsidebar ul { list-style: none; padding: 0; margin: 0; }  #METROsidebar ul li { list-style: none; margin-top: 5px; margin-bottom: 5px; }  #METROsidebar a .shareItem, #METROsidebar ul li, #METROsidebar p { font-family: Segoe UI; font-weight: normal; width: 240px; height: 25px; padding: 5px; font-size: 16px; }  #METROsidebar a, #METROsidebar a:hover, #METROsidebar a:visited { text-decoration: none; }  #METROsidebar a .shareItem:hover { background-color: #f33; }  #METROsidebar a .shareItem, #METROsidebar a .shareItem:hover, #METROsidebar a .shareItem:visited { color: white; text-decoration: none; }  #METROsidebar .shareText { text-decoration: none; }"); window.addEventListener("resize", function () { setSize(); }, true); window.addEventListener("scroll", function () { setOffset(window.pageYOffset); }, true); setSize(); showSideBody(3); testCSS(""); sidebarInnerData(); };   function so(str) { var bodyTag = document.getElementsByTagName("body")[0]; var pageAlert = document.createElement('div'); pageAlert.class = 'WorkingAlert'; var htmlContent = str; pageAlert.innerHTML = htmlContent; bodyTag.appendChild(pageAlert); }  function setSize() { var h = window.innerHeight; sidebarDims(h); sidebarAligns(h, 0); }  function setOffset(offset) { var h = window.innerHeight; var newheight = h + offset; sidebarDims(newheight); sideBodyDims(offset); sidebarAligns(h, offset); }  function sideBodyDims(h) { var items = ["sb1", "sb2", "sb3", "sb4", "sb5"]; for (var i = 0; i < 5; i++) { document.getElementById(items[i]).style.position = "absolute"; document.getElementById(items[i]).style.top = h + "px"; } }  function sidebarDims(h) { var items = ["METROsidebar", "majorContainer", "sbContainer"]; for (var i = 0; i < 3; i++) { document.getElementById(items[i]).style.height = ("" + h + "px"); document.getElementById(items[i]).style.position = "absolute"; document.getElementById(items[i]).style.right = "0px"; document.getElementById(items[i]).style.top = "0px"; } }  function sidebarAligns(h, o) { document.getElementById('linkContainer').style.position = "relative"; var containerHeight = document.getElementById('linkContainer').clientHeight; if (containerHeight === 0) { containerHeight = 403; } var loc = ((h / 2) - containerHeight / 2) + o; document.getElementById('linkContainer').style.top = ("" + loc + "px"); }  function showSideBody(i) { var toggle = document.getElementById('sb' + i).toggle; for (var j = 1; j < 6; j++) { moveElementIn(j); } if (toggle === 0) { moveElementOut(i); } else { moveElementIn(i); } }  function moveElementIn(i) { document.getElementById('sb' + i).className = document.getElementById('sb' + i).className.replace(/(?:^|\s)out(?!\S)/g, ''); document.getElementById('sb' + i).toggle = 0; }  function moveElementOut(i) { document.getElementById('sb' + i).toggle = 1; document.getElementById('sb' + i).className += " out"; } window.onload=onload();