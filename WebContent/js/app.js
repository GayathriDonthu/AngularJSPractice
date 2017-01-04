/**
 * 
 */
(function() {

	var app = angular.module("githubViewer", ["ngRoute"]);

	app.config(function($routeProvider) {
		$routeProvider
			.when("/main", {
				templateUrl : "main.html",
				controller : "httpController"
			})
			.when("/user/:username",{
				templateUrl : "userDetails.html",
				controller : "userController"
			})
			.otherwise({
				redirectTo : "/main"
			});
	});
}());