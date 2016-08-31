RequestManager = {};
var sessions = {};
var sessionCounter =0;
RequestManager.addSession = function (res){
  sessionCounter++;
    sessions[sessionCounter+''] = res;
    return sessionCounter+'';
 }
 RequestManager.getResponseObjectForSession = function (messageId){
   return sessions[messageId];
 }
 RequestManager.removeRequest = function (messageId){
  delete sessions[messageId];
 }
module.exports = RequestManager;
