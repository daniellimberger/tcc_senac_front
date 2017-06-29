myApp.controller('homeController',  ['$scope', '$filter', '$mdDateLocale', '$interval', function($scope, $mdDateLocale){

	console.log("teste home controller");	


	$rootScope.tituloPagina = "Home";
	
	$scope.enderecoSaida = 'Teotônio Vilela, 1024, Gravataí - RS';

	$mdDateLocale.formatDate = function(date) {
	
	return moment(date).format('DD-MM-YYYY');

	
	};

	
	now = new Date();
	
	//$scope.dataSaida = moment(now).format("DD-MM-YYYY");
	$scope.dataSaida = now;
	$scope.horaSaida = moment().second(0).milliseconds(0).toDate();; 
 
  


  $scope.enderecoChegada = "Av. Sete Povos, 78, Canoas - RS"

   
}]);