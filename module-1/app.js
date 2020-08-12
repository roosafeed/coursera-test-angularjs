(function () {
    "use strict";

    angular.module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckControllerFn);

    LunchCheckControllerFn.$inject = ['$scope'];

    function LunchCheckControllerFn($scope) {
        $scope.message = "";
        $scope.input = "";
        $scope.color = "black";
        $scope.showMsg = function () {
            var count = countItems($scope.input);
            if(count == 0) {
                $scope.message = "Please enter data first";
                $scope.color = "red";
            }
            else if(count <= 3) {
                $scope.message = "Enjoy!";
                $scope.color = "green";
            }
            else if(count > 3) {
                $scope.message = "Too much!";
                $scope.color = "green";
            }
        };
    }

    function countItems(text) {
        if(text === "" || text === " ") {
            return 0;
        }
        var list = text.split(',');
        list = list.filter(function (item) {
            return item.replace(/ /g, "") != "";
        });
        return list.length;
    }
})();