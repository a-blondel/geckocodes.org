var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

 //this document copyright 2009-2010 James Atherton

function ToggleCh()
{
	if(document.getElementById("chnav").style.display!="none")
		document.getElementById("chnav").style.display = "none";
	else
		document.getElementById("chnav").style.display = "inline";
}

var xmlHttp

function changeNav(sysid, reg)
{
	xmlHttp=GetXmlHttpObject()
	if (xmlHttp==null)
	{
		alert ("AJAX not supported, disable JavaScript.")
		return
	}
	var url="nav.php?chid="+sysid.substring(0,1);
	url = url+"&r="+reg.substring(0,1);
	xmlHttp.onreadystatechange=stateChanged
	xmlHttp.open("GET",url,true)
	xmlHttp.send(null)
}

function stateChanged()
{
	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
	{
		document.getElementById("navigation").innerHTML=xmlHttp.responseText
		ToggleCh()
	}
}

function GetXmlHttpObject()
{
	var objXMLHttp=null
	if (window.XMLHttpRequest)
	{
		objXMLHttp=new XMLHttpRequest()
	}
	else if (window.ActiveXObject)
	{
		objXMLHttp=new ActiveXObject("Microsoft.XMLHTTP")
	}
	return objXMLHttp
}

}
/*
     FILE ARCHIVED ON 16:32:28 Apr 02, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:30:51 Apr 26, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.575
  exclusion.robots: 0.07
  exclusion.robots.policy: 0.06
  cdx.remote: 0.057
  esindex: 0.008
  LoadShardBlock: 35.964 (3)
  PetaboxLoader3.datanode: 68.306 (5)
  load_resource: 121.699 (2)
  PetaboxLoader3.resolve: 52.962 (2)
*/