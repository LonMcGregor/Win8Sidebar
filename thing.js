var headTag = document.getElementsByTagName("head")[0];
var cssNode = document.createElement('link');
cssNode.type = 'text/css';
cssNode.rel = 'stylesheet';
cssNode.href = 'side.css';
headTag.appendChild(cssNode);

var bodyTag = document.getElementsByTagName("body")[0];
var sidebar = document.createElement('div');
sidebar.id = 'sidebarX';
var htmlContent = 'Sidebar Injection Area';
sidebar.innerHTML = htmlContent;
bodyTag.appendChild(sidebar);