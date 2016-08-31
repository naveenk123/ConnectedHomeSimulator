function deviceController($scope){
  $scope.another="ha"

}
var connectedHome = angular.module('connectedHome')
connectedHome.component('discoverDevices',{
  template:`
<div class="container">
<div class="col-md-4">
<h1> Switches
</h1>
<switches switches="$ctrl.switches"></switches>
</div>
<div class="col-md-4">
<h1> Bulbs
</h1>
<bulbs Lights="$ctrl.bulbs"></bulbs>
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
    switches:'='
  }
})
