
angular.module('connectedHome',[])
.filter('changeStateName',function(){
  return function(state){
    if(state===false){
      return "OFF";
    }
    if(state===true){
      return "ON";
    }
  }
})
.controller('mainAppCtrl',['$scope','$http',function($scope,$http) {

  var self = this;
  self.access_code;
  var switchTypes = [1,3,22,50];
  var bulbTypes = [42,32,4,48];
  /* add dimmer after this*/
  var thermostatTypes= [57,7];
  var i=0;
  this.code;
  this.Switches =[];
  this.Bulbs = [];
  this.Thermostats= [];
  this.discoverDevices = function(){
    $scope.access_code = self.code;
    if(self.code){
      $http({
        method:'GET',
        url:'/devices',
        headers:{
          Authorization:$scope.access_code
        }
      }).then(function success(response){
        self.code="";
        var str = response.data;
        console.log(str);
        console.log("Accesscode"+$scope.access_code);
          for(var key in response.data['devices']){
            var obj = response.data.devices[key];
            if(switchTypes.indexOf(obj['additionalApplianceDetails'].deviceType)>=0){
              obj.state=false;
              obj.id = i++;
              self.Switches.push(obj);
            }else if (bulbTypes.indexOf(obj['additionalApplianceDetails'].deviceType)>=0) {
              obj.state=false;
              obj.id = i++;
              self.Bulbs.push(obj);
            }else if (thermostatTypes.indexOf(obj['additionalApplianceDetails'].deviceType)>=0) {
              obj.id = i++;
              self.Thermostats.push(obj);
            }

          }

      },function error(response){
          console.log("---> ERROR <--------");

      })
    }
}

}]
);
