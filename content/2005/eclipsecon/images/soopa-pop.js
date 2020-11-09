function soopaPopSetup() {
	var a;
	for (var i = 0; (a = document.links[i]); i++) {
		if (a.target && a.target.indexOf("_soopaPop") == 0) {
			a.onclick = soopaPop;
		}
	}
}

function soopaPop() {
	var a = this.target.split(":");
	var sFeatures = a[1];
	window.open(this.href, a.length > 2 ? a[2] : String((new Date()).getTime()), sFeatures);
	return false;
	alert("hi")
}




function popUp(URL) {
day = new Date();
id = day.getTime();
eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=0,width=560,height=525');");
}

function popUpreg(URL) {
day = new Date();
id = day.getTime();
eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=0,width=620,height=525');");
}


function popUpbio(URL) {
day = new Date();
id = day.getTime();
eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=0,width=564,height=300');");
}


function popUphotel(URL) {
day = new Date();
id = day.getTime();
eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=0,width=470,height=200');");
}

