var defaultImageMaxWidth=692;
function LimitChars(b,c,a){if(b.value.length>a){b.value=b.value.substring(0,a)
}c.innerHTML=b.value.length
}function LimitWords(b,c,a){b.value=b.value.replace(/^\s+/,"");
b.scrollTop=b.scrollHeight;
var e=b.value;
if(e.length<1){c.innerHTML=0;
return
}else{var d=e.split(/\s+/);
if(d.length>a){d=d.slice(0,a);
b.value=d.join(" ")
}c.innerHTML=d.length
}}function selectAll(a){var c=document.getElementsByName(a);
for(var b=0;
b<c.length;
b++){if(c[b].type=="checkbox"&&c[b].disabled!=true){c[b].checked=true
}}}function deselectAll(a){var c=document.getElementsByName(a);
for(var b=0;
b<c.length;
b++){if(c[b].type=="checkbox"&&c[b].disabled!=true){c[b].checked=false
}}}function AddCssClass(b,a){if(b.className.indexOf(a)==-1){a=" "+a;
b.className+=a
}}function RemoveCssClass(b,a){b.className=b.className.replace(a,"")
}function SetFocus(a){a.focus()
}function AutoFocus(b){var a=document.getElementById(b);
if(typeof(a)!="undefined"&&a!=null){if(a.value.length==0){SetFocus(a)
}}}function CountByName(a){return document.getElementsByName(a).length
}function AddElement(a,b,c){var d=document.createElement(c);
d.innerHTML=b;
a.appendChild(d);
return d
}function DeleteElement(a,b){b.removeChild(a)
}function RemoveElement(a){if(a!=null){a.parentNode.removeChild(a)
}}function SumInputs(a){var c=0;
var d;
var e=document.getElementsByName(a);
for(var b=0;
b<e.length;
b++){d=parseInt(e[b].value,10);
if(!isNaN(d)){c+=d
}}return c
}function UpdateContent(a,b){a.innerHTML=b
}function CheckCssClass(a,b){if(a.className.indexOf(b)>-1){return true
}return false
}function ToggleObjectCssClass(b,a,c){RemoveCssClass(b,a);
AddCssClass(b,c)
}function ToggleCheckboxShowHide(a){if(CheckCssClass(a,"display_show")){ToggleObjectCssClass(a,"display_show","display_hide")
}else{if(CheckCssClass(a,"display_hide")){ToggleObjectCssClass(a,"display_hide","display_show")
}}}function SetDisplayFromCheckbox(b,a){if(a!=null&&b!=null&&b.checked!=null){if(b.checked){show(a)
}else{hide(a)
}}}function SetHiddenFromCheckbox(b,a){if(b.checked){hide(a)
}else{show(a)
}}function show(a){ToggleObjectCssClass(a,"display_hide","display_show")
}function hide(a){ToggleObjectCssClass(a,"display_show","display_hide")
}function SetEnabledFromCheckbox(b,a){if(b.checked){a.disabled=false
}else{a.disabled=true
}}function setDisabledByName(a,c){var d=document.getElementsByName(a);
for(var b=0;
b<d.length;
b++){d[b].disabled=c
}}function setDisabled(c,b){for(var a=0;
a<c.length;
a++){c[a].disabled=b
}}function ToggleRadioShowHide(b,a){if(b.checked){if(CheckCssClass(a,"display_hide")){ToggleObjectCssClass(a,"display_hide","display_show")
}}else{if(CheckCssClass(a,"display_show")){ToggleObjectCssClass(a,"display_show","display_hide")
}}}function Children(a,d){var e=new Array();
var c=a.getElementsByTagName(d);
for(var b=0;
b<c.length;
b++){if(c[b].parentNode==a){e.push(c[b])
}}return e
}function PageBack(){window.history.back()
}function ToggleInput(a){if(a.disabled==true){a.disabled=false
}else{a.disabled=true
}}function GetWindowHeight(){var a=0;
if(typeof(window.innerHeight)=="number"){a=window.innerHeight
}else{if(document.documentElement&&document.documentElement.clientHeight){a=document.documentElement.clientHeight
}else{if(document.body&&document.body.clientHeight){a=document.body.clientHeight
}}}return a
}function GetWindowWidth(){var a=0;
if(typeof(window.innerWidth)=="number"){a=window.innerWidth
}else{if(document.documentElement&&document.documentElement.clientWidth){a=document.documentElement.clientWidth
}else{if(document.body&&document.body.clientWidth){a=document.body.clientWidth
}}}return a
}function CenterObject(b){if(!b){return
}var c=GetWindowHeight();
var e=GetWindowWidth();
if(c>0&&e>0){var d=b.offsetHeight;
var a=b.offsetWidth;
if(c-d>0&&e-a>0){b.style.position="fixed";
b.style.top=((c/2)-(d/2))+"px";
b.style.left="50%"
}else{b.style.position="absolute";
if(e-a<=0){b.style.left="100%"
}var f=c-d;
if(f<=0){var g=0;
if(window.pageYOffset){g=window.pageYOffset
}else{g=document.documentElement.scrollTop
}b.style.top=g+"px"
}}}}function getChildrenByName(c,b){var a=new Array();
if(c.childNodes){getNodesByName(c.childNodes,a,b)
}return a
}function getNodesByName(b,a,c){var e;
for(var d=0;
d<b.length;
d++){e=b[d];
if(e.nodeType==1&&e.name==c){a.push(e)
}if(e.childNodes){getNodesByName(e.childNodes,a,c)
}}}function getChildById(b,c){var a=null;
if(b.childNodes){a=getChildNodeById(b.childNodes,c)
}return a
}function getChildNodeById(b,e){var d;
for(var c=0;
c<b.length;
c++){d=b[c];
if(d.nodeType==1&&d.id==e){return d
}if(d.childNodes){var a=getChildNodeById(d.childNodes,e);
if(a!=null){return a
}}}return null
}var getElementsByClassName=function(b,a,c){if(document.getElementsByClassName){getElementsByClassName=function(j,m,h){h=h||document;
var d=h.getElementsByClassName(j),l=(m)?new RegExp("\\b"+m+"\\b","i"):null,e=[],g;
for(var f=0,k=d.length;
f<k;
f+=1){g=d[f];
if(!l||l.test(g.nodeName)){e.push(g)
}}return e
}
}else{if(document.evaluate){getElementsByClassName=function(o,r,n){r=r||"*";
n=n||document;
var g=o.split(" "),p="",l="http://www.w3.org/1999/xhtml",q=(document.documentElement.namespaceURI===l)?l:null,h=[],d,f;
for(var i=0,k=g.length;
i<k;
i+=1){p+="[contains(concat(' ', @class, ' '), ' "+g[i]+" ')]"
}try{d=document.evaluate(".//"+r+p,n,q,0,null)
}catch(m){d=document.evaluate(".//"+r+p,n,null,0,null)
}while((f=d.iterateNext())){h.push(f)
}return h
}
}else{getElementsByClassName=function(r,u,q){u=u||"*";
q=q||document;
var h=r.split(" "),t=[],d=(u==="*"&&q.all)?q.all:q.getElementsByTagName(u),p,j=[],o;
for(var i=0,e=h.length;
i<e;
i+=1){t.push(new RegExp("(^|\\s)"+h[i]+"(\\s|$)"))
}for(var g=0,s=d.length;
g<s;
g+=1){p=d[g];
o=false;
for(var f=0,n=t.length;
f<n;
f+=1){o=t[f].test(p.className);
if(!o){break
}}if(o){j.push(p)
}}return j
}
}}return getElementsByClassName(b,a,c)
};
function CenterPopups(c){var a=getElementsByClassName(c);
for(var b=0;
b<a.length;
b++){CenterObject(a[b])
}}function showPopup(a){window[a+"_popup"].open();
return false
}function hidePopup(a){window[a+"_popup"].close();
return false
}function AddInputEvents(a){}function initInputsEvents(a){}function PIEUpdate(a){}function PIEUpdateInputs(a){}function submitForm(b,d){var a=document.getElementsByName(b);
for(var c=0;
c<a.length;
c++){if(a[c].tagName=="FORM"){if(d){a[c].target=d
}a[c].submit();
if(d){a[c].target=""
}break
}}return false
}function submitAction(a,b,c){document.getElementById(b).disabled=false;
debugger;
if(c){submitForm(a,c)
}else{submitForm(a)
}document.getElementById(b).disabled=true;
return false
}function highlightElem(a,b){
debugger;
if(a.checked){AddCssClass(b,"highlight")
}else{RemoveCssClass(b,"highlight")
}}function updateHighlight(a,b){}function wrapWords(b){var d=b.innerHTML.split("");
var e=new Array();
var a=0;
for(var c=0;
c<d.length;
c++){e=e+d[c]+"\u200B";
a=a+2
}b.innerHTML=e
}function updateCheckboxes(){var c=document.getElementsByTagName("input");
for(var b=0;
b<c.length;
b++){var a=c[b];
if(a.type=="checkbox"&&a.disabled!=true&&a.onclick!=null){c[b].onclick()
}}}function updateCheckboxesEvenIfDisabled(){var c=document.getElementsByTagName("input");
for(var b=0;
b<c.length;
b++){var a=c[b];
if(a.type=="checkbox"&&a.onclick!=null){c[b].onclick()
}}}function setTimezone(f){var c=new Date();
var b=c.getTimezoneOffset();
var a=b>0?"-":"+";
b=Math.abs(b);
var e=b%60;
b="UTC"+a+("0"+(b-e)/60).slice(-2)+":"+("0"+e).slice(-2);
for(var d=0;
d<f.length;
d++){f[d].innerHTML=b
}}function updateTimezone(a,b){alert(a.value)
}function reloadPage(){window.location.reload();
return false
}function AddPopupsEvents(){}function submitOnEnter(c,b){var a=c||window.event;
if(a.keyCode==13){return submitForm(b)
}}function disableDescendants(d,a){if(d==null){return
}var c=d.childNodes;
for(var b=0;
b<c.length;
b++){var f=c[b];
var e=f.nodeName.toUpperCase();
if(f.nodeType==1){if(e=="INPUT"){if(f.name.indexOf("action:")==-1){f.disabled=a
}}else{if(e=="SELECT"){f.disabled=a
}else{if(e=="TEXTAREA"){f.disabled=a
}}}}disableDescendants(f,a)
}}function getElementsByPartName(d,b){var e=new Array;
var a=document.getElementsByTagName(d);
for(var c=0;
c<a.length;
c++){if(a[c].name.indexOf(b)==0){e.push(a[c])
}}return e
}function addElementAfter(b,a){a.parentNode.insertBefore(b,a.nextSibling)
}function addElementBefore(b,a){a.parentNode.insertBefore(b,a)
}function addElementAtTheEnd(b,a){a.parentNode.appendChild(b)
}if(typeof String.prototype.trim!=="function"){String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")
}
}function XBrowserAddHandler(c,a,b){if(c.addEventListener){c.addEventListener(a,b,false)
}else{if(c.attachEvent){c.attachEvent("on"+a,b)
}else{c["on"+a]=b
}}}function getScrollTop(){var b=getNotRoundedScrollTop();
var a;
if(Math.round){a=Math.round(b)
}else{a=b
}return typeof a==="number"&&!isNaN(a)?a:0
}function getWindowScrollTop(){var a;
a=window.pageYOffset?window.pageYOffset:0;
if(a!=0){return a
}a=document.documentElement?document.documentElement.scrollTop:0;
if(a!=0){return a
}a=document.body?document.body.scrollTop:0;
return a
}function getScrollableContentElement(){var a=$("#main_content_wrap");
if(a.length===1){return a
}else{return $(".drawer-root > #content_wrap")
}}function getNotRoundedScrollTop(){var a=getScrollableContentElement();
return shouldScrollContentRatherThanWindow(a)?a.scrollTop():getWindowScrollTop()
}function shouldScrollContentRatherThanWindow(a){return a.length===1&&$(".ui-app-with-navi-with-header").length===0
}function scrollContentTo(b){var a=getScrollableContentElement();
if(shouldScrollContentRatherThanWindow(a)){a.scrollTop(b)
}else{window.scrollTo(0,b)
}}function getElementScrollTop(a){return a.scrollTop?a.scrollTop:0
}function updateScrollMemory(){setValue("scrollPositionField",getScrollTop())
}function updateScrollMemories(){var b=document.getElementsByName("scroll");
var c=getScrollTop();
for(var a=0;
a<b.length;
a++){b[a].value=c
}}function setValue(b,a){document.getElementById(b).value=a
}function getSectionElement(a){return document.getElementById("section_"+a)
}function removeInfIdFromUrl(){var a=window.location.href;
var b=a.replace(new RegExp("&infId=[-0-9]*","g"),"");
b=b.replace(new RegExp("\\?infId=[-0-9]*","g"),"");
b=b.replace(new RegExp("\\.html&","g"),".html?");
window.location=b
}function handleTinyMCETabKey(a,b){if(b.keyCode==9){a.execCommand("mceInsertContent",false,"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
if(b.preventDefault){b.preventDefault()
}else{b.returnValue=false
}}}function dump(c){var a="";
for(var b in c){a+=b+": "+c[b]+"\n"
}alert(a)
}function getCookie(b){var c,a,e,d=document.cookie.split(";");
for(c=0;
c<d.length;
c++){a=d[c].substr(0,d[c].indexOf("="));
e=d[c].substr(d[c].indexOf("=")+1);
a=a.replace(/^\s+|\s+$/g,"");
if(a==b){return unescape(e)
}}return null
}function setCookieNoPath(b,d,a){var e=new Date();
e.setMilliseconds(e.getMilliseconds()+a);
var c=escape(d)+((a==null)?"":"; expires="+e.toUTCString())+"; SameSite=None; Secure";
document.cookie=b+"="+c
}function setCookie(b,d,a,f){if(f){var e=new Date();
e.setMilliseconds(e.getMilliseconds()+a);
var c=escape(d)+((a==null)?"":"; expires="+e.toUTCString())+"; path="+f+"; SameSite=None; Secure";
document.cookie=b+"="+c
}else{setCookieNoPath(b,d,a)
}}function eraseCookie(a){setCookie(a,"",-10000)
}function checkedAtLeastOne(a){return $('input[name="'+a+'"]:checked').length>0
}function showPopupIfCheckedAtLeastOne(b,a,c){if(checkedAtLeastOne(a)){showPopup(b)
}else{showTpAlert(c)
}}function updateTableContentInputs(){var b,a=new Array();
b=$("#table_content_box").find("input:checkbox:checked");
a=$("#table_content_box").find("input:checkbox:not(:checked)");
if(b.length>2){$(a).attr("disabled",true)
}else{$(a).attr("disabled",false)
}}function updateCheckList(a,b){var d,c;
d=$("input[name='"+a+"']:checked");
c=$("input[name='"+a+"']:not(:checked)");
if(d.length>=b){$(c).attr("disabled",true)
}else{$(c).attr("disabled",false)
}}function generateId(){var c="";
var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
for(var b=0;
b<5;
b++){c+=a.charAt(Math.floor(Math.random()*a.length))
}return c
}function destroyPopup(a){hidePopup(a);
RemoveElement(document.getElementById(a))
}function showTpInfoPopup(a,b,f,c,e){var d;
if(c!=null&&c.indexOf("green_checkbox_popup")>-1){c="check_circle";
d="theme-color-green"
}else{if(c!=null&&c.indexOf("info_popup">-1)){c="warning";
d="theme-color-warning"
}}var g="infoPopup_"+generateId();
if(typeof e=="undefined"){e='destroyPopup("'+g+'"); return false;'
}else{e=e+'destroyPopup("'+g+'"); return false;'
}if(document.body!=null){popupDiv=document.createElement("div");
popupDiv.innerHTML='<div class="mdc-dialog" role="alertdialog" id="'+g+'">   <div class="mdc-dialog__container">     <div class="mdc-dialog__surface">       <!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->       <h2 class="mdc-dialog__title popup_title" id="my-dialog-title">'+a+'</h2>       <div class="mdc-dialog__content popup_content" id="my-dialog-content">        <div class="article_text text_center" style="display: flex; justify-content: center; align-items: flex-start; padding-top: 10px;">'+(c!=null?'<i class="material-icons-sharp '+d+'" style="margin-right: 20px">'+c+"</i>":"")+"<span>"+b+'</span></div>      </div>       <footer class="mdc-dialog__actions">         <button type="button" onclick=\''+e+'\' class="mdc-button mdc-dialog__button" data-mdc-dialog-action="no">           <span class="mdc-button__label">'+f+'</span>         </button>       </footer>     </div>   </div>   <div class="mdc-dialog__scrim"></div> </div>';
document.body.appendChild(popupDiv);
window[g+"_popup"]=new mdc.dialog.MDCDialog(document.getElementById(g))
}showPopup(g);
return g
}function showTpBootstrapInfoPopup(a,b,f,d,e){var g=generateId();
if(document.body!=null){popupDiv=document.createElement("div");
popupDiv.id="infoPopup_"+g;
popupDiv.className="modal";
popupDiv.setAttribute("tabindex","-1");
popupDiv.setAttribute("role","dialog");
popupDiv.setAttribute("aria-hidden","true");
popupDiv.setAttribute("data-backdrop","static");
var c="";
if(e!="undefined"){c='onclick="'+e+'"'
}popupDiv.innerHTML="<div class='modal-dialog modal-sm'><div class='modal-content'> <div class='popup_wrap'> <div class='popup_title'> <h3>"+a+"</h3></div><div class='popup_content'><div class='article_text'> <img class='special_wrap popup_info_image' src='"+d+"' /><div class='popup_info_content special_wrap' id='infoTextSpan'>"+b+"</div></div></div><div class='button_box text_center'> <a class='button button_gray info_popup_ok' data-dismiss='modal' "+c+" href='#'> "+f+"</a></div></div></div></div>";
document.body.appendChild(popupDiv)
}$(popupDiv).modal();
centerModals("modal-dialog");
return g
}function showTpConfirmPopup(b,c,d,e,a){var f="confirmPopup_"+generateId();
$("body").append('<div class="mdc-dialog" role="alertdialog" id="'+f+'">   <div class="mdc-dialog__container">     <div class="mdc-dialog__surface">       <!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->       <h2 class="mdc-dialog__title popup_title" id="my-dialog-title">'+b+'</h2>       <div class="mdc-dialog__content popup_content" id="my-dialog-content">  		   <div class="article_text text_center">'+c+'</div>      </div>       <footer class="mdc-dialog__actions">         <button id=\''+f+'_left\' type="button" class="mdc-button mdc-dialog__button" data-mdc-dialog-action="no">           <span class="mdc-button__label">'+e+"</span>         </button>         <button id='"+f+'_right\' type="button" class="mdc-button mdc-dialog__button" data-mdc-dialog-action="no">           <span class="mdc-button__label">'+d+'</span>         </button>       </footer>     </div>   </div>   <div class="mdc-dialog__scrim"></div> </div>');
window[f+"_popup"]=new mdc.dialog.MDCDialog(document.getElementById(f));
showPopup(f);
$("#"+f+"_right").click(function(){destroyPopup(f);
a()
});
$("#"+f+"_left").click(function(){destroyPopup(f)
});
return false
}function showTpAlert(a){showTpInfoPopup(translations.infopopupTitle,a,translations.infopopupOkBtn,translations.popupErrorIconPath)
}function disableOnclick(a){a._onclick=a.onclick;
a.onclick=new Function("return false;")
}function restoreOnclick(a){a.onclick=a._onclick;
a._onclick=null
}function disableUiButton(a){a.addClass("disabled");
disableOnclick(a[0])
}function enableUiButton(a){a.removeClass("disabled");
restoreOnclick(a[0])
}function submitAjaxAction(a,d,i,c,e,b,g,h,f){if(typeof h==="undefined"){h=false
}if(typeof f==="undefined"){f=null
}if(e!=null){if(e.hasClass("spinner-placeholder")){e.addClass("spinner")
}e.show()
}if(b!=null){if(b.disabled!=null){b.disabled=true
}else{if(b.attr!=null){b.attr("disabled","disabled")
}}}if(c!=null){disableUiButton(c)
}if(i){d["struts.enableJSONValidation"]=true
}$.post(a,d,function(k){var j=(typeof(k.fieldErrors)!="undefined");
if(j&&k.fieldErrors!=null){showAjaxFieldErrors(k.fieldErrors,h);
c.one("click",function(){clearAjaxFieldErros(k.fieldErrors)
});
if(f!=null){f()
}}else{if(typeof k.message!="undefined"){if(k.message!=null&&k.message!="null"){showTpInfoPopup(translations.infopopupTitle,k.message,translations.infopopupOkBtn,k.iconPath)
}}if(g!=null){g(k)
}}if(e!=null){if(e.hasClass("spinner")){e.removeClass("spinner")
}e.hide()
}if(b!=null){if(b.disabled!=null){b.disabled=false
}else{if(b.removeAttr!=null){b.removeAttr("disabled")
}}}if(c!=null){enableUiButton(c)
}}).error(function(){showTpInfoPopup(translations.infopopupTitle,translations.ajaxGenericError,translations.infopopupOkBtn,translations.popupErrorIconPath);
if(e!=null){e.hide()
}if(b!=null){b.removeAttr("disabled")
}if(c!=null){enableUiButton(c)
}})
}function getCurrentSectionId(a){return document.getElementsByName(a)[0].value
}function prepareImageWindow(c,d){c.document.title=d;
var b=c.document.createElement("link");
if(c.navigator.appName=="Microsoft Internet Explorer"){b.type="image/x-icon";
b.rel="icon";
b.href="/images/favicon.ico"
}else{b.type="image/png";
b.rel="shortcut icon";
b.href="/images/favicon.png"
}var a=c.document.getElementsByTagName("head")[0];
if(typeof(a)=="undefined"){a=c.document.createElement("head");
c.document.getElementsByTagName("html")[0].appendChild(a)
}a.appendChild(b)
}function openBPMNDiagram(b,a){myWindow=window.open(b);
XBrowserAddHandler(myWindow,"load",function(){prepareImageWindow(myWindow,a)
});
myWindow.focus();
return false
}if(typeof jQuery!="undefined"){jQuery.ajaxSettings.traditional=true;
jQuery.fn.outerHTML=function(){return jQuery("<div />").append(this.eq(0).clone()).html()
}
}function getDataFromURL(c,b){c=c.trim();
b=b.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
var a="[\\?&]"+b+"=([^&#]*)";
var e=new RegExp(a);
var d=e.exec(c);
if(d==null){return""
}else{return d[1]
}}function fileUpload(e,c,d){var b=document.createElement("iframe");
b.setAttribute("id","upload_iframe");
b.setAttribute("name","upload_iframe");
b.setAttribute("width","0");
b.setAttribute("height","0");
b.setAttribute("border","0");
b.setAttribute("style","width: 0; height: 0; border: none;");
e.parentNode.appendChild(b);
window.frames.upload_iframe.name="upload_iframe";
iframeId=document.getElementById("upload_iframe");
var a=function(){if(iframeId.detachEvent){iframeId.detachEvent("onload",a)
}else{iframeId.removeEventListener("load",a,false)
}if(iframeId.contentDocument){content=iframeId.contentDocument.body.innerHTML
}else{if(iframeId.contentWindow){content=iframeId.contentWindow.document.body.innerHTML
}else{if(iframeId.document){content=iframeId.document.body.innerHTML
}}}document.getElementById(d).innerHTML=content;
setTimeout("iframeId.parentNode.removeChild(iframeId)",250)
};
if(iframeId.addEventListener){iframeId.addEventListener("load",a,true)
}if(iframeId.attachEvent){iframeId.attachEvent("onload",a)
}e.setAttribute("target","upload_iframe");
e.setAttribute("action",c);
e.setAttribute("method","post");
e.setAttribute("enctype","multipart/form-data");
e.setAttribute("encoding","multipart/form-data");
e.submit();
document.getElementById(d).innerHTML="Uploading..."
}function countChildren(b,e){var d=0;
for(var a=0;
a<b.childNodes.length;
a++){var c=b.childNodes[a];
if(c.nodeType==Node.ELEMENT_NODE&&c.nodeName==e){d++
}}return d
}function Time(a){this.timeInMs=a;
this.getHours=function(){return Math.floor(this.timeInMs/3600000)
};
this.getMinutes=function(){return Math.floor((this.timeInMs%3600000)/60000)
};
this.getSeconds=function(){return Math.floor((this.timeInMs%60000)/1000)
}
}function switchExpandCollapse(e,a,j,g){var d=document.getElementById(a);
var f=$(d).is(":visible");
var c="collapse_icon";
var b="expand_icon";
var h=$(e).children()[0];
var i=$(e).children()[1];
$(h).toggleClass(b);
$(h).toggleClass(c);
if(!f){$(i).html(g);
$(i).attr("title",g)
}else{$(i).html(j);
$(i).attr("title",j)
}$(d).toggle();
return false
}function enableTooltips(){$(function(){activateTooltips()
})
}function activateTooltips(){$(".tooltipAnchor").tooltip({tooltipClass:"tooltip",position:{my:"left bottom",at:"center top-5"}})
}var testportalCookieApprovalName="testportalCookieApproval";
function acceptCookieAlert(){setCookie(testportalCookieApprovalName,"true",7776000000,"/");
var b=document.getElementById("cookieAlertBox");
AddCssClass(b,"display_hide");
RemoveCssClass(b,"display_show");
var a=document.getElementById("cookieApprovalPlaceholder");
if(a!=null){AddCssClass(a,"display_hide")
}return false
}function isCookieApprovalSet(){return(getCookie(testportalCookieApprovalName)!=null)
}function isManagerPage(){return window.location.href.indexOf("/manager/")>-1
}function addBootstrapModalEvents(){if(window.addEventListener){window.addEventListener("load",function(){centerModals("modal-dialog")
},false);
window.addEventListener("resize",function(){centerModals("modal-dialog")
},false)
}else{window.attachEvent("onload",function(){centerModals("modal-dialog")
});
window.attachEvent("onresize",function(){centerModals("modal-dialog")
})
}}function addZoomIfNeeded(c){for(var b=0;
b<c.length;
b++){var a=c[b];
a.addEventListener("load",function(){var d=$(a);
d.removeClass("lazy");
d.parent().find(".image-loading-info").remove();
requestAnimationFrame(function(){requestAnimationFrame(function(){if(a.naturalWidth>=defaultImageMaxWidth&&!d.hasClass("zoomed-image")){var g=document.createElement("div");
g.className="image-zoom-wrapper";
a.parentNode.insertBefore(g,a);
g.appendChild(a);
var e=document.createElement("div");
e.className="zoom-button-wrapper";
var f=translations["button.zoom_image.all"];
e.innerHTML='<a class="sml zoom-button mdc-button mdc-card__action mdc-card__action--button" title="'+f+'"><i class="mdc-button__icon material-icons-sharp">zoom_in</i><span class="mdc-button__label">'+f+"</span></a>";
a.parentElement.appendChild(e);
$(e).click(function(h){h.preventDefault();
openZoomModal(a)
})
}})
})
})
}}function openZoomModal(h){var i={"testportal-pl-assets":"assets.testportal.pl","testportal-net-assets":"assets.testportal.net","testportal-pl-sandbox-assets":"d2kd34oewbi4se.cloudfront.net","testportal-net-sandbox-assets":"d2fd94yhi93035.cloudfront.net",};
var m=$(h);
if(typeof jQuery.fn.outerHTML==="undefined"){jQuery.fn.outerHTML=function(){return jQuery("<div />").append(this.eq(0).clone()).html()
}
}var a=m.outerHTML();
var d=m.parent();
d.find(".zoom-button-wrapper").hide();
d.css("display","block");
m.addClass("zoomed-image");
var b=h.src.indexOf("images.testportal");
if(b>-1){var f=h.src.substring(h.src.indexOf("/",b)+1);
try{var c=JSON.parse(atob(f));
var k=i[c.bucket];
var l=c.key;
h.src="https://"+k+"/"+l;
d.append($("<div class='image-loading-info'>"+translations["text.zoom_loading.all"]+"</div>"));
m.one("load",function(){m.smoothZoom();
d.find(".image-loading-info").remove()
})
}catch(j){m.smoothZoom()
}}else{m.smoothZoom()
}var g=translations["button.close_zoom.all"];
var n=$('<div class=".zoom-out-button-wrapper"><a class="sml zoom-button mdc-button mdc-card__action mdc-card__action--button" title="'+g+'"><i class="mdc-button__icon material-icons-sharp">zoom_out</i><span class="mdc-button__label">'+g+"</span></a></div>");
d.append(n);
n.click(function(){d.find(".smooth_zoom_preloader").remove();
var e=$(a);
d.prepend(e);
d.find(".zoom-button-wrapper").show();
d.css("display","inline-block");
n.remove();
var o=d.find(".zoom-button-wrapper");
o.off("click");
o.click(function(p){p.preventDefault();
openZoomModal(e[0])
})
})
}function centerModals(c){var b=getElementsByClassName(c);
for(var a=0;
a<b.length;
a++){centerModal(b[a])
}}function centerModal(a){var b=GetWindowHeight();
if(b>0){var c=a.offsetHeight;
if((b-c)>0){a.style.marginTop=((b-c)/2)+"px"
}}}function isMobile(){return window.innerWidth<=992
}function makeFaqAnswerId(a){return a+"answer"
}function swapFaqAnswer(a){var b=makeFaqAnswerId(a);
$("#"+a).toggleClass("faq-question-hovered");
$("#"+b).fadeToggle(500);
return false
}function showAllFaqAnswers(){$(".faq-question").each(function(){var a=this.id;
var b=makeFaqAnswerId(a);
$("#"+a).addClass("faq-question-hovered");
$("#"+b).fadeIn(500)
});
return false
}function hideAllFaqAnswers(){$(".faq-question").each(function(){var a=this.id;
var b=makeFaqAnswerId(a);
$("#"+a).removeClass("faq-question-hovered");
$("#"+b).fadeOut(500)
});
return false
}function startAnimateScroll(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=$(this.hash);
a=a.length?a:$("[name="+this.hash.slice(1)+"]");
if(a.length){$("html,body").animate({scrollTop:(a.offset().top-"0")},500);
return false
}}})
}function sendGAEvent(b,a){ga("send","event",b,a,{hitCallback:function(){}})
}Math.roundTo2Decimals=function(d){var b=Math.round((d+0.00001)*100)/100;
var f=b.toString();
var e=f.split(".");
if(e){if(e.length>1){var c=e[1];
if(c){if(c.length>2){b=b.toFixed(2)
}}}}return b
};
Math.roundTo1Decimals=function(d){var b=Math.round((d+0.0001)*10)/10;
var f=b.toString();
var e=f.split(".");
if(e){if(e.length>1){var c=e[1];
if(c){if(c.length>2){b=b.toFixed(1)
}}}}return b
};
function getNotDecodedPrameterByName(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
var c=new RegExp("[\\?&]"+a+"=([^&#]*)"),b=c.exec(location.search);
return b===null?"":b[1]
}function getParameterByName(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
var c=new RegExp("[\\?&]"+a+"=([^&#]*)"),b=c.exec(location.search);
return b===null?"":decodeURIComponent(b[1].replace(/\+/g," "))
}function isCookieApprovalInParameter(){return getParameterByName("cookieApproval")=="true"?true:false
}function LiveSubscription(a,b){var c=this;
this.channel=null;
this.realtime=null;
this.channelName=a;
this.onNewMessage=b;
this._refresh=function(){this._appUnsubscribe();
this._appSubscribe()
};
this._appUnsubscribe=function(){};
this._appSubscribe=function(){};
this.startLiveConnection=function(){this.realtime=new Ably.Realtime({authUrl:"/manager/AblyAuthenticate.html?channelId="+this.channelName,});
this.channel=this.realtime.channels.get(this.channelName);
this.channel.subscribe(function(d){c.onNewMessage(d)
})
}
}function deepmerge(a,b){var d=Array.isArray(b);
var c=d&&[]||{};
if(d){a=a||[];
c=c.concat(a);
b.forEach(function(g,f){if(typeof c[f]==="undefined"){c[f]=g
}else{if(typeof g==="object"){c[f]=deepmerge(a[f],g)
}else{if(a.indexOf(g)===-1){c.push(g)
}}}})
}else{if(a&&typeof a==="object"){Object.keys(a).forEach(function(e){c[e]=a[e]
})
}Object.keys(b).forEach(function(e){if(typeof b[e]!=="object"||!b[e]){c[e]=b[e]
}else{if(!a[e]){c[e]=b[e]
}else{c[e]=deepmerge(a[e],b[e])
}}})
}return c
}function deepmergeobj(a,b){var c={};
if(a&&typeof a==="object"){Object.keys(a).forEach(function(d){c[d]=a[d]
})
}Object.keys(b).forEach(function(d){if(typeof b[d]!=="object"||!b[d]||Array.isArray(b[d])){c[d]=b[d]
}else{if(!a[d]){c[d]=b[d]
}else{c[d]=deepmergeobj(a[d],b[d])
}}});
return c
}var stringEllipsis=function(b,a){if(b.length>a){return b.substring(0,a)+"..."
}else{return b
}};
function sortStringAware(c,b,a){if(c==null){return a*-1
}if(b==null){return a*1
}if(typeof c=="string"||c instanceof String){if(c.localeCompare){if(c.trim){c=c.trim()
}if(b.trim){b=b.trim()
}return(a*c.localeCompare(b))
}else{if(c.toLowerCase){c=c.toLowerCase()
}if(b.toLowerCase){b=b.toLowerCase()
}if(c.trim){c=c.trim()
}if(b.trim){b=b.trim()
}result=(c<b)?-1:(c>b)?1:0;
return(a*result)
}}else{result=(c<b)?-1:(c>b)?1:0;
return(a*result)
}}var unescapeHTML=function(a){a=_.unescape(a);
return a.replace(new RegExp("&apos;","g"),"'")
};
var assertLocalStorage=function(){var a="4.0";
var b="storage-version";
if(localStorage){if(localStorage.getItem(b)==a){return true
}else{localStorage.clear();
localStorage.setItem(b,a);
return true
}}else{return false
}};
function makeSubnavAffix(a){var f=true;
if(window.matchMedia){var c=window.matchMedia("(min-width: 992px)");
if(c.matches){f=true
}else{f=false
}}if(f){var e=$("#"+a);
var b=e.parent();
var d=b.offset().top;
e.affix({offset:{top:d}});
e.width(b.width())
}}function isWebsocketSupportDetected(){return"WebSocket" in window||"MozWebSocket" in window
}function copyPublicLinkToClipboard(b){var a=$("<input>");
$("body").append(a);
a.val($("#"+b).text()).select();
document.execCommand("copy");
a.remove()
}function initializeLeftMenuDrawer(){if(window.localStorage!=null){if(window.localStorage.getItem("tp-left-menu--collapsed")==="true"){toggleMenuDrawer()
}else{$(".mdc-drawer").addClass("mdc-drawer--transition-on")
}}$(".mdc-drawer-container").click(function(a){a.stopPropagation()
});
$(window).click(function(){closeMenuDrawer()
});
$(function(){$(".mdc-drawer-menu-toggle").click(function(a){a.preventDefault();
a.stopPropagation();
openMenuDrawer()
})
});
$(".mdc-drawer").mouseenter(function(){$(".mdc-drawer-collapse-button").addClass("mdc-drawer-collapse-button--visible")
}).mouseleave(function(){$(".mdc-drawer-collapse-button").removeClass("mdc-drawer-collapse-button--visible")
})
}function openMenuDrawer(){var a=$("aside.mdc-drawer");
a.removeClass("mdc-drawer--collapsed");
handleDrawerOpen()
}function closeMenuDrawer(){var a=$("aside.mdc-drawer");
if($(".mdc-drawer-menu-toggle").is(":visible")&&!a.hasClass("mdc-drawer--collapsed")){a.addClass("mdc-drawer--collapsed");
handleDrawerClose()
}}function toggleMenuDrawer(){var a=$("aside.mdc-drawer");
a.toggleClass("mdc-drawer--collapsed");
if(a.hasClass("mdc-drawer--collapsed")){handleDrawerClose()
}else{handleDrawerOpen();
if(window.localStorage){window.localStorage.setItem("tp-left-menu--collapsed","false")
}}}function handleDrawerOpen(){var c=$("aside.mdc-drawer");
var b=$(".mdc-drawer-container");
var a=$(".mdc-drawer-collapse-button");
$(".mdc-drawer-app-content").removeClass("mdc-drawer-app-content--drawer-collapsed");
c.removeClass("mdc-drawer--expanded");
b.removeClass("mdc-drawer-container--drawer-collapsed");
a.removeClass("mdc-drawer-collapse-button--drawer-collapsed");
a.off("mouseenter").off("mouseleave")
}function handleDrawerClose(){var c=$("aside.mdc-drawer");
var b=$(".mdc-drawer-container");
var a=$(".mdc-drawer-collapse-button");
c.removeClass("mdc-drawer--expanded");
a.addClass("mdc-drawer-collapse-button--drawer-collapsed");
if($(window).width()<840){c.css("width","0px")
}else{c.css("width","20px")
}setTimeout(function(){c.removeAttr("style");
c.addClass("mdc-drawer--transition-on");
$(".mdc-drawer-app-content").addClass("mdc-drawer-app-content--drawer-collapsed");
b.addClass("mdc-drawer-container--drawer-collapsed");
a.mouseenter(function(){c.addClass("mdc-drawer--expanded")
}).mouseleave(function(){c.removeClass("mdc-drawer--expanded")
})
},100);
if(window.localStorage){window.localStorage.setItem("tp-left-menu--collapsed","true")
}}function closePreview(){if(window.self.name==="previewFrame"){window.parent.postMessage("closePreview","*")
}else{if(typeof localStorage!="undefined"&&localStorage.getItem("previewReferrer")!=null){var a=localStorage.getItem("previewReferrer");
localStorage.removeItem("previewReferrer");
window.location.href=a
}else{if(window.history.length===1){window.close()
}else{window.history.back()
}}}}function savePreviewReferrer(){if(typeof localStorage!="undefined"){localStorage.setItem("previewReferrer",window.location.href)
}}function showPreviewFrame(){$("iframe[name='previewFrame']").show();
$(".drawer-root").hide()
}function closePreviewFrame(){$(".drawer-root").show();
var a=$("iframe[name='previewFrame']");
a.hide();
a.attr("src","about:blank")
}function receiveClosePreviewMessage(a){if(a.data==="closePreview"){closePreviewFrame()
}}window.addEventListener("message",receiveClosePreviewMessage,false);