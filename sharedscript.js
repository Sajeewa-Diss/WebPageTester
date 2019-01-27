﻿
//set references for global objects
const centreX = 275;
const centreY = 275;

//const jsMatrixUrl = "http://localhost:7071/api/createMatrixJs";
//const jsCoordsUrl = "http://localhost:7071/api/createCoordsJs";

//const wcfServiceUrl = "http://localhost:57566/Service.svc";

const jsMatrixUrl = "https://azuremultitablesfuncsapp.azurewebsites.net/api/createMatrixJs?code=8YDC8UkHguM1csXpMAgNhanW9tt48RYusRzIxJm1dn6uJl4fU9xLpg==";
const csMatrixUrl = "https://azuremultitablesfuncsapp.azurewebsites.net/api/createMatrixCs?code=H1kM0i4KT49QaSzR7YurY5xhZGBK13glgts411JdEoaSYonvb30FoQ==";
const jsCoordsUrl = "https://azuremultitablesfuncsapp.azurewebsites.net/api/createCoordsJs?code=e343aUwM51tcl8DIfaNcIgdGe7ZMPXGp8STTYZ4YDC1bmoeBb1Hh3g==";
const csCoordsUrl = "https://azuremultitablesfuncsapp.azurewebsites.net/api/createCoordsCs?code=aqfFykVqx4W0mfiOqXmw3pM2aMqOQe98RRbMXvmpMu8i9SOZ74qwBQ==";
const wcfServiceUrl = "https://azuremultitableswcfsvc01.azurewebsites.net/Service.svc";

var testbody;
var testurl;


function prepareApiCall(multiple, modulus, radius, rpcval, methodname, callback) {

    testbody = "";
    testurl = "";

    //if not a Wcf service call (for which URL is static), then deduce the method call URL.
    switch (rpcval) {
        case "js":
            if (methodname == "createCoords") {
                testurl = jsCoordsUrl;
            } else if (methodname == "createMatrix") { testurl = jsMatrixUrl; }
            break;
        case "cs":
            if (methodname == "createCoords") {
                testurl = csCoordsUrl;
            } else if (methodname == "createMatrix") { testurl = csMatrixUrl; }
    }

    //construct the body content to post (and also set the Wcf service call url.)
    switch (rpcval) {
        case "js":
        case "cs":
            testbody += createJsonBody(methodname, multiple, modulus, radius);
            break;
        case "ws":
            testbody += createXmlBody(methodname, multiple, modulus, radius);
            testurl = wcfServiceUrl;
    }

    //note the actual call will be asynchronous by default! (because it uses XHR).
    //summarytxt.innerText = "Working.. please wait.";
    var d = new Date();
    var starttime = d.getTime();

    makeApiCall(testurl, testbody, methodname, callback, starttime);
}

function createJsonBody(method, multiple, modulus, radius) {
    var body = "";

    if (method == "createCoords") {
        body += "{x0:" + centreX.toString() + ",y0:" + centreY.toString() + ",radius:" + radius + ",modulus:" + modulus + "}";
    }
    else if (method == "createMatrix") {
        body += "{multiple:" + multiple + ",modulus:" + modulus + "}";
    }
    return body;
}

function createXmlBody(method, multiple, modulus, radius) {
    //create a SOAP XML object as a pure string literal;
    var body = '<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/"><Body>';

    if (method == "createCoords") {
        body += '<createCoords xmlns="http://tempuri.org/"><x0>';
        body += centreX.toString() + '</x0><y0>' + centreY.toString() + '</y0><radius>' + radius;
        body += '</radius><modulus>' + modulus + '</modulus></createCoords></Body></Envelope>';
    }
    else if (method == "createMatrix") {
        body += '<createMatrix xmlns="http://tempuri.org/"><multiple>' + multiple;
        body += '</multiple><modulus>' + modulus + '</modulus></createMatrix></Body></Envelope>';
    }
    return body;
}

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
        console.log(url);

        if (this.readyState == 4)
            //&& this.status == 200)
        {
            callback(null, this, starttime);
        }
    };

    xmlHttp.open("POST", url, true); // post the HTTP request async

    //todo investigate this handler (may be able to provide more feedback when pre-flight checks fail and return status is "0" for example)
    //xmlhttp.onerror = function () {
    //    console.log("** An error occurred during the transaction");
    //};

    xmlHttp.onerror = function () {
        callback(xhr.response);
    };

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

