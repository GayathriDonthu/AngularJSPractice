/**
 * 
 */
(function(){
	
	
	var github = function($http){
		
		var getUser = function(username){
			return $http.get("https://api.github.com/users/" + username)
						.then(function(response){
							return response.data;
						});
		};
		
		var getRepos = function(user){
			return $http.get(user.repos_url)
						.then(function(response){
							return response.data;
						});
		}
		
		var getRepoDetails =  function(reponame,username){
			console.log("inside github.js. getRepodetails"+reponame+"-"+username);
			var repo;
			var repoUrl = "https://api.github.com/repos/" + username + "/" +reponame;
			console.log("repoUrl:"+repoUrl);
			return $http.get(repoUrl)
						.then(function(response){
							console.log("came into repoUrl response");
							repo = response.data;
							return $http.get(repoUrl+"/contributors");
						})
						.then(function(response){
							repo.contributors = response.data;
							console.log("repo.contributors:"+repo.contributors);
							return repo;
						});
		}
		
		return {
			getUser: getUser,
			getRepos: getRepos,
			getRepoDetails: getRepoDetails
		};
	}
	
	var githubModule = angular.module("githubViewer");
	githubModule.factory("github",github);
	
}());