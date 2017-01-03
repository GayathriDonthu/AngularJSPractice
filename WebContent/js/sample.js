/**
 * 
 */
(function(){
	var work = function(){
		console.log("hello 3rd Jan- version 1.1");
		
		var task1 = function(){
			console.log("Iam in task1");
		};
		
		var task2 = function(){
			console.log("I am in task 2");
		};
	
		return{
			job1: task1,
			job2: task2
		};
	};
	
	var worker = work();
	
	worker.job1();
	worker.job2();
}());

