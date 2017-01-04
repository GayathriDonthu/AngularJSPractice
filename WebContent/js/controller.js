/**
 * 
 */

/*
 * var createWork = function(){ console.log("I am printing something man"); var
 * message = "Angular Fantastic!"; return message; };
 * 
 * var output = createWork(); console.log("printing output:"+output);
 */

/*var MainController = function($scope) {
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
*/
(function() {
	
	var app = angular.module("githubViewer");
	
	var httpController = function($scope, $interval, $location) {

		console.log("Inside httpController !!");
		
		var decrementCountdown = function(){
			$scope.countdown -= 1;
			if($scope.countdown < 1){
				$scope.search($scope.username);
			}
		};
		
		var countdownInterval = null;
		var startCountdown = function(){
			countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
		}
		
		$scope.search = function(username){
			console.log("username :"+username);
			if(countdownInterval){
				$interval.cancel(countdownInterval);
				$scope.countdown = null;
			}
			$location.path("/user/"+username);
		};
		
		$scope.username = "angular";
		$scope.countdown = 5;
		startCountdown();
		
	};
	
	app.controller("httpController", httpController);

}());
