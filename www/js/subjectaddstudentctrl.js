/**
 * Created by tonim on 18/12/2016.
 */

app.controller('SubjectAddStudentCtrl', function($scope, $http, $stateParams, $ionicPopup) {

  var SubjectID = ($stateParams.subjectID);
  console.log(SubjectID);

  // when landing on the page, get all students
  $http.get(base_url +'/students')
    .success(function(data) {
      $scope.students = data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });

  $scope.AddStudentInSubject = function (id) {
    $scope.AddStudent = {
      student_id: id
    };
    $http.post(base_url + '/subjects/addstudent/' + SubjectID, $scope.AddStudent)
      .success(function(data){
        $ionicPopup.alert({
          title: 'Success',
          template: 'The student was added'
        });
      })
      .error(function(data){
        console.log('Error:' + data);
        $ionicPopup.alert({
          title: 'Error',
          template: 'Somthing is wrong'
        });
      });
  };



})
