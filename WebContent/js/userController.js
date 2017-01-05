/**
 * 
 */

/*
 * var createWork = function(){ console.log("I am printing something man"); var
 * message = "Angular Fantastic!"; return message; };
 * 
 * var output = createWork(); console.log("printing output:"+output);
 */

var MainController = function($scope) {
	$scope.name = "Gayathri";

	var person = {
		firstName : "Avinash Babu",
		lastName : "Donthu",
		image : "../images/AvinashBabu.jpg"
	};

	$scope.person = person;

	console.log("printing names");
	console.log(person.firstName + " " + person.lastName);

};

var DateController = function($scope) {
	$scope.date = "03-01-2017";
	console.log($scope.date);
};

(function() {
	
	var app = angular.module("githubViewer");
	
	var userController = function($scope, github, $routeParams) {

		console.log("Inside userController !!");
		
		var onRepos = function(data){
			$scope.repos = data;
			console.log("Reponame:"+$scope.repos);
		};
		
		var onUserComplete = function(data) {
			$scope.user = data;
			console.log("Name is :" + $scope.user.login);
			console.log("Repo URL is:"+$scope.user.repos_url);
			github.getRepos($scope.user)
				.then(onRepos, onError);

		};

		var onError = function(reason) {
			$scope.error = "Couldn't fetch data";

		}
		
		$scope.username = $routeParams.username;
		$scope.repoSortOrder = "-stargazers_count";
		
		github.getUser($scope.username)
		  .then(onUserComplete, onError);
		
	};
	
	app.controller("userController", userController);

}());
