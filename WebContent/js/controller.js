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
	
	var app = angular.module("githubViewer", []);
	
	var httpController = function($scope, $http) {

		console.log("Inside httpController !!");
		
		var reposname = "Spring";
		$scope.reposname = reposname;
		console.log("reposname:"+reposname);
		
		var onRepos = function(response){
			$scope.repos = response.data;
			console.log("Reponame:"+$scope.repos);
		};
		
		var onUserComplete = function(response) {
			$scope.user = response.data;
			console.log("Name is :" + $scope.user.name);
			console.log("Repo URL is:"+$scope.user.repos_url);
			$http.get($scope.user.repos_url)
				.then(onRepos, onError);

		};

		var onError = function(reason) {
			$scope.error = "Couldn't fetch data";

		}
		
		$scope.search = function(username){
			console.log("username :"+username);
			$http.get("https://api.github.com/users/" + username)
				 .then(onUserComplete, onError);
		};
		
		$scope.username = "angular";
		$scope.heading = "Github Viewer!";
		$scope.repoSortOrder = "-stargazers_count";
		
	};
	
	app.controller("httpController", httpController);

}());
