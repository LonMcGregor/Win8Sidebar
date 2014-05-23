<h1>Win8Sidebar</h1>
<h1>===========</h1>

<h3>A windows 8 styled sidebar for a webpage. Has links for sharing, site settigngs, searching etc. Could be used as a minimal replacement for a large sidebar on a tumblog (for example).</h3>
<p />

<h1>INSTALLATION</h1>
<p>Add the contents of the stable/thing.js file to your site.<br/>
To further customize it, see below</p>


<h1>CUSTOMIZATION</h1>
<p>The only two parts you need to modify in any way for basic cusotmization are the functions named "sidebarInnerData" and "doSearch". </p>

<h2>sideBarInnerData</h2>
<p>This contains the content that will be injected into each of the sidebar's menus.</p>
<p>Some formatting is included to use in these sections, for example:<br />
<blockquote><div class="sidehead sideHead3"></div></blockquote><br />
Will act as the equivalent of "h3" within the menu. There are 5 of these levels to choose from.</p>
<p>Remember that when editing this you will need to escape the HTML using "\" at the end of each line</p>

<h2>doSearch</h2>
<p>All you need to do here is change the url to point to your site's search page</p>

<h2>Further Customization</h2>
<p>The icons used on the sidebar can be customized, change the target images in the imageCSS() function.<br/>
The entire sidebar can be changed any way you want, if you want to though, I would reccomend looking into the development folder and using the <em>pretty</em> code, which will be easier to read.


<h1>KNOWN ISSUES</h1>
<ul>
<li>The Search button requires a return key press, there is no button.</li>
</ul>
