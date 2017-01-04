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
	
	var httpController = function($scope, github, $interval, $log, $location, $anchorScroll) {

		console.log("Inside httpController !!");
		
		var reposname = "Spring";
		$scope.reposname = reposname;
		console.log("reposname:"+reposname);
		
		var onRepos = function(data){
			$scope.repos = data;
			console.log("Reponame:"+$scope.repos);
			$location.hash("RepoDetails");
			$anchorScroll();
		};
		
		var onUserComplete = function(data) {
			$scope.user = data;
			console.log("Name is :" + $scope.user.name);
			console.log("Repo URL is:"+$scope.user.repos_url);
			github.getRepos($scope.user)
				.then(onRepos, onError);

		};

		var onError = function(reason) {
			$scope.error = "Couldn't fetch data";

		}
		
		var decrementCountdown = function(){
			$scope.countdown -= 1;
			if($scope.countdown < 1){
				$scope.search($scope.username);
			}
		};
		
		var countdownInterval = null;
		var startCountdown = function(){
			$log.info("CountdownInterval:"+countdownInterval);
			countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
			$log.info("CountdownInterval:"+countdownInterval);
		}
		
		$scope.search = function(username){
			console.log("username :"+username);
			$log.info("Searching for:"+ username);
			github.getUser(username)
				 .then(onUserComplete, onError);
			if(countdownInterval){
				$interval.cancel(countdownInterval);
				$scope.countdown = null;
			}
		};
		
		$scope.username = "angular";
		$scope.heading = "Github Viewer!";
		$scope.repoSortOrder = "-stargazers_count";
		$scope.countdown = 5;
		startCountdown();
		
	};
	
	app.controller("httpController", httpController);

}());
