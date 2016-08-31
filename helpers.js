var helpers = {};
var RequestManager = require('./Router/RequestManager.js');
helpers.discoveryContext = {
  'succeed':function(data){
    var messageId = data.header.messageId;

    console.error("********** PASSED  **************");
    var listOfDevices = {};
    listOfDevices.devices = data.payload.discoveredAppliances;
    var response = RequestManager.getResponseObjectForSession(messageId);
    console.log("Sending the Response -----------------");
  //  response,status(200).end();
    response.send(listOfDevices).end();
    RequestManager.removeRequest(messageId)
    // if(CallerRes){
    //     CallerRes.send(listOfDevices).end();
    // }
    // return data;

  },
  'fail':function(err){
    console.error("********** F A I L **************");
    console.log(data);
    console.error("********** F A I L  END **************");
    var messageId = data.header.messageId;
    var response = RequestManager.getResponseObjectForSession(messageId);
    response.status(500).end();
      RequestManager.removeRequest(messageId)
  }
};
helpers.TurnOnOffContext = {
  'succeed':function(data){
      var messageId = data.header.messageId;
      var response = RequestManager.getResponseObjectForSession(messageId);
      response.status(200).end();
        RequestManager.removeRequest(messageId)
    console.error("********** PASSED  **************");
  //  this.self.status(200).end();
  },
  'fail':function(err){
    var messageId = data.header.messageId;
    var response = RequestManager.getResponseObjectForSession(messageId);
    response.status(500).end();
    console.error("********** F A I L **************");
    console.log(data);
    console.error("********** F A I L  END **************");
  //  this.self.status(500).end();
  }

}
module.exports = helpers;
