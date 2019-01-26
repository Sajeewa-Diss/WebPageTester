
//set references for global objects
//const centreX = 275;
//const centreY = 275;

const jsMatrixUrl = "http://localhost:7071/api/createMatrixJs";
const jsCoordsUrl = "http://localhost:7071/api/createCoordsJs";

//const jsMatrixUrl = "https://azuremultitablesfuncsapp.azurewebsites.net/api/createMatrixJs?code=8YDC8UkHguM1csXpMAgNhanW9tt48RYusRzIxJm1dn6uJl4fU9xLpg==";
const csMatrixUrl = "https://azuremultitablesfuncsapp.azurewebsites.net/api/createMatrixCs?code=H1kM0i4KT49QaSzR7YurY5xhZGBK13glgts411JdEoaSYonvb30FoQ==";
//const jsCoordsUrl = "https://azuremultitablesfuncsapp.azurewebsites.net/api/createCoordsJs?code=e343aUwM51tcl8DIfaNcIgdGe7ZMPXGp8STTYZ4YDC1bmoeBb1Hh3g==";
const csCoordsUrl = "https://azuremultitablesfuncsapp.azurewebsites.net/api/createCoordsCs?code=aqfFykVqx4W0mfiOqXmw3pM2aMqOQe98RRbMXvmpMu8i9SOZ74qwBQ==";
const wcfServiceUrl = "https://azuremultitableswcfsvc01.azurewebsites.net/Service.svc";

function makeApiCall(url, body, methodname, callback) {
    // Create HTTP request

    console.log("reached api call");
    console.log(url.toString());
    console.log(body.toString());
    console.log(methodname.toString());
    console.log(typeof callback);

    var xmlHttp;
    try {
        xmlHttp = new XMLHttpRequest();
    } catch (e) {
        alert("This function only works in browsers with AJAX support");
        return false;
    }

    console.log("try catch passed");

    xmlHttp.onreadystatechange = function () {
        console.log("reached function");

        if (this.readyState == 4 && this.status > 0) {                                                  // && this.status == 200)
            //document.getElementById("txtresponse").innerHTML = this.responseText;
            //call the callback function to display output
            console.log("reached callback");
            callback(this);
        }

        //console.log("readystate" + this.readyState.toString());

    };


    //xmlHttp.open("POST", url, true);
    //Add response headers (assume JSON is default)


    //switch (url) {
    //    case wcfServiceUrl:
    //        xmlHttp.setRequestHeader("Content-type", "text/xml");
    //        //set the SOAP action from the body content main element name
    //        xmlHttp.setRequestHeader("SOAPAction", "http://tempuri.org/IService/" + methodname);
    //        break;
    //    default:
    //        xmlHttp.setRequestHeader("Content-type", "application/json");
    //        console.log("added header");
    //}
    
    //xhttp.send("{x0:275,y0:275,radius:100,modulus:4}");
    //// Build the body of the JSON message
    //var body = '<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/"><Body><createCoords xmlns="http://tempuri.org/"><x0>';
    //body = body + '155</x0><y0>155</y0><radius>100</radius><modulus>10</modulus></createCoords></Body></Envelope>';

    // post the HTTP request async
    xmlHttp.open("POST", url, true);
    xmlHttp.setRequestHeader("Content-type", "application/json");
    console.log("added header");
    xmlHttp.send(body);

    //simlDelayFunc("testing", blah);
}


function getJsMatrix() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //document.getElementById("demo2").innerHTML = this.responseText;
            document.getElementById("txtbody").innerHTML = "did it work?";
            console.log("callback reached");
        }
    };
    xhttp.open("POST", "https://azuremultitablesfuncsapp.azurewebsites.net/api/createMatrixJs?code=8YDC8UkHguM1csXpMAgNhanW9tt48RYusRzIxJm1dn6uJl4fU9xLpg==", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send("{multiple:10,modulus:7}");
}

















//var simlDelayFunc = function (str, callback) {
//    setTimeout(function () {
//        callback(str);
//    }, 3000);
//}

//function blah(str) {
//    //
//}