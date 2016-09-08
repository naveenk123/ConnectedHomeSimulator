function bulbController($scope,$http) {
    var self = this;
    var accesskey = this.accesscode;
    // $scope.$watchCollection(angular.bind(this, function() {
    //     return this.lights;
    // }), function(newvalue, oldvalue) {
    //     console.log("--->New Light values<-------");
    //     console.log(newvalue);
    // });
    $scope.controll = function(n) {
        console.log(accesskey);
        console.log("Selected Light id:" + n);
        var name;
        for(var x in self.lights){
          console.log("checking x in Switch loop:", x);
          if(self.lights[x].id == n){
            if (self.lights[x].state == false) {
                name = "TurnOnRequest"
                console.log("setting"+name);
            } else {
                name = "TurnOffRequest";
                console.log("setting"+name);
            }
            return true; // to exit the loop if you find the id.
          }
        }
      };
      $scope.rangeValue = 10;
      $scope.rangeCheck = function(event){

        console.log(this.rangeValue);
      }

      //   if (self.lights[n].state === false) {
      //       name = "TurnOnRequest"
      //   } else {
      //       name = "TurnOffRequest"
      //   }
      // }
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
connectedHome.component('bulbs',{
  template:`
<table class="switch-table">
  <tr  ng-repeat=" bulb in $ctrl.lights">
    <td>
    <div class="switches">
    <strong> {{ bulb.friendlyName }} </strong>
    </div>
    </td>
    <td>
    <input type="checkbox" ng-model="bulb.state" name="bulb.friendlyName" ng-click="controll(bulb.id)">{{ bulb.state | changeStateName }}</input>
    </td>
    <td>
    <input type="range" min="0" max="100" ng-model="rangeValue" ng-change="rangeCheck()" />
    </td>
    <td>
    <input type="number" value="10" min="0" max="100" ng-model="rangeValue" ng-change="rangeCheck()" />
    </td>
    <td>
    <p> {{ rangeValue }} </p>
    </td>
  </tr>
</table>
    `,
  controller:bulbController,
  bindings:{
    lights:'=',
    accesscode:'='
  }
})
