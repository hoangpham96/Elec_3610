/**
 * Cookie functions. Generally used in most pages.
 */
var createCookie = function(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
	  var value = "; " + document.cookie;
	  var parts = value.split("; " + name + "=");
	  if (parts.length == 2) return parts.pop().split(";").shift();
}

function deleteCookie(name) {
    createCookie(name, "", -1);
}

/**
 * Get URL parameter function. Used in saveGame and fetchGame.
 */
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

/**
 * Remove quote function. Remove the quotation marks on both sides of the string.
 */
function removeQuotes(str){
	if (str.charAt(0) === '"' && str.charAt(str.length -1) === '"')
	{
	    return str.substr(1,str.length -2);
	}
}

/**
 * Show user page function. Show the link to user page. Used in login.
*/
function showUserPage(loggedIn, name){
	name = removeQuotes(name);
	   if (loggedIn) {
	  		$("#loginSect").replaceWith("<div id='userWelcome' class='ax_default box_2'><div id='u46_div' class=''></div><div id='userPageLink' class='text' style='visibility: visible;'><p><span> <a href=account_page.html>"+"Welcome, "+name+" !"+"</a> </span></p></div></div>");
	  }
	}
/**
 * Delete all cookies function. Stronger version of eraseCookie.
*/
function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}