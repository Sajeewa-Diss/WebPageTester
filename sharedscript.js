
//set references for global objects
//const centreX = 275;
//const centreY = 275;

//const jsMatrixUrl = "http://localhost:7071/api/createMatrixJs";
//const jsCoordsUrl = "http://localhost:7071/api/createCoordsJs";

const jsMatrixUrl = "https://azuremultitablesfuncsapp.azurewebsites.net/api/createMatrixJs?code=8YDC8UkHguM1csXpMAgNhanW9tt48RYusRzIxJm1dn6uJl4fU9xLpg==";
const csMatrixUrl = "https://azuremultitablesfuncsapp.azurewebsites.net/api/createMatrixCs?code=H1kM0i4KT49QaSzR7YurY5xhZGBK13glgts411JdEoaSYonvb30FoQ==";
const jsCoordsUrl = "https://azuremultitablesfuncsapp.azurewebsites.net/api/createCoordsJs?code=e343aUwM51tcl8DIfaNcIgdGe7ZMPXGp8STTYZ4YDC1bmoeBb1Hh3g==";
const csCoordsUrl = "https://azuremultitablesfuncsapp.azurewebsites.net/api/createCoordsCs?code=aqfFykVqx4W0mfiOqXmw3pM2aMqOQe98RRbMXvmpMu8i9SOZ74qwBQ==";
const wcfServiceUrl = "https://azuremultitableswcfsvc01.azurewebsites.net/Service.svc";

function makeApiCall(url, body, methodname, callback, starttime) {
    // Create HTTP request
    var xmlHttp;
    try {
        xmlHttp = new XMLHttpRequest();
    } catch (e) {
        alert("This function only works in browsers with AJAX support");
        return false;
    }

    xmlHttp.onreadystatechange = function () {
        console.log("reached function");

        if (this.readyState == 4 && this.status == 200) {                                                  // && this.status == 200)
            callback(this, starttime);
        }
    };

    xmlHttp.open("POST", url, true); // post the HTTP request async

    //Add response headers (assume JSON is default)
    switch (url) {
        case wcfServiceUrl:
            xmlHttp.setRequestHeader("Content-type", "text/xml");
            //set the SOAP action from the body content main element name
            xmlHttp.setRequestHeader("SOAPAction", "http://tempuri.org/IService/" + methodname);
            break;
        default:
            xmlHttp.setRequestHeader("Content-type", "application/json");
    }
    xmlHttp.send(body);
}

