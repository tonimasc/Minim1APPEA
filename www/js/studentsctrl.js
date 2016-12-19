/**
 * Created by tonim on 16/12/2016.
 */

app.controller('StudentsCtrl', function($scope, $http) {

  $scope.load = function () {
    console.log('hi');
    $http.get(base_url + '/students')
      .success(function(data) {
        $scope.students = data;
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };

  $scope.DeleteStudent = function (id) {
    $http.delete( base_url + '/students/' + id)
      .success(function(data){
        $scope.students = data;
      })
      .error(function(data){
        console.log('Error:' + data);
      });
  };

  $scope.Order = function () {
    $scope.OrderDo = 'name';
  };
  $scope.Order2 = function () {
    $scope.OrderDo = '-subjects.length';
  };
  $scope.Order3 = function () {
    $scope.OrderDo = '+subjects.length';
    console.log($scope.OrderDo);
  };

  $scope.returnAll = function () {
    $scope.search = {};
    $http.get( base_url + '/subjects')
      .success(function(data) {
        $scope.subjects = data;
        console.log(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };


})
