function deviceController($scope){
  $scope.$watch(angular.bind(this, function() {
      return this.accessCode;
  }), function(newvalue, oldvalue) {
      console.log("--->New Code<-------");
      console.log(newvalue);
  });

}
var connectedHome = angular.module('connectedHome')
connectedHome.component('discoverDevices',{
  template:`
<div class="container">
<div class="col-md-4">
<h1> Switches
</h1>
<switche-component switches="$ctrl.switches" accesscode="$ctrl.accesscode"></switche-component>
</div>
<div class="col-md-4">
<h1> Bulbs
</h1>
<bulbs Lights="$ctrl.bulbs" ></bulbs>
</div>
<div class="col-md-4">
<h1> Thermostat
</h1>
<thermostat thermostats="$ctrl.thermostats"></bulbs>
</div>
</div>
  `,

    // ''+
    // ''+
    // '<h1> {{$ctrl.another}}</h1>'+
    // '',
  controller:deviceController,
  bindings:{
    hero:'=',
    bulbs:'=',
    thermostats:'=',
    switches:'=',
    accesscode:'='
  }
})
