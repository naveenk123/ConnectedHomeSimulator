function thermostatController($scope,$http) {
    var self = this;
    var accesskey = $scope.access_code;
    $scope.$watchCollection(angular.bind(this, function() {
        return this.thermostats;
    }), function(newvalue, oldvalue) {
        console.log("--->New thermostats<-------");
        console.log(newvalue);
    });
    $scope.controll = function(n) {
        console.log(accesskey);
        console.log("Selected Switch id:" + n);
        var name;
        if (self.switches[n].state === false) {
            name = "TurnOnRequest"
        } else {
            name = "TurnOffRequest"
        }
      }
    // $scope.controll = function(n) {
    //     console.log($scope.$parent.access_code);
    //     console.log("Selected bulb id:" + n);
    //     var name;
    //     if (self.switches[n].state === false) {
    //         name = "TurnOnRequest"
    //     } else {
    //         name = "TurnOffRequest"
    //     }
    //     // $http({
    //     //   method:'GET',
    //     //   url:'/turnonoff',
    //     //   headers:{
    //     //     Authorization:$scope.access_code,
    //     //     deviceType:self.switches[n].additionalApplianceDetails.deviceType,
    //     //     action:name
    //     //   }
    //     //
    //     // }).then(function(success){
    //     //   console.log("----Success----------------");
    //     // },function(failure){
    //     //   console.log("-------Error while Turning ON/OFF"+self.switches[n].friendlyName);
    //     // })
    //   }
}

var connectedHome = angular.module('connectedHome')
connectedHome.component('thermostat',{
  template:`
<table class="switch-table">
  <tr  ng-repeat=" thermostat in $ctrl.thermostats">
    <td>
    <div class="switches">
    <strong> {{ thermostat.friendlyName }} </strong>
    </div>
    </td>
    <td>
        </td>
  </tr>
</table>
    `,
  controller:bulbController,
  bindings:{
    thermostats:'='
  }
})
