/**
 * Created by tonim on 16/12/2016.
 */
app.controller('NewAddCtrl', function($scope, $http, $ionicPopup ) {
  $scope.NewSubject = {
    when: 'Tardor 2016'
  };
  $scope.NewStudent = {
    name: '',
    address: '',
    contact1: 'Home',
    number1: '',
    contact2:'Work',
    number2: ''
  };

  $scope.CreateSubject = function () {

    $http.post(base_url +'/subjects', $scope.NewSubject)
      .success(function(data){
        $scope.NewSubject = {}; //clear the form
        $ionicPopup.alert({
          title: 'Success',
          template: 'The subject was added'
        });
      })
      .error(function(data){
        console.log('Error:' + data);
        $ionicPopup.alert({
          title: 'Error',
          template: data
        });
      });
  };

  $scope.CreateStudent = function () {
    $http.post(base_url + '/students', $scope.NewStudent)
      .success(function(data){
        $scope.NewStudent = {}; //clear the form
        $ionicPopup.alert({
          title: 'Success',
          template: 'The student was added'
        });
      })
      .error(function(data){
        console.log('Error:' + data);
        $ionicPopup.alert({
          title: 'Error',
          template: 'Some when wrong try it again'
        });
      });
  };

})
