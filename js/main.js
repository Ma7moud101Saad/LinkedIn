
    var myUrl = location.href;
var arr = myUrl.split('?');
var arr2 = arr[1].split('&');
var userName = arr2[0].split('=');
var res = userName[1].replace("%40", "@");
document.getElementById("demo").innerHTML = ("Welcome "+res).bold().fontsize(20);
setTimeout(function(){window.location.href ="main.html"},2000);

