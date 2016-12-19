/**
 * Created by tonim on 16/12/2016.
 */
app.controller('SubjectsCtrl', function($scope, $http, $ionicPopup, $timeout) {
  // when landing on the page, get all subjects
  $scope.search = {};

  $http.get( base_url + '/subjects')
    .success(function(data) {
      $scope.subjects = data;
      console.log(data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });

  $scope.DeleteSubject = function (id) {
    $http.delete(base_url + '/subjects/' + id)
      .success(function(data){
        $scope.subjects = data;
        $scope.SubjectFound = data;
      })
      .error(function(data){
        console.log('Error:' + data);
      });
  };

  $scope.Order = function () {
    $scope.OrderDo = 'name';
  };
  $scope.Order2 = function () {
    $scope.OrderDo = '-students.length';
  };
  $scope.Order3 = function () {
    $scope.OrderDo = '+students.length';
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

  // Triggered on a button click, or some other target
  $scope.showPopup = function() {
    $scope.Season = {
      when: 'Tardor 2016'
    };

    // An elaborate, custom popup
    var myPopup = $ionicPopup.show({
      template: '<div class="text-center"><label>Use: &nbsp;&nbsp;</label><select ng-model="Season.when"> <option selected>Tardor 2016</option> <option>Primavera 2017</option> <option>Tardor 2017</option> <option>Primavera 2018</option> </select></div>',
      title: 'Season',
      scope: $scope,
      buttons: [
        { text: 'Cancel',
          onTap: function () {
            $http.get( base_url + '/subjects')
              .success(function(data) {
                $scope.subjects = data;
                console.log(data);
              })
              .error(function(data) {
                console.log('Error: ' + data);
              });
          }},
        {
          text: '<b>GO</b>',
          type: 'button-positive',
          onTap: function() {
            console.log('hi', $scope.Season.when);
            $http.get(base_url + '/subjects/search/when/' + $scope.Season.when)
              .success(function(data) {
                $scope.subjects = data;
                console.log(data);
              })
              .error(function(data) {
                console.log('Error: ' + data);
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
    }, 7000);
  };

})
