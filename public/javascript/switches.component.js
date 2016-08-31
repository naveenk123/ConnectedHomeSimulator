function swithcesController($scope,$http) {
    var self = this;
    var accesskey = $scope.access_code;
    $scope.$watchCollection(angular.bind(this, function() {
        return this.switches;
    }), function(newvalue, oldvalue) {
        console.log("--->New Value<-------");
        console.log(newvalue);
    });
    $scope.controll = function(n) {
        console.log($scope.$parent.access_code);
        console.log("Selected Switch id:" + n);
        var name;
        if (self.switches[n].state === false) {
            name = "TurnOnRequest"
        } else {
            name = "TurnOffRequest"
        }
        // $http({
        //   method:'GET',
        //   url:'/turnonoff',
        //   headers:{
        //     Authorization:$scope.access_code,
        //     deviceType:self.switches[n].additionalApplianceDetails.deviceType,
        //     action:name
        //   }
        //
        // }).then(function(success){
        //   console.log("----Success----------------");
        // },function(failure){
        //   console.log("-------Error while Turning ON/OFF"+self.switches[n].friendlyName);
        // })
      }
}

var connectedHome = angular.module('connectedHome')
connectedHome.component('switches',{
  template:`
<table class="switch-table">
  <tr  ng-repeat="k in $ctrl.switches track by $index">
  <td>
  <div class="switches">
  <strong> {{ k.friendlyName }} </strong>
  </td>
  <td>
  <input type="checkbox" ng-model="k.state" name="k.friendlyName" ng-click="controll(k.id)">{{ k.state | changeStateName }}</input>
  </td>
  </div>
  </tr>
</table>
    `,
  controller:swithcesController,
  bindings:{
    switches:'='
  }
})
