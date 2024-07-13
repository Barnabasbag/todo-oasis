var app = angular.module('todoApp', []);

app.controller('TodoController', function($scope) {
    $scope.todos = [];

    $scope.addTodo = function() {
        if ($scope.newTodoTitle && $scope.newTodoDescription) {
            $scope.todos.push({
                title: $scope.newTodoTitle,
                description: $scope.newTodoDescription
            });

            $scope.newTodoTitle = '';
            $scope.newTodoDescription = '';
        }
    };

    $scope.deleteTodo = function(index) {
        $scope.todos.splice(index, 1);
    };
});
