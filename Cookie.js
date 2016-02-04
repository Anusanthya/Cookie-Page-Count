///////////////////////
// Page Visit Count //
//////////////////////
//<!DOCTYPE html>
//<html>
//<head>
//<title>My HomePage</title>
//<script language = "JavaScript">

function delSpaces(string){
	var result = "";
	for (var i=0; i<string.length; i++) {
		var checkval = string.charAt(i)
		if (checkval != " ") {
			result += checkval;
		};
	};
	return result;
};


function keyValSplit(cookie,ckie_name){
	var split;
	for (var i=0; i<cookie.length; i++){
		split = cookie[1].split("=")
		if (split[0] == ckie_name){
			return true;
		};
	};
	return false;
};

function getValue(cookie,ckie_name){
	//Extracts the value from the array, and splits the name and value on '='.
	var splits;
	for (var i=0; i<cookie.length; i++){
		splits = cookie[i].split("=")
		if (splits[0] == ckie_name){
			return splits[1];
		};
	};
	return "";
};

function mainFunc(){
	function readCookie()
	function createCookie()
	function displayCount()
}


function createCookie(){
	var date_val = new Date();
	var expiry = date_val.getTime() + (3600000 * 24 * 30)
	expiry = date_val.setTime(expiry).toGMTString()
	var newCookie = "Count=" + counter;
	newCookie += "; expires=" + expiry;
	window.document.cookie = newCookie;

}


function readCookie() {
	//This function reads the cookie.
	//It clears the white space off, and provides a cookie string.
	//This cookie string is further split on ';' and stores the details in an array.
	var cookie = document.cookie;
	counter = 0;
	var cookieString = delSpaces(cookie);
	var keyValPair = cookieString.split(";");
	if (keyValSplit(keyValPair, "visitCount"))
		counter = parseInt(getValue(keyValPair,"visitCount"));
	counter += 1;
}


function displayCount(){
	document.write('<H3 ALIGN = "CENTER">')
	document.write("Hello there! You've visited this page ")
	if (counter == 1) {
		document.write("the first time.")
	}
	else {
		document.write(counter + " times.")
	}
	document.writeln('</H3>')
}



