/**
 * 
 */

/*var createWork = function(){
	console.log("I am printing something man");
	var message = "Angular Fantastic!";
	return message;
};

var output = createWork();
console.log("printing output:"+output);*/

var MainController = function($scope){
	$scope.name = "Gayathri";
	
	var person = {
			firstName: "Avinash Babu",
			lastName : "Donthu",
			image: "../images/AvinashBabu.jpg"
	};
	
	$scope.person = person;
	
	console.log("printing names");
	console.log(person.firstName+" "+person.lastName);
	
};

var DateController = function($scope){
	$scope.date = "03-01-2017";
	console.log($scope.date);
};

var httpController = function($scope, $http){
	
	console.log("Inside httpController");
		
	var onUserComplete = function(response){
		$scope.user = response.data;
		console.log("Name is :"+ $scope.user.name);
		
	};
	
	var onError = function(reason){
		$scope.error = "Couldn't fetch data";
		
	}
	
	$http.get("https://ai.github.com/users/avinashbabudonthu")
		 .then(onUserComplete, onError);
	
};

