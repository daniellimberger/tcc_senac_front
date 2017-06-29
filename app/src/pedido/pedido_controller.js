myApp.controller('pedidoController',  ['$scope', '$rootScope', function($scope, $rootScope){

	$rootScope.tituloPagina = "Novo Pedido";
	$scope.nomeContato = "Ligiano Azzi";

	$scope.teste = function(){
		alert('oioi');
	}
   
}]);