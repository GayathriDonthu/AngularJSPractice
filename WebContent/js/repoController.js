/**
 * 
 */

(function(){
	
	var app = angular.module("githubViewer");
	
	var repoController = function($scope, $routeParams, github){
		
		console.log("Inside RepoController!!");
		
		
		var onRepo = function(data){
			
			$scope.repo = data;
			console.log("repo.owner.login:"+$scope.repo.contributors);
			
		};
		
		var onError = function(reason){
			
			$scope.error = reason;
			
		};
		
		var reponame = $routeParams.reponame;
		var username = $routeParams.username;
		console.log("printing reponame and username:"+reponame+"-"+username);
		github.getRepoDetails(reponame, username)
			  .then(onRepo, onError);
		
		
	};
	
	app.controller("repoController", repoController);
	
}());