var CodeMirrorConfig=window.CodeMirrorConfig||{},CodeMirror=function(){function D(a,b){for(var c in b)a.hasOwnProperty(c)||(a[c]=b[c])}function E(a,b){for(var c=0;c<a.length;c++)b(a[c])}function s(a){return document.createElementNS&&document.documentElement.namespaceURI!==null?document.createElementNS("http://www.w3.org/1999/xhtml",a):document.createElement(a)}function F(a,b){var c=s("div"),d=s("div");c.style.position="absolute";c.style.height="100%";if(c.style.setExpression)try{c.style.setExpression("height",
"this.previousSibling.offsetHeight + 'px'")}catch(h){}c.style.top="0px";c.style.left="0px";c.style.overflow="hidden";a.appendChild(c);d.className="CodeMirror-line-numbers";c.appendChild(d);d.innerHTML="<div>"+b+"</div>";return c}function G(a){if(typeof a.parserfile=="string")a.parserfile=[a.parserfile];if(typeof a.basefiles=="string")a.basefiles=[a.basefiles];if(typeof a.stylesheet=="string")a.stylesheet=[a.stylesheet];var b=['<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head>'];
b.push('<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7"/>');var c=a.noScriptCaching?"?nocache="+(new Date).getTime().toString(16):"";E(a.stylesheet,function(d){b.push('<link rel="stylesheet" type="text/css" href="'+d+c+'"/>')});E(a.basefiles.concat(a.parserfile),function(d){/^https?:/.test(d)||(d=a.path+d);b.push('<script type="text/javascript" src="'+d+c+'"><\/script>')});b.push('</head><body style="border-width: 0;" class="editbox" spellcheck="'+(a.disableSpellcheck?"false":"true")+'"></body></html>');
return b.join("")}function t(a,b){this.options=b=b||{};D(b,CodeMirrorConfig);if(b.dumbTabs)b.tabMode="spaces";else if(b.normalTab)b.tabMode="default";if(b.cursorActivity)b.onCursorActivity=b.cursorActivity;var c=this.frame=s("iframe");if(b.iframeClass)c.className=b.iframeClass;c.frameBorder=0;c.style.border="0";c.style.width="100%";c.style.height="100%";c.style.display="block";var d=this.wrapping=s("div");d.style.position="relative";d.className="CodeMirror-wrapping";d.style.width=b.width;d.style.height=
b.height=="dynamic"?b.minHeight+"px":b.height;var h=this.textareaHack=s("textarea");d.appendChild(h);h.style.position="absolute";h.style.left="-10000px";h.style.width="10px";h.tabIndex=1E5;c.CodeMirror=this;if(b.domain&&H){this.html=G(b);c.src="javascript:(function(){document.open();"+(b.domain?'document.domain="'+b.domain+'";':"")+"document.write(window.frameElement.CodeMirror.html);document.close();})()"}else c.src="javascript:;";a.appendChild?a.appendChild(d):a(d);d.appendChild(c);if(b.lineNumbers)this.lineNumbers=
F(d,b.firstLineNumber);this.win=c.contentWindow;if(!b.domain||!H){this.win.document.open();this.win.document.write(G(b));this.win.document.close()}}D(CodeMirrorConfig,{stylesheet:[],path:"",parserfile:[],basefiles:["util.js","stringstream.js","select.js","undo.js","editor.js","tokenize.js"],iframeClass:null,passDelay:200,passTime:50,lineNumberDelay:200,lineNumberTime:50,continuousScanning:false,saveFunction:null,onLoad:null,onChange:null,undoDepth:50,undoDelay:800,disableSpellcheck:true,textWrapping:true,
readOnly:false,width:"",height:"300px",minHeight:100,autoMatchParens:false,markParen:null,unmarkParen:null,parserConfig:null,tabMode:"indent",enterMode:"indent",electricChars:true,reindentOnLoad:false,activeTokens:null,onCursorActivity:null,lineNumbers:false,firstLineNumber:1,onLineNumberClick:null,indentUnit:2,domain:null,noScriptCaching:false,incrementalLoading:false});var H=document.selection&&window.ActiveXObject&&/MSIE/.test(navigator.userAgent);t.prototype={init:function(){this.options.initCallback&&
this.options.initCallback(this);this.options.onLoad&&this.options.onLoad(this);this.options.lineNumbers&&this.activateLineNumbers();this.options.reindentOnLoad&&this.reindent();this.options.height=="dynamic"&&this.setDynamicHeight()},getCode:function(){return this.editor.getCode()},setCode:function(a){this.editor.importCode(a)},selection:function(){this.focusIfIE();return this.editor.selectedText()},reindent:function(){this.editor.reindent()},reindentSelection:function(){this.focusIfIE();this.editor.reindentSelection(null)},
focusIfIE:function(){this.win.select.ie_selection&&document.activeElement!=this.frame&&this.focus()},focus:function(){this.win.focus();this.editor.selectionSnapshot&&this.win.select.setBookmark(this.win.document.body,this.editor.selectionSnapshot)},replaceSelection:function(a){this.focus();this.editor.replaceSelection(a);return true},replaceChars:function(a,b,c){this.editor.replaceChars(a,b,c)},getSearchCursor:function(a,b,c){return this.editor.getSearchCursor(a,b,c)},undo:function(){this.editor.history.undo()},
redo:function(){this.editor.history.redo()},historySize:function(){return this.editor.history.historySize()},clearHistory:function(){this.editor.history.clear()},grabKeys:function(a,b){this.editor.grabKeys(a,b)},ungrabKeys:function(){this.editor.ungrabKeys()},setParser:function(a,b){this.editor.setParser(a,b)},setSpellcheck:function(a){this.win.document.body.spellcheck=a},setStylesheet:function(a){if(typeof a==="string")a=[a];for(var b={},c={},d=this.win.document.getElementsByTagName("link"),h=0,
e;e=d[h];h++)if(e.rel.indexOf("stylesheet")!==-1)for(var f=0;f<a.length;f++){var n=a[f];if(e.href.substring(e.href.length-n.length)===n){b[e.href]=true;c[n]=true}}for(h=0;e=d[h];h++)if(e.rel.indexOf("stylesheet")!==-1)e.disabled=!(e.href in b);for(f=0;f<a.length;f++){n=a[f];if(!(n in c)){e=this.win.document.createElement("link");e.rel="stylesheet";e.type="text/css";e.href=n;this.win.document.getElementsByTagName("head")[0].appendChild(e)}}},setTextWrapping:function(a){if(a!=this.options.textWrapping){this.win.document.body.style.whiteSpace=
a?"":"nowrap";this.options.textWrapping=a;if(this.lineNumbers){this.setLineNumbers(false);this.setLineNumbers(true)}}},setIndentUnit:function(a){this.win.indentUnit=a},setUndoDepth:function(a){this.editor.history.maxDepth=a},setTabMode:function(a){this.options.tabMode=a},setEnterMode:function(a){this.options.enterMode=a},setLineNumbers:function(a){if(a&&!this.lineNumbers){this.lineNumbers=F(this.wrapping,this.options.firstLineNumber);this.activateLineNumbers()}else if(!a&&this.lineNumbers){this.wrapping.removeChild(this.lineNumbers);
this.wrapping.style.paddingLeft="";this.lineNumbers=null}},cursorPosition:function(a){this.focusIfIE();return this.editor.cursorPosition(a)},firstLine:function(){return this.editor.firstLine()},lastLine:function(){return this.editor.lastLine()},nextLine:function(a){return this.editor.nextLine(a)},prevLine:function(a){return this.editor.prevLine(a)},lineContent:function(a){return this.editor.lineContent(a)},setLineContent:function(a,b){this.editor.setLineContent(a,b)},removeLine:function(a){this.editor.removeLine(a)},
insertIntoLine:function(a,b,c){this.editor.insertIntoLine(a,b,c)},selectLines:function(a,b,c,d){this.win.focus();this.editor.selectLines(a,b,c,d)},nthLine:function(a){for(var b=this.firstLine();a>1&&b!==false;a--)b=this.nextLine(b);return b},lineNumber:function(a){for(var b=0;a!==false;){b++;a=this.prevLine(a)}return b},jumpToLine:function(a){if(typeof a=="number")a=this.nthLine(a);this.selectLines(a,0);this.win.focus()},currentLine:function(){return this.lineNumber(this.cursorLine())},cursorLine:function(){return this.cursorPosition().line},
cursorCoords:function(a){return this.editor.cursorCoords(a)},activateLineNumbers:function(){function a(){if(e.offsetWidth!=0){for(var g=e;g.parentNode;g=g.parentNode);if(!i.parentNode||g!=document||!f.Editor){try{y()}catch(k){}clearInterval(J)}else if(i.offsetWidth!=z){z=i.offsetWidth;e.parentNode.style.paddingLeft=z+"px"}}}function b(){i.scrollTop=q.scrollTop||n.documentElement.scrollTop||0}function c(g){var k=l.firstChild.offsetHeight;if(k!=0){k=Math.ceil((50+Math.max(q.offsetHeight,Math.max(e.offsetHeight,
q.scrollHeight||0)))/k);for(var o=l.childNodes.length;o<=k;o++){var w=s("div");w.appendChild(document.createTextNode(g?String(o+j.options.firstLineNumber):"\u00a0"));l.appendChild(w)}}}function d(){function g(){c(true);b()}j.updateNumbers=g;var k=f.addEventHandler(f,"scroll",b,true),o=f.addEventHandler(f,"resize",g,true);y=function(){k();o();if(j.updateNumbers==g)j.updateNumbers=null};g()}function h(){function g(p,A){r||(r=l.appendChild(s("div")));I&&I(r,A,p);u.push(r);u.push(p);B=r.offsetHeight+
r.offsetTop;r=r.nextSibling}function k(){for(var p=0;p<u.length;p+=2)u[p].innerHTML=u[p+1];u=[]}function o(){if(!(!l.parentNode||l.parentNode!=j.lineNumbers)){for(var p=(new Date).getTime()+j.options.lineNumberTime;m;){for(g(C++,m.previousSibling);m&&!f.isBR(m);m=m.nextSibling)for(var A=m.offsetTop+m.offsetHeight;l.offsetHeight&&A-3>B;)g("&nbsp;");if(m)m=m.nextSibling;if((new Date).getTime()>p){k();v=setTimeout(o,j.options.lineNumberDelay);return}}for(;r;)g(C++);k();b()}}function w(p){b();c(p);m=
q.firstChild;r=l.firstChild;B=0;C=j.options.firstLineNumber;o()}function x(){v&&clearTimeout(v);if(j.editor.allClean())w();else v=setTimeout(x,200)}var m,r,C,B,u=[],I=j.options.styleNumbers;w(true);var v=null;j.updateNumbers=x;var K=f.addEventHandler(f,"scroll",b,true),L=f.addEventHandler(f,"resize",x,true);y=function(){v&&clearTimeout(v);if(j.updateNumbers==x)j.updateNumbers=null;K();L()}}var e=this.frame,f=e.contentWindow,n=f.document,q=n.body,i=this.lineNumbers,l=i.firstChild,j=this,z=null;i.onclick=
function(g){var k=j.options.onLineNumberClick;if(k){g=(g||window.event).target||(g||window.event).srcElement;var o=g==i?NaN:Number(g.innerHTML);isNaN(o)||k(o,g)}};var y=function(){};a();var J=setInterval(a,500);(this.options.textWrapping||this.options.styleNumbers?h:d)()},setDynamicHeight:function(){function a(){for(var q=0,i=h.lastChild,l;i&&d.isBR(i);){i.hackBR||q++;i=i.previousSibling}if(i){e=i.offsetHeight;l=i.offsetTop+(1+q)*e}else if(e)l=q*e;if(l)b.wrapping.style.height=Math.max(n+l,b.options.minHeight)+
"px"}var b=this,c=b.options.onCursorActivity,d=b.win,h=d.document.body,e=null,f=null,n=2*b.frame.offsetTop;h.style.overflowY="hidden";d.document.documentElement.style.overflowY="hidden";this.frame.scrolling="no";setTimeout(a,300);b.options.onCursorActivity=function(q){c&&c(q);clearTimeout(f);f=setTimeout(a,100)}}};t.InvalidLineHandle={toString:function(){return"CodeMirror.InvalidLineHandle"}};t.replace=function(a){if(typeof a=="string")a=document.getElementById(a);return function(b){a.parentNode.replaceChild(b,
a)}};t.fromTextArea=function(a,b){function c(){a.value=e.getCode()}if(typeof a=="string")a=document.getElementById(a);b=b||{};if(a.style.width&&b.width==null)b.width=a.style.width;if(a.style.height&&b.height==null)b.height=a.style.height;if(b.content==null)b.content=a.value;if(a.form){typeof a.form.addEventListener=="function"?a.form.addEventListener("submit",c,false):a.form.attachEvent("onsubmit",c);var d=a.form.submit,h=function(){c();a.form.submit=d;a.form.submit();a.form.submit=h};a.form.submit=
h}a.style.display="none";var e=new t(function(f){a.nextSibling?a.parentNode.insertBefore(f,a.nextSibling):a.parentNode.appendChild(f)},b);e.save=c;e.toTextArea=function(){c();a.parentNode.removeChild(e.wrapping);a.style.display="";if(a.form){a.form.submit=d;typeof a.form.removeEventListener=="function"?a.form.removeEventListener("submit",c,false):a.form.detachEvent("onsubmit",c)}};return e};t.isProbablySupported=function(){var a;return window.opera?Number(window.opera.version())>=9.52:/Apple Computer, Inc/.test(navigator.vendor)&&
(a=navigator.userAgent.match(/Version\/(\d+(?:\.\d+)?)\./))?Number(a[1])>=3:document.selection&&window.ActiveXObject&&(a=navigator.userAgent.match(/MSIE (\d+(?:\.\d*)?)\b/))?Number(a[1])>=6:(a=navigator.userAgent.match(/gecko\/(\d{8})/i))?Number(a[1])>=20050901:(a=navigator.userAgent.match(/AppleWebKit\/(\d+)/))?Number(a[1])>=525:null};return t}();
$(document).ready(function() {

  // automatic slug from  name
  $('#content_type_name').keypress(function() {
    var input = $(this);
    var slug = $('#content_type_slug');

    if (!slug.hasClass('filled')) {
      setTimeout(function() {
        slug.val(makeSlug(input.val()));
      }, 50);
    }
  });

  $('#content_type_slug').keypress(function() { $(this).addClass('filled'); });

  $('#content_type_order_by').change(function() {
    if ($(this).val() != '_position_in_list')
      $('#content_type_order_direction_input').show();
    else
      $('#content_type_order_direction_input').hide();
  });

  // api enabled ?

  // console.log('subscribing...');

  var lastFieldset = $('.formtastic.content_type fieldset').last();

  $.subscribe('toggle.content_type_api_enabled.checked', function(event, data) {
    // console.log('checked');
    $('#content_type_api_accounts_input').show();
    lastFieldset.trigger('refresh');
  }, []);

  $.subscribe('toggle.content_type_api_enabled.unchecked', function(event, data) {
    // console.log('unchecked');
    $('#content_type_api_accounts_input').hide();
    lastFieldset.trigger('refresh');
  }, []);

});
