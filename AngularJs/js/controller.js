app.controller("testController", function($scope) {
	var test = this;
	$scope.newUser = {
		user:"",
		name:"",
		lastname:""
	};

	$scope.users = [
		{user: "usuario 1",
		name: "name 1",
		lastname: "apellido 1"},

		{user: "usuario 2",
		name: "name 2",
		lastname: "apellido 2"},

		{user: "usuario 3",
		name: "name 3",
		lastname: "apellido 3"}
	];

	$scope.showDetails= function (user) {
		console.log(user);
	};
});