myApp.controller("MainController" , ["wikiFactory" , "$scope" , function(wikiFactory , $scope){


	$("#inputSearch").keyup(function(){

		var itemSearch = $scope.itemSearch;
		
		if($(this).val().length > 0){

			$("#mainCards").removeClass('hideContent');
			wikiFactory.wikiApiData(itemSearch).success(res=>{
				console.log(res);
				if(res.query.search == 0){
					$scope.items= 0;
					$('.mainCards').addClass('hideContent');
					$('#emtyInput').css("display", "block");

				}else{
					$('#emtyInput').css("display", "none");
					$('.mainCards').removeClass('hideContent');
					$scope.items = res.query.search;	
				}
				

			});
		}else{
			$("#mainCards").addClass('hideContent');
		}

	});

}]);