myApp.controller('MainCtrl', function ($scope, $http, $filter) {
    $scope.title = "BUY MOST POPULAR BOOKS";

    $http.jsonp('http://www.mocky.io/v2/571fa4f010000073116b0f69?callback=JSON_CALLBACK').success(function (data, status, headers, config) {
        $scope.list = data; 
        $scope.currentPage = 0;
        $scope.booksPerPage = 5;

        $scope.firstPage = function () {
            return $scope.currentPage == 0;
        }
        $scope.lastPage = function () {
            var lastPageNum = Math.ceil(data.length / $scope.booksPerPage - 1);
            return $scope.currentPage == lastPageNum;
        }
        $scope.numberOfPages = function () {
            return Math.ceil(data.length / $scope.booksPerPage);
        }
        $scope.startingItem = function () {
            return $scope.currentPage * $scope.booksPerPage;
        }
        $scope.pageBack = function () {
            $scope.currentPage = $scope.currentPage - 1;
        }
        $scope.pageForward = function () {
            $scope.currentPage = $scope.currentPage + 1;
        }
        var orderBy = $filter('orderBy'); //Sorting
        $scope.order = function (predicate) {  
            $scope.predicate = predicate;
            $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
            $scope.list = orderBy($scope.list, predicate, $scope.reverse);
        };
        $scope.order('title', true); //Default sorting
    }).error(function (data, status, headers, config) {
        console.log(data);
        $scope.error = true;  
    });
}).filter('startFrom', function () {
    return function (input, start) {
        start = +start;
        console.log(input);
        return input.slice(start);
    }
});