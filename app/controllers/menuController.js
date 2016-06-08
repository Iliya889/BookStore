myApp.controller('MenuCtrl', function ($scope, $location) {

    $scope.isActive = function (path) {
        return path === $location.path();
    };

    $scope.isActiveQuery = function () {
        var url = false;
        if ("/books" === $location.path() || "/api" === $location.path()) {
            url = true;
        }
        return url;
    };

    $scope.name = 'World';

    $scope.myusers = [{ username: 'user1', password: '12323' },
                  { username: 'user2', password: '12323' }];
    $scope.submit = function () {
        if ($scope.username && $scope.password) {
            var user = $scope.username;
            var pass = $scope.password;
            alert("welcome" + user);

            $scope.myusers.push({ username: user, password: pass });
        } else {
            alert("Invalid Login");
        }
    }
});






