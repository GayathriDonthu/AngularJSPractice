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
			.otherWise({
				redirectTo : "/main"
			});
	});
}());