var cohoEndPoint = require('../../index.js');
var obj = require('./devices.json');
var path = require('path');
var fs = require('fs');
var context=require("../helpers");
var RequestManager = require('./RequestManager.js');
var OnOffHeaders={
"header": {
    "messageId": "01ebf625-0b89-4c4d-b3aa-32340e894688",
    "name": "TurnOnRequest",
    "namespace": "Alexa.ConnectedHome.Control",
    "payloadVersion": "2"
},
"payload": {
    "accessToken": "[OAuth Token here]",
    "appliance": {
        "additionalApplianceDetails": {},
        "applianceId": "[Device ID for Ceiling Fan]"
    }
}
};

module.exports = {
  'home':function(req,res){
    res.render('index');
    res.end();
    console.log("controllers home")
  },
  'devices':function(req,res){
  var myMessageId =   RequestManager.addSession(res)


    console.log(req.headers['authorization']);
    // res.send(obj);
    // res.end();
    var tocken = req.headers['authorization']
    var payloadHeaders = { header:  { namespace: 'Alexa.ConnectedHome.Discovery', name: 'DiscoverAppliancesRequest', payloadVersion: '2',
    messageId: myMessageId }, payload: { accessToken: tocken} }

    cohoEndPoint.handler(payloadHeaders,context.discoveryContext);
  },
  'TurnONOFF':function(req,res){
    console.log("---Got the following headers",req.headers);
    var myMessageId =   RequestManager.addSession(res)
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"+myMessageId+"------------------------");
    OnOffHeaders.payload.appliance['additionalApplianceDetails'].deviceType=req.headers['devicetype'];
    OnOffHeaders.payload.accessToken= req.headers['authorization'];
    OnOffHeaders.payload.appliance['applianceId']= req.headers['id'];
    OnOffHeaders.header.name=req.headers['action'];
    OnOffHeaders.header.messageId = myMessageId
    cohoEndPoint.handler(OnOffHeaders,context.TurnOnOffContext)
  }
}
