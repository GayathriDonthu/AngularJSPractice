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
			.when("/repo/:username/:reponame",{
				templateUrl : "repo.html",
				controller : "repoController"
			})
			.otherwise({
				redirectTo : "/main"
			});
	});
}());