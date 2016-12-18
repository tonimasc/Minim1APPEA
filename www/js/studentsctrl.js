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

})
