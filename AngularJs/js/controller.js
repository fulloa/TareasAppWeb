app.controller("testController", function($scope) {
	var test = this;
	$scope.newUser = {
		user:"",
		name:"",
		lastName:""
	};

	$scope.users = [
		{user: "usuario 1",
		name: "name 1",
		lastName: "apellido 1"},

		{user: "usuario 2",
		name: "name 2",
		lastName: "apellido 2"},

		{user: "usuario 3",
		name: "name 3",
		lastName: "apellido 3"}
	];
	
	$scope.addNewUser = function (user) {
		 console.log(user);
		 $scope.users.push(angular.extend({},user));
		 // console.log(angular.copy({},user));
		 // console.log(angular.extend({},user));
		 // console.log(angular.merge({},user));
	}

	$scope.showDetails= function (user) {
		console.log(user);
	};
});