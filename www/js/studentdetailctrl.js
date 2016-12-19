/**
 * Created by tonim on 16/12/2016.
 */
app.controller('StudentDetailCtrl', function($scope, $http,  $stateParams, $ionicPopup, $timeout) {

  var StudentID = ($stateParams.studentId);
  console.log(StudentID);

  // when landing on the page, get all subjects
  $http.get( base_url + '/students/' + StudentID)
    .success(function(data) {
      $scope.student = data;
      $scope.phones = data.phones;
      $scope.subjects = data.subjects;
      console.log(data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });

  $scope.RemovePhone = function (phone) {
    $http.delete(base_url + '/students/deletephone/' + StudentID +'/' + phone)
      .success(function(data){
        $scope.student = data;
        $scope.phones = data.phones;
      })
      .error(function(data){
        console.log('Error:' + data);
      });
  };

// Triggered on a button click, or some other target
  $scope.showPopup = function() {
    $scope.Phone = {};

    // An elaborate, custom popup
    var myPopup = $ionicPopup.show({
      template: '<label>Name</label>'+ '<input type="text" ng-model="Phone.contact">' + '<label>Number</label>' +
      '<input type="tel" ng-model="Phone.number">',
      title: 'Contact Information',
      scope: $scope,
      buttons: [
        { text: 'Cancel' },
        {
          text: '<b>Save</b>',
          type: 'button-positive',
          onTap: function() {
              $http.post(base_url + '/students/addphone/' + StudentID, $scope.Phone)
                .success(function(data){
                  $scope.Phone ={};
                  $scope.student = data;
                  $scope.phones = data.phones;
                })
                .error(function(data){
                  console.log('Error:' + data);
                });
          }
        }
      ]
    });

    myPopup.then(function(res) {
      console.log('Tapped!', res);
    });

    $timeout(function() {
      myPopup.close(); //close the popup after 3 seconds for some reason
    }, 1000000);
  };

})
