var lang_dir = angular.module('app.directive.languages',[])

lang_dir.directive('languageDetails',function(){
	return {
		restrict:'E',	//elements only
		scope:{
			languages:'='	//elements passed from index page as languages . '=' is the binding
		},
		replace:true,		// custom directive 'language-details' is replaced by div in inspect(dom)
		transclude:true,
		templateUrl:"partials/languages.html", // location of the template
		link:function(scope,elements,attributes){ 
			elements.click(function(){
				alert("clicked");
			})
		},
		controller:function($scope){
			
		}
	}
})