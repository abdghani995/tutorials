var app = angular.module("advance2",[]);


app.directive ("bodyPage",function(){
	return	{
		restrict:'A',
		templateUrl:'partials/body.ejs',
		controller:function(){

			this.attributes=[{
				name:'ABDULLAH',
				address:'RANIGANJ',
				phone:'3412448519'
			}];
		},
		
		controllerAs:'con1'
	}
})