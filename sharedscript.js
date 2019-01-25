
//set DOM references for global objects
const jsMatrixUrl = "https://azuremultitablesfuncsapp.azurewebsites.net/api/createMatrixJs?code=8YDC8UkHguM1csXpMAgNhanW9tt48RYusRzIxJm1dn6uJl4fU9xLpg==";
const csMatrixUrl = "https://azuremultitablesfuncsapp.azurewebsites.net/api/createMatrixCs?code=H1kM0i4KT49QaSzR7YurY5xhZGBK13glgts411JdEoaSYonvb30FoQ==";
const jsCoordsUrl = "https://azuremultitablesfuncsapp.azurewebsites.net/api/createCoordsJs?code=e343aUwM51tcl8DIfaNcIgdGe7ZMPXGp8STTYZ4YDC1bmoeBb1Hh3g==";
const csCoordsUrl = "https://azuremultitablesfuncsapp.azurewebsites.net/api/createCoordsCs?code=aqfFykVqx4W0mfiOqXmw3pM2aMqOQe98RRbMXvmpMu8i9SOZ74qwBQ==";
const wcfServiceUrl = "https://azuremultitableswcfsvc01.azurewebsites.net/Service.svc";


//function getJsMatrix() {
//    var xhttp = new XMLHttpRequest();
//    xhttp.onreadystatechange = function () {
//        if (this.readyState == 4 && this.status == 200) {
//            document.getElementById("demo2").innerHTML = this.responseText;
//        }
//    };
//    xhttp.open("POST", "https://azuremultitablesfuncsapp.azurewebsites.net/api/createMatrixJs?code=8YDC8UkHguM1csXpMAgNhanW9tt48RYusRzIxJm1dn6uJl4fU9xLpg==", true);
//    xhttp.setRequestHeader("Content-type", "application/json");
//    xhttp.send("{multiple:10,modulus:7}");
//}
//function getCsMatrix() {
//    var xhttp = new XMLHttpRequest();
//    xhttp.onreadystatechange = function () {
//        if (this.readyState == 4 && this.status == 200) {
//            document.getElementById("demo2").innerHTML = this.responseText;
//        }
//    };
//    xhttp.open("POST", "https://azuremultitablesfuncsapp.azurewebsites.net/api/createMatrixCs?code=H1kM0i4KT49QaSzR7YurY5xhZGBK13glgts411JdEoaSYonvb30FoQ==", true);
//    xhttp.setRequestHeader("Content-type", "application/json");
//    xhttp.send("{multiple:10,modulus:5}");
//}
//function getWsMatrix() {
//    // Create HTTP request
//    var xmlHttp;
//    try {
//        xmlHttp = new XMLHttpRequest();
//    } catch (e) {
//        alert("This function only works in browsers with AJAX support");
//        return false;
//    }

//    // Create result handler
//    xmlHttp.onreadystatechange = function () {
//        if (xmlHttp.readyState == 4 && this.status == 200) {
//            document.getElementById("result2").value = xmlHttp.responseText;
//        }
//    }

//    // Build the operation URL
//    var url = "https://azuremultitableswcfsvc01.azurewebsites.net/Service.svc";

//    // Build the body of the JSON message
//    var body = '<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/"><Body><createMatrix xmlns="http://tempuri.org/"><multiple>';
//    body = body + '10</multiple><modulus>8</modulus></createMatrix></Body></Envelope>';
//    // Send the HTTP request
//    xmlHttp.open("POST", url, true);

//    xmlHttp.setRequestHeader("Content-type", "text/xml");
//    xmlHttp.setRequestHeader("SOAPAction", "http://tempuri.org/IService/createMatrix");
//    xmlHttp.send(body);
//}
//function getJsCoords() {
//    var xhttp = new XMLHttpRequest();
//    xhttp.onreadystatechange = function () {
//        if (this.readyState == 4 && this.status == 200) {
//            document.getElementById("demo3").innerHTML = this.responseText;
//        }
//    };
//    xhttp.open("POST", "https://azuremultitablesfuncsapp.azurewebsites.net/api/createCoordsJs?code=e343aUwM51tcl8DIfaNcIgdGe7ZMPXGp8STTYZ4YDC1bmoeBb1Hh3g==", true);
//    xhttp.setRequestHeader("Content-type", "application/json");
//    xhttp.send("{x0:275,y0:275,radius:100,modulus:7}");
//}
//function getCsCoords() {
//    var xhttp = new XMLHttpRequest();
//    xhttp.onreadystatechange = function () {
//        if (this.readyState == 4 && this.status == 200) {
//            document.getElementById("demo3").innerHTML = this.responseText;
//        }
//    };
//    xhttp.open("POST", "https://azuremultitablesfuncsapp.azurewebsites.net/api/createCoordsCs?code=aqfFykVqx4W0mfiOqXmw3pM2aMqOQe98RRbMXvmpMu8i9SOZ74qwBQ==", true);
//    xhttp.setRequestHeader("Content-type", "application/json");
//    xhttp.send("{x0:275,y0:275,radius:100,modulus:4}");
//}
//function getWsCoords() {
//    // Create HTTP request
//    var xmlHttp;
//    try {
//        xmlHttp = new XMLHttpRequest();
//    } catch (e) {
//        alert("This function only works in browsers with AJAX support");
//        return false;
//    }

//    // Create result handler
//    xmlHttp.onreadystatechange = function () {
//        if (xmlHttp.readyState == 4 && this.status == 200) {
//            document.getElementById("result3").value = xmlHttp.responseText;
//        }
//    }

//    // Build the operation URL
//    var url = "https://azuremultitableswcfsvc01.azurewebsites.net/Service.svc";

//    // Build the body of the JSON message
//    var body = '<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/"><Body><createCoords xmlns="http://tempuri.org/"><x0>';
//    body = body + '155</x0><y0>155</y0><radius>100</radius><modulus>10</modulus></createCoords></Body></Envelope>';

//    // Send the HTTP request
//    xmlHttp.open("POST", url, true);

//    xmlHttp.setRequestHeader("Content-type", "text/xml");
//    xmlHttp.setRequestHeader("SOAPAction", "http://tempuri.org/IService/createCoords");
//    xmlHttp.send(body);
//}


function makeApiCall(url, body) {
    // Create HTTP request
    var xmlHttp;
    try {
        xmlHttp = new XMLHttpRequest();
    } catch (e) {
        alert("This function only works in browsers with AJAX support");
        return false;
    }

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("txtresponse").innerHTML = this.responseText;
        }
    };

    //Add response headers (assume JSON is default)
    switch (url) {
        case wcfServiceUrl:
            xmlHttp.setRequestHeader("Content-type", "text/xml");
            //TODO set the SOAP action from the body content main element name
            xmlHttp.setRequestHeader("SOAPAction", "http://tempuri.org/IService/createCoords");
            break;
        default:
            xhttp.setRequestHeader("Content-type", "application/json");
    }  
    //xhttp.send("{x0:275,y0:275,radius:100,modulus:4}");
    //// Build the body of the JSON message
    //var body = '<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/"><Body><createCoords xmlns="http://tempuri.org/"><x0>';
    //body = body + '155</x0><y0>155</y0><radius>100</radius><modulus>10</modulus></createCoords></Body></Envelope>';

    // post the HTTP request async
    xmlHttp.open("POST", url, true);
    xmlHttp.send(body);
}