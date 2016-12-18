// Ionic Starter App
var base_url = "http://localhost:3000";
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.tabs.position("bottom");

  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.subjects', {
    cache: false,
    url: '/subjects',
    views: {
      "tab-subjects": {
        templateUrl: 'templates/tab-subjects.html',
        controller: 'SubjectsCtrl'
      }
    }
  })
    .state('tab.subjects-detail', {
      cache: false,
      url: '/subjects/:subjectId',
      views: {
        "tab-subjects": {
          templateUrl: 'templates/subjects-detail.html',
          controller: 'SubjectDetailCtrl'
        }
      }
    })
    .state('tab.subjects-detail-student', {
      cache: false,
      url: '/subjects/student/:studentId',
      views: {
        "tab-subjects": {
          templateUrl: 'templates/students-detail.html',
          controller: 'StudentDetailCtrl'
        }
      }
    })
    .state('tab.subjects-detail-addstudent', {
      cache: false,
      url: '/subjects/addstudent/:subjectID',
      views: {
        "tab-subjects": {
          templateUrl: 'templates/subject-add-student.html',
          controller: 'SubjectAddStudentCtrl'
        }
      }
    })
  .state('tab.students', {
      cache: false,
      url: '/students',
      views: {
        "tab-students": {
          templateUrl: 'templates/tab-students.html',
          controller: 'StudentsCtrl'
        }
      }
    })
    .state('tab.students-detail', {
      cache: false,
      url: '/students/:studentId',
      views: {
        "tab-students": {
          templateUrl: 'templates/students-detail.html',
          controller: 'StudentDetailCtrl'
        }
      }
    })
  .state('tab.new', {
    url: '/new',
    views: {
      "tab-new": {
        templateUrl: 'templates/tab-new.html',
        controller: 'NewAddCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/subjects');

});
