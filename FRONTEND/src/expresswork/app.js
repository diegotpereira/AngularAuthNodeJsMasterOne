var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
   $scope.submit= function(){
      var data = $.param({
        book: JSON.stringify({
            author: $scope.emailBox,
            title : $scope.passwordBox,
            body : $scope.rePasswordBox
        })
      });
      $http.post("/api/register/", data).success(function(data, status) {
        console.log('Data registered successfully');
      })
   }
});