var gradationListControllers = angular.module("gradationListControllers", []);

gradationListControllers.controller("GradationListCtrl", function($scope, $http, GradationListService){
  $scope.table_header_order = ["serial", "name", "circle", "dob", "hometown", "appointment", "55on", "58on", "promotion", "recruitment", "remark1", "remark2"];
  $scope.table_header_map = {
    'serial' : 'Serial',
    'name' : 'Name',
    'circle' : 'Circle',
    'dob' : 'Date Of Birth',
    'hometown' : 'Hometown',
    'appointment' : 'Appointment Date',
    '55on' : 'Turns 55 On',
    '58on' : 'Turns 58 On',
    'promotion' : 'Promotion Date',
    'recruitment' : 'Recruitment',
    'remark1' : 'Remark 1',
    'remark2' : 'Remark 2'
  };
  $scope.retired = 'all';
  $scope.query = '';

  //$scope.checkRetired = function(value, index){
  //  return !GradationListService.is_retired_on(value['58on']);
  //};

  $http.get('data/gradation-list.json')
  .success(function(data, status, headers, config){
    $scope.candidates = data;
  })
  .error(function(data, status, headers, config){
    console.log('Error in fetching candidate list.');
  });
});
