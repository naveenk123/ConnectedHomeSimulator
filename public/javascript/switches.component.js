function swithcesController($scope,$http) {
    var self = this;
    var devices;
    console.log(self.accesscode);
    // $scope.$watchCollection(angular.bind(this, function() {
    //     return this.switches;
    // }), function(newvalue, oldvalue) {
    //     console.log("--->New Value<-------");
    //     console.log(newvalue);
    //
    // });
    $scope.changeDeviceState = function(n,state){
        console.log("In controller");
        console.log("Selected Switch id:" + n);
        console.log(self.accesscode);
        var name;
        var devicetype;
        var applianceId;
        var devicestate = state;
        for(var x in self.switches){
          console.log("checking x in Switch loop:", x);
          if(self.switches[x].id == n){
            console.log(devicestate);
            if (self.switches[x].state === true) {
                name = "TurnOnRequest";
                devicetype =self.switches[x].additionalApplianceDetails.deviceType;
                applianceId = self.switches[x].applianceId;
                console.log("setting"+name);
                console.log("+++++++++++++");

            } else {
                name = "TurnOffRequest";
                applianceId = self.switches[x].applianceId;
                console.log("setting"+name);
                console.log("-----------------");
            }
            $http({
              method:'GET',
              url:'/turnonoff',
              headers:{
                Authorization:self.accesscode,
                deviceType:devicetype,
                action:name,
                id:applianceId
              }

            }).then(function(success){
              console.log("----Success----------------");
            },function(failure){
              console.log("-------Error while Turning ON/OFF"+self.switches[x].friendlyName);
               self.switches[x].state = !devicestate;
            })

            return true; // to exit the loop if you find the id.
          }
        }
      }
}

var connectedHome = angular.module('connectedHome')
connectedHome.component('switcheComponent',{
  template:`
<table class="switch-table">
  <tr  ng-repeat="k in $ctrl.switches">
  <td>
  <div class="switches">
  <strong> {{ k.friendlyName }} </strong>
  </td>
  <td>
  <input type="checkbox" ng-model="k.state" name="k.friendlyName" ng-click="changeDeviceState(k.id,k.state)">{{ k.state | changeStateName }}</input>
  </td>
  </div>
  </tr>
</table>
    `,
  controller:swithcesController,
  bindings:{
    switches:'=',
    accesscode:'='
  }
})
